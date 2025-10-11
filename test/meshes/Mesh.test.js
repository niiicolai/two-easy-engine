import { expect, describe, it, vi } from "vitest";
import { createCanvas } from "canvas";
import { Mesh } from "../../src/meshes/Mesh.js";
import { RectGeometry } from "../../src/geometries/RectGeometry.js";
import { Material } from "../../src/materials/Material.js";

describe("Mesh", () => {
  it("should create a Mesh instance", () => {
    const geometry = new RectGeometry(100, 100);
    const material = new Material({ fillStyle: "red" });
    const mesh = new Mesh(geometry, material);
    expect(mesh).toBeInstanceOf(Mesh);
    expect(mesh.geometry).toBe(geometry);
    expect(mesh.material).toBe(material);
  });

  it("should throw an error if geometry is not a Geometry instance", () => {
    const material = new Material({ fillStyle: "red" });
    expect(() => new Mesh({}, material)).toThrow(
      "geometry must be of type Geometry"
    );
  });

    it("should throw an error if material is not a Material instance", () => {
    const geometry = new RectGeometry(100, 100);
    expect(() => new Mesh(geometry, {})).toThrow(
      "material must be of type Material"
    );
  });

    it("should throw an error when rendering with a non-CanvasRenderingContext2D", () => {
    const geometry = new RectGeometry(100, 100);
    const material = new Material({ fillStyle: "red" });
    const mesh = new Mesh(geometry, material);
    expect(() => mesh.onRender({})).toThrow(
      "ctx must be of type CanvasRenderingContext2D"
    );
  });

  it("should call geometry.draw when rendering", () => {
    const geometry = new RectGeometry(100, 100);
    const material = new Material({ fillStyle: "red" });
    const mesh = new Mesh(geometry, material);
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    geometry.draw = vi.fn();
    mesh.onRender(ctx);
    expect(geometry.draw).toHaveBeenCalledWith(ctx, mesh.transform, material);
  });
});
