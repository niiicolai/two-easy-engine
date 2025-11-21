/** 
 * The class serves as the base class for all materials. 
 * @class Material
 * @abstract 
 */
export class Material {
  /**
   * Apply the material to the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @returns {void}
   * @abstract
   */
  // eslint-disable-next-line no-unused-vars
  applyToContext2D(ctx) {
    throw new Error("applyToContext2D() must be implemented in the subclass");
  }
}
