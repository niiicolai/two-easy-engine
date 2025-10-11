import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "index.js",
      name: "TwoEasyEngine",
      fileName: "two-easy-engine",
      formats: ["es", "umd"],
    },
    outDir: "dist",
  },
});
