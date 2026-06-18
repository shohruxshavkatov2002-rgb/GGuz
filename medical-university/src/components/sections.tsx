import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useI18n } from "../i18n";
import { Reveal, RevealGroup, childVariants } from "./Reveal";
import { Icon } from "./Icon";

/* ---------------- Section heading ---------------- */
export function SectionHead({
  kicker,
  title,
  text,
  center = true,
  dark = false,
}: {
  kicker?: string;
  title: string;
  text?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center center-block" : ""}>
      {kicker && <span className={`eyebrow ${dark ? "on-dark" : ""}`}>{kicker}</span>}
      <h2 className="section-title">{title}</h2>
      {text && <p className={`section-lead ${center ? "center-block" : ""}`}>{text}</p>}
    </Reveal>
  );
}

/* ---------------- Quick stats ---------------- */
export function QuickSection() {
  const { t } = useI18n();
  return (
    <section className="section-tight quick-wrap">
      <div className="container">
        <RevealGroup className="grid grid-4">
          {t.quick.map(([label, value]) => (
            <motion.div key={label} className="card quick-card" variants={childVariants}>
              <span className="quick-card__label gradient-text">{label}</span>
              <span className="quick-card__value">{value}</span>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
export function AboutSection() {
  const { t } = useI18n();
  return (
    <section className="section bg-soft" id="about">
      <div className="container about-grid">
        <Reveal dir="right">
          <span className="eyebrow">{t.about.kicker}</span>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-lead">{t.about.text}</p>
          <ul className="about-features">
            {t.about.features.map((f) => (
              <li key={f}>
                <Icon name="check" size={18} /> {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal dir="left" className="card about-info">
          <h3>{t.about.infoTitle}</h3>
          <ul>
            {t.about.info.map((i, idx) => (
              <li key={idx}>
                <span className="about-info__num">{idx + 1}</span>
                {i}
              </li>
            ))}
          </ul>
          <Link to="/ariza" className="btn btn-primary mt-24">
            {t.nav.apply} <Icon name="arrow" size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Programs (tabs + dropdown + search) ---------------- */
const stageKeys = ["bachelor", "master", "residency"] as const;
type Stage = (typeof stageKeys)[number];

export function ProgramsSection({ initialStage = "bachelor" }: { initialStage?: Stage }) {
  const { t } = useI18n();
  const [stage, setStage] = useState<Stage>(initialStage);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  const stageList = useMemo(
    () => t.programs.filter((p) => p.stage === stage),
    [t.programs, stage]
  );
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = stageList;
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q));
    if (selected) list = list.filter((p) => p.name === selected);
    return list;
  }, [stageList, query, selected]);

  const labels = t.programSection.labels;

  return (
    <section className="section" id="programs">
      <div className="container">
        <SectionHead kicker={t.programSection.kicker} title={t.programSection.title} text={t.programSection.text} />

        {/* Controls */}
        <Reveal className="prog-controls">
          <div className="prog-tabs" role="tablist">
            {stageKeys.map((s) => (
              <button
                key={s}
                className={`prog-tab ${stage === s ? "is-active" : ""}`}
                onClick={() => {
                  setStage(s);
                  setSelected("");
                }}
                role="tab"
                aria-selected={stage === s}
              >
                {labels[s]}
              </button>
            ))}
          </div>

          <div className="prog-filters">
            {/* Program dropdown selector */}
            <div className="select-wrap">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                aria-label={t.programSection.programPlaceholder}
              >
                <option value="">{t.programSection.programPlaceholder}</option>
                {stageList.map((p) => (
                  <option key={p.name} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
              <Icon name="chevron" size={18} className="select-caret" />
            </div>

            {/* Search */}
            <div className="search-wrap">
              <Icon name="search" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.programSection.searchPlaceholder}
                aria-label={t.programSection.search}
              />
            </div>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-3 mt-40" key={stage}>
          {filtered.map((p) => (
            <motion.article key={p.name} className="card program-card" variants={childVariants}>
              <span className="program-card__code">{p.code}</span>
              <h3>{p.name}</h3>
              <div className="program-card__meta">
                <span>
                  <Icon name="calendar" size={16} /> {p.duration}
                </span>
              </div>
              <div className="program-card__price">{p.price}</div>
              <Link to="/ariza" className="program-card__apply">
                {t.programSection.applyLink} <Icon name="arrow" size={16} />
              </Link>
            </motion.article>
          ))}
          {filtered.length === 0 && (
            <p className="prog-empty">{t.programSection.programSelectEmpty}</p>
          )}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- Campus ---------------- */
export function CampusSection() {
  const { t } = useI18n();
  return (
    <section className="section bg-soft" id="campus">
      <div className="container">
        <SectionHead kicker={t.campus.kicker} title={t.campus.title} text={t.campus.text} />
        <RevealGroup className="grid grid-3 mt-40">
          {t.campus.cards.map(([badge, title, text]) => (
            <motion.article key={title} className="card campus-card" variants={childVariants}>
              <span className="campus-card__badge">{badge}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- International ---------------- */
export function InternationalSection() {
  const { t } = useI18n();
  return (
    <section className="section" id="international">
      <div className="container intl-grid">
        <Reveal dir="right">
          <span className="eyebrow">{t.international.kicker}</span>
          <h2 className="section-title">{t.international.title}</h2>
          <p className="section-lead">{t.international.text}</p>
          <Link to="/ariza" className="btn btn-secondary mt-24">
            <Icon name="globe" size={18} /> {t.international.button}
          </Link>
        </Reveal>
        <Reveal dir="left" className="card intl-card bg-dark">
          <h3>{t.international.cardTitle}</h3>
          <ul>
            {t.international.list.map((i) => (
              <li key={i}>
                <Icon name="check" size={18} /> {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- News ---------------- */
export function NewsSection() {
  const { t } = useI18n();
  return (
    <section className="section bg-soft" id="news">
      <div className="container">
        <SectionHead kicker={t.news.kicker} title={t.news.title} />
        <RevealGroup className="grid grid-2 mt-40">
          {t.news.items.map((n) => (
            <motion.article key={n.title} className="card news-card" variants={childVariants}>
              <div className="news-card__media" />
              <div className="news-card__body">
                <span className="news-card__date">
                  <Icon name="calendar" size={15} /> {n.date}
                </span>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </div>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQSection() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section" id="faq">
      <div className="container faq">
        <SectionHead kicker={t.faq.kicker} title={t.faq.title} text={t.faq.text} center={false} />
        <div className="faq__list mt-40">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} className={`faq__item card ${isOpen ? "is-open" : ""}`}>
                <button className="faq__q" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  <span>{item.question}</span>
                  <Icon name="plus" size={20} className="faq__icon" />
                </button>
                <motion.div
                  className="faq__a"
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Custom blocks ---------------- */
export function CustomBlocksSection() {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="container">
        <SectionHead kicker={t.customBlocks.kicker} title={t.customBlocks.title} />
        <RevealGroup className="grid grid-2 mt-40">
          {t.customBlocks.items.map((b) => (
            <motion.article key={b.title} className="card block-card" variants={childVariants}>
              <span className="block-card__icon">
                <Icon name="atom" size={26} />
              </span>
              <div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- App promo ---------------- */
export function AppSection() {
  const { t } = useI18n();
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal className="app-band">
          <div className="app-band__glow" />
          <div className="app-band__text">
            <span className="eyebrow on-dark">{t.app.kicker}</span>
            <h3>{t.app.title}</h3>
            <p>{t.app.text}</p>
          </div>
          <div className="app-band__actions">
            <a href="#" className="store-btn">App Store</a>
            <a href="#" className="store-btn">Google Play</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page header ---------------- */
export function PageHeader({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <header className="page-header bg-dark">
      <div className="blob" style={{ background: "#0891b2", width: 360, height: 360, top: -80, right: -60 }} />
      <div className="blob" style={{ background: "#16a34a", width: 300, height: 300, bottom: -120, left: -40, opacity: 0.35 }} />
      <div className="container page-header__inner">
        <Reveal>
          <span className="eyebrow on-dark">{kicker}</span>
          <h1 className="page-header__title">{title}</h1>
          <p className="page-header__lead">{text}</p>
        </Reveal>
      </div>
    </header>
  );
}
