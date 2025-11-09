import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { Renderer2D } from "../../src/renderers/Renderer2D.js";
import { Scene } from "../../src/scenes/Scene.js";
import { Camera2D } from "../../src/cameras/Camera2D.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("Renderer2D", () => {
  it("should create a Renderer2D instance", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
    });
    expect(render).toBeInstanceOf(Renderer2D);
    expect(render.canvas).toBe(canvas);
    expect(render.ctx).toBeInstanceOf(CanvasRenderingContext2D);
    expect(render.scene).toBe(scene);
    expect(render.camera).toBe(camera);
    expect(canvas.width).toBe(800);
    expect(canvas.height).toBe(600);
    expect(render.options.width).toBe(800);
    expect(render.options.height).toBe(600);
  });

  it("should throw an error if width is not defined in the constructor", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    expect(() => new Renderer2D(canvas, scene, camera, {
      height: 600,
    })).toThrow(
      "width must be a positive number"
    );
  });

  it("should throw an error if height is not defined in the constructor", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    expect(() => new Renderer2D(canvas, scene, camera, {
      width: 600,
    })).toThrow(
      "height must be a positive number"
    );
  });

  it("should throw an error if scene is not a Scene instance", () => {
    const canvas = createCanvas(800, 600);
    const camera = new Camera2D();
    expect(() => new Renderer2D(canvas, {}, camera, {
      width: 800,
      height: 600,
    })).toThrow(
      "scene must be of type Scene"
    );
  });

  it("should throw an error if camera is not a Camera2D instance", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    expect(() => new Renderer2D(canvas, scene, {}, {
      width: 800,
      height: 600,
    })).toThrow(
      "camera must be of type Camera"
    );
  });

  it("should set the size of the canvas", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
    });
    render.setSize(1024, 768);
    expect(render.options.width).toBe(1024);
    expect(render.options.height).toBe(768);
    expect(render.canvas.width).toBe(1024);
    expect(render.canvas.height).toBe(768);
  });

  it("should throw an error if width or height is not a number", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
    });
    expect(() => render.setSize("1024", 768)).toThrow(
      "width must be a positive number"
    );
    expect(() => render.setSize(1024, "768")).toThrow(
      "height must be a positive number"
    );
  });

  it("should set the device pixel ratio", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
    });
    render.setDevicePixelRatio(2);
    expect(render.options.devicePixelRatio).toBe(2);
  });

  it("should throw an error if dpr is not a number", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
    });
    expect(() => render.setDevicePixelRatio("2")).toThrow(
      "devicePixelRatio must be a positive number"
    );
  });

  it("setBackgroundColor should set backgroundColor", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 2,
      height: 2,
      devicePixelRatio: 1,
      backgroundColor: "red"
    });
    
    // Check if canvas background is red.
    render.render();
    expect(getPixel(render.ctx, 0, 0)).toMatchObject({ r: 255, g: 0, b: 0, a: 255 });
    expect(getPixel(render.ctx, 1, 0)).toMatchObject({ r: 255, g: 0, b: 0, a: 255 });
    expect(getPixel(render.ctx, 0, 1)).toMatchObject({ r: 255, g: 0, b: 0, a: 255 });
    expect(getPixel(render.ctx, 1, 0)).toMatchObject({ r: 255, g: 0, b: 0, a: 255 });
    expect(render.options.backgroundColor).toBe("red");

    // Check if canvas background is blue.
    const blue = new RgbaColor(0, 0, 255);
    render.setBackgroundColor(blue);
    render.render();
    expect(getPixel(render.ctx, 0, 0)).toMatchObject({ r: 0, g: 0, b: 255, a: 255 });
    expect(getPixel(render.ctx, 1, 0)).toMatchObject({ r: 0, g: 0, b: 255, a: 255 });
    expect(getPixel(render.ctx, 0, 1)).toMatchObject({ r: 0, g: 0, b: 255, a: 255 });
    expect(getPixel(render.ctx, 1, 0)).toMatchObject({ r: 0, g: 0, b: 255, a: 255 });
    expect(render.options.backgroundColor).toBe(blue);
  });

  it("setBackgroundColor should throw an error if the backgroundColor is not a string or color", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
    });
    expect(() => render.setBackgroundColor({})).toThrow(
      "backgroundColor must be a Color or a string"
    );
  });

  it("getCenterX() should return half canvas width and update on setSize()", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
    });

    expect(render.getCenterX()).toBe(400);

    render.setSize(400, 300);

    expect(render.getCenterX()).toBe(200);

    render.options.width = 50;

    expect(render.getCenterX()).toBe(25);
  });

  it("getCenterY() should return half canvas width and update on setSize()", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
    });

    expect(render.getCenterY()).toBe(300);

    render.setSize(400, 300);

    expect(render.getCenterY()).toBe(150);

    render.options.height = 100;

    expect(render.getCenterY()).toBe(50);
  });

  it("should return the half canvas width when accessing centerX property", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
    });

    expect(render.centerX).toBe(400);
  });

  it("should return the half canvas height when accessing centerY property", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
    });

    expect(render.centerY).toBe(300);
  });
});
