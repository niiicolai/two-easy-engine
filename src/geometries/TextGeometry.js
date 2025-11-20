import { Geometry } from "./Geometry.js";

// eslint-disable-next-line no-unused-vars
import { Transform } from "../core/Transform.js";

// eslint-disable-next-line no-unused-vars
import { Material } from "../materials/Material.js";

/**
 * The class provides functionality for creating and managing text-based geometry.
 * @class TextGeometry
 * @augments Geometry
 */
export class TextGeometry extends Geometry {
  /**
   * The valid text alignment types.
   * @static
   * @type {Object.<string, string>}
   */
  static TEXT_ALIGNMENT_TYPES = {
    start: "start",
    end: "end",
    left: "left",
    right: "right",
    center: "center",
  };

  /**
   * The valid text direction types.
   * @static
   * @type {Object.<string, string>}
   */
  static TEXT_DIRECTION_TYPES = {
    ltr: "ltr",
    rtl: "rtl",
    inherit: "inherit",
  };

  /**
   * The valid text baseline types.
   * @static
   * @type {Object.<string, string>}
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
   * The default TextGeometry options.
   * @static
   * @type {{ font: string, textAlign: ("start"|"end"|"left"|"right"|"center"|null), textBaseline: ("top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null), direction: ("ltr"|"rtl"|"inherit"|null) }}
   */
  static DEFAULT_OPTIONS = {
    // maxWidth: null, Setting default maxWidth to null can cause issues.
    font: "14px Arial",
    textAlign: null,
    textBaseline: null,
    direction: null,
  };

  /**
   * The text to be displayed.
   * @private
   * @type {string}
   */
  #text;

  /**
   * The options.
   * @private
   * @type {Object}
   */
  #options;

  /**
   * The text's width.
   * @private
   * @type {number|null}
   */
  #width;

  /**
   * The text's height.
   * @private
   * @type {number|null}
   */
  #height;

  /**
   * Create a new TextGeometry instance.
   * @param {string} text - The text to be displayed.
   * @param {Object} [options] - The geometry options.
   * @param {number|null|undefined} [options.maxWidth] - The maximum width allowed for the text layout.
   * @param {string|null|undefined} [options.font=TextGeometry.DEFAULT_OPTIONS.font] - The font family used for the text content.
   * @param {"start"|"end"|"left"|"right"|"center"|null|undefined} [options.textAlign=TextGeometry.DEFAULT_OPTIONS.textAlign] - The horizontal alignment of the text content.
   * @param {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null|undefined} [options.textBaseline=TextGeometry.DEFAULT_OPTIONS.textBaseline] - The vertical alignment of the text content.
   * @param {"ltr"|"rtl"|"inherit"|null|undefined} [options.direction=TextGeometry.DEFAULT_OPTIONS.direction] - The direction of the text content.
   * @throws {Error} If the text is not a string.
   * @throws {Error} If the maxWidth is not a number, null, or undefined.
   * @throws {Error} If the font is not a string, null, or undefined.
   * @throws {Error} If the textAlign is not a valid alignment type, null, or undefined.
   * @throws {Error} If the textBaseline is not a valid baseline type, null, or undefined.
   * @throws {Error} If the direction is not a valid direction type, null, or undefined.
   */
  constructor(text, options = {}) {
    super();
    this.text = text;
    this.options = options;
  }

  /**
   * Gets the geometry's text.
   * @returns {string} A string representing the text to be displayed.
   */
  get text() {
    return this.#text;
  }

  /**
   * Sets the geometry's text.
   * Side-effects: changing text forces recalculation of text dimensions.
   * @param {string} text - the new text to be displayed.
   * @returns {void}
   * @throws {Error} if the new text is not a string.
   */
  set text(text) {
    if (typeof text !== "string") {
      throw new Error("text must be a string");
    }

    this.#text = text;

    // If the text changes, the dimensions must be recalculated.
    // Why not recalculate dimensions here? Because it require the 2D rendering context.
    this.#width = null;
    this.#height = null;
  }

  /**
   * Gets the geometry's options.
   * @returns {Object}
   */
  get options() {
    return this.#options;
  }

