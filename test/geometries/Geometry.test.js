import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { Geometry } from "../../src/geometries/Geometry.js";
import { Transform } from "../../src/core/Transform.js";
import { Material } from "../../src/materials/Material.js";

describe("Geometry", () => {
  it("should create a Geometry instance", () => {
    const geometry = new Geometry();
    expect(geometry).toBeInstanceOf(Geometry);
  });

  it("should throw an error when draw is called", () => {
    const geometry = new Geometry();
    const material = new Material();
    const transform = new Transform();
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");

    expect(() => geometry.drawContext2D(ctx, transform, material)).toThrow(
      "drawContext2D() must be implemented in the subclass"
    );
  });
});
