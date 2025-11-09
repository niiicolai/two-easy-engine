import { expect, describe, it, vi } from "vitest";
import { Scene } from "../../src/scenes/Scene.js";
import { Object2D } from "../../src/core/Object2D.js";

describe("Scene", () => {
  it("should create a scene", () => {
    const scene = new Scene();
    expect(scene).toBeInstanceOf(Scene);
    expect(scene.children).toBeInstanceOf(Array);
    expect(scene.children.length).toBe(0);
  });

  it("should add a child to the scene", () => {
    const scene = new Scene();
    const child = new Object2D();
    const child2 = new Object2D();
    const children = [
      new Object2D(),
      new Object2D()
    ]
    scene.add(child, child2, ...children);
    expect(scene.children.length).toBe(4);
    expect(scene.children[0]).toBe(child);
    expect(scene.children[1]).toBe(child2);
    expect(scene.children[2]).toBe(children[0]);
    expect(scene.children[3]).toBe(children[1]);
  });

  it("should remove a child from the scene", () => {
    const scene = new Scene();
    const child = new Object2D();
    const child2 = new Object2D();
    const children = [
      new Object2D(),
      new Object2D()
    ]
    scene.add(child, child2, ...children);
    scene.remove(child, child2, ...children);
    expect(scene.children.length).toBe(0);
  });

  it("sortChildrenByZIndex should sort children based on zIndex", () => {
    const scene = new Scene();
    const object1 = new Object2D();
    const object2 = new Object2D();
    scene.add(object1, object2);
    scene.setZIndex(1, object2);
    scene.setZIndex(2, object1);
    expect(scene.children[0].uuid).toBe(object2.uuid);
    expect(scene.children[1].uuid).toBe(object1.uuid);
  });

  it("children should be read only", () => {
    const scene = new Scene();
    expect(() => {
      scene.children = [];
    }).toThrow("Cannot set property children of #<Scene> which has only a getter");
  });

  it("should throw an error when adding a non-Object2D child", () => {
    const scene = new Scene();
    expect(() => scene.add({})).toThrow("All arguments to add() must be of type Object2D");
  });

  it("should throw an error when removing a non-Object2D child", () => {
    const scene = new Scene();
    expect(() => scene.remove({})).toThrow("All children arguments must be of type Object2D");
  });

  it("should not fail when removing a child that is not in the scene", () => {
    const scene = new Scene();
    const child = new Object2D();
    expect(() => scene.remove(child)).not.toThrow();
  });
});
