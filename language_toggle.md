# Language Toggle (English / Japanese) — Feature Config

Planning doc for adding a site-wide English ⇄ Japanese toggle. Captures the decisions made and the shape of the implementation. Not yet implemented.

## 1. UI

- **Component**: pill/text switch in the navbar — `EN | 日本語` (or similar), lives in [app/Components/Header/Header.tsx](app/Components/Header/Header.tsx).
- Clicking flips the whole site's language immediately (no page reload required, no URL change).
- Reflect current state visually (e.g. active side bolded/highlighted).

## 2. File structure

Inspired by Talawa Admin's `public/locales/<lang>/*.json` pattern, simplified to one file per locale (site is small enough that namespace-splitting isn't needed yet):

```
public/
  locales/
    en/
      translation.json
    jp/
      translation.json
```

- Flat or lightly-nested key/value JSON, e.g.:
  ```json
  {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.blogs": "Blogs",
    "nav.projects": "Projects",
    "footer.copyright": "..."
  }
  ```
- All static UI strings (nav, headings, buttons, about page copy, etc.) get keys here.

## 3. State & persistence

- **React Context** (`LanguageProvider` / `useLanguage()`), wrapping the app in [app/layout.tsx](app/layout.tsx) alongside (or instead of) the currently-unused `ThemeProvider`.
- On mount, read saved language from `localStorage` (key e.g. `portfolio-lang`), default to `en` if unset.
- Toggling updates context state + writes to `localStorage`.
- No routing changes — `/app` folder structure stays as-is (no `[locale]` segment, no `next-intl`).
- Components consume translations via `useLanguage()` → look up keys in the loaded JSON for the active locale.

## 4. Blog content translation

Blog posts are static once written (from `blogs.json`), so they're treated the same as UI text — pre-translated and stored, not live-translated at request time.

- Extend each entry in [blogs.json](blogs.json) with parallel Japanese fields:
  ```json
  {
    "title": "...",
    "description": "... (markdown, English)",
    "japaneseTitle": "...",
    "japaneseDescription": "... (markdown, Japanese)"
  }
  ```
- [app/blogs/page.tsx](app/blogs/page.tsx) and [app/blogs/[slug]/page.tsx](app/blogs/[slug]/page.tsx) render `japaneseTitle`/`japaneseDescription` when the JP toggle is active, falling back to the English fields if missing (so older posts don't break before they're translated).
- Japanese text quality matters — auto-translated text should be reviewed for natural phrasing (correct particle usage, appropriate register/tone for a portfolio site — polite form, not overly casual or literal machine-translation phrasing), not just literal machine translation.

## 5. Sync/check script

**Goal**: catch blog posts that are missing Japanese fields and fill them in.

- **Scope**: scans `blogs.json` only (not component source files, for now).
- **Command**: `npm run check-i18n` — manual, not a git hook.
- **Behavior**:
  1. Load `blogs.json`.
  2. For each entry missing `japaneseTitle` and/or `japaneseDescription`, call the **Groq API** (OpenAI-compatible chat completions endpoint, e.g. `llama-3.3-70b-versatile`) to translate `title`/`description` into natural, polite-register Japanese, preserving markdown formatting in `description`.
  3. Write the translated fields back into `blogs.json`.
  4. Print a summary of which posts were translated.
- **Location**: `scripts/check-i18n.ts`, run via `tsx` or `ts-node`.
- **Requirement**: needs a `GROQ_API_KEY` available as an env var (get one at console.groq.com, free tier available).

## 6. Open items before implementation

- [ ] Confirm `GROQ_API_KEY` is available (set in `.env.local`, not committed).
- [ ] Confirm exact translation key set needed for existing static text (I'll extract these by reading current components).
- [ ] Decide fallback behavior if a translation key is missing in `jp/translation.json` (fall back to English string, or show key name for visibility during dev?).

## 7. Implementation steps (once open items are resolved)

1. Create `public/locales/en/translation.json` + `public/locales/jp/translation.json`, extract existing hardcoded strings from components into the `en` file.
2. Build `LanguageProvider` context + `useLanguage()` hook, wire into `app/layout.tsx`.
3. Add toggle UI to `Header.tsx`.
4. Replace hardcoded strings across components with `t("key")` lookups.
5. Extend `blogs.json` schema with `japaneseTitle`/`japaneseDescription`; update blog list/detail pages to render based on active language.
6. Write `scripts/check-i18n.ts` + add `check-i18n` script to `package.json`.
7. Run the script once to backfill Japanese fields for existing blog posts.
