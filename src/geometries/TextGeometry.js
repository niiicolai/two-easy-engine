import { Geometry } from "./Geometry.js";
// eslint-disable-next-line no-unused-vars
import { Transform } from "../core/Transform.js";
// eslint-disable-next-line no-unused-vars
import { Material } from "../materials/Material.js";

/**
 * This class provides functionality for creating and managing text-based geometry.
 * @class TextGeometry
 * @augments Geometry
 */
export class TextGeometry extends Geometry {
  /**
   * The valid text alignment types
   * @static
   * @property {string[]} [TEXT_ALIGNMENT_TYPES]
   */
  static TEXT_ALIGNMENT_TYPES = {
    start: "start",
    end: "end",
    left: "left",
    right: "right",
    center: "center",
  }

  /**
   * The valid text direction types
   * @static
   * @property {string[]} [TEXT_DIRECTION_TYPES]
   */
  static TEXT_DIRECTION_TYPES = {
    ltr: "ltr",
    rtl: "rtl",
    inherit: "inherit",
  };

  /**
   * @static
   * @property {string[]} [TEXT_BASELINE_TYPES] - The valid text baseline types
   */
  static TEXT_BASELINE_TYPES = {
    top: "top",
    hanging: "hanging",
    middle: "middle",
    alphabetic: "alphabetic",
    ideographic: "ideographic",
    bottom: "bottom",
  };

  /**
   * The default options for TextGeometry
   * @static
   * @property {Object} [DEFAULT_OPTIONS]
   * @property {number|null} [DEFAULT_OPTIONS.maxWidth=undefined] - The default maximum width for the text layout
   * @property {string} [DEFAULT_OPTIONS.font="14px Arial"] - The default font family for the text content
   * @property {"start"|"end"|"left"|"right"|"center"|null} [DEFAULT_OPTIONS.textAlign=null] - The default horizontal alignment for the text content
   * @property {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null} [DEFAULT_OPTIONS.textBaseline=null] - The default vertical alignment for the text content
   * @property {"ltr"|"rtl"|"inherit"|null} [DEFAULT_OPTIONS.direction=null] - The default direction for the text content
   */
  static DEFAULT_OPTIONS = {
    // maxWidth: null, Setting default maxWidth to null can cause issues
    font: "14px Arial",
    textAlign: null,
    textBaseline: null,
    direction: null,
  };

  /**
   * @private
   * @property {number} #text - the text to be displayed
   */
  #text;

  /**
   * @private
   * @property {number} #options - the options
   */
  #options;

  /**
   * This class provides functionality for creating and managing text-based geometry.
   * @class
   * @param {string} text - The text content to generate geometry for.
   * @param {Object} [options] - The geometry options.
   * @param {number|null} [options.maxWidth=null] - The maximum width allowed for the text layout.
   * @param {string|null} [options.font="14px Arial"] - The font family used for the text content.
   * @param {"start"|"end"|"left"|"right"|"center"|null} [options.textAlign=null] - The horizontal alignment of the text content.
   * @param {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null} [options.textBaseline=null] - The vertical alignment of the text content.
   * @param {"ltr"|"rtl"|"inherit"|null} [options.direction=null] - The direction of the text content.
   * @throws {Error} If text is not a string.
   * @throws {Error} If maxWidth is not a positive number.
   * @throws {Error} If font is not a string.
   * @throws {Error} If textAlign is not a valid alignment keyword.
   * @throws {Error} If textBaseline is not a valid baseline keyword.
   * @throws {Error} If direction is not a valid direction keyword.
   */
  constructor(text, options = {}) {
    super();
    this.text = text;
    this.options = options;
  }

  /**
   * Get the text
   * @returns {string}
   */
  get text() {
    return this.#text;
  }

  /**
   * Set the text
   * @param {number} text - the new text
   * @returns {void}
   * @throws {Error} if text is not a string
   */
  set text(text) {
    if (typeof text !== "string") {
      throw new Error("text must be a string");
    }

    this.#text = text;
  }

  /**
   * Get the options
   * @returns {Object}
   */
  get options() {
    return this.#options;
  }

  /**
   * Set the options
   * @param {Object} [options] - The geometry options.
   * @param {number|null} [options.maxWidth=null] - The maximum width allowed for the text layout.
   * @param {string|null} [options.font="14px Arial"] - The font family used for the text content.
   * @param {"start"|"end"|"left"|"right"|"center"|null} [options.textAlign=null] - The horizontal alignment of the text content.
   * @param {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null} [options.textBaseline=null] - The vertical alignment of the text content.
   * @param {"ltr"|"rtl"|"inherit"|null} [options.direction=null] - The direction of the text content.
   * @throws {Error} If maxWidth is not a positive number.
   * @throws {Error} If font is not a string.
   * @throws {Error} If textAlign is not a valid alignment keyword.
   * @throws {Error} If textBaseline is not a valid baseline keyword.
   * @throws {Error} If direction is not a valid direction keyword.
   */
  set options(options) {
    const { maxWidth, textAlign, textBaseline, direction, font } = options;

    if (maxWidth !== undefined && typeof maxWidth !== "number") {
      throw new Error("maxWidth must be a number or undefined");
    }

    if (font && typeof font !== "string") {
      throw new Error("font must be a string or null");
    }

    if (
      textAlign &&
      typeof textAlign !== "string" &&
      !TextGeometry.TEXT_ALIGNMENT_TYPES[textAlign]
    ) {
      throw new Error(
        `textAlign must be a string with value: ${Object.values(TextGeometry.TEXT_ALIGNMENT_TYPES).join(
          ", "
        )}`
      );
    }

    if (
      textBaseline &&
      typeof textBaseline !== "string" &&
      !TextGeometry.TEXT_BASELINE_TYPES[textBaseline]
    ) {
      throw new Error(
        `textBaseline must be a string with value: ${Object.values(TextGeometry.TEXT_BASELINE_TYPES).join(
          ", "
        )}`
      );
    }

    if (
      direction &&
      typeof direction !== "string" &&
      !TextGeometry.TEXT_DIRECTION_TYPES[direction]
    ) {
      throw new Error(
        `direction must be a string with value: ${Object.values(TextGeometry.TEXT_DIRECTION_TYPES).join(
          ", "
        )}`
      );
    }

    this.#options = {
      ...TextGeometry.DEFAULT_OPTIONS,
      ...options,
    };
  }

  /**
   * Draws the text onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the text
   * @param {Material} material - The material to use for rendering the text
   * @returns {void}
   */
  drawContext2D(ctx, transform, material) {
    const { maxWidth, textAlign, textBaseline, direction, font } = this.options;
    const { position, rotation } = transform;
    const { fillStyle, strokeStyle } = material;

    if (font && ctx.font !== font) {
      ctx.font = font;
    }
    if (textAlign && ctx.textAlign !== textAlign) {
      ctx.textAlign = textAlign;
    }
    if (textBaseline && ctx.textBaseline !== textBaseline) {
      ctx.textBaseline = textBaseline;
    }
    if (direction && ctx.direction !== direction) {
      ctx.direction = direction;
    }

    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(rotation);

    if (fillStyle) {
      ctx.fillText(this.text, 0, 0, maxWidth);
    }

    if (strokeStyle) {
      ctx.strokeText(this.text, 0, 0, maxWidth);
    }

    ctx.restore();
  }
}
