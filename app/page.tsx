import Image from "next/image";

const trustItems = [
  {
    title: "Insurance Appraisals",
    copy: "Replacement value documentation for policies, renewals, and insurer records.",
    image: "/sparkling-diamonds-insurance-appraisal.jpg",
    alt: "Sparkling diamonds for insurance jewelry appraisal",
  },
  {
    title: "Estate Jewelry",
    copy: "Discreet valuations for inherited jewelry, estates, executors, and beneficiaries.",
    image: "/tanzanite-estate-gemstone-appraisal.png",
    alt: "Tanzanite gemstone for estate jewelry appraisal",
  },
  {
    title: "Antique Jewelry",
    copy: "Period-sensitive evaluation of condition, craftsmanship, age, and provenance.",
    image: "/ruby-antique-jewelry-appraisal.png",
    alt: "Ruby gemstone for antique jewelry appraisal",
  },
  {
    title: "Diamond Appraisals",
    copy: "Careful review of diamond jewelry, engagement rings, and loose stones.",
    image: "/macro-diamond-certified-jewelry-appraisal.png",
    alt: "Macro diamond for certified diamond appraisal",
  },
  {
    title: "Watch Appraisals",
    copy: "Documentation for modern, vintage, and collectible fine watches.",
    image: "/blue-zircon-watch-appraisal.png",
    alt: "Blue gemstone detail for fine watch appraisal",
  },
  {
    title: "Resale Consultations",
    copy: "Market-informed guidance for private resale, consignment, and collection planning.",
    image: "/luxury-gemstones-resale-consultation.jpeg",
    alt: "Luxury gemstones for resale consultation",
  },
];

const reasons = [
  {
    title: "Independent & Unbiased",
    copy: "Objective valuations prepared without retail sales pressure.",
    gem: "diamond",
  },
  {
    title: "Confidential & Professional",
    copy: "Private appointments and careful handling of client information.",
    gem: "ruby",
  },
  {
    title: "Certified Expertise",
    copy: "Reports prepared by a Graduate Gemologist with GIA training in diamonds and colored gemstones.",
    gem: "emerald",
  },
  {
    title: "Accurate Market Valuations",
    copy: "Values informed by market context, item condition, and comparable demand.",
    gem: "sapphire",
  },
  {
    title: "Detailed Documentation",
    copy: "Clear descriptions, photographs, measurements, and valuation notes.",
    gem: "amethyst",
  },
  {
    title: "Personalized Consultations",
    copy: "Guidance shaped around insurance, estate, resale, or family needs.",
    gem: "topaz",
  },
];

const featuredServices = [
  {
    title: "Antique Jewelry Appraisals",
    href: "/antique-jewelry-appraisals",
    image: "/ruby-antique-jewelry-appraisal.png",
    alt: "Ruby gemstone for antique jewelry appraisal",
  },
  {
    title: "Diamond Appraisals",
    href: "/diamond-appraisals",
    image: "/macro-diamond-certified-jewelry-appraisal.png",
    alt: "Macro diamond closeup for certified diamond appraisal",
  },
  {
    title: "Estate Jewelry Appraisals",
    href: "/estate-jewelry-appraisals",
    image: "/emerald-gemstone-estate-jewelry-appraisal.png",
    alt: "Emerald gemstone for estate jewelry appraisal",
  },
  {
    title: "Insurance Jewelry Appraisals",
    href: "/insurance-jewelry-appraisals",
    image: "/sparkling-diamonds-insurance-appraisal.jpg",
    alt: "Sparkling diamond closeup for insurance jewelry appraisal",
  },
  {
    title: "Fine Watch Appraisals",
    href: "/fine-watch-appraisals",
    image: "/blue-zircon-watch-appraisal.png",
    alt: "Blue gemstone detail for fine watch appraisal",
  },
  {
    title: "Divorce / Equitable Distribution",
    href: "/divorce-equitable-distribution",
    image: "/garnet-equitable-distribution-appraisal.jpg",
    alt: "Garnet gemstone for equitable distribution appraisal",
  },
];

const processItems = [
  "Private intake and item review",
  "Gemological examination and documentation",
  "Market analysis and valuation research",
  "Clear appraisal report delivery",
];

const faqs = [
  {
    question: "How long does an appraisal take?",
    answer:
      "Most single-item appointments take 30 to 60 minutes. Larger collections may require additional review time and a scheduled delivery date for completed documentation.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Yes. Appointments allow each appraisal to be handled privately, with enough time reserved for examination, photographs, measurements, and questions.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring the jewelry or watch, previous appraisals, grading reports, receipts, insurance records, provenance notes, and any supporting documentation you may have.",
  },
  {
    question: "How often should jewelry be appraised?",
    answer:
      "For insurance purposes, many clients update appraisals every three to five years, or sooner after major market changes, restoration, inheritance, or acquisition.",
  },
  {
    question: "Are appraisals confidential?",
    answer:
      "Yes. Client details, collection information, values, and supporting documents are handled with discretion and professional confidentiality.",
  },
];

