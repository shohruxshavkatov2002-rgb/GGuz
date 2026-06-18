import { Link } from "react-router-dom";
import { NAV, SITE } from "../data/content";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="nav__brand">
            <span className="nav__logo">
              <Icon name="pulse" size={20} />
            </span>
            <span className="nav__name">
              {SITE.name}
              <em>Medical University</em>
            </span>
          </span>
          <p>{SITE.tagline}</p>
          <p className="footer__contact">
            {SITE.address}
            <br />
            {SITE.email} · {SITE.phone}
          </p>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </div>

        <div className="footer__col">
          <h4>Programs</h4>
          <a href="#">Undergraduate</a>
          <a href="#">Graduate (MD/PhD)</a>
          <a href="#">Continuing Education</a>
          <a href="#">Research Fellowships</a>
        </div>

        <div className="footer__col">
          <h4>Connect</h4>
          <a href="#">Admissions</a>
          <a href="#">Campus Visits</a>
          <a href="#">Newsroom</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {SITE.full}. All rights reserved.
        </span>
        <span className="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility</a>
        </span>
      </div>
    </footer>
  );
}
