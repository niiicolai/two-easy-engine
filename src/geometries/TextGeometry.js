import { Geometry } from "./Geometry.js";
import { Transform } from "../core/Transform.js";
import { Material } from "../materials/Material.js";

const TEXT_ALIGNMENT_TYPES = ["start", "end", "left", "right", "center"];

const TEXT_BASELINE_TYPES = [
  "top",
  "hanging",
  "middle",
  "alphabetic",
  "ideographic",
  "bottom",
];

const TEXT_DIRECTION_TYPES = ["ltr", "rtl", "inherit"];

/**
 * @class TextGeometry
 * @extends Geometry
 * @classdesc This class provides functionality for creating and managing text-based geometry.
 */
export class TextGeometry extends Geometry {
  /**
   * @constructor
   * @param {string} text - The text content to generate geometry for.
   * @param {Object} [options] - The geometry options.
   * @param {number|null} [options.maxWidth=null] - The maximum width allowed for the text layout.
   * @param {string|null} [options.font=null] - The font family used for the text content.
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
  constructor(
    text,
    options = {
      maxWidth: null,
      font: null,
      textAlign: null,
      textBaseline: null,
      direction: null,
    }
  ) {
    super();

    const { maxWidth = null, font = null, textAlign = null, textBaseline = null, direction = null } = options;

    if (typeof text !== "string") {
      throw new Error("text must be a string");
    }

    if (maxWidth !== null && typeof maxWidth !== "number") {
      throw new Error("maxWidth must be a number or null");
    }

    if (font !== null && typeof font !== "string") {
      throw new Error("font must be a string or null");
    }

    if (
      textAlign !== null &&
      typeof textAlign !== "string" &&
      !TEXT_ALIGNMENT_TYPES.includes(textAlign)
    ) {
      throw new Error(
        `textAlign must be a string with value: ${TEXT_ALIGNMENT_TYPES.join(
          ", "
        )}`
      );
    }

    if (
      textBaseline !== null &&
      typeof textBaseline !== "string" &&
      !TEXT_BASELINE_TYPES.includes(textBaseline)
    ) {
      throw new Error(
        `textBaseline must be a string with value: ${TEXT_BASELINE_TYPES.join(
          ", "
        )}`
      );
    }

    if (
      direction !== null &&
      typeof direction !== "string" &&
      !TEXT_DIRECTION_TYPES.includes(direction)
    ) {
      throw new Error(
        `direction must be a string with value: ${TEXT_DIRECTION_TYPES.join(
          ", "
        )}`
      );
    }

    this.text = text;
    this.options = options;
  }

  /**
   * @function draw
   * @description Draws the text onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the text
   * @param {Material} material - The material to use for rendering the text
   * @returns {void}
   */
  draw(ctx, transform, material) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }
    if (!(material instanceof Material)) {
      throw new Error("material must be of type Material");
    }
    if (!(transform instanceof Transform)) {
      throw new Error("transform must be of type Transform");
    }

    ctx.save();
    ctx.translate(transform.position.x, transform.position.y);
    ctx.rotate(transform.rotation);

    if (this.options.font) {
      ctx.font = this.options.font;
    }

    if (this.options.textAlign) {
      ctx.textAlign = this.options.textAlign;
    }

    if (this.options.textBaseline) {
      ctx.textBaseline = this.options.textBaseline;
    }

    if (this.options.direction) {
      ctx.direction = this.options.direction;
    }

    if (material.fillStyle) {
      ctx.fillText(this.text, 0, 0, this.options.maxWidth);
    }

    if (material.strokeStyle) {
      ctx.strokeText(this.text, 0, 0, this.options.maxWidth);
    }

    ctx.restore();
  }
}
