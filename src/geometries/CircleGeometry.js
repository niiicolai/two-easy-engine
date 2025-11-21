import { Geometry } from "./Geometry.js";
// eslint-disable-next-line no-unused-vars
import { Material } from "../materials/Material.js";
// eslint-disable-next-line no-unused-vars
import { Transform } from "../core/Transform.js";

/**
 * The class provides a circle shape with a radius property.
 * @class CircleGeometry
 * @augments Geometry
 */
export class CircleGeometry extends Geometry {
  /**
   * The circle's radius.
   * @private
   * @type {number}
   */
  #radius;

  /**
   * Create a new CircleGeometry instance.
   * @param {number} radius - The radius.
   * @throws {Error} if the radius is not a positive number.
   */
  constructor(radius) {
    super();
    this.radius = radius;
  }

  /**
   * Gets the circle's radius.
   * @returns {number} A number representing the radius.
   */
  get radius() {
    return this.#radius;
  }

  /**
   * Sets the circle's radius.
   * @param {number} radius - the new radius.
   * @returns {void}
   * @throws {Error} if the new radius is not a positive number.
   */
  set radius(radius) {
    if (typeof radius !== "number" || radius < 0) {
      throw new Error("radius must be a positive number");
    }

    this.#radius = radius;
  }

  /**
   * Draws the circle onto the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @param {Transform} transform - The transform.
   * @param {Material} material - The material.
   * @returns {void}
   */
  drawContext2D(ctx, transform, material) {
    const { position, rotation, scale, localAnchorPoint } = transform;
    const offset = localAnchorPoint.offset;
    const uniformScale = (scale.x + scale.y) / 2;
    const scaledRadius = this.radius * uniformScale;
    const pivotX = offset[0] * scaledRadius;
    const pivotY = offset[1] * scaledRadius;

    ctx.save();
    ctx.translate(position.x + pivotX, position.y + pivotY);
    // Rotate around pivot.
    ctx.rotate(rotation);
    ctx.translate(-pivotX, -pivotY);

    ctx.beginPath();
    ctx.arc(0, 0, scaledRadius, 0, Math.PI * 2);
    ctx.closePath();

    if (material.fillStyle) {
      ctx.fill();
    }

    if (material.strokeStyle) {
      ctx.stroke();
    }

    ctx.restore();
  }
}
