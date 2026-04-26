import { useState } from 'react'

const services = [
  {
    icon: '▦',
    title: 'Terrassenreinigung',
    text: 'Entfernung von Algen, Moos und hartnackigem Schmutz auf Stein- und Holzterrassen.',
  },
  {
    icon: '🚗',
    title: 'Einfahrten & Wege',
    text: 'Tiefenreinigung von Pflastersteinen, Beton und Asphalt inklusive Fugenbereich.',
  },
  {
    icon: '✧',
    title: 'Zusatzservice: Verfugung & Imprägnierung',
    text: 'Auf Wunsch verfugen wir den Boden nach der Reinigung neu mit Fugensand und imprägnieren die Fläche, damit sie länger sauber bleibt.',
  },
  {
    icon: '△',
    title: 'Treppen & Anlagen',
    text: 'Schonende Reinigung von Aussentreppen, Stufen und anspruchsvollen Aussenflächen.',
  },
  {
    icon: '⌂',
    title: 'Wände & Mauern',
    text: 'Entfernung von Witterungsspuren, Algen und Verfärbungen an Fassaden und Mauern.',
  },
  {
    icon: '☼',
    title: 'Dachfensterreinigung',
    text: 'Streifenfreie Reinigung für klare Sicht und mehr natürliches Licht in Ihren Räumen.',
  },
]

const benefits = [
  { icon: '🛡', title: 'Gründlich & Sauber', text: 'Porentiefe Reinigung ohne Rückstände.' },
  { icon: '◷', title: 'Schnelle Reaktionszeit', text: 'Kurzfristige Termine und flexible Ausführung.' },
  { icon: '❃', title: 'Umweltfreundlich', text: 'Wasserschonend und materialgerecht gereinigt.' },
  { icon: '⚙', title: 'Faire Preise', text: 'Transparente Kosten ohne Überraschungen.' },
]

const processSteps = [
  { step: '01', title: 'Anfrage', text: 'Kontaktieren Sie uns unverbindlich per Formular, E-Mail oder Telefon.' },
  { step: '02', title: 'Kostenloses Angebot', text: 'Wir schätzen den Aufwand und erstellen eine faire Offerte.' },
  { step: '03', title: 'Reinigung', text: 'Zum vereinbarten Termin reinigen wir schnell und gründlich.' },
  { step: '04', title: 'Zufriedenheit', text: 'Sie prüfen das Ergebnis, bis Sie 100% zufrieden sind.' },
]

const faq = [
  {
    question: 'Wie berechnen sich die Preise?',
    answer:
      'Der Preis hängt von Fläche (m²), Material, Verschmutzung, Zugänglichkeit und dem gewünschten Ergebnis ab. Für eine genaue Einschätzung reicht meist eine kurze Beschreibung plus 1–2 Fotos – danach erhalten Sie eine transparente Offerte.',
  },
  {
    question: 'Wo genau bieten Sie Ihre Leistungen an?',
    answer:
      'Wir sind hauptsächlich im Kanton Zug sowie in Teilen von Aargau und Zürich unterwegs. Wenn Sie unsicher sind, schicken Sie uns kurz Ihre Adresse – wir geben Ihnen schnell Bescheid.',
  },
  {
    question: 'Verwenden Sie chemische Reinigungsmittel?',
    answer:
      'In vielen Fällen reicht Wasser in Kombination mit der richtigen Technik aus. Falls ein Reinigungsmittel sinnvoll ist (z.B. bei hartnäckigen Belägen), stimmen wir das materialgerecht ab und informieren Sie im Voraus.',
  },
  {
    question: 'Wie lange dauert eine Terrassenreinigung?',
    answer:
      'Das hängt von Fläche, Material und Verschmutzung ab. Nach Sichtung Ihrer Angaben/Fotos können wir den Zeitaufwand gut einschätzen und nennen Ihnen eine realistische Dauer.',
  },
  {
    question: 'Wird meine Holzterrasse durch den Hochdruck beschädigt?',
    answer:
      'Mit falscher Technik kann Holz Schaden nehmen. Wir arbeiten materialschonend und passen Vorgehen, Druck und Zubehör an die Oberfläche an, um effektiv zu reinigen, ohne unnötige Belastung.',
  },
  {
    question: 'Muss ich während der Reinigung zu Hause sein?',
    answer:
      'Nicht zwingend. Wichtig ist, dass wir Zugang zur Fläche haben. Falls Wasser/Strom benötigt wird, klären wir das im Vorfeld. Nach Abschluss geben wir Ihnen eine kurze Rückmeldung.',
  },
]

