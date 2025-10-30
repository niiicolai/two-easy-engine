# Fade
So far, we’ve animated an object’s rotation, scale, and position.
In this tutorial, you’ll learn how to create a smooth fade effect by animating the alpha (opacity) value of a [`RgbaColor`](/api/RgbaColor.html) color applied to a [`BasicMaterial`](/api/BasicMaterial.html).

## Material Transparency
A [`Color`](/api/Color.html) can be used to specify a [`BasicMaterial`](/api/BasicMaterial.html)'s `fillStyle` and `strokeStyle` options. TwoEasyEngine supports both RGBA and HSLA color formats through the [`Color`](/api/Color.html) subclasses:

* [`RgbaColor`](/api/RgbaColor.html) - defines color using red, green, blue, and alpha (opacity) values.
* [`HslaColor`](/api/HslaColor.html) - defines color using hue, saturation, lightness, and alpha values.

For example:
```js
const color = new Two.RgbaColor(0, 255, 100, 1); // Red, Green, Blue, Alpha
const material = new Two.BasicMaterial({ fillStyle: color, strokeStyle: color });
```

The last parameter (1) represents full opacity.
You can dynamically adjust this with the `setAlpha()` method:
```js
color.setAlpha(0.5); // 50% transparent
```

## Animate Alpha
To make an object smoothly fade in and out, we can animate its alpha value using a sine wave. The sine function naturally oscillates between -1 and 1, so we can remap that range to [0, 1] like this:

```js
const speed = 1.5; // how fast it fades

renderer.requestAnimationFrame({
  beforeRender: () => {
    const time = clock.getElapsedTime();
    const alpha = (Math.sin(time * speed) + 1) / 2;

    color.setAlpha(alpha);
  },
});
```

## Complete Example
Below is the complete example demonstrating the fade effect.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        background: black;
      }
      #canvas {
        width: 100%;
        height: 100vh;
        display: block;
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
      const renderer = new Two.Renderer2D(canvas, scene, camera, {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor: "black",
      });

      // Create a single circle
      const fillStyle = new Two.RgbaColor(0, 255, 100, 1);
      const material = new Two.BasicMaterial({ fillStyle });
      const geometry = new Two.CircleGeometry(80);
      const circle = new Two.Mesh(geometry, material);
      circle.transform.position.set(renderer.getCenterX(), renderer.getCenterY());
      scene.add(circle);

      // Resize handler
      window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        circle.transform.position.set(renderer.getCenterX(), renderer.getCenterY());
      });

      const speed = 1.5; // how fast it fades

      renderer.requestAnimationFrame({
        beforeRender: () => {
          const time = clock.getElapsedTime();
          const alpha = (Math.sin(time * speed) + 1) / 2;

          fillStyle.setAlpha(alpha);
        },
      });
    </script>
  </body>
</html>
```

## Preview

<iframe src="/two-easy-engine/demos/fade_animation.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>
