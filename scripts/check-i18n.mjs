import fs from "fs"
import path from "path"

const BLOGS_PATH = path.join(process.cwd(), "blogs.json")
const GROQ_MODEL = "llama-3.3-70b-versatile"
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

async function translateToJapanese(apiKey, text, { isTitle = false } = {}) {
  const systemPrompt = isTitle
    ? "You are a professional Japanese translator. Translate the given short English title into natural, polite Japanese suitable for a personal tech blog headline. " +
      "Do NOT add Markdown formatting (no **, #, etc.) even if none is requested — output plain text only. " +
      "Do not translate code, URLs, or proper nouns/product names. " +
      "Use only standard Japanese kanji forms (e.g. 間 not 间, 続 not 续) — never simplified Chinese (Hanzi) characters. " +
      "Respond with ONLY the translated title, no preamble, no quotes, no explanation."
    : "You are a professional Japanese translator. Translate the given English text into natural, polite-register Japanese (です/ます調) suitable for a personal tech blog. " +
      "Preserve Markdown formatting exactly as given (headings, bold, links, list markers, code blocks) — do not add new formatting that wasn't in the source. " +
      "Do not translate code, URLs, or proper nouns/product names. " +
      "Use only standard Japanese kanji forms (e.g. 間 not 间, 続 not 续) — never simplified Chinese (Hanzi) characters. " +
      "Respond with ONLY the translated text, no preamble or explanation."

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      temperature: 0.2,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: text },
      ],
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Groq API error ${res.status}: ${body}`)
  }

  const data = await res.json()
  return data.choices[0].message.content.trim()
}

async function main() {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    console.error("GROQ_API_KEY is not set. Add it to .env and run with: node --env-file=.env scripts/check-i18n.mjs")
    process.exit(1)
  }

  const blogs = JSON.parse(fs.readFileSync(BLOGS_PATH, "utf-8"))

  const flagOnly = process.argv.includes("--check")
  let missingCount = 0
  let translatedCount = 0

  for (const blog of blogs) {
    const needsTitle = !blog.japaneseTitle
    const needsDescription = !blog.japaneseDescription
    const needsPoints = Array.isArray(blog.points) && blog.points.length > 0 && !blog.japanesePoints

    if (!needsTitle && !needsDescription && !needsPoints) continue

    missingCount += 1

    if (flagOnly) {
      console.log(`[missing] "${blog.title}"`)
      continue
    }

    console.log(`Translating: "${blog.title}"...`)

    if (needsTitle) {
      blog.japaneseTitle = await translateToJapanese(apiKey, blog.title, { isTitle: true })
    }
    if (needsDescription) {
      blog.japaneseDescription = await translateToJapanese(apiKey, blog.description)
    }
    if (needsPoints) {
      blog.japanesePoints = []
      for (const point of blog.points) {
        blog.japanesePoints.push(await translateToJapanese(apiKey, point))
      }
    }

    translatedCount += 1
  }

  if (flagOnly) {
    console.log(`\n${missingCount} post(s) missing Japanese translations.`)
    process.exit(missingCount > 0 ? 1 : 0)
  }

  if (translatedCount > 0) {
    fs.writeFileSync(BLOGS_PATH, JSON.stringify(blogs, null, 2) + "\n")
    console.log(`\nTranslated ${translatedCount} post(s). blogs.json updated.`)
  } else {
    console.log("\nAll blog posts already have Japanese translations.")
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
