# Random Color
In last tutorial, we looked at how to animate the alpha value of an [`RgbaColor`](/api/RgbaColor.html) object. In this tutorial, you learn to use hue (`h`) property of the [`HslaColor`](/api/HslaColor.html) object to animate random colors.

## HSLA Hue Property
The [`HslaColor`](/api/HslaColor.html) model represents color using hue, saturation, lightness, and alpha (transparency). The hue (`h`) property defines the color measured in degrees on a 360 color wheel.

| Hue (°) | Color     |
|----------|-----------|
| 0°       | Red       |
| 120°     | Green     |
| 240°     | Blue      |
| 360°     | Red again |

You can update the hue of an [`HslaColor`](/api/HslaColor.html) object in two ways:

Directly via the `h` property:
```js
const color = new Two.HslaColor(0, 255, 100, 1); // Hue, Saturation, Lightness, Alpha
color.h = 120; // Change hue to green
```

Using the `setHue()` method:
```js
color.setHue(240); // Change hue to blue
```

## Animate Hue
Animating a [`HslaColor`](/api/HslaColor.html) is as simple as changing its hue over time. By gradually increasing or decreasing the hue property, you can cycle through the full color spectrum smoothly:
```js
const baseSpeed = 60; // Degrees pr. second
const multiplier = 3; // Speed multiplier

render.requestAnimationFrame({
  beforeRender: () => {
    const time = clock.getElapsedTime();
    const hue = (time * baseSpeed * multiplier) % 360; // Wrap hue within 0-360°

    color.setHue(hue); // Update the hue property
  },
});
```

## Complete Example
The example below demonstrates a complete solution for adding a random color animation. It should be noticed the example animates the canvas' background color, instead of the rectangle’s fill color. Both the [`Renderer2D`](/api/Renderer2d.html) `backgroundColor` option and the [`BasicMaterial`](/api/BasicMaterial.html) `fillStyle` and `strokeStyle` properties support objects of type [`Color`](/api/Color.html).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body,
      html {
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
      #canvas {
        width: 100%;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <canvas id="canvas"></canvas>
    <script type="module">
      import * as Two from "two-easy-engine";

      const canvas = document.getElementById("canvas");
      const clock = new Two.Clock();
      const camera = new Two.Camera2D();
      const scene = new Two.Scene();
      const backgroundColor = new Two.HslaColor(360, 100, 50, 1);
      const render = new Two.Renderer2D(canvas, scene, camera, {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor,
      });

      const geometry = new Two.RectGeometry(150, 150);
      const fillStyle = new Two.RgbaColor(0, 0, 0, 1);
      const material = new Two.BasicMaterial({ fillStyle });
      const mesh = new Two.Mesh(geometry, material);
      mesh.transform.position.set(
        window.innerWidth / 2 - mesh.geometry.width / 2,
        window.innerHeight / 2 - mesh.geometry.height / 2
      );
      scene.add(mesh);

      window.onresize = () => {
        mesh.transform.position.set(
          window.innerWidth / 2 - mesh.geometry.width / 2,
          window.innerHeight / 2 - mesh.geometry.height / 2
        );
        render.setSize(window.innerWidth, window.innerHeight);
      };

      const baseSpeed = 60; // Degrees pr. second
      const multiplier = 3; // Speed multiplier

      render.requestAnimationFrame({
        beforeRender: () => {
          const time = clock.getElapsedTime();
          const hue = (time * baseSpeed * multiplier) % 360; // Wrap hue within 0-360°

          backgroundColor.setHue(hue); // Update the hue property
        },
      });
    </script>
  </body>
</html>
```

## Preview

<iframe src="/two-easy-engine/demos/random_color_animation.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>



