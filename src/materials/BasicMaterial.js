import { Material } from "./Material.js";
import { Texture2D } from "../core/Texture2D.js";
import { Color } from "../colors/Color.js";

/**
 * A basic material that implements fillStyle, strokeStyle and lineWidth
 * @class BasicMaterial
 * @augments Material
 */
export class BasicMaterial extends Material {
  /**
   * The default line width
   * @private
   * @property {number} #DEFAULT_LINE_WIDTH
   */
  static #DEFAULT_LINE_WIDTH = 1;

  /**
   * The default line width.
   * @public
   * @static
   * @returns {number}
   */
  static get DEFAULT_LINE_WIDTH() {
    return BasicMaterial.#DEFAULT_LINE_WIDTH;
  }

  /**
   * @private
   * @property {Color} #fillStyle - The material's fillStyle
   */
  #fillStyle;

  /**
   * @private
   * @property {Color} #strokeStyle - The material's strokeStyle
   */
  #strokeStyle;

  /**
   * @private
   * @property {number} #lineWidth - The material's lineWidth
   */
  #lineWidth;

  /**
   * @private
   * @property {Texture2D} #texture2D - The material's texture2D
   */
  #texture2D;

  /**
   * @private
   * @property {boolean} #isBatchSetting - Flag indicating if batch setting is active
   */
  #isBatchSetting = false;

  /**
   * A basic material that implements fillStyle, strokeStyle and lineWidth
   * @class
   * @param {Object} [options] - Material configuration options.
   * @param {Color|null} [options.fillStyle=null] - Initial fill style
   * @param {Color|null} [options.strokeStyle=null] - Initial stroke style
   * @param {number|null} [options.lineWidth=BasicMaterial.DEFAULT_LINE_WIDTH] - Initial line width
   * @param {Texture2D|null} [options.texture2D=null] - Image texture
   * @throws {Error} If the fillStyle is not null or a string.
   * @throws {Error} If the strokeStyle is not null or a string.
   * @throws {Error} If the lineWidth is not null or a number.
   * @throws {Error} If the texture2D is not null or a Texture2D.
   */
  constructor(options = {}) {
    super();
    const { fillStyle, strokeStyle, lineWidth, texture2D } = options;
    if (!fillStyle && !strokeStyle) {
      throw new Error("Either fillStyle or strokeStyle must be provided");
    }

    this.#isBatchSetting = true;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;
    this.texture2D = texture2D;
    this.#isBatchSetting = false;
  }

  /**
   * Gets the material's fillStyle
   * @returns {Color} The fillStyle
   */
  get fillStyle() {
    return this.#fillStyle;
  }

  /**
   * Sets the material's fillStyle
   * @param {Color|null} fillStyle - The new fillStyle to set
   * @returns {void}
   * @throws {Error} If fillStyle is not of type Color
   * @throws {Error} If both fillStyle and strokeStyle are null
   */
  set fillStyle(fillStyle) {
    if (fillStyle && !(fillStyle instanceof Color)) {
      throw new Error("fillStyle must be a Color or null");
    }
    if (!this.#isBatchSetting && !fillStyle && !this.#strokeStyle) {
      throw new Error("Either fillStyle or strokeStyle must be provided");
    }

    this.#fillStyle = fillStyle;
  }

  /**
   * Gets the material's strokeStyle
   * @returns {Color|null|undefined} The strokeStyle
   */
  get strokeStyle() {
    return this.#strokeStyle;
  }

  /**
   * Sets the material's strokeStyle
   * @param {Color|null} strokeStyle - The new strokeStyle to set
   * @returns {void}
   * @throws {Error} If strokeStyle is not of type Color
   * @throws {Error} If both fillStyle and strokeStyle are null
   */
  set strokeStyle(strokeStyle) {
    if (strokeStyle && !(strokeStyle instanceof Color)) {
      throw new Error("strokeStyle must be a Color or null");
    }
    if (!this.#isBatchSetting && !strokeStyle && !this.#fillStyle) {
      throw new Error("Either fillStyle or strokeStyle must be provided");
    }

    this.#strokeStyle = strokeStyle;
  }

  /**
   * Gets the material's lineWidth
   * @returns {number|null|undefined} The lineWidth
   */
  get lineWidth() {
    return this.#lineWidth;
  }

  /**
   * Sets the material's lineWidth
   * @param {number|null} lineWidth - The new lineWidth to set (defaults to BasicMaterial.DEFAULT_LINE_WIDTH if null)
   * @returns {void}
   * @throws {Error} If lineWidth is not null or a number.
   */
  set lineWidth(lineWidth) {
    if (
      lineWidth !== null &&
      lineWidth !== undefined &&
      (typeof lineWidth !== "number" || lineWidth <= 0)
    ) {
      throw new Error("lineWidth must be a positive number or null");
    }

    this.#lineWidth = lineWidth ?? BasicMaterial.DEFAULT_LINE_WIDTH;
  }

  /**
   * Gets the material's texture2D 
   * @returns {Texture2D|null|undefined} The texture2D
   */
  get texture2D() {
    return this.#texture2D;
  }

  /**
   * Sets the material's texture2D
   * @param {Texture2D|null} texture2D - The new texture2D to set
   * @returns {void}
   * @throws {Error} If texture2D is not null or of type Texture2D
   */
  set texture2D(texture2D) {
    if (texture2D && !(texture2D instanceof Texture2D)) {
      throw new Error("texture2D must be of type Texture2D or null");
    }

    this.#texture2D = texture2D;
  }

  /**
   * Apply the material configuration to the given canvas 2D context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @returns {void}
   */
  applyToContext2D(ctx) {
    if (this.#texture2D) {
      ctx.fillStyle = this.#texture2D.createPattern(ctx);
    } else if (this.#fillStyle) {
      ctx.fillStyle = this.#fillStyle.toString();
    }

    if (this.#strokeStyle) {
      ctx.strokeStyle = this.#strokeStyle.toString();
    }

    if (this.#lineWidth) {
      ctx.lineWidth = this.#lineWidth;
    }
  }
}
