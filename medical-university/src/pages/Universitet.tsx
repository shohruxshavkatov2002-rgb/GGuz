import { useI18n } from "../i18n";
import {
  PageHeader,
  AboutSection,
  QuickSection,
  CustomBlocksSection,
  NewsSection,
} from "../components/sections";
import { LazyScene } from "../components/three/LazyScene";

export default function Universitet() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader kicker={t.about.kicker} title={t.brand.subtitle} text={t.about.text} />
      <QuickSection />
      <AboutSection />

      {/* 3D molecule strip */}
      <section className="section bg-soft split-3d">
        <div className="container split-3d__grid">
          <div className="split-3d__canvas">
            <LazyScene variant="molecule" className="split-3d__scene" />
          </div>
          <div className="split-3d__copy">
            <span className="eyebrow">{t.customBlocks.kicker}</span>
            <h2 className="section-title">{t.customBlocks.title}</h2>
            <p className="section-lead">{t.about.text}</p>
          </div>
        </div>
      </section>

      <CustomBlocksSection />
      <NewsSection />
    </>
  );
}
