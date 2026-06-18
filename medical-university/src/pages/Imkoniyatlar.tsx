import { useI18n } from "../i18n";
import { PageHeader, CampusSection, CustomBlocksSection, AppSection } from "../components/sections";

export default function Imkoniyatlar() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader kicker={t.campus.kicker} title={t.campus.title} text={t.campus.text} />
      <CampusSection />
      <CustomBlocksSection />
      <AppSection />
    </>
  );
}
