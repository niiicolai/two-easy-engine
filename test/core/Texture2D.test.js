import { describe, it, expect, vi, beforeEach } from "vitest";
import { createCanvas, Image } from "canvas";
import { Texture2D } from "../../src/core/Texture2D.js";

describe("Texture2D", () => {
  let canvas, ctx;

  beforeEach(() => {
    canvas = createCanvas(200, 200);
    ctx = canvas.getContext("2d");
    ctx.createPattern = vi.fn().mockReturnValue({
        setTransform: () => {}
    });
  });

  it("should create a Texture2D instance with default values", () => {
    const texture = new Texture2D({ image: new Image() });
    expect(texture).toBeInstanceOf(Texture2D);
    expect(texture.imageOffsetX).toBe(0);
    expect(texture.imageOffsetY).toBe(0);
    expect(texture.imageWidth).toBeUndefined();
    expect(texture.imageHeight).toBeUndefined();
    expect(texture.imageRepeat).toBe("repeat");
  });

  it("should throw error if image is invalid", () => {
    expect(() => new Texture2D({ image: 123 })).toThrow(
      "image must be a string or HTMLImageElement"
    );
  });

  it("should throw error if imageRepeat is invalid", () => {
    expect(
      () => new Texture2D({ image: new Image(), imageRepeat: 2 })
    ).toThrow(/imageRepeat must be string/);
  });

  it("should throw error if imageOffsetX or imageOffsetY are not numbers", () => {
    expect(
      () => new Texture2D({ image: new Image(), imageOffsetX: "0" })
    ).toThrow("imageOffsetX must be a number");
    expect(
      () => new Texture2D({ image: new Image(), imageOffsetY: "0" })
    ).toThrow("imageOffsetY must be a number");
  });

  it("should throw error if imageWidth or imageHeight are invalid", () => {
    expect(
      () => new Texture2D({ image: new Image(), imageWidth: -10 })
    ).toThrow("imageWidth must be a positive number or null");
    expect(() => new Texture2D({ image: new Image(), imageHeight: 0 })).toThrow(
      "imageHeight must be a positive number or null"
    );
  });

  it("should set image offsets correctly", () => {
    const texture = new Texture2D({ image: new Image() });
    texture.setImageOffset(10, 20);
    expect(texture.imageOffsetX).toBe(10);
    expect(texture.imageOffsetY).toBe(20);
  });

  it("should set image size correctly", () => {
    const texture = new Texture2D({ image: new Image() });
    texture.setImageSize(100, 200);
    expect(texture.imageWidth).toBe(100);
    expect(texture.imageHeight).toBe(200);
  });

  it("should create a canvas pattern when image is complete", () => {
    const img = new Image();
    const texture = new Texture2D({ image: img });
    vi.spyOn(texture, "image", "get").mockReturnValue({
      complete: true,
      naturalWidth: 100,
      naturalHeight: 100,
    });
    const pattern = texture.createPattern(ctx);
    expect(pattern).not.toBeNull();
  });

  it("should set image using setImage with string or HTMLImageElement", () => {
    const texture = new Texture2D({ image: new Image() });

    // HTMLImageElement
    const img = new Image();
    texture.setImage(img);
    expect(texture.image).toBe(img);

    // String src
    texture.setImage("/test.png");
    expect(texture.image).toBeInstanceOf(Image);
  });

  it("should throw if setImage is called with invalid type", () => {
    const texture = new Texture2D({ image: new Image() });
    expect(() => texture.setImage(123)).toThrow(
      "image must be a string or HTMLImageElement"
    );
  });
});
