# Pulse Animation

## Preview

<iframe src="/two-easy-engine/demos/pulse_animation.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

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

      const canvas = document.getElementById("canvas");
      const clock = new Two.Clock();
      const camera = new Two.Camera2D();
      const scene = new Two.Scene();
      const render = new Two.Renderer2D(canvas, scene, camera, {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor: "black",
      });

      const fillStyle = new Two.RgbaColor(0, 255, 0, 1);
      const material = new Two.BasicMaterial({ fillStyle });
      const geometry = new Two.CircleGeometry(55);
      const mesh = new Two.Mesh(geometry, material);
      mesh.transform.position.set(
        window.innerWidth / 2,
        window.innerHeight / 2
      );
      scene.add(mesh);

      window.onresize = () => {
        render.setSize(window.innerWidth, window.innerHeight);
        mesh.transform.position.set(
          window.innerWidth / 2,
          window.innerHeight / 2
        );
      };

      render.requestAnimationFrame({
        beforeRender: () => {
          const speed = 3;
          const amplitude = 0.1;
          const time = clock.getElapsedTime();

          mesh.transform.scale.set(
            1 + Math.sin(time * speed) * amplitude,
            1 + Math.sin(time * speed) * amplitude
          );
        },
      });
    </script>
  </body>
</html>
```


