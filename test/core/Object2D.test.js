import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { Object2D } from "../../src/core/Object2D.js";
import { Transform } from "../../src/core/Transform.js";
import { Scene } from "../../src/scenes/Scene.js";

describe("Object2D", () => {
  it("should create an Object2D instance", () => {
    const object = new Object2D();
    expect(object).toBeInstanceOf(Object2D);
    expect(object.transform).toBeInstanceOf(Transform);
    expect(object.visible).toBe(true);
  });

  it("should set visibility correctly", () => {
    const object = new Object2D();
    object.setVisible(false);
    expect(object.visible).toBe(false);
    object.setVisible(true);
    expect(object.visible).toBe(true);
  });

  it("should throw an error when setting visibility with non-boolean", () => {
    const object = new Object2D();
    expect(() => object.setVisible("true")).toThrow(
      "visible must be a boolean"
    );
  });

  it("setUserData() should set userData", () => {
    const object = new Object2D();
    object.setUserData({ life: 1 });
    expect(object.userData.life).toBe(1);
  });
});