  /**
   * Sets the geometry's options.
   * Side-effects: changing options forces recalculation of text dimensions.
   * @param {Object} [options] - The new geometry options.
   * @param {number|null|undefined} [options.maxWidth] - The new maximum width allowed for the text layout.
   * @param {string|null|undefined} [options.font=TextGeometry.DEFAULT_OPTIONS.font] - The new font family used for the text content.
   * @param {"start"|"end"|"left"|"right"|"center"|null|undefined} [options.textAlign=TextGeometry.DEFAULT_OPTIONS.textAlign] - The new horizontal alignment of the text content.
   * @param {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null|undefined} [options.textBaseline=TextGeometry.DEFAULT_OPTIONS.textBaseline] - The new vertical alignment of the text content.
   * @param {"ltr"|"rtl"|"inherit"|null|undefined} [options.direction=TextGeometry.DEFAULT_OPTIONS.direction] - The new direction of the text content.
   * @throws {Error} If the new maxWidth is not a number, null, or undefined.
   * @throws {Error} If the new font is not a string, null, or undefined.
   * @throws {Error} If the new textAlign is not a valid alignment type, null, or undefined.
   * @throws {Error} If the new textBaseline is not a valid baseline type, null, or undefined.
   * @throws {Error} If the new direction is not a valid direction type, null, or undefined.
   */
  set options(options) {
    const { maxWidth, textAlign, textBaseline, direction, font } = options;

    if (
      maxWidth !== undefined &&
      maxWidth !== null &&
      typeof maxWidth !== "number"
    ) {
      throw new Error("maxWidth must be a number or undefined");
    }

    if (
      font !== undefined && 
      font !== null && 
      typeof font !== "string"
    ) {
      throw new Error("font must be a string or null");
    }

    if (
      textAlign !== undefined &&
      textAlign !== null &&
      typeof textAlign !== "string" &&
      !TextGeometry.TEXT_ALIGNMENT_TYPES[textAlign]
    ) {
      throw new Error(
        `textAlign must be a string with value: ${Object.values(
          TextGeometry.TEXT_ALIGNMENT_TYPES
        ).join(", ")}`
      );
    }

    if (
      textBaseline !== undefined &&
      textBaseline !== null &&
      typeof textBaseline !== "string" &&
      !TextGeometry.TEXT_BASELINE_TYPES[textBaseline]
    ) {
      throw new Error(
        `textBaseline must be a string with value: ${Object.values(
          TextGeometry.TEXT_BASELINE_TYPES
        ).join(", ")}`
      );
    }

    if (
      direction !== undefined &&
      direction !== null &&
      typeof direction !== "string" &&
      !TextGeometry.TEXT_DIRECTION_TYPES[direction]
    ) {
      throw new Error(
        `direction must be a string with value: ${Object.values(
          TextGeometry.TEXT_DIRECTION_TYPES
        ).join(", ")}`
      );
    }

    this.#options = {
      ...TextGeometry.DEFAULT_OPTIONS,
      ...options,
    };

    // If the options changes, the dimensions must be recalculated.
    // Why not recalculate dimensions here? Because it require the 2D rendering context.
    this.#width = null;
    this.#height = null;
  }

  /**
   * Draws the text onto the given canvas 2D context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @param {Transform} transform - The transform.
   * @param {Material} material - The material.
   * @returns {void}
   */
  drawContext2D(ctx, transform, material) {
    const { maxWidth, textAlign, textBaseline, direction, font } = this.options;
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

    // Important: width and height must be calculated after applying
    // the font, etc. to get the correct dimensions.
    if (!this.#width || !this.#height) {
      this.#recalculateDimensions(ctx);
    }

    const { position, rotation, scale, localAnchorPoint } = transform;
    const offset = localAnchorPoint.offset;
    const pivotX = (this.#width / 2) * offset[0] * scale.x;
    const pivoxY = (this.#height / 2) * offset[1] * scale.y;

    ctx.save();
    ctx.translate(position.x + pivotX, position.y + pivoxY);
    // Rotate around pivot
    ctx.rotate(rotation);
    ctx.translate(-pivotX, -pivoxY);

    if (fillStyle) {
      ctx.fillText(this.text, 0, 0, maxWidth);
    }

    if (strokeStyle) {
      ctx.strokeText(this.text, 0, 0, maxWidth);
    }

    ctx.restore();
  }

  /**
   * Recalculates the width and height based on the text to be displayed and the canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @returns {void}
   * @private
   */
  #recalculateDimensions(ctx) {
    const { width, actualBoundingBoxAscent, actualBoundingBoxDescent } =
      ctx.measureText(this.#text);

    this.#width = width;
    this.#height = actualBoundingBoxAscent + actualBoundingBoxDescent;
  }
}
