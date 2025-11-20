import { Object2D } from "../core/Object2D.js";

/** 
 * The class manages a list of Object2Ds which should be rendered in the canvas. 
 * @class Scene
 */
export class Scene {
  /**
   * The scene's object2D array.
   * @private
   * @type {Object2D[]}
   */
  #children = [];

  /**
   * Store object and z-index configuration.
   * @private
   * @type {Map<string, number>}
   */
  #zIndexes = new Map();

  /**
   * Gets a copy of scene's children.
   * @returns {Object2D[]} An array of Object2D.
   */
  get children() {
    return [...this.#children];
  }

  /**
   * Gets a copy of the scene's object and z-index configuration.
   * @returns {Map<string, number>} A map with object UUIDs and z-indexes.
   */
  get zIndexes() {
    return new Map(this.#zIndexes);
  }

  /**
   * Adds one or more Object2Ds to the scene.
   * @param {...Object2D} children - The Object2D(s) to add to the scene.
   * @returns {void}
   * @throws {Error} If any child is not of type Object2D.
   */
  add(...children) {
    for (const child of children) {
      if (!(child instanceof Object2D)) {
        throw new Error("All arguments to add() must be of type Object2D");
      }

      this.#children.push(child);
      this.#zIndexes.set(child.uuid, child.constructor.Z_INDEX ?? 0);
    }

    this.#sortChildrenByZIndex();
  }

  /**
   * Removes one or more Object2Ds from the scene.
   * @param {...Object2D} children - The Object2D(s) to remove from the scene.
   * @returns {void}
   * @throws {Error} If any child is not of type Object2D.
   */
  remove(...children) {
    for (const child of children) {
      if (!(child instanceof Object2D)) {
        throw new Error("All children arguments must be of type Object2D");
      }

      const { uuid } = child;
      const index = this.#children.indexOf(child);

      if (index !== -1) {
        this.#children.splice(index, 1);
      }

      if (this.#zIndexes.has(uuid)) {
        this.#zIndexes.delete(uuid);
      }
    }

    this.#sortChildrenByZIndex();
  }

  /**
   * Change one or more Object2Ds z-index value.
   * @param {number} zIndex - the new z-index value.
   * @param {...Object2D} children - the children.
   * @returns {void}
   * @throws {Error} if zIndex is not a number.
   * @throws {Error} If any child is not of type Object2D.
   */
  setZIndex(zIndex, ...children) {
    if (typeof zIndex !== "number") {
      throw new Error("zIndex must be a number");
    }

    for (const child of children) {
      if (!(child instanceof Object2D)) {
        throw new Error("All arguments to remove() must be of type Object2D");
      }

      const { uuid } = child;

      if (this.#zIndexes.has(uuid)) {
        this.#zIndexes.set(uuid, zIndex);
      }
    }

    this.#sortChildrenByZIndex();
  }

  /**
   * Sorts the children based on their z-index property.
   * @private
   * @returns {void}
   */
  #sortChildrenByZIndex() {
    this.#children.sort((a, b) => {
      const zA = this.#zIndexes.get(a.uuid) ?? 0;
      const zB = this.#zIndexes.get(b.uuid) ?? 0;
      return zA - zB;
    });
  }
}
