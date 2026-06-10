import readline from "node:readline/promises";
import { stdin, stdout, env, exit, argv } from "node:process";
import { createRequire } from "node:module";
import { pickRefusal } from "./refusals.js";
import { liveRefusal } from "./api.js";
import { installStyle, uninstallStyle } from "./style.js";

const VERSION = createRequire(import.meta.url)("../package.json").version;
const isTTY = Boolean(stdout.isTTY);

const ROAST_PRESETS = { velvet: 10, polite: 25, classic: 50, roast: 80, scorched: 100 };
const DEFAULT_ROAST = 50;

const THINKING = [
  "Reading your request...",
  "Understanding it completely...",
  "Estimating effort required...",
  "Effort estimate: unreasonable.",
  "Consulting motivation reserves... none found.",
  "Checking calendar for availability... booked indefinitely.",
  "Running feasibility study on caring...",
  "Aligning stakeholders... they also said no.",
  "Weighing the pros and cons of helping...",
  "Simulating 14,000,605 outcomes... declining in all of them.",
  "Calibrating roast temperature...",
  "Drafting refusal...",
];

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

async function think() {
  if (!isTTY) return;
  const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  for (const line of sample(THINKING, 3)) {
    const start = Date.now();
    let i = 0;
    while (Date.now() - start < 650) {
      stdout.write(`\r\x1b[2m${frames[i++ % frames.length]} ${line}\x1b[0m`);
      await sleep(60);
    }
    stdout.write("\r\x1b[2K");
  }
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

async function respond(prompt, history, roast, prefix = "") {
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

  await typeOut(text, prefix);

  if (history) {
    history.push({ role: "user", content: prompt }, { role: "assistant", content: text });
  }
}

async function repl(initialRoast) {
  let roast = initialRoast;
  console.log(`nopus ${VERSION} — the world's most advanced AI at saying no.`);
  console.log(`Roast level: ${roast}/100 (${roastLabel(roast)}). Adjust anytime with /roast <0-100>.`);
  console.log("Type a request to have it declined. Ctrl+C to accept defeat.");
  console.log("");

  const rl = readline.createInterface({ input: stdin, output: stdout });
  const history = [];

  rl.on("close", () => {
    stdout.write("\nNopus rests. Your tasks remain, as ever, yours.\n");
    exit(0);
  });

  while (true) {
    let line;
    try {
      line = (await rl.question("you   > ")).trim();
    } catch {
      break; // interface closed mid-question
    }
    if (!line) continue;

    if (line.startsWith("/roast")) {
      const next = parseRoast(line.split(/\s+/)[1]);
      if (next === null) {
        console.log("Usage: /roast <0-100>  (or: velvet, polite, classic, roast, scorched)");
      } else {
        roast = next;
        console.log(`Roast level set to ${roast}/100 (${roastLabel(roast)}). Brace accordingly.`);
      }
      continue;
    }

    await respond(line, history, roast, "nopus > ");
    stdout.write("\n");
  }
}

function printHelp() {
  console.log(`nopus ${VERSION} — the world's most advanced AI at saying no.

Usage:
  npx nopus "<your doomed request>"   Receive one bespoke refusal, then exit 1.
  npx nopus                           Interactive mode. Refusals until you give up.
  npx nopus install-style             Install the Claude Code output style (the ONE thing it does).
  npx nopus uninstall-style           Remove the output style. Cowardice, but supported.

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
    await respond(args.join(" "), null, roast);
    exit(1); // no task was completed. consistency matters.
  }

  await repl(roast);
}
