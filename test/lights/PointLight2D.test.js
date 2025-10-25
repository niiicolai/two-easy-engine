import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { PointLight2D } from "../../src/lights/PointLight2D.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("Scene", () => {
  it("should create a point light 2d", () => {
    const color = new RgbaColor(1, 1, 1, 1);
    const light = new PointLight2D(100, 1, color, color);
    expect(light).toBeInstanceOf(PointLight2D);
    expect(light.radius).toBe(100);
    expect(light.intensity).toBe(1);
    expect(light.color).toBe(color);
    expect(light.colorStop).toBe(color);
    expect(light.zIndex).toBe(1);
  });

  it("should throw an error if radius is not a number", () => {
    expect(() => new PointLight2D("100", 1)).toThrow(
      "radius must be a positive number"
    );
  });

  it("should throw an error if intensity is not a number", () => {
    expect(() => new PointLight2D(100, "1")).toThrow(
      "intensity must be a positive number"
    );
  });

  it("should throw an error if color is not a Color", () => {
    expect(() => new PointLight2D(100, 1, {})).toThrow("color must be a Color");
  });

  it("should throw an error if colorStop is not a Color", () => {
    expect(
      () => new PointLight2D(100, 1, new RgbaColor(1, 1, 1, 1), {})
    ).toThrow("colorStop must be a Color");
  });

  it("should throw an error when calling drawContext2D() with a non-CanvasRenderingContext2D", () => {
    const light = new PointLight2D();
    expect(() => light.drawContext2D({})).toThrow(
      "ctx must be of type CanvasRenderingContext2D"
    );
  });

  it("drawContext2D() should draw a red point light inside the canvas", () => {
    const white = { r: 0, g: 0, b: 0, a: 0 };
    const red = new RgbaColor(255, 0, 0, 1);
    const light = new PointLight2D(1, 1, red, red);
    const canvas = createCanvas(4, 4);
    const ctx = canvas.getContext("2d");

    light.transform.position.x = 1;
    light.transform.position.y = 1;
    light.drawContext2D(ctx);

    const inside = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ];
    const outside = [
      [2, 0],
      [3, 0],
      [2, 1],
      [3, 1],
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 2],
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
    ];

    inside.forEach(([x, y]) => {
      const pixel = getPixel(ctx, x, y);
      expect(pixel.r).toBeGreaterThan(200);
      expect(pixel.a).toBeGreaterThan(180);
    });
    expectPixelsColor(ctx, outside, white);
  });
});
