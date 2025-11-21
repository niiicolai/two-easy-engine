import { expect, describe, it } from "vitest";
import { Polygon2D } from "../../src/math/Polygon2D.js";

describe("Polygon2D", () => {
  it("should throw an error when calculating centroid if the vertices is not a Float32Array", () => {
    expect(() => Polygon2D.calculateCentroid({})).toThrow("vertices must be a Float32Array");
  });

  it("should throw an error when calculating centroid if the area is zero", () => {
    const vertices = new Float32Array(4);
    expect(() => Polygon2D.calculateCentroid(vertices)).toThrow("Cannot calculate centroid for a zero-area polygon (e.g., a line segment).");
  });
});