const compareItems = [
  {
    title: 'Aussentreppe in Beton',
    text: 'Schwarze Algenbeläge auf Treppe und Wand vollständig beseitigt.',
    before: 'assets/gallery/stairs-before.png',
    after: 'assets/gallery/stairs-after.png',
  },
  {
    title: 'Lange Sichtbetonwand',
    text: 'Algen, Moos und Verwitterungsspuren gründlich entfernt.',
    before: 'assets/gallery/wall-before.png',
    after: 'assets/gallery/wall-after.png',
  },
  {
    title: 'Betonmauer mit Pflasterung',
    text: 'Verschmutzte Mauer und Bodenflächen wieder wie neu.',
    before: 'assets/gallery/parking-before.png',
    after: 'assets/gallery/parking-after.png',
  },
]

const practiceImages = [
  {
    src: 'assets/gallery/terrace-half-clean.png',
    alt: 'Terrassenbild aus der Praxis',
    caption: 'Reinigung von Terrassenplatten',
  },
  {
    src: 'assets/gallery/practice-pressure-cleaning-stone.png',
    alt: 'Reinigung von Steinplatten',
    caption: 'Reinigung von Plattenwegen und Aussenwegen.',
  },
  {
    src: 'assets/gallery/practice-pressure-cleaning-wood.png',
    alt: 'Reinigung von Holzterrasse',
    caption: 'Schonende Hochdruckreinigung von Holzoberflächen.',
  },
]

