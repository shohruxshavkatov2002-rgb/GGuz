import { useSearchParams } from "react-router-dom";
import { useI18n } from "../i18n";
import { PageHeader, ProgramsSection, FAQSection } from "../components/sections";

const valid = ["bachelor", "master", "residency"] as const;
type Stage = (typeof valid)[number];

export default function Yonalishlar() {
  const { t } = useI18n();
  const [params] = useSearchParams();
  const raw = params.get("stage");
  const stage: Stage = valid.includes(raw as Stage) ? (raw as Stage) : "bachelor";

  return (
    <>
      <PageHeader
        kicker={t.programSection.kicker}
        title={t.programSection.title}
        text={t.programSection.text}
      />
      {/* key forces re-mount when the stage query changes (e.g. from nav dropdown) */}
      <ProgramsSection key={stage} initialStage={stage} />
      <FAQSection />
    </>
  );
}
