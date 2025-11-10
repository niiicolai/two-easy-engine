// eslint-disable-next-line no-unused-vars
import { Transform } from "../core/Transform.js";
// eslint-disable-next-line no-unused-vars
import { Material } from "../materials/Material.js";

/**
 * This class serves as a base for all geometric shapes, providing a draw method.
 * @class Geometry
 */
export class Geometry {
  /**
   * Check for any conflicts between the geometry and the provided material
   * @param {Material} material - The material to check against
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  checkMaterialConflicts(material) {}
  
  /**
   * Draws the mesh onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  drawContext2D(ctx, transform, material) {
    throw new Error("drawContext2D() must be implemented in the subclass");
  }
}
