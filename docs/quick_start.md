# Quick Start

Learn how to create a simple 2D scene with TwoEasyEngine, including a camera, scene, renderer, and a rotating rectangle.

## 1. Create an HTML file

Start with a basic HTML scaffold:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TwoEasyEngine Quick Start</title>
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
        display: block;
      }
    </style>
  </head>
  <body>
    <canvas id="canvas"></canvas>
    <script type="module">
      // Init project ...
    </script>
  </body>
</html>
```

- The canvas takes up the full viewport.
- overflow: hidden prevents scrollbars.

## 2. Import TwoEasyEngine and initialize the scene

```js
import * as Two from "two-easy-engine";

// Get the canvas element
const canvas = document.getElementById("canvas");

// Create a clock, camera, scene, and renderer
const clock = new Two.Clock();
const camera = new Two.Camera2D();
const scene = new Two.Scene();
const render = new Two.Renderer2D(canvas, scene, camera, {
  width: window.innerWidth,
  height: window.innerHeight,
  devicePixelRatio: window.devicePixelRatio || 1,
  backgroundColor: "black",
});
```

Explanation:

- `Clock` tracks time elapsed and frame delta time.
- `Camera2D` controls what part of the scene is visible.
- `Scene` holds all your objects (meshes).
- `Renderer2D` draws the scene onto the canvas.

## 3. Add a rectangle mesh

```js
// Create a rectangle
const mesh = new Two.Mesh(
  new Two.RectGeometry(50, 50), // width & height
  new Two.BasicMaterial({
    fillStyle: new Two.RgbaColor(0, 255, 0, 1),
    strokeStyle: new Two.RgbaColor(0, 200, 0, 1),
    lineWidth: 2,
  })
);

// Center the rectangle on screen
mesh.transform.position.set(
  window.innerWidth / 2 - mesh.geometry.width / 2,
  window.innerHeight / 2 - mesh.geometry.height / 2
);

// Add it to the scene
scene.add(mesh);
```

Notes:

- `RectGeometry` defines the shape.
- `BasicMaterial` defines the fill and stroke style.
- `mesh.transform.position` sets the mesh in the center.

## 4. Handle window resizing

```js
window.onresize = () => {
  mesh.transform.position.set(
    window.innerWidth / 2 - mesh.geometry.width / 2,
    window.innerHeight / 2 - mesh.geometry.height / 2
  );
  render.setSize(window.innerWidth, window.innerHeight);
};
```

- Keeps the rectangle centered when resizing the browser.
- Updates the renderer size accordingly.

## 5. Animate the rectangle

```js
render.requestAnimationFrame({
  beforeRender: () => {
    const speed = 1.5;
    const delta = clock.getDeltaTime();

    mesh.transform.rotation += delta * speed; // Rotate the rectangle
  },
});
```

- `render.requestAnimationFrame` starts the animation loop.
- `clock.getDeltaTime` use delta time for frame-rate-independent updates.
- The `beforeRender` callback runs on each frame.
- `mesh.transform.rotation` rotates the rectangle continuously.

## Full Example

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
      const render = new Two.Renderer2D(canvas, scene, camera, {
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
        window.innerWidth / 2 - mesh.geometry.width / 2,
        window.innerHeight / 2 - mesh.geometry.height / 2
      );
      scene.add(mesh);

      // Handle window resize to ensure responsiveness rendering
      window.onresize = () => {
        mesh.transform.position.set(
          window.innerWidth / 2 - mesh.geometry.width / 2,
          window.innerHeight / 2 - mesh.geometry.height / 2
        );
        render.setSize(window.innerWidth, window.innerHeight);
      };

      // Animation loop
      render.requestAnimationFrame({
        beforeRender: () => {
          const speed = 1.5;
          const delta = clock.getDeltaTime();

          mesh.transform.rotation += delta * speed; // Rotate the rectangle
        },
      });
    </script>
  </body>
</html>
```

## Preview

<iframe src="/two-easy-engine/demos/quick_start.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>
