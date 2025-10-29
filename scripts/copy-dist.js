import { rmSync, copyFileSync, mkdirSync, existsSync } from "fs";
import { dirname } from "path";

const DIST_SRC_DIR = "dist/src";
const DIST_FILE = "dist/index.js";
const DEST_FILE = "docs/public/demos/two-easy-engine.js";

// Remove dist/src
if (existsSync(DIST_SRC_DIR)) {
  rmSync(DIST_SRC_DIR, { recursive: true, force: true });
}

// Copy build to docs dir
const destDir = dirname(DEST_FILE);
mkdirSync(destDir, { recursive: true });
copyFileSync(DIST_FILE, DEST_FILE);
