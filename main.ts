import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I'll be confidently wrong in a moment; apologizing now while I still seem credible.";

function main() {
  const outputDir = "/output";
  try {
    mkdirSync(outputDir, { recursive: true });
    writeFileSync(join(outputDir, "entry.txt"), line);
  } catch (error) {
    writeFileSync(join(process.cwd(), "entry.txt"), line);
  }
}

main();
