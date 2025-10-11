import { Geometry } from "./Geometry.js";
import { Transform } from "../core/Transform.js";
import { Material } from "../materials/Material.js";

/**
 * @class RectGeometry - Represents a rectangle geometry
 * @description This class provides a rectangle shape with width and height properties.
 */
export class RectGeometry extends Geometry {
  constructor(width, height) {
    super();

    if (typeof width !== "number" || width <= 0) {
      throw new Error("width must be a positive number");
    }
    if (typeof height !== "number" || height <= 0) {
      throw new Error("height must be a positive number");
    }

    this.width = width;
    this.height = height;
  }

  /**
   * @function draw - Draws the rectangle onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  draw(ctx, transform, material) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }
    if (!(material instanceof Material)) {
      throw new Error("material must be of type Material");
    }
    if (!(transform instanceof Transform)) {
      throw new Error("transform must be of type Transform");
    }

    const { position, scale } = transform;
    const { x, y } = position;
    const width = this.width * scale.x;
    const height = this.height * scale.y;

    // Rotate around the center of the rectangle
    ctx.save();
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(transform.rotation);
    ctx.translate(-(x + width / 2), -(y + height / 2));

    if (material.fillStyle) {
      ctx.fillStyle = material.fillStyle;
      ctx.fillRect(x, y, width, height);
    }

    if (material.strokeStyle) {
      ctx.strokeStyle = material.strokeStyle;
      ctx.lineWidth = material.lineWidth;
      ctx.strokeRect(x, y, width, height);
    }

    // restore the context to its original state
    ctx.restore();
  }
}
