import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { RectGeometry } from "../../src/geometries/RectGeometry.js";
import { Transform } from "../../src/core/Transform.js";
import { Material } from "../../src/materials/Material.js";

describe("RectGeometry", () => {
    it("should create a RectGeometry instance with custom parameters", () => {
        const rect = new RectGeometry(200, 150);
        expect(rect.width).toBe(200);
        expect(rect.height).toBe(150);
    });

    it("should throw an error for invalid width", () => {
        expect(() => new RectGeometry(-100, 150)).toThrow(
            "width must be a positive number"
        );
    });

    it("should throw an error for invalid height", () => {
        expect(() => new RectGeometry(100, -150)).toThrow(
            "height must be a positive number"
        );
    });

    it("should implement the draw method", () => {
        const rect = new RectGeometry(100, 50);
        const canvas = createCanvas(800, 600);
        const ctx = canvas.getContext("2d");
        const transform = new Transform();
        const material = new Material({ fillStyle: "blue", strokeStyle: "red", lineWidth: 2 });
        rect.draw(ctx, transform, material);
        // Since we can't easily test canvas drawing, we'll just ensure no errors are thrown
        expect(true).toBe(true);
    });

    it("should throw an error when draw is called with invalid context", () => {
        const rect = new RectGeometry(100, 50);
        const transform = new Transform();
        const material = new Material({ fillStyle: "blue" });
        expect(() => rect.draw({}, transform, material)).toThrow(
            "ctx must be of type CanvasRenderingContext2D"
        );
    });

    it("should throw an error when draw is called with invalid transform", () => {
        const rect = new RectGeometry(100, 50);
        const canvas = createCanvas(800, 600);
        const ctx = canvas.getContext("2d");
        const material = new Material({ fillStyle: "blue" });
        expect(() => rect.draw(ctx, {}, material)).toThrow(
            "transform must be of type Transform"
        );
    });

    it("should throw an error when draw is called with invalid material", () => {
        const rect = new RectGeometry(100, 50);
        const canvas = createCanvas(800, 600);
        const ctx = canvas.getContext("2d");
        const transform = new Transform();
        expect(() => rect.draw(ctx, transform, {})).toThrow(
            "material must be of type Material"
        );
    });
});
