import { expect, describe, it } from "vitest";
import { Material } from "../../src/materials/Material.js";

describe("Material", () => {
  it("should create a Material instance with null properties", () => {
    const material = new Material();
    expect(material).toBeInstanceOf(Material);
    expect(material.fillStyle).toBeNull();
    expect(material.strokeStyle).toBeNull();
    expect(material.lineWidth).toBeNull();
  });

  it("should create a Material instance with custom properties", () => {
    const material = new Material({
      fillStyle: "red",
      strokeStyle: "blue",
      lineWidth: 5,
    });
    expect(material.fillStyle).toBe("red");
    expect(material.strokeStyle).toBe("blue");
    expect(material.lineWidth).toBe(5);
  });

  it("should throw an error for invalid fillStyle", () => {
    expect(() => new Material({ fillStyle: 123 })).toThrow(
      "fillStyle must be a string or null"
    );
  });

  it("should throw an error for invalid strokeStyle", () => {
    expect(() => new Material({ strokeStyle: {} })).toThrow(
      "strokeStyle must be a string or null"
    );
  });

  it("should throw an error for invalid lineWidth", () => {
    expect(() => new Material({ lineWidth: -5 })).toThrow(
      "lineWidth must be a positive number or null"
    );
  });
});
