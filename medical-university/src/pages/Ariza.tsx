import { useI18n } from "../i18n";
import { PageHeader } from "../components/sections";
import { ApplyForm } from "../components/ApplyForm";

export default function Ariza() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader kicker={t.apply.kicker} title={t.apply.title} text={t.apply.text} />
      <ApplyForm />
    </>
  );
}
