# Polygon Geometry

## Preview

<iframe src="/two-easy-engine/demos/polygon_geometry.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

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

      // Create a clock, camera, scene, and renderer
      const clock = new Two.Clock();
      const camera = new Two.Camera2D();
      const scene = new Two.Scene();
      const renderer = new Two.Renderer2D(canvas, scene, camera, {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        backgroundColor: "black",
      });

      const triangle = new Two.Mesh(
        new Two.PolygonGeometry([
          [0, 0],
          [100, 0],
          [100, 100],
        ]),
        new Two.BasicMaterial({
          fillStyle: new Two.RgbaColor(0, 255, 0, 1),
          strokeStyle: new Two.RgbaColor(0, 200, 0, 1),
          lineWidth: 2,
        })
      );
      triangle.transform.position.set(renderer.centerX, renderer.centerY + 50);
      scene.add(triangle);

      const pentagon = new Two.Mesh(
        new Two.PolygonGeometry([
          [0, 0],
          [50, -50],
          [100, 0],
          [75, 50],
          [25, 50],
        ]),
        new Two.BasicMaterial({
          fillStyle: new Two.RgbaColor(0, 0, 255, 1),
          strokeStyle: new Two.RgbaColor(0, 0, 255, 1),
          lineWidth: 2,
        })
      );
      pentagon.transform.position.set(
        renderer.centerX - 150,
        renderer.centerY + 50
      );
      scene.add(pentagon);

      const hexagon = new Two.Mesh(
        new Two.PolygonGeometry([
          [0, 0],
          [50, -25],
          [100, 0],
          [100, 50],
          [50, 75],
          [0, 50],
        ]),
        new Two.BasicMaterial({
          fillStyle: new Two.RgbaColor(255, 0, 0, 1),
          strokeStyle: new Two.RgbaColor(255, 0, 0, 1),
          lineWidth: 2,
        })
      );
      hexagon.transform.position.set(renderer.centerX, renderer.centerY - 100);
      scene.add(hexagon);

      const parallelogram = new Two.Mesh(
        new Two.PolygonGeometry([
          [25, 0],
          [100, 0],
          [75, 50],
          [0, 50],
        ]),
        new Two.BasicMaterial({
          fillStyle: new Two.RgbaColor(255, 0, 0, 1),
          strokeStyle: new Two.RgbaColor(255, 0, 0, 1),
          lineWidth: 2,
        })
      );
      parallelogram.transform.position.set(renderer.centerX- 150, renderer.centerY - 100);
      scene.add(parallelogram);

      const star = new Two.Mesh(
        new Two.PolygonGeometry([
          [0, 0],
          [75, 0],
          [100, -75],
          [125, 0],
          [200, 0],
          [150, 50],
          [175, 125],
          [100, 80],
          [25, 125],
          [55, 50],
        ]),
        new Two.BasicMaterial({
          fillStyle: new Two.RgbaColor(255, 255, 0, 1),
          strokeStyle: new Two.RgbaColor(255, 255, 0, 1),
          lineWidth: 2,
        })
      );
      star.transform.position.set(
        renderer.centerX + 150,
        renderer.centerY + 50
      );
      star.transform.scale.set(0.5, 0.5);
      scene.add(star);

      const star2 = new Two.Mesh(
        new Two.PolygonGeometry([
          [0, 25],
          [75, 0],
          [100, -75],
          [125, 0],
          [200, 25],
          [125, 50],
          [100, 125],
          [75, 50],
        ]),
        new Two.BasicMaterial({
          fillStyle: new Two.RgbaColor(255, 150, 255, 1),
          strokeStyle: new Two.RgbaColor(255, 150, 255, 1),
          lineWidth: 2,
        })
      );
      star2.transform.position.set(
        renderer.centerX + 150,
        renderer.centerY - 100
      );
      star2.transform.scale.set(0.5, 0.5);
      scene.add(star2);

      window.onresize = () => {
        renderer.options.setSize(window.innerWidth, window.innerHeight);
        triangle.transform.position.set(
          renderer.centerX,
          renderer.centerY + 50
        );
        pentagon.transform.position.set(
          renderer.centerX - 150,
          renderer.centerY + 50
        );
        hexagon.transform.position.set(
          renderer.centerX,
          renderer.centerY - 100
        );
        star.transform.position.set(
          renderer.centerX + 150,
          renderer.centerY + 50
        );
        star2.transform.position.set(
          renderer.centerX + 150,
          renderer.centerY - 100
        );
      };

      const speed = 1;

      renderer.requestAnimationFrame({
        beforeRender: () => {
          clock.update();

          const delta = clock.deltaTime;

          triangle.transform.rotation += delta * speed;
          pentagon.transform.rotation += delta * speed;
          hexagon.transform.rotation += delta * speed;
          parallelogram.transform.rotation += delta * speed;
          star.transform.rotation += delta * speed;
          star2.transform.rotation += delta * speed;
        },
      });
    </script>
  </body>
</html>
```
