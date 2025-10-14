import { describe, it, expect, test } from "vitest";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("RgbaColor", () => {
  test.each(["a", -1, 256])("should throw an error if r is invalid (%p)", (r) => {
    expect(() => new RgbaColor(r, 2, 3, 1)).toThrow(
      "r must be a number between 0 and 255"
    );
  });

  test.each(["a", -1, 256])("should throw an error if g is invalid (%p)", (g) => {
    expect(() => new RgbaColor(1, g, 3, 1)).toThrow(
      "g must be a number between 0 and 255"
    );
  });

  test.each(["a", -1, 256])("should throw an error if b is invalid (%p)", (b) => {
    expect(() => new RgbaColor(1, 2, b, 1)).toThrow(
      "b must be a number between 0 and 255"
    );
  });

  test.each(["a", -1, 2])("should throw an error if a is invalid (%p)", (a) => {
    expect(() => new RgbaColor(1, 2, 3, a)).toThrow(
      "a must be a number between 0 and 1"
    );
  });

  it("should construct a valid RgbaColor", () => {
    const color = new RgbaColor(10, 20, 30, 0.5);
    expect(color.r).toBe(10);
    expect(color.g).toBe(20);
    expect(color.b).toBe(30);
    expect(color.a).toBe(0.5);
    expect(color.toRgbaString()).toBe("rgba(10, 20, 30, 0.5)");
  });

  it("set(r, g, b, a) should set rgba values and update colorStr", () => {
    const color = new RgbaColor(1, 2, 3, 1);
    color.set(4, 3, 2, 0);
    expect(color.r).toBe(4);
    expect(color.g).toBe(3);
    expect(color.b).toBe(2);
    expect(color.a).toBe(0);
    expect(color.toString()).toBe("rgba(4, 3, 2, 0)");
  });

  it("setRed() should update red and colorStr", () => {
    const color = new RgbaColor(10, 20, 30, 1);
    color.setRed(100);
    expect(color.r).toBe(100);
    expect(color.colorStr).toBe("rgba(100, 20, 30, 1)");
  });

  it("setGreen() should update green and colorStr", () => {
    const color = new RgbaColor(10, 20, 30, 1);
    color.setGreen(150);
    expect(color.g).toBe(150);
    expect(color.colorStr).toBe("rgba(10, 150, 30, 1)");
  });

  it("setBlue() should update blue and colorStr", () => {
    const color = new RgbaColor(10, 20, 30, 1);
    color.setBlue(200);
    expect(color.b).toBe(200);
    expect(color.colorStr).toBe("rgba(10, 20, 200, 1)");
  });

  it("setAlpha() should update alpha and colorStr", () => {
    const color = new RgbaColor(10, 20, 30, 1);
    color.setAlpha(0.25);
    expect(color.a).toBe(0.25);
    expect(color.colorStr).toBe("rgba(10, 20, 30, 0.25)");
  });

  test.each(["a", -1, 256])("setRed() should throw for invalid r = %p", (r) => {
    const color = new RgbaColor(1, 2, 3, 1);
    expect(() => color.setRed(r)).toThrow("r must be a number between 0 and 255");
  });

  test.each(["a", -1, 256])("setGreen() should throw for invalid g = %p", (g) => {
    const color = new RgbaColor(1, 2, 3, 1);
    expect(() => color.setGreen(g)).toThrow("g must be a number between 0 and 255");
  });

  test.each(["a", -1, 256])("setBlue() should throw for invalid b = %p", (b) => {
    const color = new RgbaColor(1, 2, 3, 1);
    expect(() => color.setBlue(b)).toThrow("b must be a number between 0 and 255");
  });

  test.each(["a", -1, 2])("setAlpha() should throw for invalid a = %p", (a) => {
    const color = new RgbaColor(1, 2, 3, 1);
    expect(() => color.setAlpha(a)).toThrow("alpha must be a number between 0 and 1");
  });

  it("toRgbaString() should return rgba() format", () => {
    const color = new RgbaColor(255, 100, 50, 0.75);
    expect(color.toRgbaString()).toBe("rgba(255, 100, 50, 0.75)");
  });

  it("toRgbString() should return rgb() format", () => {
    const color = new RgbaColor(255, 100, 50, 0.75);
    expect(color.toRgbString()).toBe("rgb(255, 100, 50)");
  });

  it("updateColorStr() should sync colorStr with component values", () => {
    const color = new RgbaColor(1, 2, 3, 1);
    color.r = 9;
    color.g = 8;
    color.b = 7;
    color.a = 0.5;
    color.updateColorStr();
    expect(color.colorStr).toBe("rgba(9, 8, 7, 0.5)");
  });
});
