import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { Icon } from "./Icon";

export function Footer() {
  const { t, common } = useI18n();

  return (
    <footer className="footer bg-dark">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="nav__brand">
            <span className="nav__logo">
              <Icon name="pulse" size={20} />
            </span>
            <span className="nav__name">
              {t.brand.name}
              <em>{t.brand.subtitle}</em>
            </span>
          </span>
          <p className="footer__contact">
            <Icon name="location" size={16} /> {t.brand.address}
          </p>
        </div>

        <div className="footer__col">
          <h4>{t.footer.contacts}</h4>
          <a href={`tel:${common.phone}`}>
            <Icon name="phone" size={15} /> {common.phone}
          </a>
          <a href={`tel:${common.phone2}`}>
            <Icon name="phone" size={15} /> {common.phone2}
          </a>
          <a href={`mailto:${common.email}`}>
            <Icon name="mail" size={15} /> {common.email}
          </a>
        </div>

        <div className="footer__col">
          <h4>{t.footer.useful}</h4>
          <Link to="/universitet">{t.nav.about}</Link>
          <Link to="/yonalishlar">{t.nav.programs}</Link>
          <Link to="/imkoniyatlar">{t.nav.campus}</Link>
          <Link to="/ariza">{t.nav.apply}</Link>
        </div>

        <div className="footer__col">
          <h4>{t.footer.social}</h4>
          <a href={common.telegram} target="_blank" rel="noreferrer">Telegram</a>
          <a href={common.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={common.youtube} target="_blank" rel="noreferrer">YouTube</a>
        </div>

        <div className="footer__col">
          <h4>{t.footer.gov}</h4>
          <a href="https://dtm.uz" target="_blank" rel="noreferrer">{t.footer.gov}</a>
          <a href="https://id.egov.uz" target="_blank" rel="noreferrer">{t.footer.id}</a>
          <a href="https://my.gov.uz" target="_blank" rel="noreferrer">{t.footer.mygov}</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>{t.footer.copyright}</span>
        <button className="footer__top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {t.footer.top}
        </button>
      </div>
    </footer>
  );
}
