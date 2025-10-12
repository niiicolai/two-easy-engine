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
   * @param {string} color - The color of the light
   * @param {string} colorStop - The colorStop of the light
   * @throws {Error} If the radius is not a positive number.
   * @throws {Error} If the intensity is not a positive number.
   * @throws {Error} If the color is not a string.
   * @throws {Error} If the colorStop is not a string.
   */
  constructor(
    radius = 100, 
    intensity = 1, 
    color = 'rgba(255,255,200,1)',
    colorStop = 'rgba(255, 255, 200, 0.0)',
  ) {
    super();

    if (typeof radius !== "number" || radius < 0) {
      throw new Error("radius must be a positive number");
    }

    if (typeof intensity !== "number" || radius < 0) {
      throw new Error("intensity must be a positive number");
    }

    if (typeof color !== "string") {
      throw new Error("color must be a string");
    }

    if (typeof colorStop !== "string") {
      throw new Error("colorStop must be a string");
    }

    this.radius = radius;
    this.intensity = intensity;
    this.color = color;
    this.colorStop = colorStop;
    this.zIndex = 1;
  }

  /**
   * @function onRender
   * @description Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @throws Will throw an error if the context is not a CanvasRenderingContext2D.
   */
  onRender(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error('ctx must be of type CanvasRenderingContext2D');
    }

    const { x, y } = this.transform.position;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, this.colorStop);

    ctx.save();
    ctx.globalAlpha = this.intensity;
    ctx.fillStyle = gradient;
    ctx.fillRect(x - this.radius, y - this.radius, this.radius * 2, this.radius * 2);
    ctx.restore();
  }
}
