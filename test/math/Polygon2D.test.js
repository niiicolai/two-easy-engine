import { expect, describe, it } from "vitest";
import { Polygon2D } from "../../src/math/Polygon2D.js";

describe("Polygon2D", () => {
  it("should create a Polygon2D instance", () => {
    const vertices = new Float32Array(4);
    const polygon = new Polygon2D(vertices);
    expect(polygon.vertices).toBe(vertices);
  });
});
