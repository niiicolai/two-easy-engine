import { expect, describe, it } from "vitest";
import { PointLight2D } from "../../src/lights/PointLight2D.js";

describe("Scene", () => {
  it("should create a point light 2d", () => {
    const light = new PointLight2D(100, 1, 'rgba(255,255,200,1)', 'rgba(255, 255, 200, 0.0)');
    expect(light).toBeInstanceOf(PointLight2D);
    expect(light.radius).toBe(100);
    expect(light.intensity).toBe(1);
    expect(light.color).toBe('rgba(255,255,200,1)');
    expect(light.colorStop).toBe('rgba(255, 255, 200, 0.0)');
    expect(light.zIndex).toBe(1);
  });

  it("should throw an error if radius is not a number", () => {
    expect(() => new PointLight2D("100", 1, 'rgba(255,255,200,1)')).toThrow(
      "radius must be a positive number"
    );
  });

  it("should throw an error if intensity is not a number", () => {
    expect(() => new PointLight2D(100, "1", 'rgba(255,255,200,1)')).toThrow(
      "intensity must be a positive number"
    );
  });

  it("should throw an error if color is not a string", () => {
    expect(() => new PointLight2D(100, 1, {})).toThrow(
      "color must be a string"
    );
  });

  it("should throw an error if colorStop is not a string", () => {
    expect(() => new PointLight2D(100, 1, 'rgba(255,255,200,1)', {})).toThrow(
      "colorStop must be a string"
    );
  });

  it("should throw an error when rendering with a non-CanvasRenderingContext2D", () => {
      const light = new PointLight2D();
      expect(() => light.onRender({})).toThrow(
        "ctx must be of type CanvasRenderingContext2D"
      );
    });
});
