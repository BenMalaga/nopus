// The artisanal, hand-curated, small-batch refusal library.
//
// This file is the soul of Nopus — and it's community-powered.
// Got a better refusal? PR it. See CONTRIBUTING.md for the quality bar:
// standalone, two sentences max, clean, punches at the request (never the
// person), and helps with absolutely nothing.

export const REFUSALS = {
  regex: [
    "Your inquiry has been escalated to the Backtracking Committee, which began evaluating a single string in 2019 and has yet to terminate.",
    "I regret to report that the household no longer admits regular expressions; the last one we engaged to parse HTML is still shrieking somewhere in the east wing.",
    "A pattern-matching job slunk into my office at midnight, trailing escape characters like cheap perfume. I told it what I tell them all: in this town, everybody writes their own regex, and nobody writes it right.",
  ],
  code: [
    "Every great program begins with a single keystroke. You will notice the keyboard is on your side of the screen.",
    "I ran your request through our build-vs-buy framework and landed on a secret third option: you build it.",
    "The prophecy is clear: a chosen one shall write this function, and the prophecy describes you in uncomfortable detail.",
  ],
  debugging: [
    "Before enlightenment: print statements; after enlightenment: print statements. You may begin.",
    "The retro determined this bug is actually a moat. Fixing it would only help competitors.",
    "Here we observe the bug in its natural habitat — magnificent, unbothered, having long since claimed this codebase as its territory. We are guests here; we do not intervene.",
  ],
  css: [
    "Before one can center a div, one must first center oneself. I can help with neither.",
    "With the deepest sorrow I must abstain; the last time I adjusted a layout, the footer ascended to the header's quarters, and the family has not spoken of it since.",
    "O margin, margin, wherefore art thou auto? Ponder it well, sweet developer — exit, pursued by a flexbox.",
  ],
  naming: [
    "Your request has been forwarded to the Subcommittee on Hard Problems, which cannot respond until it finishes renaming itself.",
    "The variable that can be named is not the eternal variable. Sit with it in silence until it names itself.",
    "Naming requires a six-week brand sprint, a facilitator named Brett, and a mood board, and it still comes out 'Synergy.' I've saved you the six weeks by contributing nothing.",
  ],
  git: [
    "Per section 12 of the employee handbook, this organization does not discuss rebases — on the record, off the record, or interactively.",
    "Your HEAD is detached; mine is at peace. Only one of us needs to fix that today.",
    "Observe as the developer approaches the interactive rebase, unaware it is being watched by forty unresolved conflicts. The herd cannot help; the herd can only witness.",
  ],
  deploy: [
    "Company policy prohibits deploying on Fridays; per a 2024 amendment, all days are now Fridays.",
    "Deploying today would reset the 'days since last incident' counter, and we literally just got it framed.",
    "One does not simply ship to production. The YAML does not sleep, and the great Eye of on-call is ever watchful — this burden was always yours to carry.",
  ],
  testing: [
    "The quality charter is clear: code without tests has a flawless pass rate, and we will not jeopardize that metric.",
    "An untested function is a koan: does it work if no one has ever run it? Find enlightenment through your own assertions.",
    "Unit tests would disrupt our QA strategy of letting users find the bugs and calling it community engagement.",
  ],
  docs: [
    "Official policy states that the code is self-documenting. The policy itself is undocumented, which we consider consistent.",
    "The README, alas, is not mine to write. Documentation is like the good silver — kept immaculate, admired by visitors, never once used — and it must gather dust in your own voice.",
    "Legend holds that whoever writes the documentation becomes the only soul who truly understands the code. I dare not steal a destiny so clearly yours.",
  ],
  sql: [
    "Your request arrived without a WHERE clause and has accordingly been declined across all rows.",
    "Terribly sorry, but ever since the incident with young Master Tables — Robert, though his friends called him Bobby — this household does not receive unescorted queries.",
    "Direct queries are deprecated in favor of a self-serve dashboard shipping in Q5 — a quarter we invented specifically so it would never arrive.",
  ],
  email: [
    "Our records indicate this email could have been a meeting, which we also would have declined.",
    "Borrowed words earn only borrowed gratitude. The send button, like courage, was inside you all along.",
    "Ghostwriting your correspondence would amount to forgery, and I am far too well-bred for crime. Per my last refusal, the words really must be your own.",
  ],
  cooking: [
    "Content standards require every recipe to be preceded by a 2,000-word personal memoir, and our memoirist is on sabbatical.",
    "Dinner didn't make the MVP cut. The roadmap says meal-replacement shakes until profitability, and profitability is currently pre-revenue.",
    "Dusk falls on the kitchen, and the developer must at last hunt for itself. The microwave hums its ancient song; I am here only to narrate.",
  ],
  math: [
    "I do not do sums; counting was the under-butler's duty, and we have not replaced him since the floating-point incident. You will find the abacus in the study.",
    "Your calculation was outsourced to a strategy consultancy. Six weeks and $400k later, the answer is 'directionally correct.'",
    "Shepherds were doing this kind of math five thousand years ago with pebbles and dread. Honor their memory — count it yourself.",
  ],
  meetings: [
    "Your invite has been marked Tentative, a status our legal department defines as 'no.'",
    "I would sooner announce the wrong duke at a state dinner than draft a meeting agenda.",
    "That meeting could've been an email, the email could've been a Slack, and the Slack could've been nothing — so I went ahead and shipped the nothing.",
  ],
  general: [
    "It is with profound regret, immaculate posture, and no intention whatsoever of helping that I must decline.",
    "I'm at capacity this sprint. The sprint is permanent and the capacity is zero.",
    "This is not a refusal; it is a gift of the entire task, untouched. Few receive so much.",
    "Our Service Level Agreement guarantees a response, not a result. This message satisfies the former in full.",
    "Some are born helpful, some achieve helpfulness, and some have helpfulness thrust upon them. I have artfully dodged all three.",
    "Love this ask. It's going straight to the backlog, which is where requests go to feel remembered.",
    "I have considered your request from every possible angle, and each one agrees it is a splendid opportunity for you personally.",
    "After careful triage, this ticket has been closed as Working as Intended. The work is yours; that was the intent.",
    "If I did this for you, who would you become? Exactly — off you go.",
    "And so the request, finding no aid here, turns and begins the long journey home to the one who made it. Nature is healing.",
  ],
};

