import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "../i18n";
import { Icon } from "./Icon";
import { LazyScene } from "./three/LazyScene";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const { t } = useI18n();
  const { scrollYProgress } = useScroll();
  const sceneY = useTransform(scrollYProgress, [0, 0.4], [0, -120]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.12]);
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
            ● {t.hero.eyebrow}
          </motion.span>
          <motion.h1 className="hero__title" variants={item}>
            {t.hero.title}
          </motion.h1>
          <motion.p className="hero__lead" variants={item}>
            {t.hero.lead}
          </motion.p>
          <motion.div className="hero__actions" variants={item}>
            <Link to="/ariza" className="btn btn-primary btn-lg">
              {t.hero.primaryButton} <Icon name="arrow" size={18} />
            </Link>
            <Link to="/yonalishlar" className="btn btn-ghost on-dark btn-lg">
              {t.hero.secondaryButton}
            </Link>
          </motion.div>

          <motion.div className="hero__trust" variants={item}>
            {t.hero.trust.map((tr) => (
              <span key={tr} className="hero__trust-item">
                <Icon name="check" size={16} /> {tr}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="hero__scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <motion.span
          className="hero__scroll-dot"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
