// Loads essays from content/ensaios/*.md (server-side only — use in getStaticProps)
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const ENSAIOS_DIR = path.join(process.cwd(), 'content', 'ensaios')

export interface IssueMeta {
  slug: string
  order: number
  n: string
  title: string
  excerpt: string
  tags: string[]
  date: string
  read: string
}

export interface Issue extends IssueMeta {
  content: string
}

export function getAllIssues(): Issue[] {
  return fs
    .readdirSync(ENSAIOS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const slug = f.replace(/\.md$/, '')
      const { data, content } = matter(fs.readFileSync(path.join(ENSAIOS_DIR, f), 'utf8'))
      return {
        slug,
        order: data.n as number,
        n: `N°${String(data.n).padStart(2, '0')}`,
        title: data.title as string,
        excerpt: data.excerpt as string,
        tags: (data.tags || []) as string[],
        date: data.date as string,
        read: data.read as string,
        content: content.trim(),
      }
    })
    .sort((a, b) => b.order - a.order)
}

export function getAllIssueMetas(): IssueMeta[] {
  return getAllIssues().map(({ content, ...meta }) => meta)
}
