import { Geometry } from "./Geometry.js";
import { Vector2 } from "../core/Vector2.js";
// eslint-disable-next-line no-unused-vars
import { Material } from "../materials/Material.js";
// eslint-disable-next-line no-unused-vars
import { Transform } from "../core/Transform.js";

/**
 * @class PolygonGeometry
 * @extends Geometry
 * @classdesc This class provides a way to draw a custom polygon.
 */
export class PolygonGeometry extends Geometry {
  /**
   * @private
   * @property {Array.<Array<number>>} #points - Array of 2-number arrays describing points/segments.
   */
  #points;

  /**
   * @private
   * @property {Array<number>} #center - The center point of the polygon.
   */
  #center;

  /**
   * @constructor
   * @param {Array.<Array<number>>} points - Array of 4-number arrays describing points/segments. Requires at least one entry.
   * @throws {Error} If points is not an array
   * @throws {Error} If points has less than three 2-number arrays
   * @throws {Error} If points has an array with less or more than two numbers
   */
  constructor(points) {
    super();
    this.points = points;
  }

  /**
   * @function get points
   * @description Gets the polygons's points
   * @returns {Array.<Array<number>>} The polygons's points
   */
  get points() {
    return this.#points;
  }

  /**
   * @function set points
   * @description Sets the polgyon's points
   * @param {Array.<Array<number>>} points - The polgyon's points
   * @returns {void}
   * @throws {Error} If points is not an array
   * @throws {Error} If points has less than three 2-number arrays
   * @throws {Error} If points has an array with less or more than two numbers
   */
  set points(points) {
    if (!Array.isArray(points)) {
      throw new Error("points must be an array");
    }

    if (points.length < 3) {
      throw new Error("points must contain at least three 2-number arrays");
    }

    if (points.some((a) => !Array.isArray(a) || a.length !== 2)) {
      throw new Error(
        "an array in points must be an array with a length of two numbers"
      );
    }

    this.#points = points;
    this.#calculateCenter();
  }

  /**
   * @function #calculateCenter
   * @description Calculates the center point of the polygon
   * @returns {void}
   * @private
   */
  #calculateCenter() {
    const points = this.#points;
    const center = new Vector2();
    const pointCount = this.#points.length;

    points.forEach((p) => {
      center.x += p[0];
      center.y += p[1];
    });
    
    center.x = center.x / pointCount;
    center.y = center.y / pointCount;

    this.#center = center;
  }

  /**
   * @function drawContext2D
   * @description Draws the circle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   */
  drawContext2D(ctx, transform, material) {
    const { position, rotation, scale } = transform;
    const pivotX = this.#center.x * scale.x;
    const pivotY = this.#center.y * scale.y;

    ctx.save();
    ctx.translate(position.x + pivotX, position.y + pivotY);
    ctx.rotate(rotation);
    ctx.translate(-pivotX, -pivotY);
    ctx.beginPath();

    const startPoint = this.points[0];
    ctx.moveTo(startPoint[0] * scale.x, startPoint[1] * scale.y);

    for (let i = 1; i < this.points.length; i++) {
      const point = this.points[i];
      ctx.lineTo(point[0] * scale.x, point[1] * scale.y);
    }

    if (material.strokeStyle) {
      ctx.stroke();
    }

    if (material.fillStyle) {
      ctx.fill();
    }

    ctx.restore();
  }
}
