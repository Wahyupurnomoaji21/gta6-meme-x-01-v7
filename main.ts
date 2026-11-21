// gta6-meme-x-01 v7 — "GTA VI Invoice: 13 Years, Itemised"
// Harness entry: copy the meme image and the X post reference to /output.
// This program does NOT post to X; the user posts the image + caption manually.
import { copyFileSync, mkdirSync } from "node:fs";

mkdirSync("/output", { recursive: true });
copyFileSync("meme.png", "/output/meme.png");
copyFileSync("POST.json", "/output/POST.json");
console.log("copied meme.png + POST.json to /output");
