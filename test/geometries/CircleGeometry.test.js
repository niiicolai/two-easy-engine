import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { CircleGeometry } from "../../src/geometries/CircleGeometry.js";
import { Transform } from "../../src/core/Transform.js";
import { BasicMaterial } from "../../src/materials/BasicMaterial.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("CircleGeometry", () => {
  it("should create a CircleGeometry instance with custom parameters", () => {
    const circle = new CircleGeometry(75);
    expect(circle.radius).toBe(75);
  });

  it("should throw an error for invalid radius", () => {
    expect(() => new CircleGeometry(-50)).toThrow(
      "radius must be a positive number"
    );
  });

  it("drawContext2D() should draw a red filled circle inside the canvas", () => {
    const white = { r: 0, g: 0, b: 0, a: 0 };
    const fillStyle = new RgbaColor(255, 0, 0, 1);
    const circle = new CircleGeometry(1);
    const canvas = createCanvas(4, 4);
    const ctx = canvas.getContext("2d");
    const transform = new Transform();
    const material = new BasicMaterial({ fillStyle });
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
    const inside = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ];

    transform.position.x = 1;
    transform.position.y = 1;
    material.applyToContext2D(ctx);
    circle.drawContext2D(ctx, transform, material);

    inside.forEach(([x, y]) => {
      const pixel = getPixel(ctx, x, y);
      expect(pixel.r).toBeGreaterThan(200);
      expect(pixel.a).toBeGreaterThan(180);
    });
    expectPixelsColor(ctx, outside, white);
  });

  it("should throw an error when drawContext2D is called with invalid transform", () => {
    const circle = new CircleGeometry(50);
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    const material = new BasicMaterial({
      fillStyle: new RgbaColor(1, 1, 1, 1),
    });
    expect(() => circle.drawContext2D(ctx, {}, material)).toThrow(
      "transform must be of type Transform"
    );
  });

  it("should throw an error when drawContext2D is called with invalid material", () => {
    const circle = new CircleGeometry(50);
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    const transform = new Transform();
    expect(() => circle.drawContext2D(ctx, transform, {})).toThrow(
      "material must be of type Material"
    );
  });
});
