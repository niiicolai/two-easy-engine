import { Transform } from "./Transform.js";

/**
 * @class Object2D - Base class for 2D objects with a transform
 * @description This class serves as a base for all 2D objects, providing a transform property.
 */
export class Object2D {
  constructor() {
    this.transform = new Transform();
  }

  onRender(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }
  }
}
