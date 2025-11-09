## JavaScript Style Guide

---

### 1. Encapsulation and Access Control

We prioritize strong encapsulation to ensure code stability and predictability. Contributors must use the following patterns for managing state and behavior:

* **Private Class Fields:** All internal state variables that should not be directly accessed or modified outside of the class **must** be declared using the **hash `#` prefix**. This enforces true private visibility in modern JavaScript.
    * *Example:* `this.#internalData;`

* **Public Accessors (Getters & Setters):** Access to private state (`#privateVar`) must be mediated through public `get` and `set` methods. These methods are used to control how data is read and when it can be changed, handling any necessary validation, data transformation, or side effects.

    ```javascript
    class Circle {
      #radius = 100;

      get radius() {
        return this.#radius;
      }

      set radius(value) {
        if (value >= 0) {
          this.#radius = value;
        }
      }
    }
    ```

* **Encapsulating Functions:** Functions that perform internal logic and are not intended for direct external use should be declared as **private methods** using the `#` prefix.

---

### 2. Constant Declarations

Constants should be clearly identified, named, and grouped for easy reference.

* **Location:** All constants related to a class **must** be declared as **`static`** members at the **top of the class body**.
* **Naming:** Use constants variables named in **`SCREAMING_SNAKE_CASE`** (all uppercase with underscores) to differentiate them from instance properties and methods.

    ```javascript
    class Circle {
      static DEFAULT_RADIUS = 5;

      // ...
    }
    ```

---

### 3. Modern Syntax & Readability

* **Variables:** Use **`const`** by default. Use `let` only when a variable must be reassigned. **Avoid `var`**.
* **Destructuring:** Prefer using **object and array destructuring** to extract values, improving code clarity.

---

### 4. Documentation and Type Generation

We use **JSDoc** for automatic documentation and TypeScript declaration file generation (`.d.ts`).

* **JSDoc Requirement:** All public classes, methods, properties, and significant functions **must** be documented using **JSDoc** blocks.

* **TypeScript Dependency Management:** To ensure that the generated TypeScript declaration file includes all necessary type references, any class mentioned within a JSDoc block (e.g., using `@extends {AnotherClass}` or `@type {AnotherClass}`) **must** be explicitly imported, even if it is not used directly in the executable JavaScript code.

    ```javascript
    // Example: MyClass needs to reference AnotherClass in its JSDoc
    // eslint-disable-next-line no-unused-vars
    import { AnotherClass } from './AnotherClass.js'; 
    
    /**
     * @extends {AnotherClass}
     */
    class MyClass {
      // ...
    }
    ```

* **ESLint Suppression:** To prevent ESLint from reporting an error for the necessary but otherwise unused import, the import statement **must** be immediately preceded by the following suppression comment:

    `// eslint-disable-next-line no-unused-vars`

---

### 5. Testing Requirements

All new code and significant feature changes **must** include corresponding unit tests to ensure stability and prevent regressions.

* **Framework:** Tests are written using **Vitest**.
* **Location:** Test files must be placed within the **`test/`** directory, mirroring the structure of the source code.
* **Naming Convention:** A test file for a source module named `mymodule.js` must be named **`mymodule.test.js`**.

    * *Example:* If your source file is at `src/geometry/Circle.js`, its tests should be at `test/geometry/Circle.test.js`.
