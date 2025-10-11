import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { Object2D } from "../../src/core/Object2D.js";
import { Transform } from "../../src/core/Transform.js";

describe("Object2D", () => {
  it("should create an Object2D instance", () => {
    const object = new Object2D();
    expect(object).toBeInstanceOf(Object2D);
    expect(object.transform).toBeInstanceOf(Transform);
  });

  it("should implement onRender method", () => {
    const object = new Object2D();
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    expect(() => object.onRender(ctx)).not.toThrow();
  });

  it("should throw an error when onRender is called with invalid context", () => {
    const object = new Object2D();
    expect(() => object.onRender({})).toThrow(
      "ctx must be of type CanvasRenderingContext2D"
    );
  });
});
