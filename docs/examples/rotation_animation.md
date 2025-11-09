# Rotation

Every [`Object2D`](/api/Object2D.html) in TwoEasyEngine has a [`Transform`](/api/Transform.html) that controls position, rotation, and scale. In this tutorial, you will learn to use the `rotation` property of the [`Transform`](/api/Transform.html) to control how an object is oriented.

## Transform Rotation Property

The rotation property specifically uses radians to define the object's orientation.

For example, you can rotate an object directly using radians:

```js
obj.transform.rotation = Math.PI / 2; // 90 degrees in radians
```

Or by converting degrees to radians:

```js
const degreesToRad = (degrees) => (degrees * Math.PI) / 180;
obj.transform.rotation = degreesToRad(90);
```

## Rotate by Delta Time

When animating rotation, it is best to use delta time to ensure that the rotation speed is consistent regardless of the frame rate.

`deltaTime` represents the amount of time (in seconds) that has passed since the last frame. By multiplying your rotation speed by deltaTime, you can achieve smooth and frame-independent rotation:

```js
const clock = new Two.Clock(); // create a clock object
const speed = 1.5; // radians per second

/// ...

renderer.requestAnimationFrame({
  beforeRender: () => {
    clock.update();

    const delta = clock.deltaTime;

    obj.transform.rotation += delta * speed;
  },
});
```

## Revisit Quick Start
The Quick Start example demonstrates a simple rotation animation of a green square.
If we look closely, we can identify several core concepts we learned above:

* Transform Rotation - The mesh.transform.rotation property controls the square’s orientation.
* Radians - The rotation value increases in radians (not degrees), so a full rotation is 2 * Math.PI.
* Delta Time - The rotation is multiplied by the time difference (delta), provided by the [`Clock`](/api/Clock.html) object, between frames to ensure consistent speed across different systems.

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

      // Get the canvas element
      const canvas = document.getElementById("canvas");

      // Create a clock, camera, scene, and renderer
      const clock = new Two.Clock();
      const camera = new Two.Camera2D();
      const scene = new Two.Scene();
      const renderer = new Two.Renderer2D(canvas, scene, camera, {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor: "black",
      });

      // Create a rectangle mesh
      const mesh = new Two.Mesh(
        new Two.RectGeometry(50, 50),
        new Two.BasicMaterial({
          fillStyle: new Two.RgbaColor(0, 255, 0, 1),
          strokeStyle: new Two.RgbaColor(0, 200, 0, 1),
          lineWidth: 2,
        })
      );
      mesh.transform.position.set(
        renderer.centerX - mesh.geometry.width / 2,
        renderer.centerY - mesh.geometry.height / 2
      );
      scene.add(mesh);

      // Handle window resize to ensure responsiveness rendering
      window.onresize = () => {
        // Resize the canvas
        renderer.options.setSize(window.innerWidth, window.innerHeight);
        // Set the new center position
        mesh.transform.position.set(
          renderer.centerX - mesh.geometry.width / 2,
          renderer.centerY - mesh.geometry.height / 2
        );
      };

      const speed = 1.5;

      // Animation loop
      renderer.requestAnimationFrame({
        beforeRender: () => {
          clock.update();

          const delta = clock.deltaTime;

          mesh.transform.rotation += delta * speed; // Rotate the rectangle
        },
      });
    </script>
  </body>
</html>
```

## Preview

<iframe src="/two-easy-engine/demos/quick_start.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>