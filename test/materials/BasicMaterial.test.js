import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { BasicMaterial } from "../../src/materials/BasicMaterial.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("BasicMaterial", () => {
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

  it("should create a Material with a default lineWidth of 1", () => {
    const color = new RgbaColor(1, 1, 1, 1);
    const material = new BasicMaterial({ fillStyle: color });
    expect(material.lineWidth).toBe(1);
  });

  it("should return the correct fillStyle using getter and setter", () => {
    const initialColor = new RgbaColor(1, 1, 1, 1);
    const nextColor = new RgbaColor(0, 0, 0, 1);
    const material = new BasicMaterial({ fillStyle: initialColor });
    material.fillStyle = nextColor;

    expect(material.fillStyle).toBe(nextColor);
  });

  it("should return the correct strokeStyle using getter and setter", () => {
    const initialColor = new RgbaColor(1, 1, 1, 1);
    const nextColor = new RgbaColor(0, 0, 0, 1);
    const material = new BasicMaterial({ strokeStyle: initialColor });
    material.strokeStyle = nextColor;

    expect(material.strokeStyle).toBe(nextColor);
  });

  it("should return the correct lineWidth using getter and setter", () => {
    const fillStyle = new RgbaColor(1, 1, 1, 1);
    const material = new BasicMaterial({ fillStyle });
    material.lineWidth = 10;
    expect(material.lineWidth).toBe(10);
  });

  it("should throw an error for invalid fillStyle setter", () => {
    const fillStyle = new RgbaColor(1, 1, 1, 1);
    const material = new BasicMaterial({ fillStyle });

    expect(() => {
      material.fillStyle = 123;
    }).toThrow("fillStyle must be a Color or null");
    expect(() => {
      material.fillStyle = null;
    }).toThrow("Either fillStyle or strokeStyle must be provided");
  });

  it("should throw an error for invalid strokeStyle setter", () => {
    const strokeStyle = new RgbaColor(1, 1, 1, 1);
    const material = new BasicMaterial({ strokeStyle });

    expect(() => {
      material.strokeStyle = 123;
    }).toThrow("strokeStyle must be a Color or null");
    expect(() => {
      material.strokeStyle = null;
    }).toThrow("Either fillStyle or strokeStyle must be provided");
  });

  it("should throw an error for invalid lineWidth setter", () => {
    const fillStyle = new RgbaColor(1, 1, 1, 1);
    const material = new BasicMaterial({ fillStyle });

    expect(() => {
      material.lineWidth = -5;
    }).toThrow("lineWidth must be a positive number or null");
  });

  it("should throw an error for invalid texture2D setter", () => {
    const fillStyle = new RgbaColor(1, 1, 1, 1);
    const material = new BasicMaterial({ fillStyle });

    expect(() => {
      material.texture2D = 123;
    }).toThrow("texture2D must be of type Texture2D or null");
  });

  it("should throw an error for invalid fillStyle in constructor", () => {
    expect(() => new BasicMaterial({ fillStyle: 123 })).toThrow(
      "fillStyle must be a Color or null"
    );
  });

  it("should throw an error for invalid strokeStyle in constructor", () => {
    expect(() => new BasicMaterial({ strokeStyle: {} })).toThrow(
      "strokeStyle must be a Color or null"
    );
  });

  it("should throw an error if both fillStyle and strokeStyle are null in constructor", () => {
    expect(() => new BasicMaterial({})).toThrow(
      "Either fillStyle or strokeStyle must be provided"
    );
  });

  it("should throw an error for invalid lineWidth in constructor", () => {
    const fillStyle = new RgbaColor(1, 1, 1, 1);

    expect(() => new BasicMaterial({ fillStyle, lineWidth: -5 })).toThrow(
      "lineWidth must be a positive number or null"
    );
  });

  it("should throw an error for invalid texture2D in constructor", () => {
    const fillStyle = new RgbaColor(1, 1, 1, 1);

    expect(() => new BasicMaterial({ fillStyle, texture2D: -5 })).toThrow(
      "texture2D must be of type Texture2D or null"
    );
  });

  it("applyToContext2D() should configure the ctx lineWidth, fillStyle, and strokeStyle", () => {
    const color = new RgbaColor(255, 0, 0, 1);
    const material = new BasicMaterial({
      fillStyle: color,
      strokeStyle: color,
      lineWidth: 5,
    });
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    const colorString = "#ff0000";

    material.applyToContext2D(ctx);

    expect(ctx.fillStyle).toBe(colorString);
    expect(ctx.strokeStyle).toBe(colorString);
    expect(ctx.lineWidth).toBe(5);
  });

  it("should return 1 when calling DEFAULT_LINE_WIDTH static getter", () => {
    expect(BasicMaterial.DEFAULT_LINE_WIDTH).toBe(1);
  });
});
