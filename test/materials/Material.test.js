import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { Material } from "../../src/materials/Material.js";

describe("Material", () => {
  it("should create a Material instance with null properties", () => {
    const material = new Material();
    expect(material).toBeInstanceOf(Material);
  });

  it("should throw an error when applyToContext2D is called", () => {
    const material = new Material();
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");

    expect(() => material.applyToContext2D(ctx)).toThrow(
      "applyToContext2D() must be implemented in the subclass"
    );
  });
});
