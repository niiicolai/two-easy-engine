import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { TextGeometry } from "../../src/geometries/TextGeometry.js";
import { Transform } from "../../src/core/Transform.js";
import { Material } from "../../src/materials/Material.js";

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

    expect(textGeo.text).toBe("Hello World");
    expect(textGeo.options.maxWidth).toBe(300);
    expect(textGeo.options.font).toBe("20px Arial");
    expect(textGeo.options.textAlign).toBe("center");
    expect(textGeo.options.textBaseline).toBe("middle");
    expect(textGeo.options.direction).toBe("ltr");
  });

  it("should throw an error if text is not a string", () => {
    expect(() => new TextGeometry(123)).toThrow("text must be a string");
  });

  it("should throw an error if maxWidth is not a number or null", () => {
    expect(() => new TextGeometry("Hi", { maxWidth: "invalid" })).toThrow(
      "maxWidth must be a number or null"
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

  it("should draw text without throwing errors", () => {
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    const transform = new Transform();
    const material = new Material({ fillStyle: "blue", strokeStyle: "red" });

    const textGeo = new TextGeometry("Hello Canvas", {
      font: "16px Arial",
      textAlign: "center",
      textBaseline: "middle",
    });

    expect(() => textGeo.draw(ctx, transform, material)).not.toThrow();
  });

  it("should throw an error when draw is called with invalid context", () => {
    const textGeo = new TextGeometry("Hello");
    const transform = new Transform();
    const material = new Material({ fillStyle: "blue" });

    expect(() => textGeo.draw({}, transform, material)).toThrow(
      "ctx must be of type CanvasRenderingContext2D"
    );
  });

  it("should throw an error when draw is called with invalid transform", () => {
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    const material = new Material({ fillStyle: "blue" });
    const textGeo = new TextGeometry("Hello");

    expect(() => textGeo.draw(ctx, {}, material)).toThrow(
      "transform must be of type Transform"
    );
  });

  it("should throw an error when draw is called with invalid material", () => {
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    const transform = new Transform();
    const textGeo = new TextGeometry("Hello");

    expect(() => textGeo.draw(ctx, transform, {})).toThrow(
      "material must be of type Material"
    );
  });
});