function CompareCard({ item, baseUrl }) {
  const [position, setPosition] = useState(50)

  return (
    <article className="card compare">
      <div className="compare-image">
        <img src={`${baseUrl}${item.before}`} alt={`${item.title} Vorher`} />
        <div className="compare-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <img src={`${baseUrl}${item.after}`} alt={`${item.title} Nachher`} />
        </div>
        <span className="tag left">Vorher</span>
        <span className="tag right">Nachher</span>
        <div className="divider" style={{ left: `${position}%` }} />
        <div className="slider-handle" style={{ left: `${position}%` }}>
          <span>↔</span>
        </div>
        <input
          className="compare-range"
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label={`${item.title} Vorher Nachher Slider`}
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  )
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    area: '',
    message: '',
  })
  const [imageError, setImageError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState({ type: '', message: '' })

  const logoSrc = `${import.meta.env.BASE_URL}assets/logo-v2.png`
  const phoneIconSrc = `${import.meta.env.BASE_URL}assets/icon-phone.png`
  const mailIconSrc = `${import.meta.env.BASE_URL}assets/icon-mail.png`
  const locationIconSrc = `${import.meta.env.BASE_URL}assets/icon-location.png`

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (event) => {
    const fileCount = event.target.files?.length ?? 0

    if (fileCount === 0) {
      setImageError('Bitte laden Sie mindestens 1 Bild hoch.')
      return
    }

    if (fileCount > 2) {
      setImageError('Bitte maximal 2 Bilder hochladen.')
      event.target.value = ''
      return
    }

    setImageError('')
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitState({ type: '', message: '' })
    setImageError('')

    const form = event.currentTarget
    const fileInput = form.querySelector('input[type="file"][name="bilder"]')
    const files = fileInput?.files ? Array.from(fileInput.files) : []

    if (files.length < 1) {
      setIsSubmitting(false)
      setImageError('Bitte laden Sie mindestens 1 Bild hoch.')
      return
    }

    if (files.length > 2) {
      setIsSubmitting(false)
      setImageError('Bitte maximal 2 Bilder hochladen.')
      return
    }

    const data = new FormData()
    Object.entries(formData).forEach(([key, value]) => data.append(key, value))
    files.forEach((file) => data.append('bilder', file))

    fetch('/api/send-offer', { method: 'POST', body: data })
      .then(async (response) => {
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data?.error || 'Die Anfrage konnte nicht gesendet werden.')
        }

        setSubmitState({ type: 'success', message: 'Danke! Ihre Anfrage wurde erfolgreich gesendet.' })
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          area: '',
          message: '',
        })
        if (fileInput) fileInput.value = ''
      })
      .catch((error) => {
        setSubmitState({
          type: 'error',
          message: error.message || 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container nav">
          <a href="#hero" className="brand">
            <img src={logoSrc} alt="Terraclean Services" />
          </a>
          <nav>
            <a href="#leistungen">Leistungen</a>
            <a href="#ablauf">Ablauf</a>
            <a href="#galerie">Galerie</a>
            <a href="#über-uns">Über uns</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#kontakt" className="btn btn-sm">
            Angebot anfordern
          </a>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="pill">Ihr Spezialist in Zug, Aargau, Zürich & Luzern</span>
          <h1>
            Frischer Glanz für
            <span> Ihre Aussenanlagen.</span>
          </h1>
          <p>
            Professionelle Hochdruckreinigung für Terrassen, Einfahrten und Wege. Gründlich,
            zuverlässig und zu fairen Preisen.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#kontakt">
              Kostenloses Angebot anfordern
            </a>
            <a className="btn btn-outline" href="#leistungen">
              Unsere Leistungen entdecken
            </a>
          </div>
        </div>
      </section>

      <section id="leistungen" className="section">
        <div className="container">
          <h2>Unsere Leistungen</h2>
          <p className="section-subtitle">
            Mit professionellem Equipment und dem Auge für Details bringen wir Ihre Aussenanlagen
            wieder zum Strahlen.
          </p>
          <div className="grid two">
            {services.map((item) => (
              <article className="card service" key={item.title}>
                <h3 className="service-title">
                  <span className="service-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="über-uns" className="section">
        <div className="container split">
          <div className="image-box" />
          <div>
            <h2>Über Terraclean Services</h2>
            <p>
              Wir sind Ihr Dienstleistungsunternehmen für professionelle Hochdruck- und
              Aussenreinigung in der Region Zug, Aargau, Zürich und Luzern.
            </p>
            <ul className="check-list">
              <li>Professionelles Equipment auf höchstem Niveau</li>
              <li>Termintreue und verbindliche Ausführung</li>
              <li>Transparente Festpreise ohne versteckte Kosten</li>
              <li>Materialschonende, fachgerechte Arbeitsweise</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2>Warum Terraclean?</h2>
          <p className="section-subtitle">
            Professionelles Equipment, fachgerechte Ausführung und ein verbindlicher Service.
          </p>
          <div className="grid four">
            {benefits.map((item) => (
              <article className="card feature" key={item.title}>
                <h3 className="feature-title">
                  <span className="feature-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie" className="section">
        <div className="container">
          <h2>Vorher / Nachher</h2>
          <p className="section-subtitle">
            Bilder sagen mehr als Worte. Ziehen Sie den Regler und überzeugen Sie sich selbst.
          </p>
          <div className="grid three">
            {compareItems.map((item) => (
              <CompareCard key={item.title} item={item} baseUrl={import.meta.env.BASE_URL} />
            ))}
          </div>
        </div>
      </section>

      <section id="bilder" className="section">
        <div className="container">
          <h2>Weitere Bilder aus unserer Praxis</h2>
          <p className="section-subtitle">
            Hier zeigen wir zusätzliche Eindrücke von Projekten, die nicht als Vorher/Nachher-Vergleich dargestellt sind.
          </p>
          <div className="grid three image-gallery">
            {practiceImages.map((image) => (
              <article className="card image-card" key={image.src}>
                <img src={`${import.meta.env.BASE_URL}${image.src}`} alt={image.alt} />
                <p>{image.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ablauf" className="section">
        <div className="container">
          <h2>So arbeiten wir</h2>
          <p className="section-subtitle">
            Ein unkomplizierter Prozess von der ersten Anfrage bis zur blitzsauberen Terrasse.
          </p>
          <div className="grid four steps">
            {processSteps.map((item) => (
              <article className="step" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <h2>Das sagen unsere Kunden</h2>
          <div className="grid three">
            <article className="card">
              <p>
                "Unsere Einfahrt sah aus wie neu. Sehr pünktlich, professionell und der Preis war
                im Vorfeld klar abgesprochen."
              </p>
              <strong>Markus K.</strong>
            </article>
            <article className="card">
              <p>
                "Die Holzterrasse war über die Jahre grau und rutschig geworden. Das Ergebnis ist
                sensationell."
              </p>
              <strong>Sabine H.</strong>
            </article>
            <article className="card">
              <p>
                "Für unsere Hausverwaltung ein echter Gewinn. Unkomplizierte Kommunikation und
                saubere Arbeit."
              </p>
              <strong>ImmoVerwaltung S.</strong>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container faq">
          <h2>Häufige Fragen</h2>
          <p className="section-subtitle">Alles, was Sie vorab wissen müssen.</p>
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="kontakt" className="section contact">
        <div className="container split">
          <div>
            <h2>Lassen Sie uns anpacken.</h2>
            <p>
              Bereit für eine saubere Terrasse? Fordern Sie jetzt Ihr kostenloses, unverbindliches
              Angebot an.
            </p>
            <div className="contact-list">
              <div className="contact-item">
                <img className="contact-icon" src={phoneIconSrc} alt="Telefon" />
                <p>
                  <strong>Telefon:</strong> 078 826 99 11
                </p>
              </div>
              <div className="contact-item">
                <img className="contact-icon" src={mailIconSrc} alt="E-Mail" />
                <p>
                  <strong>E-Mail:</strong> terraclean@gmx.ch
                </p>
              </div>
              <div className="contact-item">
                <img className="contact-icon" src={locationIconSrc} alt="Einsatzgebiet" />
                <p>
                  <strong>Einsatzgebiet:</strong> Zug, Aargau, Zürich, Luzern und Umgebung
                </p>
              </div>
            </div>
          </div>
          <form className="card form" onSubmit={handleFormSubmit}>
            <h3>Angebot anfordern</h3>
            <div className="form-grid">
              <input name="name" placeholder="Name" value={formData.name} onChange={handleFormChange} />
              <input
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleFormChange}
              />
            </div>
            <input name="email" placeholder="E-Mail" value={formData.email} onChange={handleFormChange} />
            <div className="form-grid">
              <select name="service" value={formData.service} onChange={handleFormChange}>
                <option value="" disabled>
                  Was soll gereinigt werden?
                </option>
                <option>Terrasse</option>
                <option>Einfahrt</option>
                <option>Treppen & Anlagen</option>
                <option>Wände & Mauern</option>
              </select>
              <input name="area" placeholder="Fläche (m2)" value={formData.area} onChange={handleFormChange} />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="bilder">
                Bilder der Fläche (1–2 Bilder)
              </label>
              <input
                id="bilder"
                type="file"
                name="bilder"
                accept="image/*"
                multiple
                required
                onChange={handleImageChange}
              />
              {imageError ? <p className="form-status error">{imageError}</p> : null}
            </div>
            <textarea
              name="message"
              rows={5}
              placeholder="Nachricht & Details"
              value={formData.message}
              onChange={handleFormChange}
            />
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Wird gesendet...' : 'Jetzt kostenfrei anfragen'}
            </button>
            {submitState.message ? (
              <p className={`form-status ${submitState.type}`}>{submitState.message}</p>
            ) : null}
          </form>
        </div>
      </section>

      <a
        className="whatsapp"
        href="https://wa.me/41788269911?text=Hallo%20Terraclean%2C%20ich%20möchte%20ein%20kostenloses%20Angebot%20anfordern."
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App