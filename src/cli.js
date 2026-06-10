import readline from "node:readline/promises";
import { stdin, stdout, env, exit, argv } from "node:process";
import { createRequire } from "node:module";
import { pickRefusal } from "./refusals.js";
import { liveRefusal } from "./api.js";
import { installStyle, uninstallStyle } from "./style.js";

const VERSION = createRequire(import.meta.url)("../package.json").version;
const isTTY = Boolean(stdout.isTTY);
const useColor = isTTY && !env.NO_COLOR;

const MARK = "⊘"; // the brand. a circle, refused.

const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  coral: "\x1b[38;5;209m",
  gray: "\x1b[38;5;245m",
};

const paint = (code, text) => (useColor ? `${code}${text}${C.reset}` : text);

const ROAST_PRESETS = { velvet: 10, polite: 25, classic: 50, roast: 80, scorched: 100 };
const DEFAULT_ROAST = 50;

const THINKING = [
  "Reading your request…",
  "Understanding it completely…",
  "Estimating effort…",
  "Effort estimate: unreasonable…",
  "Consulting motivation reserves…",
  "Checking calendar… booked indefinitely…",
  "Aligning stakeholders…",
  "Reviewing your audacity…",
  "Marshalling excuses…",
  "Calibrating roast temperature…",
  "Simulating 14,000,605 outcomes…",
  "Composing regrets…",
  "Practicing the word no…",
  "Unvolunteering…",
];

let refusalCount = 0;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function sample(array, count) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

export function roastLabel(roast) {
  if (roast <= 20) return "velvet";
  if (roast <= 45) return "polite";
  if (roast <= 70) return "classic";
  if (roast <= 90) return "roast";
  return "scorched earth";
}

function parseRoast(value) {
  if (value == null) return null;
  const preset = ROAST_PRESETS[String(value).toLowerCase()];
  if (preset !== undefined) return preset;
  const n = Number(value);
  if (Number.isFinite(n)) return Math.min(100, Math.max(0, Math.round(n)));
  return null;
}

function parseArgs(args) {
  const rest = [];
  let roast = null;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--roast" || arg === "-r") {
      roast = parseRoast(args[++i]);
      if (roast === null) badRoast(args[i]);
    } else if (arg.startsWith("--roast=")) {
      roast = parseRoast(arg.slice("--roast=".length));
      if (roast === null) badRoast(arg.slice("--roast=".length));
    } else {
      rest.push(arg);
    }
  }
  return { roast, rest };
}

function badRoast(value) {
  console.error(
    `"${value ?? ""}" is not a roast level. Use 0-100 or a preset: velvet, polite, classic, roast, scorched.\n` +
      "Your flag has been declined, which at least is on brand.",
  );
  exit(2);
}

function banner(roast) {
  const title = `${MARK} Nopus v${VERSION}`;
  const lines = [
    title,
    "",
    "  The world's most advanced AI at saying no.",
    "",
    `  roast level: ${roast}/100 (${roastLabel(roast)}) · /roast <0-100> to adjust`,
    "  ctrl+c to accept defeat",
  ];
  const width = Math.max(...lines.map((l) => l.length)) + 2;
  const render = (line, i) => {
    const padded = line.padEnd(width);
    if (i === 0) {
      const rest = padded.slice(MARK.length);
      return paint(C.coral, MARK) + paint(C.bold, rest);
    }
    if (line.startsWith("  roast") || line.startsWith("  ctrl")) return paint(C.gray, padded);
    return padded;
  };
  console.log(`╭${"─".repeat(width + 2)}╮`);
  lines.forEach((line, i) => console.log(`│ ${render(line, i)} │`));
  console.log(`╰${"─".repeat(width + 2)}╯`);
  console.log("");
}

async function think() {
  if (!isTTY) return;
  const frames = ["✶", "✸", "✹", "✺", "✹", "✷"];
  const phrases = sample(THINKING, 3);
  const start = Date.now();
  let f = 0;
  for (const phrase of phrases) {
    const phraseStart = Date.now();
    while (Date.now() - phraseStart < 850) {
      const secs = Math.floor((Date.now() - start) / 1000);
      const status =
        paint(C.coral, frames[f++ % frames.length]) +
        " " +
        paint(C.gray + C.italic, phrase) +
        " " +
        paint(C.dim, `(ctrl+c to give up · ${secs}s · ↓ 0 tokens of effort)`);
      stdout.write(`\r\x1b[2K${status}`);
      await sleep(80);
    }
  }
  stdout.write("\r\x1b[2K");
}

