import { Object2D } from "../core/Object2D.js";
import { Geometry } from "../geometries/Geometry.js";
import { Material } from "../materials/Material.js";

/**
 * @class Mesh - Represents a drawable mesh with geometry and material
 * @description This class combines geometry and material to create a drawable object.
 */
export class Mesh extends Object2D {
  constructor(geometry, material) {
    super();

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
   * @function onRender - Draws the mesh onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {void}
   */
  onRender(ctx) {
    super.onRender(ctx);
    this.geometry.draw(ctx, this.transform, this.material);
  }
}
