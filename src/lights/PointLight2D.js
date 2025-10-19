import { Color } from "../colors/Color.js";
import { RgbaColor } from "../colors/RgbaColor.js";
import { Object2D } from "../core/Object2D.js";

/**
 * @class PointLight2D
 * @extends Object2D
 * @classdesc A simple 2D light source for Canvas rendering.
 */
export class PointLight2D extends Object2D {
  /**
   * @constructor
   * @param {number} radius - The radius of the light
   * @param {number} intensity - The intensity of the light
   * @param {Color} color - The color of the light
   * @param {Color} colorStop - The colorStop of the light
   * @throws {Error} If the radius is not a positive number.
   * @throws {Error} If the intensity is not a positive number.
   * @throws {Error} If the color is not a Color.
   * @throws {Error} If the colorStop is not a Color.
   */
  constructor(
    radius = 100,
    intensity = 1,
    color = new RgbaColor(255, 255, 200, 1),
    colorStop = new RgbaColor(255, 255, 200, 0)
  ) {
    super();

    if (typeof radius !== "number" || radius < 0) {
      throw new Error("radius must be a positive number");
    }

    if (typeof intensity !== "number" || radius < 0) {
      throw new Error("intensity must be a positive number");
    }

    if (!(color instanceof Color)) {
      throw new Error("color must be a Color");
    }

    if (!(colorStop instanceof Color)) {
      throw new Error("colorStop must be a Color");
    }

    this.radius = radius;
    this.intensity = intensity;
    this.color = color;
    this.colorStop = colorStop;
    this.zIndex = 1;
  }

  /**
   * @function drawContext2D
   * @description Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   */
  drawContext2D(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }

    const { radius, color, colorStop, intensity } = this;
    const { x, y } = this.transform.position;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, color.toString());
    gradient.addColorStop(1, colorStop.toString());

    ctx.save();
    ctx.globalAlpha = intensity;
    ctx.fillStyle = gradient;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    ctx.restore();
  }
}