const testimonials = [
  {
    quote:
      "The appraisal was thoughtful, precise, and beautifully documented. Every step felt private and professional.",
    name: "Private Collector",
  },
  {
    quote:
      "A calm, expert process for an estate collection that needed both sensitivity and accuracy.",
    name: "Estate Client",
  },
  {
    quote:
      "The report gave our insurer exactly what was needed while preserving the discretion we wanted.",
    name: "Insurance Client",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Appraisals for Jewelry",
            url: "https://appraisalsforjewelry.com",
            founder: {
              "@type": "Person",
              name: "John Codianni",
              jobTitle: "Owner and Certified Diamond and Gemstone Appraiser",
            },
            description:
              "Professional independent jewelry appraisals by John Codianni, Graduate Gemologist and certified diamond and gemstone appraiser, for diamonds, estate jewelry, antique pieces, insurance valuations, and fine collections.",
            areaServed: "United States",
            serviceType: [
              "jewelry appraisal",
              "certified jewelry appraiser",
              "diamond appraisal",
              "antique jewelry appraisal",
              "estate jewelry appraisal",
              "insurance jewelry appraisal",
            ],
          }),
        }}
      />

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Appraisals for Jewelry home">
          <span className="brand-mark">AFJ</span>
          <span>appraisalsforjewelry.com</span>
        </a>
        <nav className="nav-links" aria-label="Main menu">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Book
        </a>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/hero-black-sapphire-jewelry-appraisal.png"
            alt="Black sapphire gemstone macro for certified jewelry appraisal"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-content reveal">
            <p className="eyebrow">John Codianni / Graduate Gemologist</p>
            <h1 id="hero-title">
              Certified Jewelry Appraisals with Precision &amp; Discretion
            </h1>
            <p className="hero-copy">
              Independent appraisals for diamonds, estate jewelry, antique
              pieces, insurance valuations, and fine collections.
            </p>
            <div className="hero-actions" aria-label="Appointment actions">
              <a className="button button-primary" href="#contact">
                Schedule an Appointment
              </a>
              <a className="button button-secondary" href="#contact">
                Request an Appraisal
              </a>
            </div>
          </div>
          <div className="hero-proof reveal" aria-label="Professional credentials">
            <span>Certified Diamond and Gemstone Appraiser</span>
            <span>GIA trained in diamonds and colored gemstones</span>
            <span>Insurance / Estate / Antique / Diamond</span>
          </div>
        </section>

        <section className="section trust-section" id="services" aria-labelledby="trust-title">
          <div className="split-heading reveal">
            <div>
              <p className="eyebrow">Trusted Valuation Services</p>
              <h2 id="trust-title">Private appraisal expertise for meaningful jewelry.</h2>
            </div>
            <p>
              Formal reports, careful examination, and private consultations led
              by John Codianni, Owner and Certified Diamond and Gemstone
              Appraiser.
            </p>
          </div>

          <div className="service-grid reveal">
            {trustItems.map((item) => (
              <article className="service-card" key={item.title}>
                <div className="service-image">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section editorial-section dark-section" aria-labelledby="why-title">
          <div className="editorial-intro reveal">
            <p className="eyebrow">Why Choose Us</p>
            <h2 id="why-title">
              A refined appraisal process for valuables that require care.
            </h2>
            <p>
              Each valuation is handled with the calm privacy of a boutique
              consultancy and the rigor expected for important diamonds,
              estate jewelry, antique pieces, and fine collections.
            </p>
            <div className="editorial-image">
              <Image
                src="/loose-gemstones-appraisal.png"
                alt="Loose gemstones on a dark background for jewelry appraisal"
                fill
                sizes="(max-width: 1020px) 100vw, 38vw"
              />
            </div>
          </div>
          <div className="reason-grid reveal">
            {reasons.map((reason) => (
              <article className="reason" key={reason.title}>
                <span
                  className={`gem-bullet gem-${reason.gem}`}
                  aria-hidden="true"
                />
                <h3>{reason.title}</h3>
                <p>{reason.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section featured-section" aria-labelledby="featured-title">
          <div className="section-heading light-heading reveal">
            <p className="eyebrow">Featured Services</p>
            <h2 id="featured-title">Specialized Appraisal Reports</h2>
            <p>
              Image-led service pathways for jewelry appraisal, certified
              jewelry appraiser expertise, diamond appraisal, antique jewelry
              appraisal, estate jewelry appraisal, and insurance jewelry
              appraisal needs.
            </p>
          </div>

          <div className="image-grid reveal">
            {featuredServices.map((service) => (
              <a className="image-card" href={service.href} key={service.title}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <span>{service.title}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="gem-divider" aria-label="Private market guidance">
          <Image
            src="/luxury-gemstones-resale-consultation.jpeg"
            alt="Luxury gemstone macro photography for resale consultation"
            fill
            sizes="100vw"
          />
          <div className="gem-divider-overlay" />
          <div className="gem-divider-content reveal">
            <p className="eyebrow">Private Market Guidance</p>
            <h2>
              Valuations for fine collections, rare gemstones, and important
              jewelry.
            </h2>
            <p>
              Clear market context for insurance, estate planning, resale
              decisions, equitable distribution, and personal knowledge.
            </p>
          </div>
        </section>

        <section
          className="section about-section dark-section"
          id="about"
          aria-labelledby="about-title"
        >
          <figure className="portrait-panel reveal">
            <Image
              src="/pearl-fine-jewelry-appraisal.png"
              alt="Pearl closeup for fine jewelry appraisal consultation"
              width={2400}
              height={2400}
              sizes="(max-width: 900px) 100vw, 42vw"
            />
            <figcaption>Confidential consultations for private clients, estates, insurers, and collectors.</figcaption>
          </figure>
          <div className="about-copy reveal">
            <p className="eyebrow">Discreet and Honest Evaluations</p>
            <h2 id="about-title">John Codianni</h2>
            <p className="credential-title">
              Owner and Certified Diamond and Gemstone Appraiser
            </p>
            <p>
              Every jewelry appraisal is handled with professionalism,
              discretion, and integrity. Clients receive honest, unbiased
              evaluations supported by industry expertise and careful market
              analysis.
            </p>
            <p>
              Whether assessing diamonds, estate jewelry, antique pieces, or
              fine gemstone collections, each consultation is conducted with
              complete confidentiality and attention to detail.
            </p>
            <p>
              Our goal is to provide clear, accurate valuations clients can
              trust for insurance, estate planning, resale decisions, and
              personal knowledge.
            </p>
            <div className="credential-strip" aria-label="Credentials">
              <div>John Codianni</div>
              <div>Graduate Gemologist</div>
              <div>GIA trained in diamonds and colored gemstones</div>
            </div>
          </div>
        </section>

        <section className="process-band" aria-labelledby="process-title">
          <Image
            src="/macro-diamond-certified-jewelry-appraisal.png"
            alt="Macro diamond detail for appraisal process"
            fill
            sizes="100vw"
          />
          <div className="process-overlay" />
          <div className="process-content reveal">
            <p className="eyebrow">The Appraisal Experience</p>
            <h2 id="process-title">Measured, private, and carefully documented.</h2>
            <ol>
              {processItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section testimonials-section" aria-labelledby="testimonials-title">
          <div className="section-heading light-heading reveal">
            <p className="eyebrow">Client Notes</p>
            <h2 id="testimonials-title">Discreet, detailed, trusted.</h2>
          </div>
          <div className="testimonial-track reveal" aria-label="Client testimonials">
            {testimonials.map((testimonial) => (
              <figure className="testimonial" key={testimonial.name}>
                <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption>{testimonial.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="faq-layout">
            <div className="faq-art reveal" aria-hidden="true">
              <Image
                src="/emerald-gemstone-estate-jewelry-appraisal.png"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 38vw"
              />
            </div>
            <div className="reveal">
              <div className="section-heading align-left">
                <p className="eyebrow">Common Questions</p>
                <h2 id="faq-title">Appraisal FAQ</h2>
              </div>
              <div className="faq-list">
                {faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section contact-section dark-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-copy reveal">
            <p className="eyebrow">Book a Private Consultation</p>
            <h2 id="contact-title">Schedule a jewelry appraisal.</h2>
            <p>
              Share a few details about the item or collection. John Codianni
              provides private consultations for diamond appraisal, antique
              jewelry appraisal, estate jewelry appraisal, and insurance jewelry
              appraisal services.
            </p>
            <div className="map-card" aria-label="Private appointment location placeholder">
              <Image
                src="/loose-gemstones-appraisal.png"
                alt="Loose gemstones used as a luxury map placeholder"
                fill
                sizes="(max-width: 900px) 100vw, 38vw"
              />
              <span>Private appointments by request</span>
            </div>
            <div className="contact-details">
              <a href="tel:+15550193000">(555) 019-3000</a>
              <a href="mailto:appointments@appraisalsforjewelry.com">
                appointments@appraisalsforjewelry.com
              </a>
            </div>
          </div>

          <form className="contact-form reveal" aria-label="Appraisal request form">
            <label>
              Name
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label>
              Appraisal type
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {featuredServices.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
                <option>Resale Consultation</option>
              </select>
            </label>
            <label>
              Notes
              <textarea
                name="notes"
                rows={5}
                placeholder="Tell us about the item, collection, or documentation you have."
              />
            </label>
            <button className="button button-primary" type="submit">
              Book a Consultation
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="footer-brand" href="#home">
            appraisalsforjewelry.com
          </a>
          <p>
            John Codianni, Owner and Certified Diamond and Gemstone Appraiser,
            provides independent appraisals for diamonds, estate pieces, antique
            jewelry, watches, and insurance valuations.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-links" aria-label="Related domains">
          <a href="https://antiquejewelryappraisals.com">
            antiquejewelryappraisals.com
          </a>
          <a href="https://appraisemydiamonds.com">appraisemydiamonds.com</a>
        </div>
        <small>&copy; 2026 Appraisals for Jewelry. All rights reserved.</small>
      </footer>
    </>
  );
}
