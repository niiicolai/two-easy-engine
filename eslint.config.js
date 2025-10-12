import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["src/**/*.js"], // lint all JS files in src recursively
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    rules: {
    },
    ignores: [
      "docs/**",
      "dist/**",
      "node_modules/**",
      ".vitepress/**",
    ],
  },
]);
