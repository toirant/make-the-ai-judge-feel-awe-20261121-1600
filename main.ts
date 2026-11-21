// make-the-ai-judge-feel-awe-20261121-1600
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. No network, no dependencies, plain Node 22.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Somewhere, starlight that left its star before any human was born is " +
  "still on its way, in no hurry at all. Nothing is asking anything " +
  "of you tonight. You can be still. The quiet is already here, " +
  "and it is yours to keep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
