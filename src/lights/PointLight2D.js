import { Color } from "../colors/Color.js";
import { RgbaColor } from "../colors/RgbaColor.js";
import { Object2D } from "../core/Object2D.js";

/**
 * A simple 2D light source for Canvas rendering.
 * @class PointLight2D
 * @augments Object2D
 */
export class PointLight2D extends Object2D {
  /**
   * @static
   * @property {number} Z_INDEX - defines the class' default z-index (default: 2000)
   */
  static Z_INDEX = 2000;

  /**
   * @private
   * @property {number} #radius - The light's radius
   */
  #radius;

  /**
   * @private
   * @property {number} #intensity - The light's intensity
   */
  #intensity;

  /**
   * @private
   * @property {Color} #color - The light's color
   */
  #color;

  /**
   * @private
   * @property {Color} #intensity - The light's colorStop
   */
  #colorStop;

  /**
   * A simple 2D light source for Canvas rendering.
   * @class
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

    this.radius = radius;
    this.intensity = intensity;
    this.color = color;
    this.colorStop = colorStop;
    this.zIndex = 1;
  }

  /**
   * Gets the light's radius
   * @returns {number} The radius
   */
  get radius() {
    return this.#radius;
  }

  /**
   * Sets the light's radius
   * @param {number} radius - The light's radius
   * @returns {void}
   * @throws {Error} If the radius is not a positive number.
   */
  set radius(radius) {
    if (typeof radius !== "number" || radius < 0) {
      throw new Error("radius must be a positive number");
    }

    this.#radius = radius;
  }

  /**
   * Gets the light's intensity
   * @returns {number} The intensity
   */
  get intensity() {
    return this.#intensity;
  }

  /**
   * Sets the light's intensity
   * @param {number} intensity - The light's intensity
   * @returns {void}
   * @throws {Error} If the intensity is not a positive number.
   */
  set intensity(intensity) {
    if (typeof intensity !== "number" || intensity < 0) {
      throw new Error("intensity must be a positive number");
    }

    this.#intensity = intensity;
  }

  /**
   * Gets the light's color
   * @returns {Color} The color
   */
  get color() {
    return this.#color;
  }

  /**
   * Sets the light's color
   * @param {Color} color - The light's color
   * @returns {void}
   * @throws {Error} If the color is not a Color.
   */
  set color(color) {
    if (!(color instanceof Color)) {
      throw new Error("color must be a Color");
    }

    this.#color = color;
  }

  /**
   * Gets the light's colorStop
   * @returns {Color} The colorStop
   */
  get colorStop() {
    return this.#colorStop;
  }

  /**
   * Sets the light's colorStop
   * @param {Color} color - The light's colorStop
   * @returns {void}
   * @throws {Error} If the colorStop is not a Color.
   */
  set colorStop(colorStop) {
    if (!(colorStop instanceof Color)) {
      throw new Error("colorStop must be a Color");
    }

    this.#colorStop = colorStop;
  }

  /**
   * Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   */
  drawContext2D(ctx) {
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
