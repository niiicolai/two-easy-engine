import { Geometry } from "./Geometry.js";
// eslint-disable-next-line no-unused-vars
import { Material } from "../materials/Material.js";
// eslint-disable-next-line no-unused-vars
import { Transform } from "../core/Transform.js";

/**
 * This class provides a way to draw a custom shape using lines.
 * @class LineGeometry
 * @augments Geometry
 */
export class LineGeometry extends Geometry {
  /**
   * @private
   * @property {Array.<Array<number>>} #points - Array of 4-number arrays describing points/segments. Requires at least one entry.
   */
  #points;
  
  /**
   * This class provides a way to draw a custom shape using lines.
   * @class
   * @param {Array.<Array<number>>} points - Array of 4-number arrays describing points/segments. Requires at least one entry.
   * @throws {Error} If points is not an array
   * @throws {Error} If points has less than one 4-number arrays
   * @throws {Error} If points has an array with less or more than four numbers
   */
  constructor(points) {
    super();
    this.points = points;
  }

  /**
   * Gets the lines' points
   * @returns {Array.<Array<number>>}
   */
  get points() {
    return this.#points;
  }

  /**
   * Sets the lines points
   * @param {Array.<Array<number>>} points - The lines points
   * @returns {void}
   * @throws {Error} If points is not an array
   * @throws {Error} If points has less than one 4-number arrays
   * @throws {Error} If points has an array with less or more than four numbers
   */
  set points(points) {
    if (!Array.isArray(points)) {
      throw new Error("points must be an array");
    }

    if (points.length < 1) {
      throw new Error("points must contain at least one 4-number arrays");
    }

    if (points.some((a) => !Array.isArray(a) || a.length !== 4)) {
      throw new Error(
        "an array in points must be an array with a length of four numbers"
      );
    }

    this.#points = points;
  }

  /**
   * Check for any conflicts between the geometry and the provided material
   * @param {Material} material - The material to check against
   * @returns {void}
   * @throws {Error} If material does not have a strokeStyle
   */
  checkMaterialConflicts(material) {
    if (!material.strokeStyle) {
      throw new Error("LineGeometry requires a strokeStyle in the material");
    }
  }

  /**
   * Draws the circle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   */
  drawContext2D(ctx, transform, material) {
    const { position, rotation, scale } = transform;

    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(rotation);
    ctx.beginPath();

    this.points.forEach((point) => {
      ctx.moveTo(point[0] * scale.x, point[1] * scale.y);
      ctx.lineTo(point[2] * scale.x, point[3] * scale.y);
    });
    
    ctx.closePath();

    if (material.strokeStyle) {
      ctx.stroke();
    }

    ctx.restore();
  }
}
