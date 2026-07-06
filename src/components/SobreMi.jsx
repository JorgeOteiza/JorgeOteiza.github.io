import React from "react";
import "../styles/SobreMi.css";

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="hero h-auto">
      <div className="sobreMi h-auto">
        <h3>Sobre mí</h3>
        <div className="descriptionForMe">
          <p>
            Desarrollador Full Stack enfocado en la construcción de aplicaciones
            web modernas utilizando React en frontend y Flask en backend. He
            desarrollado proyectos full stack donde implemento APIs REST,
            autenticación con JWT y manejo de bases de datos con PostgreSQL.
            Experiencia trabajando en equipo bajo metodologías ágiles (Kanban),
            participando en el desarrollo de soluciones desde el diseño hasta la
            implementación.
          </p>
          <p>
            Actualmente busco mi primera oportunidad profesional como
            desarrollador.
          </p>
        </div>
        <div className="CV p-1">
          <h6 className="curriculum">CV:</h6>
          <a
            href="https://flowcv.com/resume/ub597hln6vj6"
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
