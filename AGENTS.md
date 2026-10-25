# AGENTS.md

Instructions for AI agents working on tuliofaria.dev ([BTS] tulio).

## Stack

Next.js (Pages Router) + TypeScript. Essays are Markdown files with frontmatter, loaded by `lib/ensaios.ts`.

## The site is bilingual (pt-BR + en)

- Portuguese is the default locale and lives at the root (`/ensaios/<slug>`).
- English lives under `/en` (`/en/issues/<slug>`). Routing comes from the `i18n` block in `next.config.js`.
- The essay route is localized: `/ensaios` in Portuguese, `/en/issues` in English. The page files stay in `pages/ensaios/`; `next.config.js` rewrites `/en/issues` onto them and redirects `/en/ensaios` to `/en/issues`. Build essay links with `essaysPath(locale, slug)` from `lib/i18n.ts`, never a hardcoded `/ensaios` or `/issues`.
- Every UI string lives in `lib/i18n.ts`, with one dictionary per locale. When you add or change copy in a page or component, update **both** dictionaries. Never hardcode user-facing text in a component.
- Per-item data that varies by language (e.g. project descriptions in `data/site.ts`) uses a `Record<Locale, string>`.

## Every new essay (issue) ships in both languages

When you create or publish a new essay, **always create the English version in the same change**. Never publish a Portuguese essay without its English translation.

1. Portuguese: `content/ensaios/<pt-slug>.md`
2. English: `content/ensaios/en/<en-slug>.md`. The EN slug is a **short kebab-case English slug derived from the English title** (lowercase, ASCII, no accents, no stop-word padding, usually 3 to 6 words, e.g. `war-chest`). It is **not** the Portuguese slug. The EN file links back to the PT file with `ptSlug` (below).

When you edit an existing essay, apply the same edit to the other language.

### Frontmatter for the English file

- `ptSlug`: **required**. Filename (without `.md`) of the Portuguese original, e.g. `ptSlug: verba-de-guerra`. The build fails if it is missing, if no Portuguese file has that slug, or if two EN files share a `ptSlug`.
- `n`: same number as the Portuguese file.
- `title`, `excerpt`: translated.
- `tags`: translated, lowercase (`negócios` → `business`, `tecnologia` → `technology`, `ia` → `ai`, `aprendizado` → `learning`). Reuse tags already used in `content/ensaios/en/` before inventing new ones.
- `date`: English format, e.g. `15 ago 2026` → `Aug 15, 2026`.
- `read`: same value as the Portuguese file (e.g. `7 min`); the page appends "read".

### How to translate

- Translate the meaning and the voice, not word by word. Tulio writes in first person, direct and conversational, with no hype. Keep that tone in English.
- Keep the same structure: same `##` headings (translated), same paragraphs, same blockquotes. The blockquote citation `— tese da edição` becomes `— this issue's thesis`.
- Keep product and tool names as they are (DevPleno, PipesBot, Selva, Claude, ElevenLabs, etc.).
- Keep currency amounts as written (`R$ 500`); don't convert them.
- Links stay the same. If a link points to Portuguese-only content (e.g. a YouTube video), add "(in Portuguese)" after it.
- Avoid AI-writing tells: no em-dash overuse, no inflated words ("delve", "tapestry", "testament", "crucial"), no rule-of-three padding, no "it's not X, it's Y" flourishes beyond what the original has.

## URLs, language switcher, canonical and hreflang

- The language switcher on an essay page goes to the other language's slug (EN -> PT via `ptSlug`, PT -> EN by reverse lookup), using `getAltSlug` in `lib/ensaios.ts`. Other pages keep the same path in the other locale.
- `pages/ensaios/[slug].tsx` emits a **self-referencing** `rel=canonical` (PT `/ensaios/<pt-slug>`, EN `/en/issues/<en-slug>`; never canonical PT to EN) plus `hreflang` `pt-BR`, `en` and `x-default` (= PT) with the correct slug of each language. `_app.tsx` emits the same set for every other page and skips it on essay routes. Build absolute URLs with `lib/site.ts` (`SITE_URL`, `absoluteUrl`, `issueUrl`).
- `pages/sitemap.xml.tsx` builds `/sitemap.xml` from the content files (all essays in both languages, with alternates). `public/robots.txt` points to it. Nothing to update when you add an essay.
- **Never rename a published slug without adding a 301 redirect `old -> new` in the same change.** For an EN slug, add the entry to `lib/slug-redirects.js` (`next.config.js` generates `/en/issues/<old>` and `/en/ensaios/<old>` redirects from it). For a PT slug, also add a redirect for `/ensaios/<old>` in `next.config.js` and update `ptSlug` in the EN file. New essays need no entry.

## Checking your work

Run `npm run build`. It prerenders every essay in both locales and fails if a page breaks or if a slug rule above is violated (missing or unknown `ptSlug`, duplicate slug, redirect target without an EN file).
