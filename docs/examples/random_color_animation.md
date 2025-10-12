# Random Color Animation

## Preview

<iframe src="/two-easy-engine/demos/random_color_animation.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

## Code
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

      // Create a camera, scene, and renderer
      const camera = new Two.Camera2D();
      const scene = new Two.Scene();
      const render = new Two.Render2D(canvas, scene, camera, {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor: "black",
      });

      // Create a rectangle mesh
      const geometry = new Two.RectGeometry(50, 50);
      const material = new Two.BasicMaterial({
        fillStyle: "#39ff14",
        strokeStyle: "#39ff11",
        lineWidth: 2,
      });
      const mesh = new Two.Mesh(geometry, material);
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
          // Update Color
          material.fillStyle = `hsl(${(Date.now() * 0.05) % 360}, 100%, 50%)`;
          material.strokeStyle = `hsl(${
            (Date.now() * 0.05 + 20) % 360
          }, 100%, 50%)`;
        },
      });
    </script>
  </body>
</html>
```


