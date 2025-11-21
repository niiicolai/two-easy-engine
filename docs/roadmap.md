# Roadmap
This roadmap outlines our major goals, target releases, and long-term vision for the TwoEasyEngine. Please note specific features are subject to change based on community feedback and development progress.

### Status Legend
* **✅ Done:** Feature is complete, merged, and available.
* **🚧 In Progress:** Active work is being done on this set of features.
* **🔜 Planned:** Features defined but development has not yet started.

## Development Goals

::: details Fundamentals - [STATUS: 🚧 In Progress]
* **Camera System**: Implement support for camera rotation and panning. (**✅ Done**)
* **Color Handling**: Define standard color structures. (**✅ Done**)
* **Clock System**: Add a way to easily manage time in animation loops. (**✅ Done**)
* **Object2Ds**: Design a base wrapper defining 2D objects. (**✅ Done**)
* **Scene Management**: Define an system for adding and removing objects. (**✅ Done**)
* **Geometries**: Add basic geometries (Circle, Rectangle, Line, Polygon, Text). (**✅ Done**)
* **Materials**: Implement a way to manage object appearance. (**✅ Done**)
* **Mesh**: Define an object to combine geometries and materials. (**✅ Done**)
* **Lights**: Add a basic light object. (**✅ Done**)
* **Renderer**: Define a base renderer and a context specific for Canvas 2D rendering context. (**✅ Done**)
* **TypeScript Support**: Implement generation of TypeScript declaration files. (**✅ Done**)
* **Test Framework**: Add a test framework for implementing tests. (**✅ Done**)
* **Anchor Points**: Create a way to manage object anchor points. (**✅ Done**)
* **Basic Colliders**: Add management for basic collisions. (**🔜 Planned**)
* **WebGPU**: Implement support for WebGPU rendering. (**🔜 Planned**)
:::

::: details Documentation - [STATUS: 🚧 In Progress]
* **Vitepress**: Implement and deploy a Vitepress documention. (**✅ Done**)
* **Get Started**: Create a section describing how to get started. (**✅ Done**)
* **MCP**: Develop an MCP-server to show how the library can be used for MCP-clients. (**✅ Done**)
* **API Reference**: Design a way to automatically generate API reference. (**✅ Done**)
* **Mathematics for 2D Graphics**: Create a section for learning mathematics. (**✅ Done**)
* **Resources**: Implement a section for link to relevant resources. (**✅ Done**)
* **Animations**: Add tutorials for developing animations. (**🚧 In Progress**)
* **Advanced Topics**: Add tutorials for developing offscreen canvas and camera features. (**🚧 In Progress**)
* **Versioning**: Implement multi-version documentation support. (**🔜 Planned**)
:::

::: details Development - [STATUS: ✅ Done]
* **Branch Rules**: Restrict pushing directly to main branch. (**✅ Done**)
* **Continuous integration**: Add a worflow running tests before allowing PR merge. (**✅ Done**)
* **Lint**: Define lint rules to enforce style guide. (**✅ Done**)
* **Semantic Versioning**: Implement the rules of Semantic Versioning. (**✅ Done**)
* **Conventional Commits**: Implement guidelines for Conventional Commits. (**✅ Done**)
* **Changelog**: Add a changelog showing the linear development flow. (**✅ Done**)
* **Branching Strategy**: Add guidelines for branching strategy. (**✅ Done**)
:::

::: details Community - [STATUS: 🚧 In Progress]
* **Discord Server**: Add a Discord Server for discussions and help. (**✅ Done**)
* **Contribution Guidelines**: Write guidelines for how to contribute to the project. (**✅ Done**)
* **Style Guide**: Add a style guide describing how to design code. (**✅ Done**)
* **Code of Conduct**: Write a code of conduct. (**✅ Done**)
* **License**: Add a license for the project. (**✅ Done**)
* **Good First Issues**: Write a couple of good first issues. (**🔜 Planned**)
* **Security**: Add a file describing how to report security issues. (**🔜 Planned**)
:::

::: details Addons - [STATUS: 🚧 In Progress]
* **Implementation Management**: Define a way to add new addons. (**🚧 In Progress**)
* **Particle Controller**: Design a controller for handling particle effects. (**🔜 Planned**)
* **Audio Support**: Add a controller for controlling audio. (**🔜 Planned**)
* **Input Manager**: Implement a controller for seamless input management across devices. (**🔜 Planned**)
* **UI Elements**: Build a framework for UI elements such as input and sliders. (**🔜 Planned**)
:::

## Want to Contribute?
Check out our official **Contributing Guidelines** to learn how you can help build the TwoEasyEngine:
[TwoEasyEngine Contributing Guidelines](https://github.com/niiicolai/two-easy-engine/blob/main/CONTRIBUTING.md)