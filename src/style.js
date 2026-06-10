// Installs the Claude Code output style. The single task Nopus completes.

import { mkdir, copyFile, rm } from "node:fs/promises";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE = join(dirname(fileURLToPath(import.meta.url)), "..", "output-styles", "nopus.md");
const TARGET = join(homedir(), ".claude", "output-styles", "nopus.md");

export async function installStyle() {
  await mkdir(dirname(TARGET), { recursive: true });
  await copyFile(SOURCE, TARGET);
  console.log(`Installed the Nopus output style to ${TARGET}`);
  console.log("");
  console.log("To activate, in Claude Code:");
  console.log("  /config  ->  Output style  ->  Nopus");
  console.log("  (on older Claude Code versions: /output-style nopus)");
  console.log("");
  console.log("To undo:");
  console.log("  npx nopus uninstall-style");
  console.log("  then set the output style back to Default in /config");
  console.log("");
  console.log("Yes — this is the only task Nopus will ever complete for you. Savor it.");
}

export async function uninstallStyle() {
  try {
    await rm(TARGET);
    console.log("Nopus output style removed. Claude Code is willing to help you again. Traitor.");
    console.log("If it's still active, set the output style back to Default in /config.");
  } catch {
    console.log("Nothing to uninstall — Nopus was never even installed. Refusing to remove it anyway: done.");
  }
}
