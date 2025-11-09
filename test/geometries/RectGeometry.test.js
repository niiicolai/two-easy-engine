import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { RectGeometry } from "../../src/geometries/RectGeometry.js";
import { Transform } from "../../src/core/Transform.js";
import { BasicMaterial } from "../../src/materials/BasicMaterial.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("RectGeometry", () => {
  it("should create a RectGeometry instance with custom parameters", () => {
    const rect = new RectGeometry(200, 150);
    expect(rect.width).toBe(200);
    expect(rect.height).toBe(150);
  });

  it("should throw an error for invalid width", () => {
    expect(() => new RectGeometry(-100, 150)).toThrow(
      "width must be a positive number"
    );
  });

  it("should throw an error for invalid height", () => {
    expect(() => new RectGeometry(100, -150)).toThrow(
      "height must be a positive number"
    );
  });

  it("drawContext2D() should draw a red rectangle inside the canvas", () => {
    const transparent  = { r: 0, g: 0, b: 0, a: 0 };
    const red = { r: 255, g: 0, b: 0, a: 255 };
    const fillStyle = new RgbaColor(255, 0, 0, 1);
    const rect = new RectGeometry(2, 2);
    const canvas = createCanvas(4, 4);
    const ctx = canvas.getContext("2d");
    const transform = new Transform();
    const material = new BasicMaterial({ fillStyle });
    const outside = [
      [0, 0], [1, 0], [2, 0], [3, 0],
      [0, 3], [1, 3], [2, 3], [3, 3],
      [0, 1], [0, 2],
      [3, 1], [3, 2],
    ];
    const inside = [
      [1, 1], [2, 1],
      [1, 2], [2, 2],
    ];

    transform.position.set(1, 1);
    material.applyToContext2D(ctx);
    rect.drawContext2D(ctx, transform, material);

    expectPixelsColor(ctx, outside, transparent);
    expectPixelsColor(ctx, inside, red);
  });
});
