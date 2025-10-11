/**
 * @class Material - Represents the visual appearance of a shape
 * @description This class encapsulates the fill and stroke styles for rendering shapes.
 */
export class Material {
  constructor(options = { fillStyle: null, strokeStyle: null, lineWidth: null }) {
    const { fillStyle = null, strokeStyle = null, lineWidth = 1 } = options;

    if (fillStyle !== null && typeof fillStyle !== "string") {
      throw new Error("fillStyle must be a string or null");
    }
    if (strokeStyle !== null && typeof strokeStyle !== "string") {
      throw new Error("strokeStyle must be a string or null");
    }
    if (lineWidth !== null && (typeof lineWidth !== "number" || lineWidth <= 0)) {
      throw new Error("lineWidth must be a positive number or null");
    }
    
    this.fillStyle = options.fillStyle;
    this.strokeStyle = options.strokeStyle;
    this.lineWidth = options.lineWidth;
  }
}