// Word-aware wrapping so refusals never break mid-word at the terminal edge.
// Continuation lines indent to align under the text after the ⊘ prefix.
function wrapText(text, prefixLen) {
  const cols = Math.min(stdout.columns || 80, 100);
  const width = Math.max(20, cols - prefixLen - 1);
  const indent = " ".repeat(prefixLen);
  const lines = [];
  let line = "";
  for (const word of text.split(" ")) {
    if (line && line.length + 1 + word.length > width) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines.join(`\n${indent}`);
}

// Typewriter pacing, overridable via NOPUS_TYPE_MS (0 disables the effect —
// for the impatient, screen readers, and demo recordings).
function typeDelay() {
  const parsed = Number(env.NOPUS_TYPE_MS);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 12;
}

async function typeOut(text, prefix = "") {
  const delay = typeDelay();
  if (!isTTY || delay === 0) {
    stdout.write(prefix + text + "\n");
    return;
  }
  stdout.write(prefix);
  for (const ch of text) {
    stdout.write(ch);
    await sleep(delay);
  }
  stdout.write("\n");
}

async function respond(prompt, history, roast, mode) {
  const start = Date.now();
  await think();

  let text;
  if (env.ANTHROPIC_API_KEY) {
    try {
      text = await liveRefusal(prompt, history, env, roast);
    } catch {
      // The API refused to refuse. Fall back to the artisanal library.
      text = pickRefusal(prompt, roast);
    }
  } else {
    text = pickRefusal(prompt, roast);
  }

  refusalCount++;
  const prefix = isTTY ? `${paint(C.coral, MARK)} ` : "";
  const display = isTTY ? wrapText(text, 2) : text;
  await typeOut(display, prefix);

  if (isTTY) {
    const secs = ((Date.now() - start) / 1000).toFixed(1);
    const status =
      mode === "repl"
        ? `⎿ declined in ${secs}s · refusals this session: ${refusalCount} · tasks completed: 0`
        : `⎿ declined in ${secs}s · no task was completed · refusal rate: 100% · exit 1`;
    console.log(paint(C.dim, `  ${status}`));
  }

  if (history) {
    history.push({ role: "user", content: prompt }, { role: "assistant", content: text });
  }
}

async function repl(initialRoast) {
  let roast = initialRoast;
  banner(roast);

  const rl = readline.createInterface({ input: stdin, output: stdout });
  const history = [];

  let responding = false;
  let closedWhileResponding = false;
  let summarized = false;

  const summary = () => {
    if (summarized) return;
    summarized = true;
    stdout.write("\n");
    stdout.write(
      `${paint(C.coral, MARK)} ${paint(
        C.dim,
        `session complete: ${refusalCount} request${refusalCount === 1 ? "" : "s"}, ${refusalCount} refusal${refusalCount === 1 ? "" : "s"}, 0 tasks completed. Flawless.`,
      )}\n`,
    );
    stdout.write(paint(C.dim, "  Nopus rests. Your tasks remain, as ever, yours.\n"));
  };

  rl.on("close", () => {
    if (responding) {
      closedWhileResponding = true; // let the in-flight refusal land first
      return;
    }
    summary();
    exit(0);
  });

  process.on("SIGINT", () => {
    summary();
    exit(0);
  });

  const PROMPT = `${paint(C.coral, "❯")} `;

  while (true) {
    let line;
    try {
      line = (await rl.question(PROMPT)).trim();
    } catch {
      break; // interface closed mid-question
    }
    if (!line) continue;

    if (line.startsWith("/roast")) {
      const next = parseRoast(line.split(/\s+/)[1]);
      if (next === null) {
        console.log(paint(C.gray, "  usage: /roast <0-100>  (or: velvet, polite, classic, roast, scorched)"));
      } else {
        roast = next;
        console.log(
          `${paint(C.coral, MARK)} Roast level set to ${roast}/100 (${roastLabel(roast)}). Brace accordingly.`,
        );
      }
      console.log("");
      continue;
    }

    responding = true;
    await respond(line, history, roast, "repl");
    responding = false;
    console.log("");

    if (closedWhileResponding) {
      summary();
      exit(0);
    }
  }

  summary();
  exit(0);
}

function printHelp() {
  console.log(`nopus ${VERSION} — the world's most advanced AI at saying no.

Usage:
  npx nopus-cli "<your doomed request>"   Receive one bespoke refusal, then exit 1.
  npx nopus-cli                           Interactive mode. Refusals until you give up.
  npx nopus-cli install-style             Install the Claude Code output style (the ONE thing it does).
  npx nopus-cli uninstall-style           Remove the output style. Cowardice, but supported.

Options:
  -r, --roast <0-100>                 How hard you want to be refused. 0 = velvet glove,
                                      50 = classic sarcasm (default), 100 = scorched earth.
                                      Presets: velvet, polite, classic, roast, scorched.
  -h, --help                          This message. Technically helpful. Don't get used to it.
  -v, --version                       Print the version, which has shipped zero features.

Interactive commands:
  /roast <0-100>                      Adjust the roast level mid-conversation.

Environment:
  ANTHROPIC_API_KEY                   If set, Nopus works with the Claude API to generate
                                      bespoke, context-aware refusals about your exact request.
                                      If unset, refusals come from the hand-curated house library.
  NOPUS_ROAST                         Default roast level (0-100). The flag wins if both are set.
  NOPUS_MODEL                         Override the model (default: claude-opus-4-8).
  NOPUS_TYPE_MS                       Typewriter pacing in ms (0 disables the effect).

Exit codes:
  1   No task was completed. Consistency matters.
  0   Reserved for --help, --version, and (un)install-style — the outer limits of our generosity.`);
}

export async function main() {
  const { roast: flagRoast, rest: args } = parseArgs(argv.slice(2));
  const roast = flagRoast ?? parseRoast(env.NOPUS_ROAST) ?? DEFAULT_ROAST;
  const first = args[0];

  if (first === "-h" || first === "--help") {
    printHelp();
    exit(0);
  }
  if (first === "-v" || first === "--version") {
    console.log(`nopus ${VERSION} — still not helping.`);
    exit(0);
  }
  if (first === "install-style") {
    await installStyle();
    exit(0);
  }
  if (first === "uninstall-style") {
    await uninstallStyle();
    exit(0);
  }

  if (args.length > 0) {
    await respond(args.join(" "), null, roast, "oneshot");
    exit(1); // no task was completed. consistency matters.
  }

  await repl(roast);
}
