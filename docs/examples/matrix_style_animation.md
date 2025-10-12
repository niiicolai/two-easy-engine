# Matrix-style Animation

## Preview

<iframe src="/two-easy-engine/demos/matrix_style_animation.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

## Code
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
      const camera = new Two.Camera2D();
      const scene = new Two.Scene();
      const render = new Two.Render2D(canvas, scene, camera, {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor: "black",
      });

      const numColumns = Math.floor(window.innerWidth / 20);
      const numParticles = numColumns * 10;
      const particles = [];

      for (let i = 0; i < numParticles; i++) {
        const material = new Two.BasicMaterial({
          fillStyle: "rgba(0, 255, 70, 0.8)",
          strokeStyle: "rgba(0, 255, 70, 1)",
          lineWidth: null,
        });

        // Each particle is a small rectangle
        const geom = new Two.RectGeometry(6, 14);
        const mesh = new Two.Mesh(geom, material);

        mesh.transform.position.set(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
        mesh.setUserData({ speed: 0.5 + Math.random() * 1 });

        scene.add(mesh);
        particles.push(mesh);
      }

      window.onresize = () => {
        render.setSize(window.innerWidth, window.innerHeight);
      };

      render.requestAnimationFrame({
        beforeRender: () => {
          particles.forEach((p) => {
            // Move downward
            p.transform.position.y += p.userData.speed * 4;

            // Fade slightly as it moves
            const fade =
              0.6 +
              Math.sin(Date.now() * 0.002 + p.transform.position.y * 0.02) *
                0.4;
            p.material.fillStyle = `rgba(0, 255, 70, ${fade})`;

            // Reset when offscreen
            if (p.transform.position.y > window.innerHeight + 20) {
              p.transform.position.set(Math.random() * window.innerWidth, -20);
            }
          });
        },
      });
    </script>
  </body>
</html>
```
