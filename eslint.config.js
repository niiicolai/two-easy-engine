import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jsdoc from "eslint-plugin-jsdoc"

export default defineConfig([
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module", 
    },
    plugins: {
      js,
      jsdoc,
    },
    extends: [
      "js/recommended",
    ],
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "no-underscore-dangle": "warn",
      "jsdoc/require-description": "error",
      "jsdoc/require-param-type": "error",
      "jsdoc/require-returns-type": "error",
      "jsdoc/check-indentation": "warn",
      "jsdoc/check-tag-names": "warn",
    },
    ignores: [
      "docs/**",
      "dist/**",
      "node_modules/**",
      ".vitepress/**",
    ],
  },
]);