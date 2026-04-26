import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY fehlt auf dem Server.' })
  }

  const {
    name = '',
    phone = '',
    email = '',
    service = '',
    area = '',
    message = '',
  } = req.body || {}

  if (!name || !phone) {
    return res.status(400).json({ error: 'Bitte mindestens Name und Telefon ausfüllen.' })
  }

  const toEmail = process.env.RESEND_TO_EMAIL || 'terraclean@gmx.ch'
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Terraclean <onboarding@resend.dev>'

  const emailHtml = `
    <h2>Neue Angebotsanfrage</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
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
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    return res.status(500).json({
      error: error?.message || 'E-Mail Versand fehlgeschlagen.',
    })
  }
}

function escapeHtml(input) {
  return String(input)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}
