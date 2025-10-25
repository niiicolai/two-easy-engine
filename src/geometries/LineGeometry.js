import { Geometry } from "./Geometry.js";
import { Transform } from "../core/Transform.js";
import { Material } from "../materials/Material.js";

/**
 * @class LineGeometry
 * @extends Geometry
 * @classdesc This class provides a way to draw a custom shape using lines.
 */
export class LineGeometry extends Geometry {
  /**
   * @constructor
   * @param {Array.<Array<number>>} points - Array of 4-number arrays describing points/segments. Requires at least one entry.
   * @throws {Error} If points has less than one 4-number arrays
   * @throws {Error} If points has an array with less or more than four numbers
   */
  constructor(points) {
    super();

    if (!Array.isArray(points)) {
      throw new Error("points must be an array of 4-number arrays");
    }

    if (points.length < 1) {
      throw new Error("points must contain at least one 4-number arrays");
    }

    if (points.some((a) => !Array.isArray(a) || a.length !== 4)) {
      throw new Error(
        "an array in points must be an array with a length of four numbers"
      );
    }

    this.points = points;
  }

  /**
   * @function drawContext2D
   * @description Draws the circle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   * @throws {Error} if material is not of type Material
   * @throws {Error} if transform is not of type Transform
   */
  drawContext2D(ctx, transform, material) {
    if (!(material instanceof Material)) {
      throw new Error("material must be of type Material");
    }
    if (!(transform instanceof Transform)) {
      throw new Error("transform must be of type Transform");
    }

    const { position, rotation, scale } = transform;

    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(rotation);
    ctx.beginPath();

    this.points.forEach((point) => {
      ctx.moveTo(point[0] * scale.x, point[1] * scale.y);
      ctx.lineTo(point[2] * scale.x, point[3] * scale.y);
    });

    if (material.strokeStyle) {
      ctx.stroke();
    }

    ctx.closePath();
    ctx.restore();
  }
}
