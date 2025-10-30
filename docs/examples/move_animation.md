# Move
So far, we’ve learned how to use the `rotation` and `scale` properties of the [`Transform`](/api/Transform.html) object to create rotation and pulse animations.
In this tutorial, you will learn how to use the `position` property of the [`Transform`](/api/Transform.html) to animate movement.

## Transform Position Property
The position property is a [`Vector2`](/api/Vector2.html), representing the object's location on the X and Y axes.

You can set the position directly like this:
```js
obj.transform.position.set(100, 200); // x = 100, y = 200
```
Or modify one axis at a time:
```js
obj.transform.position.x += 10;
obj.transform.position.y -= 5;
```
## Animate Position
To animate an object’s position, we can use time-based movement to ensure smooth and consistent motion across different frame rates.

In the following example, the object’s horizontal position will oscillate using a sine wave.
This gives a smooth left–right motion that loops continuously.
```js
const amplitude = 150; // how far it moves from the center
const speed = 1.5; // how fast it moves

renderer.requestAnimationFrame({
  beforeRender: () => {
    const centerX = renderer.getCenterX();
    const time = clock.getElapsedTime(); // total time since start

    obj.transform.position.x = centerX + Math.sin(time * speed) * amplitude;
  },
});
```

## Complete Example
You can find a complete example below that demonstrates how to animate an object’s position using the [`Vector2`](/api/Vector2.html) property of its [`Transform`](/api/Transform.html). The blue circle moves smoothly from side to side, driven by a sine wave function applied to its X position.

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
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: black;
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

      const material = new Two.BasicMaterial({
        fillStyle: new Two.RgbaColor(0, 150, 255, 1),
        strokeStyle: new Two.RgbaColor(0, 100, 200, 1),
        lineWidth: 2,
      });
      const geometry = new Two.CircleGeometry(40);
      const mesh = new Two.Mesh(geometry, material);
      scene.add(mesh);

      mesh.transform.position.set(
        window.innerWidth / 2,
        window.innerHeight / 2
      );

      window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      const amplitude = 150; // how far it moves from the center
      const speed = 1.5; // how fast it moves

      renderer.requestAnimationFrame({
        beforeRender: () => {
          const centerX = renderer.getCenterX();
          const time = clock.getElapsedTime(); // total time since start

          mesh.transform.position.x =
            centerX + Math.sin(time * speed) * amplitude;
        },
      });
    </script>
  </body>
</html>
```

## Preview

<iframe src="/two-easy-engine/demos/move_animation.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>
