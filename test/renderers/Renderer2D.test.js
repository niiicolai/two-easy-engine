import { expect, describe, it, vi } from "vitest";
import { createCanvas } from "canvas";
import { Renderer2D } from "../../src/renderers/Renderer2D.js";
import { Scene } from "../../src/scenes/Scene.js";
import { Camera2D } from "../../src/cameras/Camera2D.js";

describe("Renderer2D", () => {
  it("should create a Renderer2D instance", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera);
    expect(render).toBeInstanceOf(Renderer2D);
    expect(render.canvas).toBe(canvas);
    expect(render.ctx).toBeInstanceOf(CanvasRenderingContext2D);
    expect(render.scene).toBe(scene);
    expect(render.camera).toBe(camera);
  });

  it("should throw an error if scene is not a Scene instance", () => {
    const canvas = createCanvas(800, 600);
    const camera = new Camera2D();
    expect(() => new Renderer2D(canvas, {}, camera)).toThrow(
      "scene must be of type Scene"
    );
  });

  it("should throw an error if camera is not a Camera2D instance", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    expect(() => new Renderer2D(canvas, scene, {})).toThrow(
      "camera must be of type Camera"
    );
  });

  it("should set the size of the canvas", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera);
    render.setSize(1024, 768);
    expect(render.options.width).toBe(1024);
    expect(render.options.height).toBe(768);
  });

  it("should throw an error if width or height is not a number", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera);
    expect(() => render.setSize("1024", 768)).toThrow(
      "width and height must be numbers"
    );
    expect(() => render.setSize(1024, "768")).toThrow(
      "width and height must be numbers"
    );
  });

  it("should set the device pixel ratio", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera);
    render.setDevicePixelRatio(2);
    expect(render.options.devicePixelRatio).toBe(2);
  });

  it("should throw an error if dpr is not a number", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera);
    expect(() => render.setDevicePixelRatio("2")).toThrow(
      "dpr must be a number"
    );
  });

  it("setBackgroundColor should set backgroundColor", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
      devicePixelRatio: 1,
      backgroundColor: "red"
    });
    render.setBackgroundColor("blue");
    expect(render.options.backgroundColor).toBe("blue");
  });

  it("setBackgroundColor should throw an error if the backgroundColor is not a string or color", () => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    const render = new Renderer2D(canvas, scene, camera);
    expect(() => render.setBackgroundColor({})).toThrow(
      "backgroundColor must be of type Color or string"
    );
  });
});
