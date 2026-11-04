import React from "react";
import "../styles/Footer.css";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="contacto">
      <div className="containerFooter">
        <span className="footer-eyebrow">{t.footer.eyebrow}</span>
        <h2 className="title-contact">
          {t.footer.titleStart}
          <em>{t.footer.titleEm}</em>
        </h2>
        <p className="footer-copy">{t.footer.copy}</p>
        <a href="mailto:oteiza.jor@gmail.com" className="contact-cta">
          {t.footer.cta}
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
        <div className="footer-bottom">
          <a href="mailto:oteiza.jor@gmail.com" className="footer-email">
            oteiza.jor@gmail.com
          </a>
          <div className="social-links">
              <a
                href="https://github.com/JorgeOteiza"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jorgecancinooteiza/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                <span>LinkedIn</span>
              </a>
          </div>
          <small className="copyright">
            © {new Date().getFullYear()} Jorge Oteiza
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
