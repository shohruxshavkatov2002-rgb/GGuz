import { motion } from "framer-motion";
import {
  PageHeader,
  AboutSection,
  TimelineSection,
  StatsSection,
  TeamSection,
  CTASection,
  SectionHead,
} from "../components/sections";
import { RevealGroup, childVariants } from "../components/Reveal";
import { LazyScene } from "../components/three/LazyScene";
import { ABOUT, ABOUT_PAGE, TIMELINE, TEAM, CTA } from "../data/content";

export default function AboutUs() {
  return (
    <>
      <PageHeader {...ABOUT_PAGE.header} />

      <AboutSection {...ABOUT} />

      <StatsSection items={ABOUT_PAGE.stats} />

      {/* 3D molecule feature strip */}
      <section className="section split-3d">
        <div className="container split-3d__grid">
          <div className="split-3d__canvas">
            <LazyScene variant="molecule" className="split-3d__scene" />
          </div>
          <div className="split-3d__copy">
            <span className="eyebrow">Research-first</span>
            <h2 className="section-title">Discovery is woven into everything we do</h2>
            <p className="section-lead">
              From the genomics core to the simulation hospital, students don't just read about
              breakthroughs — they help create them, supervised by principal investigators from
              their first year.
            </p>
          </div>
        </div>
      </section>

      <TimelineSection {...TIMELINE} />

      <TeamSection {...TEAM} />

      {/* Awards + partners */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHead
            eyebrow="Recognition"
            title="Accreditations & partnerships"
            lead="Trusted by global health bodies and leading clinical institutions."
          />
          <RevealGroup className="logo-row mt-40">
            {ABOUT_PAGE.awards.map((a) => (
              <motion.span key={a} className="logo-chip" variants={childVariants}>
                {a}
              </motion.span>
            ))}
          </RevealGroup>
          <RevealGroup className="logo-row" stagger={0.08}>
            {ABOUT_PAGE.partners.map((p) => (
              <motion.span key={p} className="logo-chip logo-chip--soft" variants={childVariants}>
                {p}
              </motion.span>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection {...CTA} />
    </>
  );
}
