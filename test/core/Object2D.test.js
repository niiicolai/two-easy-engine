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
    expect(object.zIndex).toBe(0);
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

  it("should set zIndex correctly", () => {
    const object = new Object2D();
    object.setZIndex(5);
    expect(object.zIndex).toBe(5);
    object.setZIndex(-3);
    expect(object.zIndex).toBe(-3);
  });

   it("should sort children in scene if object is part of a scene", () => {
    const scene = new Scene();
    const object1 = new Object2D();
    const object2 = new Object2D();
    const object3 = new Object2D();
    scene.add(object1);
    scene.add(object2);
    scene.add(object3);
    object1.setZIndex(2);
    object2.setZIndex(1);
    object3.setZIndex(3);
    expect(scene.children[0]).toBe(object2);
    expect(scene.children[1]).toBe(object1);
    expect(scene.children[2]).toBe(object3);
  });

  it("should throw an error when setting zIndex with non-number", () => {
    const object = new Object2D();
    expect(() => object.setZIndex("5")).toThrow("zIndex must be a number");
  });

  it("should implement onRender method", () => {
    const object = new Object2D();
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    expect(() => object.onRender(ctx)).not.toThrow();
  });

  it("should throw an error when onRender is called with invalid context", () => {
    const object = new Object2D();
    expect(() => object.onRender({})).toThrow(
      "ctx must be of type CanvasRenderingContext2D"
    );
  });

  it("setUserData() should set userData", () => {
    const object = new Object2D();
    object.setUserData({ life: 1 });
    expect(object.userData.life).toBe(1);
  });
});
