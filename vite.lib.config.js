import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "index.js",
      name: "TwoEasyEngine",
      fileName: "index",
      formats: ["es", "umd"],
    },
    outDir: "dist",
  },
});
