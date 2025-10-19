import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { Camera2D } from "../../src/cameras/Camera2D.js";
import { Transform } from "../../src/core/Transform.js";

describe("Camera2D", () => {
    it("should create a Camera2D instance", () => {
        const camera = new Camera2D();
        expect(camera).toBeInstanceOf(Camera2D);
    });

    it("should throw an error if options.zoom is not a number", () => {
        expect(() => new Camera2D({ zoom: "invalid" })).toThrow(
            "options.zoom must be a number"
        );
    });

    it("should have a transform property", () => {
        const camera = new Camera2D();
        expect(camera.transform).toBeInstanceOf(Transform);
    });
});
