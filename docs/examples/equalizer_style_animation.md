# Equalizer-style Animation

## Preview

<iframe src="/two-easy-engine/demos/equalizer_style_animation.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

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

      const numBars = 60;
      const spacing = 10;
      const barWidth = Math.max(
        5,
        (window.innerWidth - spacing * (numBars - 1)) / numBars
      );
      const bars = [];
      const baseY = window.innerHeight / 2;

      for (let i = 0; i < numBars; i++) {
        const hue = (i / numBars) * 120 + 100; // greenish gradient
        const material = new Two.BasicMaterial({
          fillStyle: `hsl(${hue}, 100%, 50%)`,
        });

        const geom = new Two.RectGeometry(barWidth, 50);
        const mesh = new Two.Mesh(geom, material);
        mesh.transform.position.set(
          i * (barWidth + spacing) + barWidth / 2,
          baseY
        );
        mesh.setUserData({
          height: 50,
          hue,
        });
        scene.add(mesh);
        bars.push(mesh);
      }

      window.onresize = () => {
        render.setSize(window.innerWidth, window.innerHeight);
      };

      render.requestAnimationFrame({
        beforeRender: () => {
          const time = Date.now() * 0.002;

          bars.forEach((bar, i) => {
            const data = bar.userData;

            // Simulate an audio wave
            const height =
              100 +
              Math.sin(time + i * 0.4) * 80 +
              Math.sin(time * 0.7 + i * 0.3) * 40;

            // Smooth animation
            data.height += (height - data.height) * 0.15;

            // Update transform
            bar.transform.scale.set(1, data.height / 50);
            bar.transform.position.y = baseY;

            // Color shift based on height
            const brightness = 40 + (data.height / 200) * 30;
            bar.material.fillStyle = `hsl(${data.hue}, 100%, ${brightness}%)`;
          });
        },
      });
    </script>
  </body>
</html>
```
