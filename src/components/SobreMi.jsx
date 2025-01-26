import React from "react";
import "../styles/SobreMi.css";

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="hero h-auto">
      <div className="sobreMi h-auto">
        <h3>SOBRE MÍ</h3>
        <p>
          ¡Hola! Bienvenido a mi portafolio. Soy desarrollador Full Stack con
          experiencia en tecnologías modernas de Frontend y Backend. He
          trabajado en proyectos colaborativos aplicando herramientas y
          metodologías ágiles para crear soluciones funcionales e innovadoras.
        </p>
        <p>
          Actualmente, busco oportunidades laborales que me permitan seguir
          creciendo profesionalmente mientras aporto valor al desarrollo de
          proyectos de calidad.
        </p>
        <div className="CV p-1">
          <h6 className="currículum">CV:</h6>
          <a
            href="https://storage.googleapis.com/breathecode-user-attachments/78cf50be9bd854a08d1c19a013bda739c326fcd7dd69f6a3133d36568957d822"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-file"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