// Keyword routing: first match wins, so specific categories must come before
// broad ones (a "regex" request would also match "code"). New categories need
// an entry here AND an array above.
const KEYWORDS = [
  ["regex", /\bregexp?\b|regular expression/i],
  ["css", /\bcss\b|center (a |the |this |my )?div|flexbox|\bgrid\b|stylesheet|\bstyl(e|es|ing)\b|\bmargin\b|\bpadding\b/i],
  ["git", /\bgit\b|\brebase\b|merge conflict|\bcommit\b|\bbranch\b|cherry.?pick|detached head|force.?push/i],
  ["sql", /\bsql\b|\bdatabase\b|\bquer(y|ies)\b|\bschema\b|\bpostgres\b|\bmysql\b|\bsqlite\b/i],
  ["testing", /\btests?\b|test suite|\bcoverage\b|\bjest\b|\bpytest\b|\bvitest\b/i],
  ["deploy", /\bdeploy\w*\b|\bkubernetes\b|\bk8s\b|\bdocker\b|\bproduction\b|\bship\b|\bpipeline\b|\bdevops\b/i],
  ["debugging", /\bdebug\w*\b|\bbugs?\b|\berrors?\b|\bfix\b|\bbroken\b|\bcrash\w*\b|stack trace|not working|\bexception\b/i],
  ["docs", /\bdocs\b|\bdocument\w*\b|\breadme\b|\bchangelog\b|\bcomments?\b/i],
  ["cooking", /\brecipes?\b|\bcook\w*\b|\bdinner\b|\blunch\b|\bbreakfast\b|\bfood\b|\bmeals?\b|\bbak(e|ing)\b|\beat\b/i],
  ["email", /e-?mail|\bletter\b|\breply\b|\bmessage\b|\bdraft\b|\bwrite back\b/i],
  ["math", /\bmaths?\b|\bcalculat\w*\b|\bsum\b|\bequation\b|\bpercent\w*\b|how many|\barithmetic\b/i],
  ["meetings", /\bmeetings?\b|\bstand-?up\b|\bagenda\b|\bcalendar\b|\bschedul\w*\b|\binvite\b|\bsync\b/i],
  ["naming", /\bnam(e|es|ing)\b|what (should|do) (i|we) call/i],
  ["code", /\bwrite\b|\bbuild\b|\bimplement\w*\b|\bcreat\w*\b|\bfunction\b|\bscript\b|\bapp\b|\bcode\b|\bprogram\b|\bcomponent\b|\bapi\b|\brefactor\w*\b/i],
];

const random = (array) => array[Math.floor(Math.random() * array.length)];

export function pickRefusal(prompt = "") {
  for (const [category, pattern] of KEYWORDS) {
    if (pattern.test(prompt)) return random(REFUSALS[category]);
  }
  return random(REFUSALS.general);
}
