import { expect, describe, it } from "vitest";
import { PointLight2D } from "../../src/lights/PointLight2D.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("Scene", () => {
  it("should create a point light 2d", () => {
    const color = new RgbaColor(1, 1, 1, 1);
    const light = new PointLight2D(100, 1, color, color);
    expect(light).toBeInstanceOf(PointLight2D);
    expect(light.radius).toBe(100);
    expect(light.intensity).toBe(1);
    expect(light.color).toBe(color);
    expect(light.colorStop).toBe(color);
    expect(light.zIndex).toBe(1);
  });

  it("should throw an error if radius is not a number", () => {
    expect(() => new PointLight2D("100", 1)).toThrow(
      "radius must be a positive number"
    );
  });

  it("should throw an error if intensity is not a number", () => {
    expect(() => new PointLight2D(100, "1")).toThrow(
      "intensity must be a positive number"
    );
  });

  it("should throw an error if color is not a Color", () => {
    expect(() => new PointLight2D(100, 1, {})).toThrow(
      "color must be a Color"
    );
  });

  it("should throw an error if colorStop is not a Color", () => {
    expect(() => new PointLight2D(100, 1, new RgbaColor(1, 1, 1, 1), {})).toThrow(
      "colorStop must be a Color"
    );
  });

  it("should throw an error when calling drawContext2D() with a non-CanvasRenderingContext2D", () => {
      const light = new PointLight2D();
      expect(() => light.drawContext2D({})).toThrow(
        "ctx must be of type CanvasRenderingContext2D"
      );
    });
});
