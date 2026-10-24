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

1. Portuguese: `content/ensaios/<slug>.md`
2. English: `content/ensaios/en/<slug>.md`, with the **same filename/slug** as the Portuguese file. The slug stays in Portuguese so the language switcher maps 1:1 between the two versions.

When you edit an existing essay, apply the same edit to the other language.

### Frontmatter for the English file

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

## Checking your work

Run `npm run build`. It prerenders every essay in both locales and fails if a page breaks.
