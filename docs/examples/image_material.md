# Image Material

## Preview

<iframe src="/two-easy-engine/demos/image_material.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

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
    <img src="/two-easy-engine/images/logo.png" id="logoImg" hidden />
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

      const centerX = renderer.centerX;
      const centerY = renderer.centerY;

      const rectOffset = new Two.Vector2(-150, -50);
      const logoOffset = new Two.Vector2(50, 50);
      const circleOffset = new Two.Vector2(120, 0);

      const fillStyle = new Two.RgbaColor(255, 255, 255, 1);

      const logoImg = document.getElementById("logoImg");
      const logoTexture = new Two.Texture2D({
        image: logoImg, // Use a HTMLImageElement or string
        imageRepeat: "repeat",
        imageWidth: 100,
        imageHeight: 100,
        imageOffsetX: 0,
        imageOffsetY: 0,
      });
      const logoMaterial = new Two.BasicMaterial({
        fillStyle,
        texture2D: logoTexture,
      });
      const logoGeom = new Two.RectGeometry(150, 100);
      const logoMesh = new Two.Mesh(logoGeom, logoMaterial);
      logoMesh.transform.position.set(logoOffset.x, logoOffset.y);
      scene.add(logoMesh);

      const rectTexture = new Two.Texture2D({
        image: "/two-easy-engine/images/square-test.png",
        imageRepeat: "repeat",
        imageWidth: 100,
        imageHeight: 100,
        imageOffsetX: 0,
        imageOffsetY: 0,
      });
      const imageRectMaterial = new Two.BasicMaterial({
        fillStyle,
        texture2D: rectTexture,
      });
      const rectGeom = new Two.RectGeometry(100, 100);
      const rectMesh = new Two.Mesh(rectGeom, imageRectMaterial);
      rectMesh.transform.position.set(
        centerX + rectOffset.x,
        centerY + rectOffset.y
      );
      scene.add(rectMesh);

      const circleTexture = new Two.Texture2D({
        image: "/two-easy-engine/images/circle-test.png",
        imageRepeat: "repeat",
        imageWidth: 100,
        imageHeight: 100,
        imageOffsetX: 50,
        imageOffsetY: 50,
      });
      const imageCircleMaterial = new Two.BasicMaterial({
        fillStyle,
        texture2D: circleTexture,
      });
      const circleGeom = new Two.CircleGeometry(50);
      const circleMesh = new Two.Mesh(circleGeom, imageCircleMaterial);
      circleMesh.transform.position.set(
        centerX + circleOffset.x,
        centerY + circleOffset.y
      );
      scene.add(circleMesh);

      window.onresize = () => {
        renderer.options.setSize(window.innerWidth, window.innerHeight);
      };

      const movementSpeed = 0.5;
      const rotationSpeed = 1.5;
      const radius = 50;

      renderer.requestAnimationFrame({
        beforeRender: () => {
          clock.update();

          const centerX = renderer.centerX;
          const centerY = renderer.centerY;
          const time = clock.elapsedTime * movementSpeed;
          const delta = clock.deltaTime * rotationSpeed;

          logoTexture.setImageOffset((time * 50) % 100, 0);

          rectMesh.transform.rotation += delta;
          circleMesh.transform.rotation += delta;

          rectMesh.transform.position.set(
            Math.sin(time) * radius + centerX + rectOffset.x,
            Math.cos(time) * radius + centerY + rectOffset.y
          );
          circleMesh.transform.position.set(
            Math.sin(time) * radius + centerX + circleOffset.x,
            Math.cos(time) * radius + centerY + circleOffset.y
          );
        },
      });
    </script>
  </body>
</html>
```
