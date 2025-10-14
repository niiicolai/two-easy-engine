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
      const clock = new Two.Clock();
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
          lineWidth: 1,
        });
        const geom = new Two.RectGeometry(6, 14);
        const mesh = new Two.Mesh(geom, material);
        mesh.transform.position.set(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );

        const minSpeed = 150;
        const maxSpeed = 250;
        mesh.setUserData({
          speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
        });

        scene.add(mesh);
        particles.push(mesh);
      }

      window.onresize = () => {
        render.setSize(window.innerWidth, window.innerHeight);
      };

      render.requestAnimationFrame({
        beforeRender: () => {
          const delta = clock.getDeltaTime();

          particles.forEach((p) => {
            // Move downward
            p.transform.position.y += p.userData.speed * delta;

            // Fade slightly as it moves
            const baseFade = 0.6; // baseline opacity
            const fadeAmplitude = 0.4; // how much the fade varies (+/-)
            const timeFrequency = 0.002; // speed of the fade over time
            const positionFrequency = 0.02; // variation based on Y position
            const fade =
              baseFade +
              Math.sin(
                delta * timeFrequency +
                  p.transform.position.y * positionFrequency
              ) *
                fadeAmplitude;
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
