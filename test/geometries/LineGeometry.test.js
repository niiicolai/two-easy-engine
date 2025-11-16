import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { LineGeometry } from "../../src/geometries/LineGeometry.js";
import { Transform } from "../../src/core/Transform.js";
import { BasicMaterial } from "../../src/materials/BasicMaterial.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("LineGeometry", () => {
  it("should create a LineGeometry instance with custom parameters", () => {
    const vertices = new Float32Array(4);
    vertices[0] = 1;
    vertices[1] = 2;
    vertices[2] = 3;
    vertices[3] = 4;
    const line = new LineGeometry(vertices);
    expect(line.vertices).toBe(vertices);
  });

  it("should convert nested arrays to Float32Array", () => {
    const vertices = new Float32Array(4);
    vertices[0] = 1;
    vertices[1] = 2;
    vertices[2] = 3;
    vertices[3] = 4;
    const line = new LineGeometry([[1, 2, 3, 4]]);
    expect(line.vertices).toBeInstanceOf(Float32Array);
  });

  it("should throw an error for invalid lines", () => {
    expect(() => new LineGeometry(-50)).toThrow(
      "vertices must be a array or Float32Array"
    );
  });

  it("should throw an error for invalid sized array", () => {
    expect(() => new LineGeometry([[0, 0]])).toThrow(
      "vertices as array must contain arrays with a length of four numbers"
    );
  });

  it("should throw an error for lines of invalid type", () => {
    expect(() => new LineGeometry([1])).toThrow(
      "vertices as array must contain arrays with a length of four numbers"
    );
  });

  it("drawContext2D() should draw a red line inside the canvas", () => {
    const transparent = { r: 0, g: 0, b: 0, a: 0 };
    const red = { r: 255, g: 0, b: 0, a: 255 };
    const strokeStyle = new RgbaColor(255, 0, 0, 1);
    const points = [[0, 0, 2, 0]];
    const line = new LineGeometry(points);
    const canvas = createCanvas(4, 4);
    const ctx = canvas.getContext("2d");
    const transform = new Transform();
    const material = new BasicMaterial({ strokeStyle, lineWidth: 2 });
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
      [1, 0],
      [0, 1],
      [1, 1],
    ];

    transform.position.x = 1;
    transform.position.y = 1;
    material.applyToContext2D(ctx);
    line.drawContext2D(ctx, transform, material);

    expectPixelsColor(ctx, outside, transparent);
    expectPixelsColor(ctx, inside, red);
  });
});
