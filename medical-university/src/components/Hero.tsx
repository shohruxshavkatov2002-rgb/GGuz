import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO } from "../data/content";
import { Icon } from "./Icon";
import { LazyScene } from "./three/LazyScene";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const { scrollYProgress } = useScroll();
  // Parallax: canvas drifts up & fades a touch as you scroll down.
  const sceneY = useTransform(scrollYProgress, [0, 0.4], [0, -120]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.15]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, 60]);

  return (
    <section className="hero bg-dark">
      <div className="blob" style={{ background: "#0891b2", width: 420, height: 420, top: -60, left: -80 }} />
      <div className="blob" style={{ background: "#16a34a", width: 360, height: 360, bottom: -120, right: -60, opacity: 0.4 }} />

      <motion.div className="hero__canvas" style={{ y: sceneY, opacity: sceneOpacity }}>
        <LazyScene variant="dna" className="hero__scene" />
      </motion.div>

      <div className="container hero__inner">
        <motion.div className="hero__copy" style={{ y: textY }} variants={container} initial="hidden" animate="show">
          <motion.span className="eyebrow on-dark" variants={item}>
            {HERO.badge}
          </motion.span>
          <motion.h1 className="hero__title" variants={item}>
            {HERO.title} <span className="gradient-text">{HERO.titleAccent}</span>
          </motion.h1>
          <motion.p className="hero__lead" variants={item}>
            {HERO.lead}
          </motion.p>
          <motion.div className="hero__actions" variants={item}>
            <Link to="/academics" className="btn btn-primary btn-lg">
              {HERO.ctaPrimary} <Icon name="arrow" size={18} />
            </Link>
            <Link to="/about" className="btn btn-ghost on-dark btn-lg">
              {HERO.ctaSecondary}
            </Link>
          </motion.div>

          <motion.div className="hero__stats" variants={item}>
            {HERO.stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value gradient-text">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll to explore</span>
        <motion.span
          className="hero__scroll-dot"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
