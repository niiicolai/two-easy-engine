import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { BasicMaterial } from "../../src/materials/BasicMaterial.js";

describe("BasicMaterial", () => {
  it("should create a Material instance with null properties", () => {
    const material = new BasicMaterial();
    expect(material).toBeInstanceOf(BasicMaterial);
    expect(material.fillStyle).toBeNull();
    expect(material.strokeStyle).toBeNull();
    expect(material.lineWidth).toBeNull();
  });

  it("should create a Material instance with custom properties", () => {
    const material = new BasicMaterial({
      fillStyle: "red",
      strokeStyle: "blue",
      lineWidth: 5,
    });
    expect(material.fillStyle).toBe("red");
    expect(material.strokeStyle).toBe("blue");
    expect(material.lineWidth).toBe(5);
  });

  it("should throw an error for invalid fillStyle", () => {
    expect(() => new BasicMaterial({ fillStyle: 123 })).toThrow(
      "fillStyle must be a string or null"
    );
  });

  it("should throw an error for invalid strokeStyle", () => {
    expect(() => new BasicMaterial({ strokeStyle: {} })).toThrow(
      "strokeStyle must be a string or null"
    );
  });

  it("should throw an error for invalid lineWidth", () => {
    expect(() => new BasicMaterial({ lineWidth: -5 })).toThrow(
      "lineWidth must be a positive number or null"
    );
  });

  it("should implement the apply method", () => {
    const material = new BasicMaterial();
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");

    material.apply(ctx);
    // Since we can't easily test canvas drawing, we'll just ensure no errors are thrown
    expect(true).toBe(true);
  });

  it("apply() should throw an error if ctx is not of type CanvasRenderingContext2D", () => {
    const material = new BasicMaterial();
    expect(() => material.apply({})).toThrow(
      "ctx must be of type CanvasRenderingContext2D"
    );
  });
});
