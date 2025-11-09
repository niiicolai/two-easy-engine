import { expect, describe, it } from "vitest";
import { Camera2D } from "../../src/cameras/Camera2D.js";
import { Transform } from "../../src/core/Transform.js";

describe("Camera2D", () => {
  it("should create a Camera2D instance", () => {
    const camera = new Camera2D({ zoom: 5 });
    expect(camera).toBeInstanceOf(Camera2D);
    expect(camera.transform).toBeInstanceOf(Transform);
    expect(camera.zoom).toBe(5);
  });

  it("should throw an error if options.zoom is not a number", () => {
    expect(() => new Camera2D({ zoom: "invalid" })).toThrow(
      "zoom must be a number"
    );
  });

  it("should throw an error if setting an invalid zoom value", () => {
    const camera = new Camera2D({ zoom: 5 });

    expect(() => {
        camera.zoom = {};
    }).toThrow(
      "zoom must be a number"
    );
  });

  it("should throw an error if setting an invalid transform", () => {
    const camera = new Camera2D({ zoom: 5 });

    expect(() => {
        camera.transform = {};
    }).toThrow(
      "transform must be of type Transform"
    );
  });
});
