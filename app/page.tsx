import Image from "next/image";

const credentials = ["GIA", "NAJA", "ASA"];

const trustItems = [
  { title: "Insurance Appraisals", icon: "shield" },
  { title: "Estate Jewelry", icon: "estate" },
  { title: "Antique Jewelry", icon: "antique" },
  { title: "Diamond Appraisals", icon: "diamond" },
  { title: "Watch Appraisals", icon: "watch" },
  { title: "Resale Consultations", icon: "market" },
];

const reasons = [
  "Independent & Unbiased",
  "Confidential & Professional",
  "Certified Expertise",
  "Detailed Documentation",
  "Accurate Market Valuations",
  "Personalized Consultations",
];

const services = [
  {
    title: "Insurance Appraisals",
    copy: "Comprehensive replacement value reports for carriers, brokers, and private policy records.",
  },
  {
    title: "Antique Jewelry Appraisals",
    copy: "Careful evaluation of period details, provenance indicators, craftsmanship, and condition.",
  },
  {
    title: "Diamond Appraisals",
    copy: "Precise documentation for loose diamonds, engagement rings, and important diamond jewelry.",
  },
  {
    title: "Estate Jewelry Appraisals",
    copy: "Discreet support for executors, beneficiaries, collectors, and estate professionals.",
  },
  {
    title: "Divorce / Equitable Distribution",
    copy: "Clear valuation reports prepared with neutrality, discretion, and careful documentation.",
  },
  {
    title: "Fine Watch Appraisals",
    copy: "Valuations for modern, vintage, and collectible watches with detailed descriptive records.",
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

function Icon({ name }: { name: string }) {
  const common = {
    className: "service-icon",
    viewBox: "0 0 48 48",
    "aria-hidden": true,
  };

  if (name === "diamond") {
    return (
      <svg {...common}>
        <path d="M9 17 16 8h16l7 9-15 23L9 17Z" />
        <path d="M16 8 24 40 32 8M9 17h30M17 17l7-9 7 9" />
      </svg>
    );
  }

  if (name === "watch") {
    return (
      <svg {...common}>
        <path d="M18 5h12l2 10a16 16 0 0 1 0 18L30 43H18l-2-10a16 16 0 0 1 0-18L18 5Z" />
        <circle cx="24" cy="24" r="10" />
        <path d="M24 18v7l5 3" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M24 5 39 11v12c0 10-6 17-15 20C15 40 9 33 9 23V11l15-6Z" />
        <path d="m17 24 5 5 10-12" />
      </svg>
    );
  }

  if (name === "estate") {
    return (
      <svg {...common}>
        <path d="M8 41h32M11 37V20l13-10 13 10v17" />
        <path d="M18 37V25h12v12M16 18h16" />
      </svg>
    );
  }

  if (name === "market") {
    return (
      <svg {...common}>
        <path d="M8 39h32M13 33l7-8 7 5 9-14" />
        <path d="M31 16h5v5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M24 6 33 24l-9 18-9-18L24 6Z" />
      <path d="M12 13h24M12 35h24M6 24h36" />
    </svg>
  );
}

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
            description:
              "Professional independent jewelry appraisals for diamonds, estate jewelry, antique pieces, insurance valuations, and fine collections.",
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
        <section className="hero section-band" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/luxury-jewelry-hero.png"
            alt="Diamond jewelry and gold ring on a refined ivory and charcoal backdrop"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-content reveal">
            <p className="eyebrow">Independent certified jewelry appraiser</p>
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
          <div className="hero-note" aria-label="Service highlights">
            <span>Diamonds</span>
            <span>Estate</span>
            <span>Antique</span>
            <span>Insurance</span>
          </div>
        </section>

        <section className="section trust-section" aria-labelledby="trust-title">
          <div className="section-heading reveal">
            <p className="eyebrow">Trusted valuation services</p>
            <h2 id="trust-title">Jewelry Appraisal Expertise</h2>
            <p>
              Formal reports, careful examination, and private consultations for
              important pieces and full collections.
            </p>
          </div>

          <div className="trust-grid reveal">
            {trustItems.map((item) => (
              <article className="icon-card" key={item.title}>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>

          <div className="credential-strip reveal" aria-label="Certification placeholders">
            {credentials.map((credential) => (
              <div className="credential" key={credential}>
                <span>{credential}</span>
                <small>Certification placeholder</small>
              </div>
            ))}
          </div>
        </section>

        <section className="section editorial-section" aria-labelledby="why-title">
          <div className="editorial-intro reveal">
            <p className="eyebrow">Why choose us</p>
            <h2 id="why-title">
              A refined appraisal process for valuables that require care.
            </h2>
          </div>
          <div className="reason-grid reveal">
            {reasons.map((reason, index) => (
              <article className="reason" key={reason}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{reason}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="section-heading reveal">
            <p className="eyebrow">Featured services</p>
            <h2 id="services-title">Certified Appraisal Reports</h2>
            <p>
              Appraisal services tailored to insurance coverage, estates,
              private sales, equitable distribution, and collection planning.
            </p>
          </div>
          <div className="services-grid reveal">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-line" />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <a href="#contact" aria-label={`Request ${service.title}`}>
                  Request service
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="portrait-panel reveal">
            <Image
              src="/appraiser-portrait.png"
              alt="Elegant portrait placeholder for a certified jewelry appraiser"
              width={900}
              height={1100}
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">Private client advisory</p>
            <h2 id="about-title">Professional judgment, quietly delivered.</h2>
            <p>
              Providing trusted jewelry valuations with professionalism,
              discretion, and expertise for collectors, estates, insurers, and
              private clients.
            </p>
            <div className="stat-row" aria-label="Experience and credentials">
              <div>
                <strong>15+</strong>
                <span>Years experience</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Credential areas</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Independent</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonials-section" aria-labelledby="testimonials-title">
          <div className="section-heading reveal">
            <p className="eyebrow">Client notes</p>
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
          <div className="section-heading reveal">
            <p className="eyebrow">Common questions</p>
            <h2 id="faq-title">Appraisal FAQ</h2>
          </div>
          <div className="faq-list reveal">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy reveal">
            <p className="eyebrow">Book a private consultation</p>
            <h2 id="contact-title">Schedule a jewelry appraisal.</h2>
            <p>
              Share a few details about the item or collection. A private
              appointment can be arranged for diamond appraisal, antique jewelry
              appraisal, estate jewelry appraisal, or insurance jewelry appraisal
              services.
            </p>
            <div className="contact-details">
              <a href="tel:+15550193000">(555) 019-3000</a>
              <a href="mailto:appointments@appraisalsforjewelry.com">
                appointments@appraisalsforjewelry.com
              </a>
            </div>
            <div className="map-placeholder">
              <Image
                src="/contact-map.png"
                alt="Map placeholder for private appointment location"
                width={1200}
                height={800}
                sizes="(max-width: 900px) 100vw, 40vw"
              />
              <span>Private appointment location</span>
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
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
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
              Request a Private Appointment
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
            Certified jewelry appraiser services for diamonds, estate pieces,
            antique jewelry, watches, and insurance valuations.
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
        <div className="socials" aria-label="Social links">
          <a href="#" aria-label="Instagram">
            IG
          </a>
          <a href="#" aria-label="LinkedIn">
            in
          </a>
          <a href="#" aria-label="Pinterest">
            P
          </a>
        </div>
        <small>
          &copy; 2026 Appraisals for Jewelry. All rights reserved.
        </small>
      </footer>
    </>
  );
}
