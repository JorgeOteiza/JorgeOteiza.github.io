import React from "react";
import "../styles/Home.css";
import { useLanguage } from "../i18n/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  const handleScroll = () => {
    const nextSection = document.querySelector("#proyectos");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="Home">
      <div className="home-container">
        <div className="home-text">
          <span className="availability">
            <span aria-hidden="true"></span>
            {t.home.availability}
          </span>
          <p className="hero-kicker">{t.home.kicker}</p>
          <h1>
            {t.home.titleStart}
            <em>{t.home.titleEm}</em>
          </h1>
          <p className="hero-description">{t.home.description}</p>
          <div className="hero-actions">
            <button type="button" className="button-primary" onClick={handleScroll}>
              {t.home.viewProjects}
              <i className="fa-solid fa-arrow-down" aria-hidden="true"></i>
            </button>
            <a
              className="button-secondary"
              href={`${process.env.PUBLIC_URL}${t.cv.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.cv.label}
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          </div>
          <div className="hero-links" aria-label={t.home.socialLabel}>
            <a href="https://github.com/JorgeOteiza" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/jorgecancinooteiza/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="portrait-orbit orbit-one"></div>
          <div className="portrait-orbit orbit-two"></div>
          <div className="profile-photo">
            <img
              src="https://avatars.githubusercontent.com/u/139603426?v=4"
              alt=""
            />
          </div>
          <div className="floating-code-card">
            <span>Frontend</span>
            <strong>React + TypeScript</strong>
          </div>
          <div className="floating-code-card backend">
            <span>Backend</span>
            <strong>Python + Flask</strong>
          </div>
        </div>
      </div>
      <div className="hero-proof">
        {t.home.proof.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
};

export default Home;
