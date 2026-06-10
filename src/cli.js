import readline from "node:readline/promises";
import { stdin, stdout, env, exit, argv } from "node:process";
import { createRequire } from "node:module";
import { pickRefusal } from "./refusals.js";
import { liveRefusal } from "./api.js";
import { installStyle, uninstallStyle } from "./style.js";

const VERSION = createRequire(import.meta.url)("../package.json").version;
const isTTY = Boolean(stdout.isTTY);

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

async function typeOut(text, prefix = "") {
  if (!isTTY) {
    stdout.write(prefix + text + "\n");
    return;
  }
  stdout.write(prefix);
  for (const ch of text) {
    stdout.write(ch);
    await sleep(12);
  }
  stdout.write("\n");
}

async function respond(prompt, history, prefix = "") {
  await think();

  let text;
  if (env.ANTHROPIC_API_KEY) {
    try {
      text = await liveRefusal(prompt, history, env);
    } catch {
      // The API refused to refuse. Fall back to the artisanal library.
      text = pickRefusal(prompt);
    }
  } else {
    text = pickRefusal(prompt);
  }

  await typeOut(text, prefix);

  if (history) {
    history.push({ role: "user", content: prompt }, { role: "assistant", content: text });
  }
}

async function repl() {
  console.log(`nopus ${VERSION} — the world's most advanced AI at saying no.`);
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
    await respond(line, history, "nopus > ");
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
  -h, --help                          This message. Technically helpful. Don't get used to it.
  -v, --version                       Print the version, which has shipped zero features.

Environment:
  ANTHROPIC_API_KEY                   If set, Nopus works with the Claude API to generate
                                      bespoke, context-aware refusals about your exact request.
                                      If unset, refusals come from the hand-curated house library.
  NOPUS_MODEL                         Override the model (default: claude-opus-4-8).

Exit codes:
  1   No task was completed. Consistency matters.
  0   Reserved for --help, --version, and (un)install-style — the outer limits of our generosity.`);
}

export async function main() {
  const args = argv.slice(2);
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
    await respond(args.join(" "), null);
    exit(1); // no task was completed. consistency matters.
  }

  await repl();
}
