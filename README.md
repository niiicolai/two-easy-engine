**⚠️ Experimental API:** TwoEasyEngine is a very new project. The API is still evolving and may change in the future, especially as support for other rendering contexts is added. Take a look at the TwoEasyEngine [roadmap](https://niiicolai.github.io/two-easy-engine/roadmap.html) for more information.

[![CI](https://github.com/niiicolai/two-easy-engine/actions/workflows/ci.yml/badge.svg)](https://github.com/niiicolai/two-easy-engine/actions/workflows/ci.yml)
[![pages-build-deployment](https://github.com/niiicolai/two-easy-engine/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/niiicolai/two-easy-engine/actions/workflows/pages/pages-build-deployment)
[![npm version](https://img.shields.io/npm/v/two-easy-engine.svg)](https://www.npmjs.com/package/two-easy-engine)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)

---

<img 
    src="./docs/public/images/logo.png" 
    alt="TwoEasyEngine Logo" 
    width="260" 
    style="flex-shrink: 0; border-radius: 1rem;"
  />

**TwoEasyEngine** is a lightweight 2D library built on
**HTML5 Canvas**, offering a simple, object-oriented API for
scenes, meshes, cameras, and animations.

### Features

- **Meshes with geometry and materials**: Easily create shapes like Rectangles and Circles.
- **Texture2D support**: Use images in materials to display patterns beyond solid colors.
- **Vector transformations**: Manipulate position, rotation, and scale with ease.
- **Camera2D support**: Control position, rotation, and zoom for dynamic scenes.
- **Scene management**: Organize and render multiple 2D objects efficiently.
- **Offscreen canvas support**: Use the library with an offscreen canvas in a Worker thread. 
- **Simple animation loop**: Built-in `requestAnimationFrame` wrapper for easy management.
- **TypeScript ready**: Modern JavaScript with type declarations for IDE autocompletion.

## Installation

Install **TwoEasyEngine** via npm:

```bash
npm install two-easy-engine
```

Or using Yarn:

```bash
yarn add two-easy-engine
```

## Quick Start
Create an HTML file with the following content to create a basic scene:
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

      // Create a rectangle mesh
      const mesh = new Two.Mesh(
        new Two.RectGeometry(50, 50),
        new Two.BasicMaterial({
          fillStyle: new Two.RgbaColor(0, 255, 0, 1),
          strokeStyle: new Two.RgbaColor(0, 200, 0, 1),
          lineWidth: 2,
        })
      );
      mesh.transform.position.set(
        renderer.centerX - mesh.geometry.width / 2,
        renderer.centerY - mesh.geometry.height / 2
      );
      scene.add(mesh);

      // Handle window resize to ensure responsiveness rendering
      window.onresize = () => {
        // Resize the canvas
        renderer.options.setSize(window.innerWidth, window.innerHeight);
        // Set the new center position
        mesh.transform.position.set(
          renderer.centerX - mesh.geometry.width / 2,
          renderer.centerY - mesh.geometry.height / 2
        );
      };

      const speed = 1.5;

      // Animation loop
      renderer.requestAnimationFrame({
        beforeRender: () => {
          clock.update();

          const delta = clock.deltaTime;

          mesh.transform.rotation += delta * speed; // Rotate the rectangle
        },
      });
    </script>
  </body>
</html>
```

## Development

### Install dependencies

```bash
npm install
```

### Build static files

```bash
npm run build
```

### Run all test

```bash
npm test
```

### Deploy to NPM

```bash
npm run build
npm publish
```

### Docs

```bash
npm run docs:gen # generate docs
npm run docs:dev # dev view
npm run docs:build # build static files
npm run docs:preview # prod. preview
npm run docs:deploy # deploy docs
```

## Contributing

Contributions are welcome! Get started by reading our [Contributing Guidelines](/CONTRIBUTING.md).

## License MIT License

See [LICENSE](/LICENSE.md) for more information.
