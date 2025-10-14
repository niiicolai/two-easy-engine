# Light Follows Mouse
*The following example is designed for laptops and desktop computers only.*

## Preview

<iframe src="/two-easy-engine/demos/light_follows_mouse.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

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
      const render = new Two.Render2D(canvas, scene, camera, {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor: "black",
      });

      const light = new Two.PointLight2D(
        200,
        1,
        "rgba(255,255,200, 0.7)",
        "rgba(255, 255, 200, 0.0)"
      );
      light.transform.position.set(
        window.innerWidth / 2 - light.radius / 2,
        window.innerHeight / 2 - light.radius / 2
      );
      scene.add(light);

      const material = new Two.BasicMaterial({
        fillStyle: "#39ff14",
        strokeStyle: "#39ff11",
        lineWidth: 2,
      });
      const rectGeometry = new Two.RectGeometry(20, 20);
      const rectMesh = new Two.Mesh(rectGeometry, material);
      rectMesh.transform.position.set(
        window.innerWidth / 2 - rectMesh.geometry.width / 2,
        window.innerHeight / 2 - rectMesh.geometry.height / 2
      );
      scene.add(rectMesh);

      window.onresize = () => {
        render.setSize(window.innerWidth, window.innerHeight);
        rectMesh.transform.position.set(
          window.innerWidth / 2 - rectMesh.geometry.width / 2,
          window.innerHeight / 2 - rectMesh.geometry.height / 2
        );
      };

      const mouse = new Two.Vector2();
      window.addEventListener("mousemove", (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
      });

      render.requestAnimationFrame({
        beforeRender: () => {
          const speed = 0.5;
          const delta = clock.getDeltaTime();

          rectMesh.transform.rotation += delta * speed;
          light.transform.position.x = mouse.x;
          light.transform.position.y = mouse.y;
        },
      });
    </script>
  </body>
</html>
```


