import { expect, describe, it } from "vitest";
import { Vector2 } from "../../src/core/Vector2.js";

describe("Vector2", () => {
  it("should create a Vector2 instance", () => {
    const vec = new Vector2(10, 20);
    expect(vec).toBeInstanceOf(Vector2);
    expect(vec.x).toBe(10);
    expect(vec.y).toBe(20);
  });

  it("should default to (0, 0) if no parameters are provided", () => {
    const vec = new Vector2();
    expect(vec.x).toBe(0);
    expect(vec.y).toBe(0);
  });

  it("should be mutable", () => {
    const vec = new Vector2(5, 15);
    vec.x = 25;
    vec.y = 35;
    expect(vec.x).toBe(25);
    expect(vec.y).toBe(35);
  });

  it("should throw an error if x or y is not a number", () => {
    expect(() => new Vector2("invalid", 20)).toThrow("x and y must be numbers");
    expect(() => new Vector2(10, {})).toThrow("x and y must be numbers");
  });

  it("clone() should return a new Vector2 with the same values", () => {
    const vec1 = new Vector2(7, 14);
    const vec2 = vec1.clone();
    expect(vec2).toBeInstanceOf(Vector2);
    expect(vec2.x).toBe(7);
    expect(vec2.y).toBe(14);
    expect(vec2).not.toBe(vec1); // Ensure it's a different instance
  });

  it("set(x, y) should update the vector's components", () => {
    const vec = new Vector2(1, 2);
    vec.set(30, 40);
    expect(vec.x).toBe(30);
    expect(vec.y).toBe(40);
  });

  it("should throw an error if set() is called with non-numeric values", () => {
    const vec = new Vector2(1, 2);
    expect(() => vec.set("invalid", 20)).toThrow("x and y must be numbers");
    expect(() => vec.set(10, null)).toThrow("x and y must be numbers");
  });

  it("translate(dx, dy) should correctly translate the vector", () => {
    const vec = new Vector2(10, 20);
    vec.translate(5, -10);
    expect(vec.x).toBe(15);
    expect(vec.y).toBe(10);
  });

  it("should throw an error if translate() is called with non-numeric values", () => {
    const vec = new Vector2(10, 20);
    expect(() => vec.translate("invalid", 5)).toThrow(
      "dx and dy must be numbers"
    );
    expect(() => vec.translate(5, {})).toThrow("dx and dy must be numbers");
  });

  it("add(v) should correctly add another Vector2", () => {
    const vec1 = new Vector2(10, 20);
    const vec2 = new Vector2(5, 15);
    vec1.add(vec2);
    expect(vec1.x).toBe(15);
    expect(vec1.y).toBe(35);
  });

  it("should throw an error if add() is called with a non-Vector2", () => {
    const vec = new Vector2(10, 20);
    expect(() => vec.add({})).toThrow("v must be of type Vector2");
    expect(() => vec.add(null)).toThrow("v must be of type Vector2");
  });

  it("subtract(v) should correctly subtract another Vector2", () => {
    const vec1 = new Vector2(10, 20);
    const vec2 = new Vector2(5, 15);
    vec1.subtract(vec2);
    expect(vec1.x).toBe(5);
    expect(vec1.y).toBe(5);
  });

  it("should throw an error if subtract() is called with a non-Vector2", () => {
    const vec = new Vector2(10, 20);
    expect(() => vec.subtract([])).toThrow("v must be of type Vector2");
    expect(() => vec.subtract(undefined)).toThrow("v must be of type Vector2");
  });

  it("dot(v) should return the correct dot product", () => {
    const vec1 = new Vector2(2, 3);
    const vec2 = new Vector2(4, 5);
    const result = vec1.dot(vec2);
    expect(result).toBe(23); // 2*4 + 3*5 = 8 + 15 = 23
  });

  it("should throw an error if dot() is called with a non-Vector2", () => {
    const vec = new Vector2(2, 3);
    expect(() => vec.dot("invalid")).toThrow("v must be of type Vector2");
    expect(() => vec.dot(null)).toThrow("v must be of type Vector2");
  });

  it("vectorTo(v) should return the correct vector to another Vector2", () => {
    const vec1 = new Vector2(1, 2);
    const vec2 = new Vector2(4, 6);
    const result = vec1.vectorTo(vec2);
    expect(result).toBeInstanceOf(Vector2);
    expect(result.x).toBe(3);
    expect(result.y).toBe(4);
  });

  it("should throw an error if vectorTo() is called with a non-Vector2", () => {
    const vec = new Vector2(1, 2);
    expect(() => vec.vectorTo(123)).toThrow("v must be of type Vector2");
    expect(() => vec.vectorTo({})).toThrow("v must be of type Vector2");
  });

  it("multiplyScalar(scalar) should correctly scale the vector", () => {
    const vec = new Vector2(3, 4);
    vec.multiplyScalar(2);
    expect(vec.x).toBe(6);
    expect(vec.y).toBe(8);
  });

  it("should throw an error if multiplyScalar() is called with a non-numeric value", () => {
    const vec = new Vector2(3, 4);
    expect(() => vec.multiplyScalar("invalid")).toThrow(
      "scalar must be a number"
    );
    expect(() => vec.multiplyScalar(null)).toThrow("scalar must be a number");
  });

  it("divideScalar(scalar) should correctly scale the vector", () => {
    const vec = new Vector2(6, 8);
    vec.divideScalar(2);
    expect(vec.x).toBe(3);
    expect(vec.y).toBe(4);
  });

  it("should throw an error if divideScalar() is called with a non-numeric value", () => {
    const vec = new Vector2(6, 8);
    expect(() => vec.divideScalar("invalid")).toThrow(
      "scalar must be a number"
    );
    expect(() => vec.divideScalar(undefined)).toThrow(
      "scalar must be a number"
    );
  });

  it("length() should return the correct magnitude of the vector", () => {
    const vec = new Vector2(3, 4);
    expect(vec.length()).toBe(5);
  });

  it("should return 0 for the length of a zero vector", () => {
    const vec = new Vector2(0, 0);
    expect(vec.length()).toBe(0);
  });

  it("should return the correct length for negative components", () => {
    const vec = new Vector2(-3, -4);
    expect(vec.length()).toBe(5);
  });

  it("normalize() should convert the vector to a unit vector", () => {
    const vec = new Vector2(3, 4);
    vec.normalize();
    expect(vec.length()).toBeCloseTo(1);
    expect(vec.x).toBeCloseTo(0.6);
    expect(vec.y).toBeCloseTo(0.8);
  });

  it("should throw an error when normalizing a zero-length vector", () => {
    const vec = new Vector2(0, 0);
    expect(() => vec.normalize()).toThrow(
      "Cannot normalize zero-length vector"
    );
  });
});
