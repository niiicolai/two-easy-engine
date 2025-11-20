import { Polygon2D } from "../math/Polygon2D.js";
import { Geometry } from "./Geometry.js";

// eslint-disable-next-line no-unused-vars
import { Material } from "../materials/Material.js";

// eslint-disable-next-line no-unused-vars
import { Transform } from "../core/Transform.js";

// eslint-disable-next-line no-unused-vars
import { Vector2 } from "../math/Vector2.js";

/**
 * The class provides a way to draw a custom polygon.
 * @class PolygonGeometry
 * @augments Geometry
 */
export class PolygonGeometry extends Geometry {

  /**
   * Defines the number of coordinates stored in the flat array (e.g. 1=x, 2=y).
   * @type {number}
   */
  static COORDINATES_SIZE = 2;

  /**
   * A flat array of vertices.
   * @private
   * @type {Float32Array}
   */
  #vertices;

  /**
   * The polygon's centroid.
   * @private
   * @type {Vector2}
   */
  #centroid;

  /**
   * Creates a new PolygonGeometry instance.
   * @param {Array.<Array<number>>|Float32Array} vertices - The vertices.
   * @throws {Error} If the vertices is not an array or Float32Array.
   * @throws {Error} If the vertices as array has less than three 2-number arrays.
   * @throws {Error} If the vertices as array has an array with less or more than two numbers.
   * @throws {Error} If the length of the vertices as Float32Array is less than 6.
   * @throws {Error} If the length of the vertices as Float32Array is odd.
   */
  constructor(vertices) {
    super();
    this.vertices = vertices;
  }

  /**
   * Sets the polgyon's vertices
   * Side-effects: The setter recalculates the centroid and move the vertices toward the centroid.
   * Side-effects: The setter automatically adds the first vertex as the last if they are not equal to ensure the polygon close.
   * @param {Array.<Array<number>>|Float32Array} vertices - The vertices.
   * @returns {void}
   * @throws {Error} If the vertices is not an array or Float32Array.
   * @throws {Error} If the vertices as array has less than three 2-number arrays.
   * @throws {Error} If the vertices as array has an array with less or more than two numbers.
   * @throws {Error} If the length of the vertices as Float32Array is less than 6.
   * @throws {Error} If the length of the vertices as Float32Array is odd.
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
    this.#centroid = Polygon2D.calculateCentroid(this.#vertices);
    this.#correctVertices();
  }

  /**
   * Gets the polygons's vertices.
   * @returns {Float32Array} The Float32Array instance.
   */
  get vertices() {
    return this.#vertices;
  }

  /**
   * Draws the circle onto the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @param {Transform} transform - The transform.
   * @param {Material} material - The material.
   * @returns {void}
   */
  drawContext2D(ctx, transform, material) {
    const { position, rotation, scale, localAnchorPoint } = transform;
    const { offset } = localAnchorPoint;
    const centroid = this.#centroid;
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

  /**
   * Convert the nested array to Float32Array and set the vertices.
   * @param {Array.<Array<number>>} vertices - The vertices.
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
   * Ensure the first and last vertex is the same values.
   * Note: The first and last vertex must be the same to ensure the polygon to close.
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
   * Move the vertices toward the centroid to ensure the anchor point can be calculated correct.
   * @returns {void}
   * @throws {Error} If the #centroid is undefined.
   */
  #correctVertices() {
    const centroid = this.#centroid;

    if (!centroid) {
      throw new Error(
        "#centroid is undefined. The centroid must be calculated before correcting vertices."
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
}
