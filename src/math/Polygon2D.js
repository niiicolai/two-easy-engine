import { Vector2 } from "./Vector2";

/** 
 * The polygon class implementing centroid calculations. 
 * @class Polygon2D
 */
export class Polygon2D {
  /**
   * The number of components (coordinates) in the vector (e.g., 2 for x and y).
   * @static
   * @type {number} 
   */
  static COORDINATES_SIZE = 2;

  /**
   * Calculate the centroid of the provided vertices.
   * @param {Float32Array} vertices - the polygon's vertices.
   * @returns {Vector2} A new Vector2 instance representing the centroid.
   * @throws {Error} If the vertices is not a Float32Array.
   * @throws {Error} If the polygon has a calculated area of zero (division by zero).
   * @static
   */
  static calculateCentroid(vertices) {
    if (!(vertices instanceof Float32Array)) {
      throw new Error("vertices must be a Float32Array");
    }

    const verticesCount = vertices.length;
    let area = 0;
    let cx = 0;
    let cy = 0;

    for (let i = 0; i < verticesCount; i += Polygon2D.COORDINATES_SIZE) {
      const x1 = vertices[i];
      const y1 = vertices[i + 1];
      const x2 = vertices[(i + 2) % verticesCount];
      const y2 = vertices[(i + 3) % verticesCount];

      const crossProduct = x1 * y2 - x2 * y1;

      area += crossProduct;

      cx += (x1 + x2) * crossProduct;
      cy += (y1 + y2) * crossProduct;
    }

    area /= 2;

    if (area === 0) { 
        throw new Error("Cannot calculate centroid for a zero-area polygon (e.g., a line segment).");
    }

    cx = cx / (6 * area);
    cy = cy / (6 * area);

    return new Vector2(cx, cy);
  }
}
