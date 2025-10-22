# Offscreen Canvas

## Preview

<iframe src="/two-easy-engine/demos/offscreen_canvas.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

## Code

::: code-group

```html [index.html]
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
      const canvas = document.getElementById("canvas");
      const offscreen = canvas.transferControlToOffscreen();

      const worker = new Worker("./offscreen_canvas_worker.js", { type: "module" });

      const options = {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor: "black",
      };

      worker.postMessage({ canvas: offscreen, options }, [offscreen]);
    </script>
  </body>
</html>
```

```js [offscreen_canvas_worker.js]
import * as Two from "two-easy-engine"

onmessage = (e) => {
  if (e.data.canvas && e.data.options) {

    const options = e.data.options;
    const canvas = e.data.canvas;
    const clock = new Two.Clock();
    const camera = new Two.Camera2D();
    const scene = new Two.Scene();
    const render = new Two.Renderer2D(canvas, scene, camera, e.data.options);

    const numParticles = 500;
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      const fillStyle = new Two.HslaColor(((i * 2) % 300) + 1, 100, 60, 1);
      const material = new Two.BasicMaterial({ fillStyle });
      const geom = new Two.CircleGeometry(Math.random() * 6 + 1);
      const mesh = new Two.Mesh(geom, material);
      scene.add(mesh);
      particles.push(mesh);
    }

    render.requestAnimationFrame({
      beforeRender: () => {
        const speed = 2;
        const time = clock.getElapsedTime();

        particles.forEach((p) => {
          p.transform.position.set(
            options.width / 2 + Math.sin(time * speed * Math.random()) * 100,
            options.height / 2 + Math.cos(time * speed * Math.random()) * 100,
          );
        });
      },
    });
  }
};
```

:::