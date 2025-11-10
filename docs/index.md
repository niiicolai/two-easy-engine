::: warning
**⚠️ Experimental API:** TwoEasyEngine is a very new project. The API is still evolving and may change in the future, especially as support for other rendering contexts is added. Take a look at the TwoEasyEngine [roadmap](https://niiicolai.github.io/two-easy-engine/roadmap.html) for more information.
:::

<iframe src="/two-easy-engine/demos/introduction.html" width="100%" height="400px" style="border:1px solid #ccc;"></iframe>

**TwoEasyEngine** is a lightweight 2D rendering library built on HTML5 Canvas.
It provides a clean, object-oriented API for creating interactive scenes, managing meshes, controlling cameras, and animating objects, with minimal setup.

It can be used both in the browser for interactive graphics and in MCP server projects to generate canvas drawings server-side, making it versatile for client-side visuals and AI-driven server workflows alike.

### Features

- **Meshes with geometry and materials**: Easily create shapes like Rectangles and Circles.
- **Texture2D support**: Use images in materials to display patterns beyond solid colors.
- **Vector transformations**: Manipulate position, rotation, and scale with ease.
- **Camera2D support**: Control position, rotation, and zoom for dynamic scenes.
- **Scene management**: Organize and render multiple 2D objects efficiently.
- **Offscreen canvas support**: Use the library with an offscreen canvas in a Worker thread. 
- **Simple animation loop**: Built-in `requestAnimationFrame` wrapper for easy management.
- **TypeScript ready**: Modern JavaScript with type declarations for IDE autocompletion.

