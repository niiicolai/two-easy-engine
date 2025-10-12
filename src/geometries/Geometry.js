import { Material } from "../materials/Material.js";
import { Transform } from "../core/Transform.js";

/**
 * @class Geometry
 * @classdesc This class serves as a base for all geometric shapes, providing a draw method.
 */
export class Geometry {
  /**
   * @function draw
   * @description Draws the geometry onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the geometry
   * @param {Material} material - The material to use for rendering the geometry
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   * @throws {Error} If material is not of type Material
   * @throws {Error} If transform is not of type Transform
   * @throws {Error} If not implemented in subclass
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

    throw new Error("draw method must be implemented in subclass");
  }
}
