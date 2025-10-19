/**
 * @class Material
 * @classdesc This serve as the base class for all materials.
 */
export class Material {
  /**
   * @constructor
   */
  constructor() {
  }

  /**
   * @function applyToContext2D
   * @description Apply the material configuration to the given canvas 2D context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @returns {void}
   */
  applyToContext2D() {
    throw new Error("applyToContext2D() must be implemented in the subclass");
  }
}
