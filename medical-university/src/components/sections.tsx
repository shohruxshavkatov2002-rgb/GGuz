import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, childVariants } from "./Reveal";
import { Icon, type IconName } from "./Icon";

/* ---------------- Section heading ---------------- */
export function SectionHead({
  eyebrow,
  title,
  lead,
  center = true,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center center-block" : ""}>
      {eyebrow && <span className={`eyebrow ${dark ? "on-dark" : ""}`}>{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className={`section-lead ${center ? "center-block" : ""}`}>{lead}</p>}
    </Reveal>
  );
}

/* ---------------- Features ---------------- */
export function FeaturesSection({
  eyebrow,
  title,
  lead,
  items,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  items: { icon: string; title: string; text: string }[];
}) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        <RevealGroup className="grid grid-3 mt-40">
          {items.map((f) => (
            <motion.article key={f.title} className="card feature-card" variants={childVariants}>
              <span className="feature-card__icon">
                <Icon name={f.icon as IconName} size={26} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
export function AboutSection({
  eyebrow,
  title,
  paragraphs,
  values,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  values: { title: string; text: string }[];
}) {
  return (
    <section className="section bg-soft">
      <div className="container about-grid">
        <Reveal dir="right">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="section-lead">
              {p}
            </p>
          ))}
        </Reveal>
        <RevealGroup className="about-values">
          {values.map((v) => (
            <motion.div key={v.title} className="card about-value" variants={childVariants}>
              <span className="about-value__bullet" />
              <div>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
export function ServicesSection({
  eyebrow,
  title,
  lead,
  items,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  items: { title: string; text: string; tag: string }[];
}) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        <RevealGroup className="grid grid-2 mt-40">
          {items.map((s) => (
            <motion.article key={s.title} className="card service-card" variants={childVariants}>
              <span className="service-card__tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="service-card__more">
                Learn more <Icon name="arrow" size={18} />
              </span>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- Timeline ---------------- */
export function TimelineSection({
  eyebrow,
  title,
  lead,
  items,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  items: { year: string; title: string; text: string }[];
}) {
  return (
    <section className="section bg-soft">
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        <div className="timeline mt-40">
          <span className="timeline__spine" />
          {items.map((t, i) => (
            <Reveal key={t.year} dir={i % 2 ? "left" : "right"} className={`timeline__item ${i % 2 ? "is-right" : "is-left"}`}>
              <div className="card timeline__card">
                <span className="timeline__year">{t.year}</span>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
              <span className="timeline__dot" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team ---------------- */
export function TeamSection({
  eyebrow,
  title,
  lead,
  members,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  members: { name: string; role: string; focus: string; hue: string }[];
}) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        <RevealGroup className="grid grid-4 mt-40">
          {members.map((m) => (
            <motion.article key={m.name} className="card team-card" variants={childVariants}>
              <div
                className="team-card__avatar"
                style={{ background: `linear-gradient(135deg, ${m.hue}, #a5f3fc)` }}
              >
                {m.name
                  .split(" ")
                  .slice(-2)
                  .map((s) => s[0])
                  .join("")}
              </div>
              <h4>{m.name}</h4>
              <span className="team-card__role">{m.role}</span>
              <p>{m.focus}</p>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */
export function ReviewsSection({
  eyebrow,
  title,
  lead,
  items,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  items: { quote: string; name: string; role: string }[];
}) {
  return (
    <section className="section bg-soft">
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        <RevealGroup className={`grid mt-40 ${items.length > 2 ? "grid-3" : "grid-2"}`}>
          {items.map((r) => (
            <motion.figure key={r.name} className="card review-card" variants={childVariants}>
              <span className="review-card__mark">
                <Icon name="quote" size={28} />
              </span>
              <blockquote>{r.quote}</blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                <span>{r.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
export function StatsSection({
  items,
  dark = true,
}: {
  items: { value: string; label: string }[];
  dark?: boolean;
}) {
  return (
    <section className={`section-tight ${dark ? "bg-dark" : ""}`}>
      <div className="container">
        <RevealGroup className="grid grid-4 stats-grid">
          {items.map((s) => (
            <motion.div key={s.label} className="stat" variants={childVariants}>
              <span className="stat__value gradient-text">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
export function CTASection({
  title,
  lead,
  primary,
  secondary,
}: {
  title: string;
  lead: string;
  primary: string;
  secondary: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta glass">
          <div className="cta__glow" />
          <h2>{title}</h2>
          <p>{lead}</p>
          <div className="flex flex-wrap gap-16 justify-center mt-24">
            <Link to="/academics" className="btn btn-primary btn-lg">
              {primary} <Icon name="arrow" size={18} />
            </Link>
            <Link to="/about" className="btn btn-ghost btn-lg">
              {secondary}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Newsletter ---------------- */
export function NewsletterSection({
  title,
  lead,
  placeholder,
  button,
}: {
  title: string;
  lead: string;
  placeholder: string;
  button: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="section-tight">
      <div className="container">
        <Reveal className="newsletter">
          <div className="newsletter__text">
            <h3>{title}</h3>
            <p>{lead}</p>
          </div>
          <form
            className="newsletter__form"
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
          >
            {done ? (
              <span className="newsletter__thanks">
                <Icon name="check" size={18} /> You're subscribed — welcome aboard!
              </span>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  aria-label="Email address"
                />
                <button type="submit" className="btn btn-secondary">
                  {button}
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container faq">
        <SectionHead eyebrow={eyebrow} title={title} center={false} />
        <div className="faq__list mt-40">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} className={`faq__item card ${isOpen ? "is-open" : ""}`}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <Icon name="plus" size={20} className="faq__icon" />
                </button>
                <motion.div
                  className="faq__a"
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{item.a}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page header (with optional 3D) ---------------- */
export function PageHeader({
  badge,
  title,
  titleAccent,
  lead,
}: {
  badge: string;
  title: string;
  titleAccent: string;
  lead: string;
}) {
  return (
    <header className="page-header bg-dark">
      <div className="blob" style={{ background: "#0891b2", width: 360, height: 360, top: -80, right: -60 }} />
      <div className="blob" style={{ background: "#16a34a", width: 300, height: 300, bottom: -120, left: -40, opacity: 0.35 }} />
      <div className="container page-header__inner">
        <Reveal>
          <span className="eyebrow on-dark">{badge}</span>
          <h1 className="page-header__title">
            {title} <span className="gradient-text">{titleAccent}</span>
          </h1>
          <p className="page-header__lead">{lead}</p>
        </Reveal>
      </div>
    </header>
  );
}
