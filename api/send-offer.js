import { Resend } from 'resend'
import Busboy from 'busboy'

const resend = new Resend(process.env.RESEND_API_KEY)

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY fehlt auf dem Server.' })
  }

  let parsed
  try {
    parsed = await parseRequest(req)
  } catch (error) {
    return res.status(400).json({ error: error?.message || 'Ungültige Formulardaten.' })
  }

  const { fields, files } = parsed

  const name = (fields.name ?? '').trim()
  const phone = (fields.phone ?? '').trim()
  const email = (fields.email ?? '').trim()
  const service = (fields.service ?? '').trim()
  const area = (fields.area ?? '').trim()
  const message = (fields.message ?? '').trim()

  if (!name) {
    return res.status(400).json({ error: 'Bitte Name ausfüllen.' })
  }

  const toEmail = process.env.RESEND_TO_EMAIL || 'terraclean@gmx.ch'
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Terraclean <onboarding@resend.dev>'

  const emailHtml = `
    <h2>Neue Angebotsanfrage</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone || '-')}</p>
    <p><strong>E-Mail:</strong> ${escapeHtml(email || '-')}</p>
    <p><strong>Reinigungsart:</strong> ${escapeHtml(service || '-')}</p>
    <p><strong>Fläche (m2):</strong> ${escapeHtml(area || '-')}</p>
    <p><strong>Nachricht:</strong></p>
    <p>${escapeHtml(message || '-').replace(/\n/g, '<br/>')}</p>
  `

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: 'Neue Angebotsanfrage Terraclean',
      replyTo: email || undefined,
      html: emailHtml,
      attachments: files.length
        ? files.map((file) => ({
            filename: file.filename,
            content: file.buffer,
          }))
        : undefined,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    return res.status(500).json({
      error: error?.message || 'E-Mail Versand fehlgeschlagen.',
    })
  }
}

async function parseRequest(req) {
  const contentType = String(req.headers['content-type'] || '').toLowerCase()

  if (contentType.includes('multipart/form-data')) {
    return await parseMultipart(req)
  }

  if (contentType.includes('application/json')) {
    const body = await readJson(req)
    return { fields: body ?? {}, files: [] }
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    const body = await readUrlEncoded(req)
    return { fields: body ?? {}, files: [] }
  }

  // Fallback: try multipart first (some proxies omit content-type),
  // otherwise return a clear error.
  try {
    return await parseMultipart(req)
  } catch {
    throw new Error('Formular konnte nicht gelesen werden. Bitte Seite neu laden und erneut senden.')
  }
}

function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const busboy = Busboy({
      headers: req.headers,
      limits: {
        files: 2,
        fileSize: 6 * 1024 * 1024,
      },
    })

    const fields = {}
    const files = []
    let finished = false

    busboy.on('field', (name, value) => {
      if (typeof name !== 'string') return
      if (name in fields) return
      fields[name] = value
    })

    busboy.on('file', (name, fileStream, info) => {
      const { filename, mimeType } = info || {}
      if (!filename) {
        fileStream.resume()
        return
      }

      const chunks = []
      let total = 0

      fileStream.on('data', (chunk) => {
        total += chunk.length
        chunks.push(chunk)
      })

      fileStream.on('limit', () => {
        fileStream.unpipe()
        fileStream.resume()
        reject(new Error('Bild ist zu gross (max 6 MB).'))
      })

      fileStream.on('end', () => {
        if (finished) return
        const safeName = sanitizeFilename(filename)
        files.push({
          field: name,
          filename: safeName,
          mimeType: mimeType || 'application/octet-stream',
          buffer: Buffer.concat(chunks, total),
        })
      })
    })

    busboy.on('filesLimit', () => {
      reject(new Error('Bitte maximal 2 Bilder hochladen.'))
    })

    busboy.on('error', (err) => reject(err))

    busboy.on('finish', () => {
      finished = true
      resolve({ fields, files })
    })

    req.pipe(busboy)
  })
}

function readRawBody(req, maxBytes = 1_000_000) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let total = 0

    req.on('data', (chunk) => {
      total += chunk.length
      if (total > maxBytes) {
        reject(new Error('Request ist zu gross.'))
        req.destroy()
        return
      }
      chunks.push(chunk)
    })

    req.on('end', () => resolve(Buffer.concat(chunks, total).toString('utf8')))
    req.on('error', reject)
  })
}

async function readJson(req) {
  const raw = await readRawBody(req)
  if (!raw) return {}
  try {
    return JSON.parse(raw)
  } catch {
    throw new Error('Ungültiges JSON.')
  }
}

async function readUrlEncoded(req) {
  const raw = await readRawBody(req)
  const params = new URLSearchParams(raw)
  const out = {}
  for (const [key, value] of params.entries()) {
    if (key in out) continue
    out[key] = value
  }
  return out
}

function sanitizeFilename(name) {
  return String(name)
    .replaceAll('\\', '_')
    .replaceAll('/', '_')
    .replace(/[^\w.\-()+\s]/g, '_')
    .slice(0, 120)
}

function escapeHtml(input) {
  return String(input)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}
