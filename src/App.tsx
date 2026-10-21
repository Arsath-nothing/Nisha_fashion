import { useState, type FormEvent } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  Scissors,
  ShieldCheck,
  Shirt,
  Sparkles,
  X,
} from 'lucide-react'
import { siteContent } from './content'
import { siteConfig } from './siteConfig'
import './App.css'

const currentYear = new Date().getFullYear()

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!siteConfig.contactEmail) {
      setFormMessage(siteContent.contact.notConfigured)
      return
    }

    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const organisation = String(formData.get('organisation') ?? '')
    const category = String(formData.get('category') ?? '')
    const quantity = String(formData.get('quantity') ?? '')
    const details = String(formData.get('details') ?? '')
    const subject = encodeURIComponent(`Uniform quote request — ${organisation || name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation || 'Not provided'}\nProduct: ${category || 'Not specified'}\nEstimated quantity: ${quantity || 'Not provided'}\n\nProject details:\n${details || 'Not provided'}`,
    )

    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`
    setFormMessage(siteContent.contact.emailOpening)
    form.reset()
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={`${siteContent.brand.name} ${siteContent.brand.category} home`}>
          <span className="wordmark-icon" aria-hidden="true">
            <Scissors size={19} strokeWidth={1.6} />
          </span>
          <span className="wordmark-copy">
            <strong>{siteContent.brand.name.toUpperCase()}</strong>
            <span>{siteContent.brand.category.toUpperCase()}</span>
          </span>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-quote" href="#contact" onClick={() => setMenuOpen(false)}>
            {siteContent.hero.quoteButton} <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label={siteContent.hero.imageAlt} style={{ backgroundImage: `url("${siteContent.images.hero}")` }} />
          <div className="hero-shade" />
          <div className="hero-content page-shell">
            <p className="eyebrow hero-eyebrow"><span /> {siteContent.hero.eyebrow}</p>
            <h1>{siteContent.hero.titleStart}<br /><em>{siteContent.hero.titleEmphasis}</em> {siteContent.hero.titleEnd}</h1>
            <p className="hero-description">{siteContent.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contact">
                {siteContent.hero.quoteButton} <ArrowRight size={17} />
              </a>
              <a className="button button-outline-light" href="#products">
                {siteContent.hero.productsButton}
              </a>
            </div>
            <a className="hero-scroll" href="#about">
              {siteContent.hero.scrollLabel} <ArrowDown size={14} />
            </a>
          </div>
          <div className="hero-index" aria-hidden="true">{siteContent.hero.index}</div>
        </section>

        <div className="brand-strip" aria-label={siteContent.brand.tagline}>
          {siteContent.brandStrip.map((item, index) => (
            <span key={`${item}-${index}`}>
              {index > 0 && <i />}
              {item}
            </span>
          ))}
        </div>

        <section className="section about-section page-shell" id="about">
          <div className="about-image-wrap">
            <img
              src={siteContent.images.about}
              alt={siteContent.about.imageAlt}
              loading="lazy"
            />
            <div className="image-caption">
              <span className="caption-mark"><Scissors size={19} /></span>
              <span>{siteContent.about.imageCaption}<br /><strong>{siteContent.about.imageCaptionEmphasis}</strong></span>
            </div>
            <span className="image-index">{siteContent.about.imageIndex}</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span /> {siteContent.about.eyebrow}</p>
            <h2>{siteContent.about.headingStart}<br />{siteContent.about.headingBeforeEmphasis}<em>{siteContent.about.headingEmphasis}</em></h2>
            <p className="section-intro">{siteContent.about.description}</p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon"><Shirt size={18} /></span>
                <div><strong>{siteContent.about.features[0].title}</strong><p>{siteContent.about.features[0].description}</p></div>
              </div>
              <div className="feature-item">
                <span className="feature-icon"><ShieldCheck size={18} /></span>
                <div><strong>{siteContent.about.features[1].title}</strong><p>{siteContent.about.features[1].description}</p></div>
              </div>
              <div className="feature-item">
                <span className="feature-icon"><Sparkles size={18} /></span>
                <div><strong>{siteContent.about.features[2].title}</strong><p>{siteContent.about.features[2].description}</p></div>
              </div>
            </div>
            <a className="text-link" href="#process">{siteContent.about.link} <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span /> {siteContent.products.eyebrow}</p>
                <h2>{siteContent.products.headingStart}<em>{siteContent.products.headingEmphasis}</em></h2>
              </div>
              <p className="section-heading-note">{siteContent.products.description}</p>
            </div>
            <div className="product-grid">
              {siteContent.products.items.map((product) => (
                <article className="product-card" key={product.number}>
                  <a className="product-image" href="#contact" aria-label={`Enquire about ${product.title}`}>
                    <img src={product.image} alt={product.alt} loading="lazy" />
                    <span className="product-number">{product.number}</span>
                    <span className="product-arrow"><ArrowUpRight size={18} /></span>
                  </a>
                  <div className="product-card-copy">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <a href="#contact">{siteContent.products.enquireLabel} <ArrowRight size={14} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="industries-section" id="industries">
          <div className="industries-image" role="img" aria-label="A team at work in a production studio" style={{ backgroundImage: `linear-gradient(0deg, rgba(20, 20, 19, 0.12), rgba(20, 20, 19, 0.12)), url("${siteContent.images.industries}")` }} />
          <div className="industries-panel">
            <p className="eyebrow eyebrow-light"><span /> {siteContent.industries.eyebrow}</p>
            <h2>{siteContent.industries.headingStart}<br /><em>{siteContent.industries.headingEmphasis}</em></h2>
            <p className="industries-intro">{siteContent.industries.description}</p>
            <div className="industry-list">
              {siteContent.industries.items.map((industry) => (
                <a href="#contact" className="industry-item" key={industry.title}>
                  <span className="industry-check"><Check size={13} /></span>
                  <span><strong>{industry.title}</strong><small>{industry.detail}</small></span>
                  <ArrowUpRight size={15} className="industry-arrow" />
                </a>
              ))}
            </div>
            <a className="button button-gold" href="#contact">{siteContent.industries.button} <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="section process-section page-shell" id="process">
          <div className="process-top">
            <div>
              <p className="eyebrow"><span /> {siteContent.process.eyebrow}</p>
              <h2>{siteContent.process.headingStart}<br />{siteContent.process.headingBeforeEmphasis}<em>{siteContent.process.headingEmphasis}</em></h2>
            </div>
            <p className="section-heading-note">{siteContent.process.description}</p>
          </div>
          <div className="process-grid">
            {siteContent.process.steps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <span className="step-rule" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="page-shell">
            <div className="section-heading gallery-heading">
              <div>
                <p className="eyebrow"><span /> {siteContent.gallery.eyebrow}</p>
                <h2>{siteContent.gallery.headingStart}<em>{siteContent.gallery.headingEmphasis}</em></h2>
              </div>
              <span className="gallery-note">{siteContent.gallery.note}</span>
            </div>
            <div className="gallery-grid">
              {siteContent.gallery.images.map((item, index) => (
                <figure className={`gallery-item gallery-item-${index + 1}`} key={item.label}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <figcaption><span>0{index + 1}</span>{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-band">
          <div className="page-shell quote-band-inner">
            <div>
              <p className="eyebrow eyebrow-light"><span /> {siteContent.callToAction.eyebrow}</p>
              <h2>{siteContent.callToAction.headingStart}<br /><em>{siteContent.callToAction.headingEmphasis}</em></h2>
            </div>
            <a className="button button-gold" href="#contact">{siteContent.callToAction.button} <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="section contact-section page-shell" id="contact">
          <div className="contact-copy">
            <p className="eyebrow"><span /> {siteContent.contact.eyebrow}</p>
            <h2>{siteContent.contact.headingStart}<br /><em>{siteContent.contact.headingEmphasis}</em></h2>
            <p className="section-intro">{siteContent.contact.description}</p>
            <div className="contact-note">
              <span className="contact-note-icon"><ChevronDown size={17} /></span>
              <p>{siteContent.contact.note}</p>
            </div>
            {siteConfig.contactEmail && (
              <a className="contact-email" href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail} <ArrowUpRight size={15} />
              </a>
            )}
          </div>
          <form className="quote-form" onSubmit={handleQuoteSubmit}>
            <div className="form-row">
              <label>
                {siteContent.contact.nameLabel} <span>*</span>
                <input name="name" type="text" placeholder={siteContent.contact.namePlaceholder} autoComplete="name" required />
              </label>
              <label>
                {siteContent.contact.emailLabel} <span>*</span>
                <input name="email" type="email" placeholder={siteContent.contact.emailPlaceholder} autoComplete="email" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                {siteContent.contact.organisationLabel}
                <input name="organisation" type="text" placeholder={siteContent.contact.organisationPlaceholder} autoComplete="organization" />
              </label>
              <label>
                {siteContent.contact.categoryLabel}
                <select name="category" defaultValue="">
                  <option value="" disabled>{siteContent.contact.categoryPlaceholder}</option>
                  {siteContent.products.items.map((product) => (
                    <option key={product.number} value={product.title}>{product.title}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              {siteContent.contact.quantityLabel}
              <input name="quantity" type="text" placeholder={siteContent.contact.quantityPlaceholder} />
            </label>
            <label>
              {siteContent.contact.detailsLabel}
              <textarea name="details" rows={3} placeholder={siteContent.contact.detailsPlaceholder} />
            </label>
            <div className="form-submit-row">
              <button className="button button-dark" type="submit">{siteContent.contact.submitButton} <ArrowRight size={16} /></button>
              <span>{siteContent.contact.requiredNote}</span>
            </div>
            <p className="form-message" aria-live="polite">{formMessage}</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-main">
          <div className="footer-brand">
            <a className="wordmark wordmark-footer" href="#home">
              <span className="wordmark-icon" aria-hidden="true"><Scissors size={19} strokeWidth={1.6} /></span>
              <span className="wordmark-copy"><strong>{siteContent.brand.name.toUpperCase()}</strong><span>{siteContent.brand.category.toUpperCase()}</span></span>
            </a>
            <p>{siteContent.brand.tagline}</p>
          </div>
          <div className="footer-links">
            <strong>{siteContent.footer.exploreLabel}</strong>
            <a href="#about">{siteContent.footer.aboutLink}</a>
            <a href="#products">Products</a>
            <a href="#industries">Industries</a>
            <a href="#process">{siteContent.footer.processLink}</a>
          </div>
          <div className="footer-links">
            <strong>{siteContent.footer.talkLabel}</strong>
            <a href="#contact">{siteContent.footer.quoteLink}</a>
            {siteConfig.contactEmail && <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>}
            {siteConfig.phone && <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`}>{siteConfig.phone}</a>}
          </div>
          <a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={19} /></a>
        </div>
        <div className="footer-bottom page-shell">
          <span>© {currentYear} {siteContent.brand.name} {siteContent.brand.category}</span>
          <span>{siteContent.brand.tagline}</span>
        </div>
      </footer>
    </>
  )
}

export default App
