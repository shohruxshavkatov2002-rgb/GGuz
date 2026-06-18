import { motion } from "framer-motion";
import {
  PageHeader,
  FeaturesSection,
  ServicesSection,
  FAQSection,
  CTASection,
  SectionHead,
} from "../components/sections";
import { RevealGroup, childVariants } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { ACADEMICS, FAQ, CTA } from "../data/content";

export default function Academics() {
  const { header, features, support, projects, pricing } = ACADEMICS;

  return (
    <>
      <PageHeader {...header} />

      <FeaturesSection
        eyebrow="Academic Offerings"
        title="Pathways for every ambition"
        lead="Undergraduate, graduate and lifelong learning, all under one research-driven roof."
        items={features}
      />

      <ServicesSection
        eyebrow={support.eyebrow}
        title={support.title}
        items={support.items.map((s) => ({ ...s, tag: "Support" }))}
      />

      {/* Research project list */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHead eyebrow={projects.eyebrow} title={projects.title} />
          <RevealGroup className="grid grid-2 mt-40">
            {projects.items.map((p) => (
              <motion.article key={p.title} className="card project-card" variants={childVariants}>
                <span className="project-card__field">{p.field}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </motion.article>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Pricing / tuition */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={pricing.eyebrow} title={pricing.title} lead={pricing.lead} />
          <RevealGroup className="grid grid-3 mt-40">
            {pricing.tiers.map((t) => (
              <motion.article
                key={t.name}
                className={`card price-card ${t.featured ? "price-card--featured" : ""}`}
                variants={childVariants}
              >
                {t.featured && <span className="price-card__badge">Most funded</span>}
                <h3>{t.name}</h3>
                <div className="price-card__price">
                  <span className="price-card__amount">{t.price}</span>
                  <span className="price-card__period">{t.period}</span>
                </div>
                <ul className="price-card__list">
                  {t.features.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={18} /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`btn ${t.featured ? "btn-primary" : "btn-ghost"}`}>
                  Apply
                </a>
              </motion.article>
            ))}
          </RevealGroup>
        </div>
      </section>

      <FAQSection {...FAQ} />

      <CTASection {...CTA} />
    </>
  );
}
