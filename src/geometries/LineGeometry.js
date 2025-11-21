import { Geometry } from "./Geometry.js";
// eslint-disable-next-line no-unused-vars
import { Material } from "../materials/Material.js";
// eslint-disable-next-line no-unused-vars
import { Transform } from "../core/Transform.js";

/**
 * The class provides a way to draw a custom shape using lines.
 * @class LineGeometry
 * @augments Geometry
 */
export class LineGeometry extends Geometry {
  /**
   * Defines the number of coordinates stored in the flat array for line segments (e.g. 1=x1, 2=y1, 3=x2, 4=y2).
   * @type {number}
   */
  static SEGMENT_SIZE = 4;

  /**
   * A flat array of line segments.
   * @private
   * @type {Float32Array}
   */
  #vertices;

  /**
   * The geometry's centroid.
   * @private
   * @type {Array<number>}
   */
  #centroid;

  /**
   * Create a new LineGeometry instance.
   * @param {Array.<Array<number>>|Float32Array} vertices - The vertices.
   * @throws {Error} If the vertices is not an array or Float32Array.
   * @throws {Error} If the vertices as array contains less than one 4-number arrays.
   * @throws {Error} If the vertices as array contains an array with a length not equal to four.
   * @throws {Error} If the vertices as Float32Array have a length less than 4.
   * @throws {Error} If the vertices as Float32Array have an odd length.
   */
  constructor(vertices) {
    super();
    this.vertices = vertices;
  }

  /**
   * Gets the geometry's vertices.
   * @returns {Float32Array} The Float32Array instance.
   */
  get vertices() {
    return this.#vertices;
  }

  /**
   * Sets the geometry's vertices.
   * Side-effects: If given a nested array, it is converted to a Float32Array instance.
   * Side-effects: recalculates the centroid and move the vertices toward the centroid.
   * @param {Array.<Array<number>>|Float32Array} vertices - The new vertices.
   * @returns {void}
   * @throws {Error} If the new vertices is not an array or Float32Array.
   * @throws {Error} If the new vertices as array contains less than one 4-number arrays.
   * @throws {Error} If the new vertices as array contains an array with a length not equal to four.
   * @throws {Error} If the new vertices as Float32Array have a length less than 4.
   * @throws {Error} If the new vertices as Float32Array have an uneven length.
   */
  set vertices(vertices) {
    const isArray = Array.isArray(vertices);

    if (!isArray && !(vertices instanceof Float32Array)) {
      throw new Error("vertices must be a array or Float32Array");
    }

    if (isArray) {
      if (vertices.length < 1) {
        throw new Error(
          "vertices as array must contain at least one 4-number arrays"
        );
      }

      if (vertices.some((a) => !Array.isArray(a) || a.length !== 4)) {
        throw new Error(
          "vertices as array must contain arrays with a length of four numbers"
        );
      }

      this.#setVerticesByNestedArray(vertices);
    } else {
      if (vertices.length < 4) {
        throw new Error("vertices as Float32Array must have a length of 4");
      }
      if (vertices.length % 2 === 1) {
        throw new Error(
          "vertices as Float32Array must contain an even number of values"
        );
      }

      this.#vertices = vertices;
    }

    this.#calculateCentroid();
    this.#correctPoints();
  }

  /**
   * Check for any conflicts between the geometry and the provided material.
   * @param {Material} material - The material to check against.
   * @returns {void}
   * @throws {Error} If the material does not have a strokeStyle.
   */
  checkMaterialConflicts(material) {
    if (!material.strokeStyle) {
      throw new Error("LineGeometry requires a strokeStyle in the material");
    }
  }

  /**
   * Draws the lines onto the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @param {Transform} transform - The transform.
   * @param {Material} material - The material.
   * @returns {void}
   */
  drawContext2D(ctx, transform, material) {
    const { position, rotation, scale, localAnchorPoint } = transform;
    const { offset } = localAnchorPoint;
    const vertices = this.#vertices;
    const pivotX = this.#centroid[0] * offset[0] * scale.x;
    const pivotY = this.#centroid[1] * offset[1] * scale.y;

    ctx.save();

    ctx.translate(position.x + pivotX, position.y + pivotY);
    // Rotate around pivot.
    ctx.rotate(rotation);
    ctx.translate(-pivotX, -pivotY);

    ctx.beginPath();
    for (let i = 0; i < vertices.length; i += LineGeometry.SEGMENT_SIZE) {
      ctx.moveTo(vertices[i] * scale.x, vertices[i + 1] * scale.y);
      ctx.lineTo(vertices[i + 2] * scale.x, vertices[i + 3] * scale.y);
    }

    if (material.strokeStyle) {
      ctx.stroke();
    }

    ctx.restore();
  }

  /**
   * Converts the given nested array to a Float32Array and sets the vertices.
   * @param {Array.<Array<number>>} vertices - The nested array of vertices to convert.
   * @returns {void}
   * @private
   */
  #setVerticesByNestedArray(vertices) {
    const expectedLength = vertices.length * LineGeometry.SEGMENT_SIZE;
    if (!this.#vertices || this.#vertices.length !== expectedLength) {
      this.#vertices = new Float32Array(expectedLength);
    }

    let offset = 0;
    for (let i = 0; i < vertices.length; i++) {
      const line = vertices[i];

      this.#vertices[offset] = line[0];
      this.#vertices[offset + 1] = line[1];
      this.#vertices[offset + 2] = line[2];
      this.#vertices[offset + 3] = line[3];

      offset += LineGeometry.SEGMENT_SIZE;
    }
  }

  /**
   * Calculates the geometry's centroid.
   * @returns {void}
   * @private
   */
  #calculateCentroid() {
    const vertices = this.#vertices;
    const verticesLength = vertices.length;
    const coordinatesCount = verticesLength / 2;
    const centroid = [0, 0]; // x, y

    for (let i = 0; i < verticesLength; i += LineGeometry.SEGMENT_SIZE) {
      const x1 = vertices[i];
      const y1 = vertices[i + 1];
      const x2 = vertices[i + 2];
      const y2 = vertices[i + 3];

      centroid[0] += x1 + x2;
      centroid[1] += y1 + y2;
    }

    centroid[0] = centroid[0] / coordinatesCount;
    centroid[1] = centroid[1] / coordinatesCount;

    this.#centroid = centroid;
  }

  /**
   * Translates all points so the geometry is centered around [0, 0].
   * @returns {void}
   * @private
   */
  #correctPoints() {
    const vertices = this.#vertices;
    const centroid = this.#centroid;

    for (let i = 0; i < vertices.length; i += LineGeometry.SEGMENT_SIZE) {
      vertices[i] -= centroid[0];
      vertices[i + 1] -= centroid[1];
      vertices[i + 2] -= centroid[0];
      vertices[i + 3] -= centroid[1];
    }
  }
}
