# Add to MCP Server

***Prerequisite: You should have a basic understanding of the [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
 before following this tutorial.***

The following steps demonstrate how to integrate TwoEasyEngine into your MCP server tools. By following this guide, you'll be able to register a canvas-drawing tool on your server, configure TwoEasyEngine for Node.js, and generate dynamic HTML canvas outputs that can be returned to MCP clients.

## 1. Install TwoEasyEngine Specific Dependencies
Ensure you have the [canvas](https://www.npmjs.com/package/canvas) library and TwoEasyEngine installed:
```bash
npm install canvas two-easy-engine
```

## 2. Configure Global Types
To avoid type-check conflicts in a Node.js environment, you need to set some global variables:
```js
import { Canvas, Image, ImageData } from "canvas";

(global as any).HTMLCanvasElement = Canvas;
(global as any).Image = Image;
(global as any).ImageData = ImageData;
```
This allows TwoEasyEngine to work with canvas elements as if you were in a browser environment.

## 3. Create a Canvas
Use the `createCanvas` function from the `canvas` library to create a canvas instance:
```js
const width = 100;
const height = 100;
const canvas = createCanvas(width, height);
```

## 4. Integrate TwoEasyEngine in MCP Tool
Here’s an example of registering a canvas-drawing tool in your MCP server:

```js
import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createCanvas } from "canvas";
import * as Two from "two-easy-engine";

// Initialize server
const server = new McpServer({ /* server config */ });

// Register tool
// Register a drawing tool
server.tool(
  "draw_canvas",
  "Draw a background color on a canvas",
  {
    backgroundColor: z.string().describe("Background color (CSS format)"),
    width: z.number().describe("Total image width"),
    height: z.number().describe("Total image height"),
  },
  async ({ backgroundColor, width, height }) => {
    // Create canvas
    const canvas = createCanvas(width, height);

    // Setup TwoEasyEngine
    const camera = new Two.Camera2D();
    const scene = new Two.Scene();
    const options = { width, height, devicePixelRatio: 1, backgroundColor };
    const renderer = new Two.Renderer2D(canvas as any, scene, camera, options);

    // Render the scene
    renderer.render();

    // Convert canvas to Base64 PNG
    const data = canvas
      .toDataURL("image/png")
      .replace(/^data:image\/png;base64,/, "");

    // Return as MCP-compatible image
    return {
      content: [
        {
          type: "image",
          mimeType: "image/png",
          data,
          _meta: { width, height },
        },
      ],
    };
  }
);

// Start server..
```

## Notes

1. Always use createCanvas from the canvas library to generate canvas elements in Node.js.
2. Globals (HTMLCanvasElement, Image, ImageData) must be configured before using TwoEasyEngine.
3. The MCP tool returns the canvas as a Base64-encoded PNG image, which can be used directly in clients.

