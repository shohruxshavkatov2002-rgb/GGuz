import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

type Mode = "local" | "foreign";
const levelKeys = ["bachelor", "master", "residency"] as const;

export function ApplyForm() {
  const { t } = useI18n();
  const a = t.apply;

  const [mode, setMode] = useState<Mode>("local");
  const [level, setLevel] = useState("");
  const [program, setProgram] = useState("");
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", region: "", message: "" });

  const programOptions = useMemo(
    () => (level ? t.programs.filter((p) => p.stage === level) : []),
    [t.programs, level]
  );

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !consent) {
      setError(a.requiredError);
      return;
    }
    setError("");
    setSent(true);
  };

  const labels = t.programSection.labels;

  return (
    <section className="section" id="apply">
      <div className="container">
        <SectionHeadInline kicker={a.kicker} title={a.title} text={a.text} />

        <Reveal className="card apply-card">
          {sent ? (
            <div className="apply-success">
              <span className="apply-success__icon">
                <Icon name="check" size={30} />
              </span>
              <h3>{a.sent}</h3>
              <p>{a.success}</p>
              <button className="btn btn-ghost mt-24" onClick={() => setSent(false)}>
                {a.submit}
              </button>
            </div>
          ) : (
            <form className="apply-form" onSubmit={submit} noValidate>
              {/* Mode tabs */}
              <div className="apply-mode">
                <button type="button" className={mode === "local" ? "is-active" : ""} onClick={() => setMode("local")}>
                  {a.modeLocal}
                </button>
                <button type="button" className={mode === "foreign" ? "is-active" : ""} onClick={() => setMode("foreign")}>
                  {a.modeForeign}
                </button>
              </div>

              <div className="apply-grid">
                <label className="field">
                  <span>{a.nameLabel}</span>
                  <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder={a.namePlaceholder} />
                </label>

                <label className="field">
                  <span>{a.emailLabel}</span>
                  <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="email@example.com" />
                </label>

                <label className="field">
                  <span>{a.phoneLabel}</span>
                  <input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder={a.phonePlaceholder} />
                </label>

                {mode === "foreign" ? (
                  <label className="field">
                    <span>{a.countryLabel}</span>
                    <div className="select-wrap">
                      <select value={form.country} onChange={(e) => set("country", e.target.value)}>
                        <option value="">{a.countryPlaceholder}</option>
                        {a.countries.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <Icon name="chevron" size={18} className="select-caret" />
                    </div>
                  </label>
                ) : (
                  <label className="field">
                    <span>{a.regionLabel}</span>
                    <div className="select-wrap">
                      <select value={form.region} onChange={(e) => set("region", e.target.value)}>
                        <option value="">{a.regionPlaceholder}</option>
                        {a.regions.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      <Icon name="chevron" size={18} className="select-caret" />
                    </div>
                  </label>
                )}

                <label className="field">
                  <span>{a.levelLabel}</span>
                  <div className="select-wrap">
                    <select
                      value={level}
                      onChange={(e) => {
                        setLevel(e.target.value);
                        setProgram("");
                      }}
                    >
                      <option value="">{a.levelPlaceholder}</option>
                      {levelKeys.map((k) => (
                        <option key={k} value={k}>{labels[k]}</option>
                      ))}
                    </select>
                    <Icon name="chevron" size={18} className="select-caret" />
                  </div>
                </label>

                <label className="field">
                  <span>{a.programLabel}</span>
                  <div className="select-wrap">
                    <select value={program} onChange={(e) => setProgram(e.target.value)} disabled={!level}>
                      <option value="">{level ? t.programSection.programPlaceholder : t.programSection.programSelectEmpty}</option>
                      {programOptions.map((p) => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                    <Icon name="chevron" size={18} className="select-caret" />
                  </div>
                </label>
              </div>

              <label className="field field--full">
                <span>{a.messageLabel}</span>
                <textarea rows={3} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder={a.messagePlaceholder} />
              </label>

              <label className="apply-consent">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <span>{a.consent}</span>
              </label>

              {error && <p className="apply-error">{error}</p>}

              <button type="submit" className="btn btn-primary btn-lg apply-submit">
                <Icon name="send" size={18} /> {a.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function SectionHeadInline({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <motion.div
      className="text-center center-block"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-lead center-block">{text}</p>
    </motion.div>
  );
}
