import { describe, it, expect, test } from "vitest";
import { HslaColor } from "../../src/colors/HslaColor.js";

describe("HslaColor", () => {
  test.each(["a", -1, 361])("should throw if h is invalid (%p)", (h) => {
    expect(() => new HslaColor(h, 50, 50, 1)).toThrow(
      "h must be a number between 0 and 360"
    );
  });

  test.each(["a", -1, 101])("should throw if s is invalid (%p)", (s) => {
    expect(() => new HslaColor(100, s, 50, 1)).toThrow(
      "s must be a number between 0 and 100"
    );
  });

  test.each(["a", -1, 101])("should throw if l is invalid (%p)", (l) => {
    expect(() => new HslaColor(100, 50, l, 1)).toThrow(
      "l must be a number between 0 and 100"
    );
  });

  test.each(["a", -1, 2])("should throw if a is invalid (%p)", (a) => {
    expect(() => new HslaColor(100, 50, 50, a)).toThrow(
      "a must be a number between 0 and 1"
    );
  });

  it("should construct a valid HslaColor", () => {
    const color = new HslaColor(120, 50, 40, 0.75);
    expect(color.h).toBe(120);
    expect(color.s).toBe(50);
    expect(color.l).toBe(40);
    expect(color.a).toBe(0.75);
    expect(color.colorStr).toBe("hsla(120, 50%, 40%, 0.75)");
  });

  it("set(h, s, l, a) should update all values and colorStr", () => {
    const color = new HslaColor(0, 0, 0, 1);
    color.set(180, 25, 75, 0.5);
    expect(color.h).toBe(180);
    expect(color.s).toBe(25);
    expect(color.l).toBe(75);
    expect(color.a).toBe(0.5);
    expect(color.colorStr).toBe("hsla(180, 25%, 75%, 0.5)");
  });

  it("setHue() should update h and colorStr", () => {
    const color = new HslaColor(0, 50, 50, 1);
    color.setHue(200);
    expect(color.h).toBe(200);
    expect(color.colorStr).toBe("hsla(200, 50%, 50%, 1)");
  });

  it("setSaturation() should update s and colorStr", () => {
    const color = new HslaColor(100, 50, 50, 1);
    color.setSaturation(80);
    expect(color.s).toBe(80);
    expect(color.colorStr).toBe("hsla(100, 80%, 50%, 1)");
  });

  it("setLightness() should update l and colorStr", () => {
    const color = new HslaColor(100, 50, 50, 1);
    color.setLightness(90);
    expect(color.l).toBe(90);
    expect(color.colorStr).toBe("hsla(100, 50%, 90%, 1)");
  });

  it("setAlpha() should update a and colorStr", () => {
    const color = new HslaColor(100, 50, 50, 1);
    color.setAlpha(0.25);
    expect(color.a).toBe(0.25);
    expect(color.colorStr).toBe("hsla(100, 50%, 50%, 0.25)");
  });

  test.each(["a", -1, 361])("setHue() should throw for invalid h = %p", (h) => {
    const color = new HslaColor(0, 50, 50, 1);
    expect(() => color.setHue(h)).toThrow("h must be a number between 0 and 360");
  });

  test.each(["a", -1, 101])("setSaturation() should throw for invalid s = %p", (s) => {
    const color = new HslaColor(0, 50, 50, 1);
    expect(() => color.setSaturation(s)).toThrow("s must be a number between 0 and 100");
  });

  test.each(["a", -1, 101])("setLightness() should throw for invalid l = %p", (l) => {
    const color = new HslaColor(0, 50, 50, 1);
    expect(() => color.setLightness(l)).toThrow("l must be a number between 0 and 100");
  });

  test.each(["a", -1, 2])("setAlpha() should throw for invalid a = %p", (a) => {
    const color = new HslaColor(0, 50, 50, 1);
    expect(() => color.setAlpha(a)).toThrow("alpha must be a number between 0 and 1");
  });

  it("toHslaString() should return hsla() format", () => {
    const color = new HslaColor(300, 75, 25, 0.5);
    expect(color.toHslaString()).toBe("hsla(300, 75%, 25%, 0.5)");
  });

  it("toHslString() should return hsl() format", () => {
    const color = new HslaColor(300, 75, 25, 0.5);
    expect(color.toHslString()).toBe("hsl(300, 75%, 25%)");
  });

  it("updateColorStr() should sync colorStr to internal values", () => {
    const color = new HslaColor(100, 50, 50, 1);
    color.h = 240;
    color.s = 60;
    color.l = 70;
    color.a = 0.6;
    color.updateColorStr();
    expect(color.colorStr).toBe("hsla(240, 60%, 70%, 0.6)");
  });
});
