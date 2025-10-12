/**
 * @class Material
 * @classdesc This serve as the base class for all materials.
 */
export class Material {
  /**
   * @function apply
   * @description Apply the draw style to the given ctx
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   * @throws {Error} If not implemented in subclass
   */
  apply(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }

    throw new Error("apply method must be implemented in subclass");
  }
}
