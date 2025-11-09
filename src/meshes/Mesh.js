import { Object2D } from "../core/Object2D.js";
import { Geometry } from "../geometries/Geometry.js";
import { Material } from "../materials/Material.js";

/**
 * @class Mesh
 * @extends Object2D
 * @classdesc This class combines geometry and material to create a drawable object.
 */
export class Mesh extends Object2D {
  /**
   * @static
   * @property {number} Z_INDEX - defines the class' default z-index (default: 1000)
   */
  static Z_INDEX = 1000;

  /**
   * @private
   * @property {Geometry} #geometry - The mesh's geometry
   */
  #geometry;

  /**
   * @private
   * @property {Material} #material - The mesh's material
   */
  #material;

  /**
   * @constructor
   * @param {Geometry} geometry - The mesh's geometry
   * @param {Material} material - The mesh's material
   * @throws {Error} If geometry is not of type Geometry
   * @throws {Error} If material  is not of type Material
   */
  constructor(geometry, material) {
    super();

    this.geometry = geometry;
    this.material = material;
  }

  /**
   * @function set geometry
   * @description Sets the mesh's geometry
   * @param {Geometry} newGeometry - The new geometry to set
   * @returns {void}
   * @throws {Error} If newGeometry is not of type Geometry
   */
  set geometry(geometry) {
    if (!(geometry instanceof Geometry)) {
      throw new Error("geometry must be of type Geometry");
    }

    this.#geometry = geometry;

    if (this.#material) {
      this.#geometry.checkMaterialConflicts(this.#material);
    }
  }

  /**
   * @function get geometry
   * @description Gets the mesh's geometry
   * @returns {Geometry} The mesh's geometry
   */
  get geometry() {
    return this.#geometry;
  }

  /**
   * @function set material
   * @description Sets the mesh's material
   * @param {Material} newMaterial - The new material to set
   * @returns {void}
   * @throws {Error} If newMaterial is not of type Material
   */
  set material(material) {
    if (!(material instanceof Material)) {
      throw new Error("material must be of type Material");
    }

    this.#material = material;

    if (this.#geometry) {
      this.#geometry.checkMaterialConflicts(this.#material);
    }
  }

  /**
   * @function get material
   * @description Gets the mesh's material
   * @returns {Material} The mesh's material
   */
  get material() {
    return this.#material;
  }

  /**
   * @function drawContext2D
   * @description Draws the mesh onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @returns {void}
   */
  drawContext2D(ctx) {
    this.material.applyToContext2D(ctx);
    this.geometry.drawContext2D(ctx, this.transform, this.material);
  }
}
