import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["src/**/*.js"],
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
