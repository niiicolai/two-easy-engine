import { expect, describe, it } from "vitest";
import { Transform } from "../../src/core/Transform.js";
import { Vector2 } from "../../src/core/Vector2.js";

describe("Transform", () => {
  it("should create a Transform instance", () => {
    const transform = new Transform();
    expect(transform).toBeInstanceOf(Transform);
    expect(transform.position).toBeInstanceOf(Vector2);
    expect(transform.scale).toBeInstanceOf(Vector2);
    expect(transform.rotation).toBe(0);
  });

  it("should accept custom position, rotation, and scale", () => {
    const position = new Vector2(10, 20);
    const rotation = Math.PI / 4;
    const scale = new Vector2(2, 3);
    const transform = new Transform(position, rotation, scale);
    expect(transform.position).toBe(position);
    expect(transform.rotation).toBe(rotation);
    expect(transform.scale).toBe(scale);
  });

  it("should throw an error for invalid position", () => {
    expect(() => new Transform({}, 0, new Vector2(1, 1))).toThrow(
      "position must be of type Vector2"
    );
  });

  it("should throw an error for invalid rotation", () => {
    expect(
      () => new Transform(new Vector2(0, 0), "invalid", new Vector2(1, 1))
    ).toThrow("rotation must be a number");
  });

  it("should throw an error for invalid scale", () => {
    expect(() => new Transform(new Vector2(0, 0), 0, {})).toThrow(
      "scale must be of type Vector2"
    );
  });
});
