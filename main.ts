import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "entry.txt");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
const destinationPath = join(outputDir, "entry.txt");
mkdirSync(outputDir, { recursive: true });
// Copy the entry byte-for-byte: no transformation, no added newline.
copyFileSync(sourcePath, destinationPath);
