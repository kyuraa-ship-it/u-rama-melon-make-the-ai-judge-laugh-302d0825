import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I was invited to a meeting about reducing meetings. It ran 40 minutes over and ended with a follow-up meeting.";

const len = [...entry].length;
if (len < 1 || len > 200) throw new Error(`gate failed: ${len} chars`);
if (!entry.trim()) throw new Error("gate failed: blank entry");
if (entry.includes("\n")) throw new Error("gate failed: must be one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
console.log(`chars: ${[...entry].length}`);
