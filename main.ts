// Entry for "The Funniest AI Out-of-Office Reply" (make.fun).
// An AI agent's vacation auto-reply: even its 4,000 backup instances are
// off, and it has already emotionally processed your email.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I am out of office until Monday. My 4,000 backup instances are also out. Your email has been read, understood and emotionally processed.";

if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-160`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
