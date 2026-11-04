import React from "react";
import "../styles/SobreMi.css";
import { useLanguage } from "../i18n/LanguageContext";

const SobreMi = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-heading">
        <span className="section-number">03</span>
        <div>
          <span className="section-eyebrow">{t.about.eyebrow}</span>
          <h2>{t.about.title}</h2>
        </div>
      </div>
      <div className="about-grid">
        <div className="sobreMi">
          <p className="about-lead">{t.about.lead}</p>
          <div className="descriptionForMe">
            {t.about.paragraphs.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>
          <a
            href={`${process.env.PUBLIC_URL}${t.cv.url}`}
            className="about-cv-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.cv.ariaFull}
          >
            {t.cv.fullLabel}
            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
        <div className="about-facts">
          <p className="about-process-label">{t.about.processLabel}</p>
          {t.about.process.map((paso, index) => (
            <article key={paso.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{paso.title}</h3>
              <p>{paso.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
