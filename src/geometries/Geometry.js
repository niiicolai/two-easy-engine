/**
 * @class Geometry
 * @classdesc This class serves as a base for all geometric shapes, providing a draw method.
 */
export class Geometry {
  /**
   * @constructor
   */
  constructor() {
  }

  /**
   * @function drawContext2D
   * @description Draws the mesh onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  drawContext2D() {
    throw new Error("drawContext2D() must be implemented in the subclass");
  }
}
