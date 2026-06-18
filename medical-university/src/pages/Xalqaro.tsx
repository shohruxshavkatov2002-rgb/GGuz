import { useI18n } from "../i18n";
import { PageHeader, InternationalSection } from "../components/sections";
import { ApplyForm } from "../components/ApplyForm";

export default function Xalqaro() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader kicker={t.international.kicker} title={t.international.title} text={t.international.text} />
      <InternationalSection />
      <ApplyForm />
    </>
  );
}
