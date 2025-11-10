import { Object2D } from "../core/Object2D.js";

/**
 * This class manages a list of 2D objects and provides methods to add, remove, and render them.
 * @class Scene
 */
export class Scene {
  /**
   * @private
   * @property {Object2D[]} #children - The scene object2Ds
   */
  #children = [];

  /**
   * @private
   * @property {Map<string, number>} #zIndexes - Holds object and z-index values
   */
  #zIndexes = new Map();

  /**
   * Gets a copy of scene's children
   * @returns {Object2D[]} The children
   */
  get children() {
    return [...this.#children];
  }

  /**
   * Gets a copy of the scene's uuid-zIndex map
   * @returns {Map<string, number>} The map object
   */
  get zIndexes() {
    return new Map(this.#zIndexes);
  }

  /**
   * Adds one or more 2D objects to the scene
   * @param {...Object2D} children - The 2D object(s) to add to the scene
   * @returns {void}
   * @throws {Error} If any child is not of type Object2D
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
   * Removes one or more 2D objects from the scene
   * @param {...Object2D} children - The 2D object(s) to remove from the scene
   * @returns {void}
   * @throws {Error} If any child is not of type Object2D
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
   * Change one or more object2D's z-index value
   * @param {number} zIndex - the new z-index value
   * @param {...Object2D} children - the children
   * @returns {void}
   * @throws {Error} if zIndex is not a number.
   * @throws {Error} If any child is not of type Object2D
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
   * Sorts the children based on their zIndex property
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
