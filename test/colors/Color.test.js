import { describe, it, expect } from "vitest";
import { Color } from "../../src/colors/Color.js";

describe("Color", () => {
  it("should throw an error if colorStr is not a string", () => {
    expect(() => new Color()).toThrow("colorStr must be a string");
  });

  it("toString() should return colorStr", () => {
    const color = new Color("red");

    expect(color.toString()).toBe("red");
  });
});
