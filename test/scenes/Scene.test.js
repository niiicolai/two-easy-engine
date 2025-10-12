import { expect, describe, it, vi } from "vitest";
import { createCanvas } from "canvas";
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
    scene.add(child);
    expect(scene.children.length).toBe(1);
    expect(scene.children[0]).toBe(child);
  });

  it("should remove a child from the scene", () => {
    const scene = new Scene();
    const child = new Object2D();
    scene.add(child);
    scene.remove(child);
    expect(scene.children.length).toBe(0);
  });

  it("should set the scene property of the child when added", () => {
    const scene = new Scene();
    const child = new Object2D();
    scene.add(child);
    expect(child.scene).toBe(scene);
  });

  it("should clear the scene property of the child when removed", () => {
    const scene = new Scene();
    const child = new Object2D();
    scene.add(child);
    scene.remove(child);
    expect(child.scene).toBe(null);
  });

  it("sortChildrenByZIndex should sort children based on zIndex", () => {
    const scene = new Scene();
    const object1 = new Object2D();
    const object2 = new Object2D();
    object1.setZIndex(2);
    object2.setZIndex(1);
    scene.add(object1);
    scene.add(object2);
    expect(scene.children[0]).toBe(object2);
    expect(scene.children[1]).toBe(object1);
  });

  it("should throw an error when adding a non-Object2D child", () => {
    const scene = new Scene();
    expect(() => scene.add({})).toThrow("child must be of type Object2D");
  });

  it("should throw an error when removing a non-Object2D child", () => {
    const scene = new Scene();
    expect(() => scene.remove({})).toThrow("child must be of type Object2D");
  });

  it("should throw an error when rendering with a non-CanvasRenderingContext2D", () => {
    const scene = new Scene();
    expect(() => scene.render({})).toThrow(
      "ctx must be of type CanvasRenderingContext2D"
    );
  });

  it("should call onRender on each child when rendering", () => {
    const scene = new Scene();
    const child1 = new Object2D();
    const child2 = new Object2D();
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    child1.onRender = vi.fn();
    child2.onRender = vi.fn();
    scene.add(child1);
    scene.add(child2);
    scene.render(ctx);

    expect(child1.onRender).toHaveBeenCalledWith(ctx);
    expect(child2.onRender).toHaveBeenCalledWith(ctx);
  });

  it("should not call onRender if a child.visible is set to false", () => {
    const scene = new Scene();
    const child1 = new Object2D();
    const child2 = new Object2D();
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    child1.onRender = vi.fn();
    child2.onRender = vi.fn();
    scene.add(child1);
    scene.add(child2);
    child2.setVisible(false);
    scene.render(ctx);

    expect(child1.onRender).toHaveBeenCalledWith(ctx);
    expect(child2.onRender).not.toHaveBeenCalledWith(ctx);
  });

  it("should not fail when removing a child that is not in the scene", () => {
    const scene = new Scene();
    const child = new Object2D();
    expect(() => scene.remove(child)).not.toThrow();
  });
});
