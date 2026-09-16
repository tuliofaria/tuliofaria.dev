// Subscribes an email to the Selva Mail newsletter list.
// Two-step flow per the Selva Mail REST API: upsert the contact by
// email, then attach its id to the list. Requires an ADMIN API key,
// so this runs server-side only.
//
// Bot protection: honeypot field `company` (silent success if filled)
// and a simple in-memory IP rate limit. Cold starts reset the map —
// fine for this small site.
import type { NextApiRequest, NextApiResponse } from 'next'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const RATE_LIMIT_MAX = 5

type Bucket = { count: number; resetAt: number }
const rateByIp = new Map<string, Bucket>()

function clientIp(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  if (Array.isArray(forwarded) && forwarded[0]) {
    return forwarded[0].split(',')[0].trim()
  }
  const realIp = req.headers['x-real-ip']
  if (typeof realIp === 'string' && realIp.length > 0) return realIp
  return req.socket.remoteAddress || 'unknown'
}

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const bucket = rateByIp.get(ip)
  if (!bucket || now >= bucket.resetAt) {
    rateByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  bucket.count += 1
  return bucket.count > RATE_LIMIT_MAX
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Honeypot: bots fill hidden "company"; pretend success so they don't adapt.
  const company = typeof req.body?.company === 'string' ? req.body.company.trim() : ''
  if (company.length > 0) {
    return res.status(200).json({ ok: true })
  }

  if (rateLimited(clientIp(req))) {
    return res.status(429).json({ error: 'Muitas tentativas. Tente de novo em alguns minutos.' })
  }

  const email = typeof req.body?.email === 'string' ? req.body.email.trim() : ''
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'E-mail inválido' })
  }

  // Tolerate a trailing slash or an included /api/v1 in the configured URL —
  // either one turns the request path into a 404 on the API server.
  const base = (process.env.SELVA_MAIL_API_URL || '')
    .replace(/\/+$/, '')
    .replace(/\/api\/v1$/, '')
  const listId = process.env.SELVA_MAIL_LIST_ID
  const apiKey = process.env.SELVA_MAIL_API_KEY
  if (!base || !listId || !apiKey) {
    console.error('subscribe: SELVA_MAIL_* env vars not configured')
    return res.status(500).json({ error: 'Newsletter não configurada' })
  }

  const headers = { 'Content-Type': 'application/json', 'x-api-key': apiKey }
  try {
    const contactRes = await fetch(`${base}/api/v1/contacts`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, source: 'tuliofaria.dev' }),
    })
    if (!contactRes.ok) {
      console.error('subscribe: contact upsert failed', contactRes.status, await contactRes.text())
      return res.status(502).json({ error: 'Não foi possível assinar agora' })
    }
    const contact = await contactRes.json()

    const listRes = await fetch(`${base}/api/v1/lists/${listId}/contacts`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ contactIds: [contact.id] }),
    })
    if (!listRes.ok) {
      console.error('subscribe: list attach failed', listRes.status, await listRes.text())
      return res.status(502).json({ error: 'Não foi possível assinar agora' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('subscribe: request failed', err)
    return res.status(502).json({ error: 'Não foi possível assinar agora' })
  }
}
