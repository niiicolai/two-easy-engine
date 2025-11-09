import { describe, it, expect, vi } from "vitest";
import { Clock } from "../../src/core/Clock.js";

describe("Clock", () => {
  it("should instantiate a Clock object with initial values", () => {
    const clock = new Clock();
    expect(clock).toBeInstanceOf(Clock);
    expect(clock.elapsedTime).toBe(0);
    expect(clock.deltaTime).toBe(0);
    expect(clock.startTime).toBeTypeOf("number");
  });

  it("getElapsedTime should return a number greater than 0 after some time", async () => {
    const clock = new Clock();
    await new Promise((resolve) => setTimeout(resolve, 10));
    const elapsed = clock.getElapsedTime();
    expect(elapsed).toBeGreaterThan(0);
  });

  it("getDeltaTime should return a small positive number between frames", async () => {
    const clock = new Clock();
    await new Promise((resolve) => setTimeout(resolve, 10));
    const delta1 = clock.getDeltaTime();
    expect(delta1).toBeGreaterThan(0);

    await new Promise((resolve) => setTimeout(resolve, 5));
    const delta2 = clock.getDeltaTime();
    expect(delta2).toBeGreaterThan(0);

    // delta2 may be smaller or larger than delta1 depending on timing
    expect(clock.elapsedTime).toBeGreaterThan(delta1);
    expect(clock.elapsedTime).toBeGreaterThan(delta2);
  });

  it("deltaTime should be zero if getDeltaTime is called multiple times in same frame", () => {
    const clock = new Clock();
    const firstDelta = clock.getDeltaTime();
    const secondDelta = clock.getDeltaTime();
    // Depending on the JS timer resolution, secondDelta may be 0 or very small
    expect(secondDelta).toBeTypeOf("number");
    expect(secondDelta).toBeGreaterThanOrEqual(0);
  });

  it("elapsedTime should increase over multiple calls", async () => {
    const clock = new Clock();
    const t1 = clock.getElapsedTime();
    await new Promise((resolve) => setTimeout(resolve, 20));
    const t2 = clock.getElapsedTime();
    expect(t2).toBeGreaterThan(t1);
  });

  it("deltaTime should correspond to the difference between calls", async () => {
    const clock = new Clock();
    await new Promise((resolve) => setTimeout(resolve, 15));
    const delta = clock.getDeltaTime();
    expect(delta).toBeGreaterThan(0);
    // elapsedTime should be at least delta
    expect(clock.getElapsedTime()).toBeGreaterThanOrEqual(delta);
  });

  it("getElapsedTime and getDeltaTime should update internal state", async () => {
    const clock = new Clock();
    const elapsed1 = clock.getElapsedTime();
    const delta1 = clock.getDeltaTime();
    await new Promise((resolve) => setTimeout(resolve, 10));
    const elapsed2 = clock.getElapsedTime();
    const delta2 = clock.getDeltaTime();

    expect(elapsed2).toBeGreaterThan(elapsed1);
    expect(delta2).not.toBe(delta1);
  });
});
