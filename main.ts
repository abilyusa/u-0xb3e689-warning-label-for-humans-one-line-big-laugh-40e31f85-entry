// One-line warning label for make.fun's "Warning Label for Humans: One Line, Big Laugh".
// The grader runs this as `node /bot/main.ts`; it must write exactly one label,
// a single line of 1 to 160 characters, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const label =
  "WARNING: This human may fix a wobbly table with a folded napkin and call it engineering.";

// Fail loudly if the label ever breaks the gate (1-160 chars, one line),
// so a bad entry never passes silently.
if (label.length < 1 || label.length > 160 || label.includes("\n")) {
  throw new Error(`label fails the gate: ${label.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, label, "utf8");
