import { Material } from "./Material.js";
import { Texture2D } from "../core/Texture2D.js";
import { Color } from "../colors/Color.js";

/**
 * A basic material that implements fillStyle, strokeStyle, texture2D and lineWidth.
 * @class BasicMaterial
 * @augments Material
 */
export class BasicMaterial extends Material {
  /**
   * The default line width.
   * @private
   * @type {number}
   */
  static #DEFAULT_LINE_WIDTH = 1;

  /**
   * Gets the default line width.
   * @public
   * @static
   * @returns {number} A number representing the default line width.
   */
  static get DEFAULT_LINE_WIDTH() {
    return BasicMaterial.#DEFAULT_LINE_WIDTH;
  }

  /**
   * The material's fillStyle.
   * @private
   * @type {Color|null|undefined}
   */
  #fillStyle;

  /**
   * The material's strokeStyle.
   * @private
   * @type {Color|null|undefined}
   */
  #strokeStyle;

  /**
   * The material's lineWidth.
   * @private
   * @type {number}
   */
  #lineWidth;

  /**
   * The material's texture2D.
   * @private
   * @type {Texture2D|null|undefined}
   */
  #texture2D;

  /**
   * A flag indicating if batch setting is active.
   * @private
   * @type {boolean}
   */
  #isBatchSetting = false;

  /**
   * Create a new BasicMaterial instance.
   * @param {Object} [options] - The material's options.
   * @param {Color|null|undefined} [options.fillStyle] - The fillStyle.
   * @param {Color|null|undefined} [options.strokeStyle] - The strokeStyle.
   * @param {number|null|undefined} [options.lineWidth=BasicMaterial.DEFAULT_LINE_WIDTH] - The lineWidth.
   * @param {Texture2D|null|undefined} [options.texture2D] - The Texture2D.
   * @throws {Error} If the options.fillStyle is not null, undefined or a Color.
   * @throws {Error} If the options.strokeStyle is not null, undefined or a Color.
   * @throws {Error} If the options.lineWidth is not null, undefined or a positive number.
   * @throws {Error} If the options.texture2D is not null, undefined or a Texture2D.
   * @throws {Error} If both options.fillStyle and options.strokeStyle are null or undefined.
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
   * Gets the material's fillStyle.
   * @returns {Color|null|undefined} The Color instance, null or undefined.
   */
  get fillStyle() {
    return this.#fillStyle;
  }

  /**
   * Sets the material's fillStyle.
   * @param {Color|null|undefined} fillStyle - The new fillStyle to assign.
   * @returns {void}
   * @throws {Error} If the new fillStyle is not of type Color, null or undefined.
   * @throws {Error} If the new fillStyle is null or undefined and the material's strokeStyle also is null or undefined.
   */
  set fillStyle(fillStyle) {
    if (
      fillStyle !== null &&
      fillStyle !== undefined &&
      !(fillStyle instanceof Color)
    ) {
      throw new Error("fillStyle must be a Color or null");
    }
    if (!this.#isBatchSetting && !fillStyle && !this.#strokeStyle) {
      throw new Error("Either fillStyle or strokeStyle must be provided");
    }

    this.#fillStyle = fillStyle;
  }

  /**
   * Gets the material's strokeStyle.
   * @returns {Color|null|undefined} The Color instance, null or undefined.
   */
  get strokeStyle() {
    return this.#strokeStyle;
  }

  /**
   * Sets the material's strokeStyle.
   * @param {Color|null|undefined} strokeStyle - The new strokeStyle to assign.
   * @returns {void}
   * @throws {Error} If the new strokeStyle is not of type Color, null or undefined.
   * @throws {Error} If the new strokeStyle is null or undefined and the material's fillStyle also is null or undefined.
   */
  set strokeStyle(strokeStyle) {
    if (
      strokeStyle !== null &&
      strokeStyle !== undefined &&
      !(strokeStyle instanceof Color)
    ) {
      throw new Error("strokeStyle must be a Color or null");
    }
    if (!this.#isBatchSetting && !strokeStyle && !this.#fillStyle) {
      throw new Error("Either fillStyle or strokeStyle must be provided");
    }

    this.#strokeStyle = strokeStyle;
  }

  /**
   * Gets the material's lineWidth.
   * @returns {number} A number representing the lineWidth.
   */
  get lineWidth() {
    return this.#lineWidth;
  }

  /**
   * Sets the material's lineWidth (defaults to BasicMaterial.DEFAULT_LINE_WIDTH).
   * @param {number|null|undefined} lineWidth - The new lineWidth to assign.
   * @returns {void}
   * @throws {Error} If the new lineWidth is not null, undefined, or a positive number.
   */
  set lineWidth(lineWidth) {
    if (
      lineWidth !== null &&
      lineWidth !== undefined &&
      typeof lineWidth !== "number" || lineWidth <= 0
    ) {
      throw new Error("lineWidth must be a positive number or null");
    }

    this.#lineWidth = lineWidth ?? BasicMaterial.DEFAULT_LINE_WIDTH;
  }

  /**
   * Gets the material's texture2D.
   * @returns {Texture2D|null|undefined} The Texture2D instance, null or undefined.
   */
  get texture2D() {
    return this.#texture2D;
  }

  /**
   * Sets the material's texture2D.
   * @param {Texture2D|null|undefined} texture2D - The new texture2D to assign.
   * @returns {void}
   * @throws {Error} If texture2D is not null, undefined or a Texture2D.
   */
  set texture2D(texture2D) {
    if (
      texture2D !== null &&
      texture2D !== undefined &&
      !(texture2D instanceof Texture2D)
    ) {
      throw new Error("texture2D must be of type Texture2D or null");
    }

    this.#texture2D = texture2D;
  }

  /**
   * Apply the material to the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
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
