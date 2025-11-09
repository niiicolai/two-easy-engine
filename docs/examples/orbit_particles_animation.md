# Orbit Particles Animation

## Preview

<iframe src="/two-easy-engine/demos/orbit_particles_animation.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

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
      const renderer = new Two.Renderer2D(canvas, scene, camera, {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor: "black",
      });

      const numParticles = 30;
      const particles = [];

      // Create orbiting circles
      for (let i = 0; i < numParticles; i++) {
        const hue = (i / numParticles) * 360;
        const fillStyle = new Two.HslaColor(hue, 100, 60, 1);
        const material = new Two.BasicMaterial({ fillStyle });
        const circle = new Two.CircleGeometry(5);
        const mesh = new Two.Mesh(circle, material);
        scene.add(mesh);
        particles.push(mesh);
      }

      window.onresize = () => {
        renderer.options.setSize(window.innerWidth, window.innerHeight);
      };

      const speed = 0.5;
      const baseRadius = 120;

      renderer.requestAnimationFrame({
        beforeRender: () => {
          clock.update();

          const time = clock.elapsedTime;
          const radius = baseRadius + Math.sin(time * speed);
          const centerX = renderer.centerX;
          const centerY = renderer.centerY;

          particles.forEach((p, i) => {
            const angle = (i / numParticles) * Math.PI * 2;
            const x = centerX + Math.cos(angle + time * speed) * radius;
            const y = centerY + Math.sin(angle + time * speed) * radius;

            p.transform.position.set(x, y);
          });
        },
      });
    </script>
  </body>
</html>
```


