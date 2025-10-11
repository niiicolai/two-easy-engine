import { Vector2 } from "./Vector2.js";

/**
 * @class Transform - Represents the position, rotation, and scale of an object
 * @description This class encapsulates the transformation properties of an object in 2D space.
 */
export class Transform {
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
