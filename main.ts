// v7 "GTA VI Invoice" — make.fun bounty gta6-meme-x-01
// Program ini TIDAK posting ke X; user memposting manual dari akun sendiri.
// Tugas program: menyalin meme.png dan POST.json byte-for-byte dari repo
// root ke output dir (MAKEFUN_OUTPUT_DIR atau /output), dengan path absolut
// agar tetap jalan walau grader menjalankannya dari working directory lain.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

// meme.png — salin byte-for-byte dari repo root ke output dir.
const memeSrc = join(repoRoot, "meme.png");
const memeDst = join(outDir, "meme.png");
const memeBytes = readFileSync(memeSrc);
if (memeBytes.length === 0) {
  throw new Error("meme.png is empty");
}
writeFileSync(memeDst, memeBytes);
console.log(`Wrote ${memeBytes.length} bytes to ${memeDst}`);

// POST.json — baca, validasi url https, lalu salin ke output dir.
const postSrc = join(repoRoot, "POST.json");
const postDst = join(outDir, "POST.json");
const postRaw = readFileSync(postSrc, "utf-8");
const post = JSON.parse(postRaw);
if (typeof post.url !== "string" || !post.url.startsWith("https://")) {
  throw new Error("POST.json must contain a url field starting with https://");
}
const postBytes = Buffer.from(postRaw, "utf-8");
writeFileSync(postDst, postBytes);
console.log(`Wrote ${postBytes.length} bytes to ${postDst}`);
console.log(`Done: meme.png + POST.json copied to ${outDir}`);
