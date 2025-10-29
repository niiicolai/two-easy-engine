// scripts/generate-api-docs.js
import { readdirSync, mkdirSync, writeFileSync, statSync } from "fs";
import { join, basename, extname } from "path";
import jsdoc2md from "jsdoc-to-markdown";

const SRC_DIR = "src";
const OUTPUT_DIR = "docs/api";

mkdirSync(OUTPUT_DIR, { recursive: true });

function getJsFiles(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...getJsFiles(fullPath));
    } else if (stats.isFile() && extname(entry) === ".js") {
      files.push(fullPath);
    }
  }

  return files;
}

const jsFiles = getJsFiles(SRC_DIR);

async function generateDocs() {
  for (const f of jsFiles) {
    const base = basename(f, ".js");
    const output = await jsdoc2md.render({ files: f });
    writeFileSync(join(OUTPUT_DIR, `${base}.md`), output);
  }
}

generateDocs().catch(console.error);
