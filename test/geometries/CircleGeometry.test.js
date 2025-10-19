import { expect, describe, it } from "vitest";
import { createCanvas } from "canvas";
import { CircleGeometry } from "../../src/geometries/CircleGeometry.js";
import { Transform } from "../../src/core/Transform.js";
import { BasicMaterial } from "../../src/materials/BasicMaterial.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";

describe("CircleGeometry", () => {
    it("should create a CircleGeometry instance with custom parameters", () => {
        const circle = new CircleGeometry(75);
        expect(circle.radius).toBe(75);
    });

    it("should throw an error for invalid radius", () => {
        expect(() => new CircleGeometry(-50)).toThrow(
            "radius must be a positive number"
        );
    });

    it("should implement the draw method", () => {
        const circle = new CircleGeometry(50);
        const canvas = createCanvas(800, 600);
        const ctx = canvas.getContext("2d");
        const transform = new Transform();
        const material = new BasicMaterial({ fillStyle: new RgbaColor(1, 1, 1, 1) });
        circle.drawContext2D(ctx, transform, material);
        // Since we can't easily test canvas drawing, we'll just ensure no errors are thrown
        expect(true).toBe(true);
    });

    it("should throw an error when drawContext2D is called with invalid transform", () => {
        const circle = new CircleGeometry(50);
        const canvas = createCanvas(800, 600);
        const ctx = canvas.getContext("2d");
        const material = new BasicMaterial({ fillStyle: new RgbaColor(1, 1, 1, 1) });
        expect(() => circle.drawContext2D(ctx, {}, material)).toThrow(
            "transform must be of type Transform"
        );
    });

    it("should throw an error when drawContext2D is called with invalid material", () => {
        const circle = new CircleGeometry(50);
        const canvas = createCanvas(800, 600);
        const ctx = canvas.getContext("2d");
        const transform = new Transform();
        expect(() => circle.drawContext2D(ctx, transform, {})).toThrow(
            "material must be of type Material"
        );
    }); 
});
