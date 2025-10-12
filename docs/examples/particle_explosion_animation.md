# Particle Explosion Animation

## Preview

<iframe src="/two-easy-engine/demos/particle_explosion_animation.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

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

      const center = new Two.Vector2(window.innerWidth / 2, window.innerHeight / 2);
      const numParticles = 150;
      const particles = [];

      // Create explosion particles
      for (let i = 0; i < numParticles; i++) {
        const material = new Two.BasicMaterial({
          fillStyle: "rgba(0, 255, 100, 1)",
          strokeStyle: "rgba(0, 255, 100, 1)",
          lineWidth: null,
        });

        const geom = new Two.CircleGeometry(3 + Math.random() * 2);
        const mesh = new Two.Mesh(geom, material);
        mesh.transform.position.set(center.x, center.y);

        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 5;
        mesh.setUserData({
            velocity: new Two.Vector2(Math.cos(angle) * speed, Math.sin(angle) * speed),
            life: 1.0
        });

        scene.add(mesh);
        particles.push(mesh);
      }

      // Resize handling
      window.onresize = () => {
        render.setSize(window.innerWidth, window.innerHeight);
        center.set(window.innerWidth / 2, window.innerHeight / 2);
      };

      render.requestAnimationFrame({
        beforeRender: () => {
          const delta = 0.016; // approx frame time

          particles.forEach((p) => {
            // Move outward
            p.transform.position.x += p.userData.velocity.x;
            p.transform.position.y += p.userData.velocity.y;

            // Apply slight slowdown (friction)
            p.userData.velocity.multiplyScalar(0.97);

            // Fade out gradually
            p.userData.life -= delta * 0.5;
            const alpha = Math.max(0, p.userData.life);
            p.material.fillStyle = `rgba(0, 255, 100, ${alpha})`;

            // Scale down a bit as it fades
            p.transform.scale.set(alpha, alpha);

            // Reset explosion when all faded out
            if (p.userData.life <= 0) {
              p.transform.position.set(center.x, center.y);
              const angle = Math.random() * Math.PI * 2;
              const speed = 2 + Math.random() * 5;
              p.userData.velocity.set(Math.cos(angle) * speed, Math.sin(angle) * speed);
              p.userData.life = 1.0;
            }
          });
        },
      });
    </script>
  </body>
</html>
```


