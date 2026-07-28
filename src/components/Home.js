import React from "react";
import "../styles/Home.css";

const Home = () => {
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
            Disponible para nuevos desafíos
          </span>
          <p className="hero-kicker">Hola, soy Jorge Oteiza</p>
          <h1>
            Desarrollo productos digitales <em>de principio a fin.</em>
          </h1>
          <p className="hero-description">
            Construyo aplicaciones completas con React, Flask y bases de datos:
            desde la experiencia de usuario hasta la lógica que mueve el negocio.
          </p>
          <div className="hero-actions">
            <button type="button" className="button-primary" onClick={handleScroll}>
              Ver proyectos
              <i className="fa-solid fa-arrow-down" aria-hidden="true"></i>
            </button>
            <a
              className="button-secondary"
              href="https://flowcv.com/resume/ub597hln6vj6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar CV
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          </div>
          <div className="hero-links" aria-label="Redes profesionales">
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
        <span>Aplicaciones reales</span>
        <span>APIs REST</span>
        <span>Experiencia de usuario</span>
        <span>Datos y automatización</span>
      </div>
    </section>
  );
};

export default Home;
