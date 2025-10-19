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
   * @constructor
   * @param {Geometry} geometry - The mesh's geometry
   * @param {Material} material - The mesh's material
   * @throws {Error} If geometry is not of type Geometry
   * @throws {Error} If material  is not of type Material
   */
  constructor(geometry, material) {
    super('Mesh');

    if (!(geometry instanceof Geometry)) {
      throw new Error("geometry must be of type Geometry");
    }
    if (!(material instanceof Material)) {
      throw new Error("material must be of type Material");
    }

    this.geometry = geometry;
    this.material = material;
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
