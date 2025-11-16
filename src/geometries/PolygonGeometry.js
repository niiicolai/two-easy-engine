import { Polygon2D } from "../math/Polygon2D.js";
import { Geometry } from "./Geometry.js";
// eslint-disable-next-line no-unused-vars
import { Material } from "../materials/Material.js";
// eslint-disable-next-line no-unused-vars
import { Transform } from "../core/Transform.js";

/**
 * This class provides a way to draw a custom polygon.
 * @class PolygonGeometry
 * @augments Geometry
 */
export class PolygonGeometry extends Geometry {

  /**
   * @property {number} #COORDINATES_SIZE - Defines the number of coordinates stored in the flat array (e.g. 1=x, 2=y).
   */
  static COORDINATES_SIZE = 2;

  /**
   * @private
   * @property {Float32Array} #vertices - A flat array of vertices.
   */
  #vertices;

  /**
   * @private
   * @property {Polygon2D} #shape - The polygon object is used to calculate center.
   */
  #polygon2D;

  /**
   * This class provides a way to draw a custom polygon.
   * @class
   * @param {Array.<Array<number>>|Float32Array} vertices - Array of 4-number arrays or a Float32Array describing vertices.
   * @throws {Error} If vertices is not an array or Float32Array
   * @throws {Error} If vertices as array has less than three 2-number arrays
   * @throws {Error} If vertices as array has an array with less or more than two numbers
   * @throws {Error} If the length of vertices as Float32Array is less than 6
   * @throws {Error} If points has an array with less or more than two numbers
   */
  constructor(vertices) {
    super();
    this.vertices = vertices;
  }

  /**
   * Sets the polgyon's points
   * Note: The setter recalculate the shape and its center.
   * Note: The setter automatically adds the first point as the last if they are not equal to ensure the polygon close.
   * @param {Array.<Array<number>>|Float32Array} vertices - The polgyon's points
   * @returns {void}
   * @throws {Error} If vertices is not an array or Float32Array
   * @throws {Error} If vertices as array has less than three 2-number arrays
   * @throws {Error} If vertices as array has an array with less or more than two numbers
   * @throws {Error} If the length of vertices as Float32Array is less than 6
   * @throws {Error} If points has an array with less or more than two numbers
   */
  set vertices(vertices) {
    const isArray = Array.isArray(vertices);

    if (!isArray && !(vertices instanceof Float32Array)) {
      throw new Error("vertices must be a array or Float32Array");
    }

    if (isArray) {
      if (vertices.length < 3) {
        throw new Error(
          "vertices as array must contain at least three 2-number arrays"
        );
      }
      if (vertices.some((a) => !Array.isArray(a) || a.length !== 2)) {
        throw new Error(
          "vertices as array must contain arrays with a length of two numbers"
        );
      }

      this.#setVerticesByNestedArray(vertices);
    } else {
      if (vertices.length < 6) {
        throw new Error("vertices as Float32Array must have a length of 6");
      }
      if (vertices.length % 2 === 1) {
        throw new Error(
          "vertices as Float32Array must contain an even number of values"
        );
      }

      this.#vertices = vertices;
    }
    
    this.#addClosingVert();
    this.#polygon2D = new Polygon2D(this.#vertices);
    this.#polygon2D.calculateCentroid();
    this.#correctPoints();
  }

  /**
   * Gets the polygons's vertices
   * @returns {Float32Array}
   */
  get vertices() {
    return this.#vertices;
  }

  /**
   * Convert the nested array to Float32Array and set the vertices.
   * @returns {void}
   */
  #setVerticesByNestedArray(vertices) {
    const expectedLength = vertices.length * PolygonGeometry.COORDINATES_SIZE;
    if (!this.#vertices || this.#vertices.length !== expectedLength) {
      this.#vertices = new Float32Array(expectedLength);
    }

    let offset = 0;
    for (let i = 0; i < vertices.length; i++) {
      const vert = vertices[i];

      this.#vertices[offset] = vert[0];
      this.#vertices[offset + 1] = vert[1];

      offset += PolygonGeometry.COORDINATES_SIZE;
    }
  }

  /**
   * Ensure the first and last coordinate is the same values.
   * The first and last point must be the same for the polygon to close.
   * 
   * @returns {void}
   */
  #addClosingVert() {
    const oldVertices = this.#vertices;
    const length = oldVertices.length;

    const firstX = oldVertices[0];
    const firstY = oldVertices[1];
    const lastX = oldVertices[length - 2];
    const lastY = oldVertices[length - 1];

    if (firstX !== lastX || firstY !== lastY) {

      this.#vertices = new Float32Array(length + 2);
      this.#vertices.set(oldVertices, 0);
      this.#vertices[length] = firstX;
      this.#vertices[length + 1] = firstY;
    }
  }

  /**
   * Move the vertices toward the center to ensure the anchor point can be calculated correct.
   * @throws {Error} If the #shape is undefined.
   * @throws {Error} If the #shape.center is undefined.
   */
  #correctPoints() {
    const polygon2D = this.#polygon2D;
    if (!polygon2D) {
      throw new Error(
        "#polygon2 is undefined (It is created when using the points setter)."
      );
    }
    const { centroid } = polygon2D;
    if (!centroid) {
      throw new Error(
        "#polygon2.centroid is undefined. #polygon2.calculateCentroid() must be called before correcting points."
      );
    }

    for (
      let i = 0;
      i < this.vertices.length;
      i += PolygonGeometry.COORDINATES_SIZE
    ) {
      this.#vertices[i] -= centroid.x;
      this.#vertices[i + 1] -= centroid.y;
    }
  }

  /**
   * Draws the circle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   */
  drawContext2D(ctx, transform, material) {
    const { position, rotation, scale, localAnchorPoint } = transform;
    const { offset } = localAnchorPoint;
    const { centroid } = this.#polygon2D;
    const vertices = this.#vertices;

    const pivotX = centroid.x * scale.x * offset[0];
    const pivotY = centroid.y * scale.y * offset[1];

    ctx.save();
    ctx.translate(position.x + pivotX, position.y + pivotY);
    // Rotate around pivot.
    ctx.rotate(rotation);
    ctx.translate(-pivotX, -pivotY);

    ctx.beginPath();
    ctx.moveTo(vertices[0] * scale.x, vertices[1] * scale.y);
    for (
      let i = 2; // Skip the first two.
      i < vertices.length;
      i += PolygonGeometry.COORDINATES_SIZE
    ) {
      const x = vertices[i] * scale.x;
      const y = vertices[i + 1] * scale.y;

      ctx.lineTo(x, y);
    }
    ctx.closePath();

    if (material.strokeStyle) {
      ctx.stroke();
    }

    if (material.fillStyle) {
      ctx.fill();
    }

    ctx.restore();
  }
}
