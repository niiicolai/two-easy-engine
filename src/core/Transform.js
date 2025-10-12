import { Vector2 } from "./Vector2.js";

/**
 * @class Transform
 * @classdesc This class encapsulates the transformation properties of an object in 2D space.
 */
export class Transform {
  /**
   * @constructor
   * @param {Vector2} position - The position of the transform.
   * @param {number} rotation - The rotation of the transform.
   * @param {Vector2} scale - The scale of the transform.
   * @throws {Error} If the position is not a Vector2.
   * @throws {Error} If the rotation is not a number.
   * @throws {Error} If the scale is not a Vector2.
   */
  constructor(
    position = new Vector2(),
    rotation = 0,
    scale = new Vector2(1, 1)
  ) {
    if (!(position instanceof Vector2)) {
      throw new Error("position must be of type Vector2");
    }
    if (typeof rotation !== "number") {
      throw new Error("rotation must be a number");
    }
    if (!(scale instanceof Vector2)) {
      throw new Error("scale must be of type Vector2");
    }

    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }
}
