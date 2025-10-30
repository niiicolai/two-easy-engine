# Pulse

As mentioned in the previous tutorial, every [`Object2D`](/api/Object2D.html) in TwoEasyEngine has a [`Transform`](/api/Transform.html) object that controls properties such as position, rotation, and scale.

In this example, we’ll explore how the `scale` property can be used to create a smooth “pulse” effect, making an object grow and shrink continuously over time.

## Transform Scale Property

The scale property controls how large or small an object appears.
It is a [`Vector2`](/api/Vector2.html) with two components: x and y, allowing independent control of width and height.

For example:

```js
obj.transform.scale.set(2, 2); // Doubles the size
obj.transform.scale.set(0.5, 0.5); // Shrinks to half the size
```

Visit the [`Vector2`](/api/Vector2.html) API reference for more information about built-in methods.

## Animate Scale (Pulse Effect)

To create a pulsing effect, we can animate the scale value over time using a sine wave.
The sine function smoothly oscillates between -1 and 1, which makes it perfect for creating natural, looping animations.

Here’s the basic idea:

```js
const clock = new Two.Clock(); // create a clock object
const amplitude = 0.3; // how much it grows or shrinks
const baseScale = 1; // original scale
const speed = 3; // control animation speed

render.requestAnimationFrame({
  beforeRender: () => {
    const time = clock.getElapsedTime(); // total time since start
    const pulse = baseScale + Math.sin(time * speed) * amplitude;

    obj.transform.scale.set(pulse, pulse);
  },
});
```
Notice we are using `getElapsedTime()` instead of `getDeltaTime()`.
This is because `getElapsedTime()` returns the total time since the clock started, ensuring that the value passed into `Math.sin()` increases continuously over time.

## Complete Example
Below you can see a complete example with the pulse effect fully implemented.
This example continuously scales a green circle up and down using Math.sin() and the elapsed time from the engine’s clock.

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
      const clock = new Two.Clock(); // create a clock object
      const camera = new Two.Camera2D();
      const scene = new Two.Scene();
      const render = new Two.Renderer2D(canvas, scene, camera, {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor: "black",
      });

      const fillStyle = new Two.RgbaColor(0, 255, 0, 1);
      const material = new Two.BasicMaterial({ fillStyle });
      const geometry = new Two.CircleGeometry(55);
      const mesh = new Two.Mesh(geometry, material);
      mesh.transform.position.set(
        window.innerWidth / 2,
        window.innerHeight / 2
      );
      scene.add(mesh);

      window.onresize = () => {
        render.setSize(window.innerWidth, window.innerHeight);
        mesh.transform.position.set(
          window.innerWidth / 2,
          window.innerHeight / 2
        );
      };

      const amplitude = 0.3; // how much it grows or shrinks
      const baseScale = 1; // original scale
      const speed = 3; // control animation speed

      render.requestAnimationFrame({
        beforeRender: () => {
          const time = clock.getElapsedTime(); // total time since start
          const pulse = baseScale + Math.sin(time * speed) * amplitude;

          mesh.transform.scale.set(pulse, pulse);
        },
      });
    </script>
  </body>
</html>
```

## Preview

<iframe src="/two-easy-engine/demos/pulse_animation.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

