import { Geometry } from "./Geometry.js";
import { Transform } from "../core/Transform.js";
import { Material } from "../materials/Material.js";

/**
 * @class RectGeometry
 * @extends Geometry
 * @classdesc This class provides a rectangle shape with width and height properties.
 */
export class RectGeometry extends Geometry {
  /**
   * @constructor
   * @param {number} width - The width of the rectangle (must be positive).
   * @param {number} height - The height of the rectangle (must be positive).
   * @throws {Error} If the width is not a positive number.
   * @throws {Error} If the height is not a positive number.
   */
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
   * @function drawContext2D
   * @description Draws the rectangle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  drawContext2D(ctx, transform, material) {
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
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    ctx.save();
    ctx.translate(x + halfWidth, y + halfHeight);
    ctx.rotate(transform.rotation);
    ctx.translate(-halfWidth, -halfHeight);

    if (material.fillStyle) {
      ctx.fillRect(0, 0, width, height);
    }

    if (material.strokeStyle) {
      ctx.strokeRect(0, 0, width, height);
    }

    ctx.restore();
  }
}
