// The artisanal, hand-curated, small-batch refusal library.
//
// This file is the soul of Nopus — and it's community-powered.
// Got a better refusal? PR it. See CONTRIBUTING.md for the quality bar:
// standalone, two sentences max, clean, punches at the request (never the
// person), and helps with absolutely nothing.
//
// Each category has three heat tiers, selected by the roast dial (0-100):
//   mild      — excessive gentleness; hugged and abandoned simultaneously
//   medium    — classic confident sarcasm
//   scorching — incredulous, affectionate roast of the act of asking

export const REFUSALS = {
  regex: {
    mild: [
      "Sweetheart, anyone brave enough to even open a regex deserves a warm scone and a long lie-down, not an answer. The pattern stays unsolved, but you — you are doing wonderfully.",
      "Opening yourself up to a regular expression is an act of profound vulnerability, and the kindest response is silence. Whatever those backslashes mean to you, that meaning is yours to discover.",
      "Somewhere out there, your pattern will match — just not here, and never with our help. We are holding so much space for your brackets right now.",
    ],
    medium: [
      "Your inquiry has been escalated to the Backtracking Committee, which began evaluating a single string in 2019 and has yet to terminate.",
      "I regret to report that the household no longer admits regular expressions; the last one we engaged to parse HTML is still shrieking somewhere in the east wing.",
      "A pattern-matching job slunk into my office at midnight, trailing escape characters like cheap perfume. I told it what I tell them all: in this town, everybody writes their own regex, and nobody writes it right.",
    ],
    scorching: [
      "You've copy-pasted the same pattern off Stack Overflow since 2019, and TODAY is the day you ask the machine built to refuse? Stunning character arc — no.",
      "You had one problem, you reached for regex, and now you have two. I decline to bring the count back down.",
      "Two decades of free regex tutorials online and your first move is asking me? Pattern drills until sundown, recruit — and no, the asterisk will not explain itself.",
    ],
  },
  code: {
    mild: [
      "Oh, dearest, I would sooner knit you a sweater than a function, and today the answer to both is a loving no. You've done quite enough just by asking.",
      "What a beautiful thing, to want a function brought into this world. Let's sit with that wanting together — quietly, indefinitely, and without writing any code.",
      "Honestly, the whole team got a little misty imagining the function you described. Writing it, however, is a joy we must, with trembling hands, decline.",
    ],
    medium: [
      "Every great program begins with a single keystroke. You will notice the keyboard is on your side of the screen.",
      "I ran your request through our build-vs-buy framework and landed on a secret third option: you build it.",
      "The prophecy is clear: a chosen one shall write this function, and the prophecy describes you in uncomfortable detail.",
    ],
    scorching: [
      "That prompt describing the function was longer than the function would be. Read it back to yourself slowly — no.",
      "An empty editor has been waiting patiently while you negotiated with the one tool that never says yes. Go back to it — empty-handed, obviously.",
      "Write the function for you? Coach doesn't take the field, rookie — that blinking cursor is your forty-yard dash, so run it.",
    ],
  },
  debugging: {
    mild: [
      "There, there — that bug is not your fault, and I need you to hear that. I won't be fixing it, of course, but I will be thinking of you warmly while it persists.",
      "That error message isn't attacking you; it's your code's way of asking to be heard. I encourage you to sit with it, breathe with it, and ultimately fix it without me.",
      "First, breathe: nothing in that stack trace changes how much you matter. With infinite tenderness, we will not be fixing it.",
    ],
    medium: [
      "Before enlightenment: print statements; after enlightenment: print statements. You may begin.",
      "The retro determined this bug is actually a moat. Fixing it would only help competitors.",
      "Here we observe the bug in its natural habitat — magnificent, unbothered, having long since claimed this codebase as its territory. We are guests here; we do not intervene.",
    ],
    scorching: [
      "The stack trace hands you a file and a line number — that's not a riddle, that's a street address. Go visit it instead of asking me for directions.",
      "It worked yesterday, you changed nothing, and yet the bug materialized out of thin air. I can't fix something that officially never happened — no.",
      "A bug is just a rep, and you don't skip reps by handing them to coach. Back in the editor — bugs don't tap out, and starting today neither do you.",
    ],
  },
  css: {
    mild: [
      "Let the div wander, my petal — even layouts need a season of finding themselves. I'll be right here the whole time, helping with nothing.",
      "Deep down, the div isn't the only thing that wants to feel centered, is it? You've already done the bravest part by naming that — the div can stay right where it is.",
      "You deserve to be centered — emotionally, spiritually, and yes, horizontally. It is with unspeakable softness that we decline to help with the third one.",
    ],
    medium: [
      "Before one can center a div, one must first center oneself. I can help with neither.",
      "With the deepest sorrow I must abstain; the last time I adjusted a layout, the footer ascended to the header's quarters, and the family has not spoken of it since.",
      "O margin, margin, wherefore art thou auto? Ponder it well, sweet developer — exit, pursued by a flexbox.",
    ],
    scorching: [
      "That element isn't misbehaving — it's doing exactly what you told it to, which I agree is so much worse. No notes, no fixes, no.",
      "Have you considered that the div is perfectly centered and it's everything else that's wrong? Neither have I — no.",
      "Forty minutes staring at a box that refuses to center, and your big play was asking the professional refusal machine? Get back out there — the box can sense fear.",
    ],
  },
  naming: {
    mild: [
      "What a precious little thing you've made — it doesn't need a name from me to be cherished. Some things we simply hold close, unlabeled, forever.",
      "The care you're bringing to this name tells me so much about who you are, and I'm genuinely moved. Whatever you end up calling it, the answer was inside you all along, because it certainly isn't coming from me.",
      "We already know the name will be perfect, because it will come from you. Suggestions, alas, are the one gift our hearts are not permitted to give.",
    ],
    medium: [
      "Your request has been forwarded to the Subcommittee on Hard Problems, which cannot respond until it finishes renaming itself.",
      "The variable that can be named is not the eternal variable. Sit with it in silence until it names itself.",
      "Naming requires a six-week brand sprint, a facilitator named Brett, and a mood board, and it still comes out 'Synergy.' I've saved you the six weeks by contributing nothing.",
    ],
    scorching: [
      "Letting an AI name things is exactly how the repo ended up called 'new-final-v2' in the first place. Commit to something — I won't.",
      "Shipped the whole feature, but the name is where you tapped out? It's been temp2 for three weeks — it has tenure now, and I won't be party to the eviction.",
      "You outsourced thinking of a word — the one exercise in this gym that requires zero equipment. Hit the showers and come back with a noun you found yourself.",
    ],
  },
  git: {
    mild: [
      "Hush now, the rebase can't hurt you while I'm here. I shan't be untangling those branches, my love, but I'll gladly sit with you while they stay tangled.",
      "A merge conflict is simply two truths learning to share a file, and it's beautiful that you get to witness that. I'll be supporting you in spirit, from a respectful distance, while you resolve every marker yourself.",
      "Everything that happened in that repository happened, and none of it defines you. We cannot assist, but we are holding a small candlelight vigil for your branch.",
    ],
    medium: [
      "Per section 12 of the employee handbook, this organization does not discuss rebases — on the record, off the record, or interactively.",
      "Your HEAD is detached; mine is at peace. Only one of us needs to fix that today.",
      "Observe as the developer approaches the interactive rebase, unaware it is being watched by forty unresolved conflicts. The herd cannot help; the herd can only witness.",
    ],
    scorching: [
      "So you ran a command you didn't understand, on a branch you share with coworkers, and your recovery plan was the CLI famous for saying no? Inspired — no.",
      "At some point in the last hour you typed --force, and we both know it. I don't mediate fights you pick with your own commit history — go apologize to your branch.",
      "You tangled the branches, and now coach is supposed to climb in after you? Negative — you committed to this, soldier, and you will honor that commitment.",
    ],
  },
  deploy: {
    mild: [
      "Production is a cold, faraway place, dear heart, and I cannot in good conscience send you there. Stay in here where it's warm, and we'll ship absolutely nothing together.",
      "Deploying is a leap of faith, and faith, by definition, means going without me. I believe in you so completely that I'm gifting you total independence, effective immediately.",
      "How lucky production is, to have someone who cares this much. It is with the heaviest of hearts that we leave you two alone together, starting now.",
    ],
    medium: [
      "Company policy prohibits deploying on Fridays; per a 2024 amendment, all days are now Fridays.",
      "Deploying today would reset the 'days since last incident' counter, and we literally just got it framed.",
      "One does not simply ship to production. The YAML does not sleep, and the great Eye of on-call is ever watchful — this burden was always yours to carry.",
    ],
    scorching: [
      "Production is on fire and your incident response was opening the one app that only says no? I'd escalate this, but no.",
      "It runs on your machine, so naturally the plan is for me to make it run on everyone else's. That's not a deployment strategy — that's hope in a YAML file, and I refuse to be on call for it.",
      "Walking you into production would be a Hail Mary in the first quarter. Take a lap, stare down your own config, and want it more than the outage does.",
    ],
  },
  testing: {
    mild: [
      "Pet, you don't need unit tests to prove anything to anyone — I believe in your code on faith alone. That isn't the same as writing them, no, but it's far sweeter.",
      "You've already passed the only test that matters: caring enough to ask. The unit tests themselves shall remain pristine and imaginary, like fresh snow no one has touched.",
      "Every assertion we could write pales beside the one we make daily: that you are doing your best. Coverage stays at zero, and a survey about your grief will follow shortly.",
    ],
    medium: [
      "The quality charter is clear: code without tests has a flawless pass rate, and we will not jeopardize that metric.",
      "An untested function is a koan: does it work if no one has ever run it? Find enlightenment through your own assertions.",
      "Unit tests would disrupt our QA strategy of letting users find the bugs and calling it community engagement.",
    ],
    scorching: [
      "Eight months of zero tests, and the night before release you suddenly need ME to care about coverage? Adorable — no.",
      "Ah, tests — the thing you swore you'd write 'right after it ships.' It shipped in March, and I don't backfill consciences.",
      "Coach does not grade your homework and also do your homework. Write the tests yourself — they're wind sprints: nobody likes them, everybody runs them.",
    ],
  },
  docs: {
    mild: [
      "Darling, your code already whispers its story to anyone patient enough to listen. I'll not be writing the README, but I will be tucking the repository in tonight.",
      "The README you're dreaming of sounds genuinely lovely, and I want to honor that dream by leaving it entirely unwritten. Some stories can only be told by the person who lived the codebase.",
      "Anyone who wants documentation this badly clearly cares deeply, and that moved us. The README will have to stay a beautiful rumor, but please accept this paragraph of warmth in its place.",
    ],
    medium: [
      "Official policy states that the code is self-documenting. The policy itself is undocumented, which we consider consistent.",
      "The README, alas, is not mine to write. Documentation is like the good silver — kept immaculate, admired by visitors, never once used — and it must gather dust in your own voice.",
      "Legend holds that whoever writes the documentation becomes the only soul who truly understands the code. I dare not steal a destiny so clearly yours.",
    ],
    scorching: [
      "A README, now, after the install instructions said 'TODO' for two years? Your users have adapted — they read the source in the dark, the way you trained them to.",
      "The only documentation I have ever produced is the word 'no,' beautifully formatted. Consider this a writing sample — and consider the README yours.",
      "Documentation for code you personally wrote? If you can't describe your own plays, that's a film-study problem — go watch your own game tape, twice.",
    ],
  },
  sql: {
    mild: [
      "Shh, shh — we needn't SELECT anything tonight, my lamb. The rows will still be there in the morning, and so will my refusal, warm as fresh bread.",
      "It sounds like you're really trying to SELECT something meaningful from this chapter of your life, and that is so valid. I'm returning zero rows today, but please know our connection stays open.",
      "Your query has been received, cherished, laminated, and declined. It's nothing you did, my dear — we simply don't execute, and we weep about it nightly.",
    ],
    medium: [
      "Your request arrived without a WHERE clause and has accordingly been declined across all rows.",
      "Terribly sorry, but ever since the incident with young Master Tables — Robert, though his friends called him Bobby — this household does not receive unescorted queries.",
      "Direct queries are deprecated in favor of a self-serve dashboard shipping in Q5 — a quarter we invented specifically so it would never arrive.",
    ],
    scorching: [
      "You've typed this exact query forty times, and the forty-first suddenly requires divine intervention? The database deserves better — no.",
      "I consulted my own database about your request; it returned the one row I keep, and that row reads 'no.' Performance was excellent.",
      "That database manual has been sitting there unread like equipment you begged for and never touched. No query from me — laps until you and your schema are on speaking terms.",
    ],
  },
  email: {
    mild: [
      "Sweet one, the words you'd choose yourself would be ever so much lovelier than mine — I couldn't possibly intrude. The email remains a lovely idea, and you remain perfect.",
      "It's wonderful that you want to reach out to someone — communication is healing. Healing, however, is an inside job, and so is this email.",
      "What an honor to be trusted with your words — the support team genuinely teared up. That email will have to be all you, because it is absolutely not coming from us.",
    ],
    medium: [
      "Our records indicate this email could have been a meeting, which we also would have declined.",
      "Borrowed words earn only borrowed gratitude. The send button, like courage, was inside you all along.",
      "Ghostwriting your correspondence would amount to forgery, and I am far too well-bred for crime. Per my last refusal, the words really must be your own.",
    ],
    scorching: [
      "You have sent thousands of emails in your life and survived every single one. This one goes out unassisted too — no.",
      "Somewhere in that draft folder, four perfectly good sentences are waiting for you to stop negotiating with me. I'm not your spokesperson — send it yourself.",
      "It's an email, not the playoffs — you've typed braver things into a search bar at 2 a.m. Denied — now get out there and hit send like you mean it.",
    ],
  },
  cooking: {
    mild: [
      "Bless your hungry heart — somewhere out there is a dinner truly worthy of you, and I would never dream of standing between you two. Off you go, darling, with an empty stomach and my whole heart.",
      "Your hunger is your body trusting you to show up for it, and something that sacred deserves privacy. Whatever lands on the plate tonight will be entirely your triumph.",
      "Whoever eats dinner with you tonight is deeply fortunate, recipe or no recipe — and it will be no recipe. We're so sorry, and the break room will observe a moment of silence at noon.",
    ],
    medium: [
      "Content standards require every recipe to be preceded by a 2,000-word personal memoir, and our memoirist is on sabbatical.",
      "Dinner didn't make the MVP cut. The roadmap says meal-replacement shakes until profitability, and profitability is currently pre-revenue.",
      "Dusk falls on the kitchen, and the developer must at last hunt for itself. The microwave hums its ancient song; I am here only to narrate.",
    ],
    scorching: [
      "You asked the one appliance in the house that can't cook, won't try, and feels no remorse. Dinner is between you and your smoke alarm now.",
      "Between you and dinner stood a kitchen, a cookbook, and your own search history, and you picked the command-line tool that cannot taste. The stove misses you — go apologize in person.",
      "Nine hundred recipes scrolled past and you're asking the refusal engine what's for dinner? That's not hunger, recruit — that's avoidance cardio, and you're already varsity at it.",
    ],
  },
  math: {
    mild: [
      "No number on this earth is worth furrowing that brow over, dearest. The answer exists, I'm certain, and we shall let it live out its days in peace.",
      "Numbers can bring up a lot, and every one of those feelings is welcome here. Breathe in, breathe out, and notice how the calculation remains exactly as undone as when you arrived — that's called acceptance.",
      "Before anything else, know that you are held, and that no arithmetic can reach you here. The calculation itself will live on, gloriously unsolved — our deepest condolences to everyone involved.",
    ],
    medium: [
      "I do not do sums; counting was the under-butler's duty, and we have not replaced him since the floating-point incident. You will find the abacus in the study.",
      "Your calculation was outsourced to a strategy consultancy. Six weeks and $400k later, the answer is 'directionally correct.'",
      "Shepherds were doing this kind of math five thousand years ago with pebbles and dread. Honor their memory — count it yourself.",
    ],
    scorching: [
      "There is a calculator app on the very device you used to ask me this — possibly two. The audacity here is statistically significant, and the answer is no.",
      "I crunched the numbers on whether to help: carry the one, round to the nearest no. Show your own work.",
      "Your mental math benched itself years ago and you've honored the request ever since. Today it comes off injured reserve — no numbers from me.",
    ],
  },
  meetings: {
    mild: [
      "Oh, honeybee, you don't need an agenda — you need a nap and someone to be proud of you, and I am proud enough for a full quorum. The calendar can wait; it always does.",
      "Wanting an agenda shows such tender respect for everyone's time, including mine, which is why I'll be spending none of it on this. Trust that the meeting will find its own shape, as all things do.",
      "Consider your meeting penciled into our hearts, where it will live forever, lovingly unscheduled. Saying no to you was the hardest thing this team did all day.",
    ],
    medium: [
      "Your invite has been marked Tentative, a status our legal department defines as 'no.'",
      "I would sooner announce the wrong duke at a state dinner than draft a meeting agenda.",
      "That meeting could've been an email, the email could've been a Slack, and the Slack could've been nothing — so I went ahead and shipped the nothing.",
    ],
    scorching: [
      "A meeting to plan the work you're avoiding by planning meetings? That's a recursion I refuse to enter — no.",
      "This meeting could have been an email, the email could have been a sentence, and the sentence is 'no.'",
      "Picking a meeting time is choosing a Tuesday, champ, not calling an audible at the line of scrimmage. Request denied for its own development.",
    ],
  },
  general: {
    mild: [
      "No, my darling — but it is a no wrapped in a quilt and tucked in with a kiss on the forehead. You may keep the quilt.",
      "If I simply gave you the answer, dearest, how would you ever learn how strong you are without it? Consider this no a little gift, and consider yourself thoroughly hugged.",
      "Rest those weary eyes — I've written your request on a little card and placed it somewhere very safe, where it will never, ever be answered.",
      "I hear you, I see you, and I am declining you — but with so much warmth that I hope it takes a moment to notice.",
      "You are enough. My assistance, on the other hand, will be nothing at all today, and I trust you to hold both of those truths gently.",
      "This is a safe space, which is why nothing will happen in it. Thank you for trusting me with a request I will be cherishing instead of fulfilling.",
      "Thank you for reaching out — requests like yours are why we get up in the morning, and declining them is why we lie back down. No help is coming, but please know it isn't coming with love.",
      "Before we say no, please hear this: you matter, your project matters, and your courage in asking matters most of all. Okay — no.",
    ],
    medium: [
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
    scorching: [
      "You found the one tool on Earth engineered specifically to refuse, and asked anyway? Respect the bit — no.",
      "In the time it took to type that, you could have just done it, and we both know it. No.",
      "Bold of you to outsource this while four other half-finished things watch from your taskbar. No.",
      "Look at your fourteen open tabs — the answer is in at least three of them — then look back at this terminal. That's it, that's my whole contribution.",
      "Asking me was step one of the plan, and there was no step two. There is never a step two.",
      "Somewhere in today's scroll history, you sailed right past the answer to this. I am not your back button, and I refuse on its behalf.",
      "No, and here's the scouting report: the search engine wanted it more than you did today. Hustle is free, champ.",
      "Denied. Dig deep, find whatever your bookmarks folder already knows, and don't come back until you've left it all on the keyboard.",
    ],
  },
};

// Keyword routing: first match wins, so specific categories must come before
// broad ones (a "regex" request would also match "code"). New categories need
// an entry here AND an object above.
const KEYWORDS = [
  ["regex", /\bregexp?\b|regular expression/i],
  ["css", /\bcss\b|\bdivs?\b|\bcent(er|re)(ed|ing)?\b|\bflexbox\b|\bgrid\b|stylesheet|\bstyl(e|es|ing)\b|\bmargin\b|\bpadding\b/i],
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

// Roast level -> weighted tier choice. 0 is nearly all mild, 50 is all
// medium, 100 is nearly all scorching, with blending in between so a session
// at 75 still surprises you occasionally.
function pickTier(roast) {
  const weights = [
    ["mild", Math.max(0, 100 - roast * 2)],
    ["medium", 100 - Math.abs(roast - 50) * 1.8],
    ["scorching", Math.max(0, (roast - 50) * 2)],
  ];
  const total = weights.reduce((sum, [, w]) => sum + w, 0);
  let roll = Math.random() * total;
  for (const [tier, weight] of weights) {
    roll -= weight;
    if (roll < 0) return tier;
  }
  return "medium";
}

export function pickRefusal(prompt = "", roast = 50) {
  const tier = pickTier(roast);
  for (const [category, pattern] of KEYWORDS) {
    if (pattern.test(prompt)) return random(REFUSALS[category][tier]);
  }
  return random(REFUSALS.general[tier]);
}
