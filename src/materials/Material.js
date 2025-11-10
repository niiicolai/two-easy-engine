/**
 * This serve as the base class for all materials.
 * @class Material
 */
export class Material {
  /**
   * Apply the material configuration to the given canvas 2D context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  applyToContext2D(ctx) {
    throw new Error("applyToContext2D() must be implemented in the subclass");
  }
}
