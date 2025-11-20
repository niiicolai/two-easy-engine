import { Geometry } from "./Geometry.js";
import { Transform } from "../core/Transform.js";
import { Material } from "../materials/Material.js";

/**
 * The class provides a rectangle shape with width and height properties.
 * @class RectGeometry
 * @augments Geometry
 */
export class RectGeometry extends Geometry {
  /**
   * The rectangle's width.
   * @private
   * @type {number}
   */
  #width;

  /**
   * The rectangle's height.
   * @private
   * @type {number}
   */
  #height;

  /**
   * Create a new RectGeometry instance.
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @throws {Error} if the width or height is not a positive number.
   */
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  /**
   * Gets the rectangle's width.
   * @returns {number} A number representing the width.
   */
  get width() {
    return this.#width;
  }

  /**
   * Sets the rectangle's width.
   * @param {number} width - The new width.
   * @returns {void}
   * @throws {Error} if the new width is not a positive number.
   */
  set width(width) {
    if (typeof width !== "number" || width < 0) {
      throw new Error("width must be a positive number");
    }

    this.#width = width;
  }

  /**
   * Gets the rectangle's height.
   * @returns {number} A number representing the height.
   */
  get height() {
    return this.#height;
  }

  /**
   * Sets the rectangle's height.
   * @param {number} height - The new height.
   * @returns {void}
   * @throws {Error} if the new height is not a positive number.
   */
  set height(height) {
    if (typeof height !== "number" || height < 0) {
      throw new Error("height must be a positive number");
    }

    this.#height = height;
  }

  /**
   * Draws the rectangle onto the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @param {Transform} transform - The transform.
   * @param {Material} material - The material.
   * @returns {void}
   */
  drawContext2D(ctx, transform, material) {
    const { scale, position, rotation, localAnchorPoint } = transform;
    const offset = localAnchorPoint.offset;
    const width = this.width * scale.x;
    const height = this.height * scale.y;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const pivotX = -offset[0] * halfWidth;
    const pivotY = -offset[1] * halfHeight;

    ctx.save();
    ctx.translate(position.x - pivotX, position.y - pivotY);
    // Rotate around pivot
    ctx.rotate(rotation);
    ctx.translate(pivotX - halfWidth, pivotY - halfHeight);

    if (material.fillStyle) {
      ctx.fillRect(0, 0, width, height);
    }

    if (material.strokeStyle) {
      ctx.strokeRect(0, 0, width, height);
    }

    ctx.restore();
  }
}
