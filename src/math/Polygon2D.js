import { Vector2 } from "./Vector2";

/**
 * This class is responsible for polygon calculations.
 * @class Polygon2D
 */
export class Polygon2D {
  /**
   * @property {number} #COORDINATES_SIZE - Defines the number of coordinates stored in the flat array (e.g. 1=x, 2=y).
   */
  static COORDINATES_SIZE = 2;

  /**
   * @property {Vector2} #centroid - Defines the polygon's centeroid
   */
  #centroid;

  /**
   * @private
   * @property {Float32Array} #vertices - A flat array of vertices.
   */
  #vertices;

  /**
   * This class is responsible for polygon calculations.
   * @class Polygon2D
   * @param {Float32Array} vertices - the polygon's vertices
   */
  constructor(vertices) {
    this.#centroid = new Vector2();
    this.vertices = vertices;
  }

  /**
   * Get the centroid
   * @returns {Vector2}
   */
  get centroid() {
    return this.#centroid;
  }

  /**
   * Get the vertices
   * @returns {Float32Array}
   */
  get vertices() {
    return this.#vertices;
  }

  /**
   * Set the vertices
   * @returns {Float32Array}
   */
  set vertices(vertices) {
    this.#vertices = vertices;
  }

  /**
   * Calculate the centroid of a simple polygon
   * @returns {void}
   */
  calculateCentroid() {
    const vertices = this.#vertices;
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

    cx = cx / (6 * area);
    cy = cy / (6 * area);

    this.#centroid.set(cx, cy);
  }
}
