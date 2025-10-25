import { Geometry } from "./Geometry.js";
import { Transform } from "../core/Transform.js";
import { Material } from "../materials/Material.js";

/**
 * @class CircleGeometry
 * @extends Geometry
 * @classdesc This class provides a circle shape with a radius property.
 */
export class CircleGeometry extends Geometry {
  /**
   * @constructor
   * @param {number} radius - The radius of the circle (must be positive).
   * @throws {Error} If the radius is not a positive number.
   */
  constructor(radius) {
    super();

    if (typeof radius !== "number" || radius <= 0) {
      throw new Error("radius must be a positive number");
    }

    this.radius = radius;
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
    const radius = this.radius * ((scale.x + scale.y) / 2);

    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(rotation);

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
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
