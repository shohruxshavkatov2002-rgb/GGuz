import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n, LANGS, type Lang } from "../i18n";
import { Icon } from "./Icon";

export function Navbar() {
  const { t, common, lang, setLang } = useI18n();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progOpen, setProgOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const progRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (progRef.current && !progRef.current.contains(e.target as Node)) setProgOpen(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const stages = [
    { key: "bachelor", label: t.programSection.labels.bachelor },
    { key: "master", label: t.programSection.labels.master },
    { key: "residency", label: t.programSection.labels.residency },
  ];

  const links = [
    { label: t.nav.about, to: "/universitet" },
    { label: t.nav.campus, to: "/imkoniyatlar" },
    { label: t.nav.international, to: "/xalqaro" },
    { label: t.nav.faq, to: "/#faq" },
  ];

  const goStage = (stage: string) => {
    setProgOpen(false);
    setOpen(false);
    navigate(`/yonalishlar?stage=${stage}`);
  };

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Topbar */}
      <div className="topbar">
        <div className="container topbar__inner">
          <a href={`tel:${common.phone}`} className="topbar__item">
            <Icon name="phone" size={15} /> {t.topbar.hotline} {common.phone}
          </a>
          <div className="topbar__right">
            <span className="topbar__item topbar__addr">
              <Icon name="location" size={15} /> {t.brand.address}
            </span>
            {/* Language switcher dropdown */}
            <div className="dropdown" ref={langRef}>
              <button className="topbar__lang" onClick={() => setLangOpen((o) => !o)} aria-expanded={langOpen}>
                <Icon name="globe" size={15} />
                {LANGS.find((l) => l.code === lang)?.short}
                <Icon name="chevron" size={14} className={`dd-caret ${langOpen ? "is-open" : ""}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    className="dropdown__menu dropdown__menu--sm"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                  >
                    {LANGS.map((l) => (
                      <li key={l.code}>
                        <button
                          className={`dropdown__link ${l.code === lang ? "is-active" : ""}`}
                          onClick={() => {
                            setLang(l.code as Lang);
                            setLangOpen(false);
                          }}
                        >
                          <span className="lang-short">{l.short}</span> {l.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">
            <Icon name="pulse" size={20} />
          </span>
          <span className="nav__name">
            {t.brand.name}
            <em>{t.brand.subtitle}</em>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <NavLink to="/universitet" className="nav__link">
            {t.nav.about}
          </NavLink>

          {/* Programs dropdown */}
          <div className="dropdown nav__dd" ref={progRef} onMouseLeave={() => setProgOpen(false)}>
            <button
              className="nav__link nav__link--dd"
              onClick={() => setProgOpen((o) => !o)}
              onMouseEnter={() => setProgOpen(true)}
              aria-expanded={progOpen}
            >
              {t.nav.programs}
              <Icon name="chevron" size={15} className={`dd-caret ${progOpen ? "is-open" : ""}`} />
            </button>
            <AnimatePresence>
              {progOpen && (
                <motion.ul
                  className="dropdown__menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18 }}
                >
                  {stages.map((s) => (
                    <li key={s.key}>
                      <button className="dropdown__link" onClick={() => goStage(s.key)}>
                        <Icon name="graduation" size={18} />
                        {s.label}
                      </button>
                    </li>
                  ))}
                  <li className="dropdown__divider" />
                  <li>
                    <Link to="/yonalishlar" className="dropdown__link dropdown__link--all" onClick={() => setProgOpen(false)}>
                      {t.programSection.title} <Icon name="arrow" size={16} />
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/imkoniyatlar" className="nav__link">
            {t.nav.campus}
          </NavLink>
          <NavLink to="/xalqaro" className="nav__link">
            {t.nav.international}
          </NavLink>
          <a href="/#faq" className="nav__link">
            {t.nav.faq}
          </a>
        </nav>

        <div className="nav__actions">
          <Link to="/ariza" className="btn btn-primary nav__cta">
            {t.nav.apply}
          </Link>
          <button
            className="nav__burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container">
              <NavLink to="/universitet" className="nav__mobile-link" onClick={() => setOpen(false)}>
                {t.nav.about}
              </NavLink>
              <div className="nav__mobile-group">
                <span className="nav__mobile-label">{t.nav.programs}</span>
                {stages.map((s) => (
                  <button key={s.key} className="nav__mobile-sub" onClick={() => goStage(s.key)}>
                    {s.label}
                  </button>
                ))}
              </div>
              {links.slice(1).map((l) => (
                <a key={l.to} href={l.to} className="nav__mobile-link" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <Link to="/ariza" className="btn btn-primary" onClick={() => setOpen(false)}>
                {t.nav.apply}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
