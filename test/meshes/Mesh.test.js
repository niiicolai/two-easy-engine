import { expect, describe, it, vi } from "vitest";
import { createCanvas } from "canvas";
import { Mesh } from "../../src/meshes/Mesh.js";
import { RectGeometry } from "../../src/geometries/RectGeometry.js";
import { BasicMaterial } from "../../src/materials/BasicMaterial.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("Mesh", () => {
  it("should create a Mesh instance", () => {
    const geometry = new RectGeometry(100, 100);
    const material = new BasicMaterial({ fillStyle: new RgbaColor(1, 1, 1, 1) });
    const mesh = new Mesh(geometry, material);
    expect(mesh).toBeInstanceOf(Mesh);
    expect(mesh.geometry).toBe(geometry);
    expect(mesh.material).toBe(material);
  });

  it("should return the correct geometry using getter and setter", () => {
    const initialGeometry = new RectGeometry(100, 100);
    const nextGeometry = new RectGeometry(200, 200);
    const material = new BasicMaterial({ fillStyle: new RgbaColor(1, 1, 1, 1) });
    const mesh = new Mesh(initialGeometry, material);

    mesh.geometry = nextGeometry;

    expect(mesh.geometry).toBe(nextGeometry);
  });

  it("should return the correct material using getter and setter", () => {
    const geometry = new RectGeometry(100, 100);
    const initialMaterial = new BasicMaterial({ fillStyle: new RgbaColor(1, 1, 1, 1) });
    const nextMaterial = new BasicMaterial({ fillStyle: new RgbaColor(0, 0, 0, 1) });
    const mesh = new Mesh(geometry, initialMaterial);

    mesh.material = nextMaterial;

    expect(mesh.material).toBe(nextMaterial);
  });

  it("should throw an error if geometry setter is given a non-Geometry instance", () => {
    const geometry = new RectGeometry(100, 100);
    const material = new BasicMaterial({ fillStyle: new RgbaColor(1, 1, 1, 1) });
    const mesh = new Mesh(geometry, material);
    expect(() => {
      mesh.geometry = {};
    }).toThrow("geometry must be of type Geometry");
  });

  it("should throw an error if material setter is given a non-Material instance", () => {
    const geometry = new RectGeometry(100, 100);
    const material = new BasicMaterial({ fillStyle: new RgbaColor(1, 1, 1, 1) });
    const mesh = new Mesh(geometry, material);
    expect(() => {
      mesh.material = {};
    }).toThrow("material must be of type Material");
  });

  it("should throw an error if geometry is not a Geometry instance in the constructor", () => {
    const material = new BasicMaterial({ fillStyle: new RgbaColor(1, 1, 1, 1) });
    expect(() => new Mesh({}, material)).toThrow(
      "geometry must be of type Geometry"
    );
  });

  it("should throw an error if material is not a Material instance in the constructor", () => {
    const geometry = new RectGeometry(100, 100);
    expect(() => new Mesh(geometry, {})).toThrow(
      "material must be of type Material"
    );
  });

  it("should call geometry.drawContext2D and material.applyToContext2D when calling drawContext2D()", () => {
    const geometry = new RectGeometry(100, 100);
    const material = new BasicMaterial({ fillStyle: new RgbaColor(1, 1, 1, 1) });
    const mesh = new Mesh(geometry, material);
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    geometry.drawContext2D = vi.fn();
    material.applyToContext2D = vi.fn();

    mesh.drawContext2D(ctx);

    expect(material.applyToContext2D).toHaveBeenCalledWith(ctx);
    expect(geometry.drawContext2D).toHaveBeenCalledWith(ctx, mesh.transform, material);
  });
});
