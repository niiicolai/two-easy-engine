import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { TextGeometry } from "../../src/geometries/TextGeometry.js";
import { Transform } from "../../src/core/Transform.js";
import { BasicMaterial } from "../../src/materials/BasicMaterial.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("TextGeometry", () => {
  it("should create a TextGeometry instance with valid parameters", () => {
    const text = "Hello World";
    const options = {
      maxWidth: 300,
      font: "20px Arial",
      textAlign: "center",
      textBaseline: "middle",
      direction: "ltr",
    };
    const textGeo = new TextGeometry(text, options);

    expect(textGeo.text).toBe(text);
    expect(textGeo.options.maxWidth).toBe(300);
    expect(textGeo.options.font).toBe(options.font);
    expect(textGeo.options.textAlign).toBe(options.textAlign);
    expect(textGeo.options.textBaseline).toBe(options.textBaseline);
    expect(textGeo.options.direction).toBe(options.direction);
  });

  it("should create a TextGeometry instance with default parameters", () => {
    const text = "Hello World";
    const textGeo = new TextGeometry(text, {});
    const textGeo2 = new TextGeometry(text);

    expect(textGeo.text).toBe(text);
    expect(textGeo.options).toStrictEqual(TextGeometry.DEFAULT_OPTIONS);
    expect(textGeo2.text).toBe(text);
    expect(textGeo2.options).toStrictEqual(TextGeometry.DEFAULT_OPTIONS);
  });

  it("should throw an error if text is not a string", () => {
    expect(() => new TextGeometry(123)).toThrow("text must be a string");
  });

  it("should throw an error if maxWidth is not a number or null", () => {
    expect(() => new TextGeometry("Hi", { maxWidth: "invalid" })).toThrow(
      "maxWidth must be a number or undefined"
    );
  });

  it("should throw an error if font is not a string or null", () => {
    expect(() => new TextGeometry("Hi", { font: 123 })).toThrow(
      "font must be a string or null"
    );
  });

  it("should throw an error if textAlign is not valid", () => {
    expect(() => new TextGeometry("Hi", { textAlign: 22 })).toThrow(
      "textAlign must be a string with value: start, end, left, right, center"
    );
  });

  it("should throw an error if textBaseline is not valid", () => {
    expect(() => new TextGeometry("Hi", { textBaseline: 22 })).toThrow(
      "textBaseline must be a string with value: top, hanging, middle, alphabetic, ideographic, bottom"
    );
  });

  it("should throw an error if direction is not valid", () => {
    expect(() => new TextGeometry("Hi", { direction: 22 })).toThrow(
      "direction must be a string with value: ltr, rtl, inherit"
    );
  });

  it("drawContext2D() should draw a red x inside the canvas", () => {
    const color = new RgbaColor(255, 0, 0, 1);
    const text = new TextGeometry("x", {
      font: "2px Arial",
      textAlign: "center",
      textBaseline: "middle",
    });
    const canvas = createCanvas(4, 4);
    const ctx = canvas.getContext("2d");
    const transform = new Transform();
    const material = new BasicMaterial({ fillStyle: color, strokeStyle: color, lineWidth: 2 });
    const inside = [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 2],
    ];
    const outside = [
      [1, 3],
      [0, 3],
      [2, 3],
      [3, 3],
    ];

    transform.position.x = 1;
    transform.position.y = 1;
    material.applyToContext2D(ctx);
    text.drawContext2D(ctx, transform, material);

    inside.forEach(([x, y]) => {
      const pixel = getPixel(ctx, x, y);
      expect(pixel.r).toBeGreaterThan(200);
      expect(pixel.a).toBeGreaterThan(38);
    });
    outside.forEach(([x, y]) => {
      const pixel = getPixel(ctx, x, y);
      expect(pixel.a).toBeLessThan(40);
    });
  });
});
