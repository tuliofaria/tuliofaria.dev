// Subscribes an email to the Selva Mail newsletter list.
// Two-step flow per the Selva Mail REST API: upsert the contact by
// email, then attach its id to the list. Requires an ADMIN API key,
// so this runs server-side only.
import type { NextApiRequest, NextApiResponse } from 'next'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const email = typeof req.body?.email === 'string' ? req.body.email.trim() : ''
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'E-mail inválido' })
  }

  const base = process.env.SELVA_MAIL_API_URL
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
