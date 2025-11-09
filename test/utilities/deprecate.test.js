import { expect, describe, it, vi } from "vitest";
import { deprecate } from "../../src/utilities/deprecate.js";

describe("deprecate", () => {
  it("should log a deprecation warning message", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    deprecate("oldFunction", "newFunction", "1.0.0");

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "[DEPRECATION] 'oldFunction' is deprecated since version 1.0.0. Please use 'newFunction' instead. This feature will be removed in a future release."
    );
    consoleWarnSpy.mockRestore();
  });

  it("should not log the same deprecation warning message multiple times", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    deprecate("oldFunction2", "newFunction", "1.0.0");
    deprecate("oldFunction2", "newFunction", "1.0.0");
    deprecate("anotherOldFunction", "anotherNewFunction", "2.0.0");
    deprecate("anotherOldFunction", "anotherNewFunction", "2.0.0");

    expect(consoleWarnSpy).toHaveBeenCalledTimes(2);
    consoleWarnSpy.mockRestore();
  });
});
