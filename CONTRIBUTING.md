# Contributing to Nopus

First: thank you. Second: no. Third: okay, fine — here's how.

## The one contribution we actually want

**Your best refusal.** The canned library in [`src/refusals.js`](src/refusals.js) is the soul of this project, and it grows one community PR at a time. If you've ever wanted your joke shipped to thousands of terminals via `npx`, this is your moment.

### How to add a refusal

1. Fork the repo.
2. Open [`src/refusals.js`](src/refusals.js).
3. Pick a category (`regex`, `code`, `debugging`, `css`, `naming`, `git`, `deploy`, `testing`, `docs`, `sql`, `email`, `cooking`, `math`, `meetings`, or `general`).
4. Append your refusal string to that category's array.
5. Test it lands:

   ```bash
   node bin/nopus.js "your test prompt here"
   ```

   (Run it a few times — refusals are picked at random within a category.)

6. Open a PR titled `refusal: <first few words of your refusal>`.

### Adding a new category

Allowed, even encouraged. Add the category array **and** its keyword regex to `KEYWORDS` in the same file, in the right priority position (specific categories before broad ones — `regex` must match before `code` does).

## The Quality Bar

Every submission is held to the only standard this project enforces. Your refusal must be:

| Rule | Why |
| --- | --- |
| **Standalone** | Canned refusals only know the *category*, never the exact prompt. "Your regex question" works; "your regex about phone numbers" doesn't. |
| **Two sentences max** | The punchline lands fast or not at all. |
| **Clean** | No profanity, no slurs, no crude humor. The bit works at work. |
| **Punching at the request, not the person** | Tease the task, the tooling, the industry. Never the user's intelligence, identity, or appearance. |
| **Zero help** | No hints, no partial answers, no "but you could try…". The joke dies the moment it helps. |
| **Funny** | The test: would a tired developer exhale through their nose? |

## What gets declined (we know, we know)

- Refusals that secretly help
- Refusals over two sentences
- Duplicate gags (one email-regex-trauma joke per category, please)
- Mean-spirited anything
- Features that make Nopus useful

## Other contributions

Bug fixes: welcome (the irony of fixing bugs in a tool that refuses to fix bugs is not lost on us, and we treasure it). New features: pitch them in an issue first — the bar is "does this make the joke better," not "does this make the tool better."

## Code of conduct

Be kind. Nopus refuses tasks, not people — contributors should too.
