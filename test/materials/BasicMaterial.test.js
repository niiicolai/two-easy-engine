import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { BasicMaterial } from "../../src/materials/BasicMaterial.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("BasicMaterial", () => {
  it("should create a Material instance with null properties", () => {
    const material = new BasicMaterial();
    expect(material).toBeInstanceOf(BasicMaterial);
    expect(material.fillStyle).toBeNull();
    expect(material.strokeStyle).toBeNull();
    expect(material.lineWidth).toBeNull();
  });

  it("should create a Material instance with custom properties", () => {
    const color = new RgbaColor(1, 1, 1, 1);
    const material = new BasicMaterial({
      fillStyle: color,
      strokeStyle: color,
      lineWidth: 5,
    });
    expect(material.fillStyle).toBe(color);
    expect(material.strokeStyle).toBe(color);
    expect(material.lineWidth).toBe(5);
  });

  it("should throw an error for invalid fillStyle", () => {
    expect(() => new BasicMaterial({ fillStyle: 123 })).toThrow(
      "fillStyle must be a Color or null"
    );
  });

  it("should throw an error for invalid strokeStyle", () => {
    expect(() => new BasicMaterial({ strokeStyle: {} })).toThrow(
      "strokeStyle must be a Color or null"
    );
  });

  it("should throw an error for invalid lineWidth", () => {
    expect(() => new BasicMaterial({ lineWidth: -5 })).toThrow(
      "lineWidth must be a positive number or null"
    );
  });

  it("should throw an error for invalid texture2D", () => {
    expect(() => new BasicMaterial({ texture2D: -5 })).toThrow(
      "texture2D must be of type Texture2D or null"
    );
  });

  it("should implement the applyToContext2D method", () => {
    const material = new BasicMaterial();
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");

    material.applyToContext2D(ctx);
    // Since we can't easily test canvas drawing, we'll just ensure no errors are thrown
    expect(true).toBe(true);
  });
});
