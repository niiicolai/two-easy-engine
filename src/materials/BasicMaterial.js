import { Material } from "./Material.js";
import { Texture2D } from "../core/Texture2D.js";
import { Color } from "../colors/Color.js";

/**
 * @class BasicMaterial
 * @extends Material
 * @classdesc A basic material that implements fillStyle, strokeStyle and lineWidth
 */
export class BasicMaterial extends Material {
  /**
   * @constructor
   * @param {Object} [options] - Material configuration options.
   * @param {string|Color|null} [options.fillStyle=null] - Initial fill style
   * @param {string|Color|null} [options.strokeStyle=null] - Initial stroke style
   * @param {number|null} [options.lineWidth=null] - Initial line width
   * @param {Texture2D|null} [options.texture2D=null] - Image texture
   * @throws {Error} If the fillStyle is not null or a string.
   * @throws {Error} If the strokeStyle is not null or a string.
   * @throws {Error} If the lineWidth is not null or a number.
   * @throws {Error} If the texture2D is not null or a Texture2D.
   */
  constructor(
    options = {
      fillStyle: null,
      strokeStyle: null,
      lineWidth: null,
      texture2D: null,
    }
  ) {
    super();

    const {
      fillStyle = null,
      strokeStyle = null,
      lineWidth = null,
      texture2D = null,
    } = options;

    if (fillStyle !== null && typeof fillStyle !== "string" && !(fillStyle instanceof Color)) {
      throw new Error("fillStyle must be a Color, string or null");
    }
    if (strokeStyle !== null && typeof strokeStyle !== "string" && !(strokeStyle instanceof Color)) {
      throw new Error("strokeStyle must be a Color, string or null");
    }
    if (
      lineWidth !== null &&
      (typeof lineWidth !== "number" || lineWidth <= 0)
    ) {
      throw new Error("lineWidth must be a positive number or null");
    }
    if (
      texture2D !== null && !(texture2D instanceof Texture2D)
    ) {
      throw new Error("texture2D must be of type Texture2D or null");
    }

    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;
    this.texture2D = texture2D;
  }

  /**
   * @function apply
   * @description Apply the draw style to the given ctx
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   */
  apply(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }

    if (this.texture2D) {
      ctx.fillStyle = this.texture2D.createPattern(ctx);
    } else if (this.fillStyle) {
      ctx.fillStyle = (this.fillStyle instanceof Color)
        ? this.fillStyle.toString()
        : this.fillStyle;
    }

    if (this.strokeStyle) {
      ctx.strokeStyle = (this.strokeStyle instanceof Color)
        ? this.strokeStyle.toString()
        : this.strokeStyle;
    }

    if (this.lineWidth) {
      ctx.lineWidth = this.lineWidth;
    }
  }
}
