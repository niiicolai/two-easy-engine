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
      const camera = new Two.Camera2D();
      const scene = new Two.Scene();
      const render = new Two.Render2D(canvas, scene, camera, {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor: "black",
      });

      const numParticles = 60;
      const baseRadius = 180;
      const particles = [];

      // Create orbiting circles
      for (let i = 0; i < numParticles; i++) {
        const material = new Two.BasicMaterial({
          fillStyle: `hsl(${(i / numParticles) * 360}, 100%, 60%)`,
          strokeStyle: "black",
          lineWidth: 1,
        });

        const circle = new Two.CircleGeometry(6);
        const mesh = new Two.Mesh(circle, material);
        mesh.setUserData({ angle: (i / numParticles) * Math.PI * 2 });
        scene.add(mesh);
        particles.push(mesh);
      }

      const center = new Two.Vector2(window.innerWidth / 2, window.innerHeight / 2);

      window.onresize = () => {
        render.setSize(window.innerWidth, window.innerHeight);
        center.set(window.innerWidth / 2, window.innerHeight / 2);
      };

      render.requestAnimationFrame({
        beforeRender: () => {
          const time = Date.now() * 0.00000008;
          particles.forEach((p, i) => {
            const speed = 0.15 + Math.sin(i * 0.3 + time) * 0.05;
            const radius = baseRadius + Math.sin(time * 2 + i) * 15;

            const x = center.x + Math.cos(p.userData.angle + time * speed) * radius;
            const y = center.y + Math.sin(p.userData.angle + time * speed) * radius;

            p.transform.position.set(x, y);
          });
        },
      });
    </script>
  </body>
</html>
```


