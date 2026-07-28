import React from "react";
import "../styles/SobreMi.css";

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-heading">
        <span className="section-number">03</span>
        <div>
          <span className="section-eyebrow">La persona detrás del código</span>
          <h2>Sobre mí</h2>
        </div>
      </div>
      <div className="about-grid">
        <div className="sobreMi">
          <p className="about-lead">
            Me gusta convertir problemas cotidianos en productos claros,
            rápidos y fáciles de usar.
          </p>
          <div className="descriptionForMe">
          <p>
              Soy desarrollador Full Stack especializado en React y Flask. En
              mis proyectos diseño interfaces, construyo APIs REST, modelo bases
              de datos y convierto necesidades reales en herramientas completas.
          </p>
          <p>
              Minimarket POS resume muy bien mi forma de trabajar: entender el
              negocio, cuidar los detalles y construir una solución que pueda
              utilizarse de verdad. Actualmente busco mi primera oportunidad
              profesional para aportar, aprender y seguir creciendo.
          </p>
          </div>
          <a
            href="https://flowcv.com/resume/ub597hln6vj6"
            className="about-cv-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir currículum de Jorge Oteiza en una pestaña nueva"
          >
            Ver currículum completo
            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
        <div className="about-facts">
          <article>
            <span>01</span>
            <h3>Producto completo</h3>
            <p>Pienso en la experiencia, los datos y la operación como un solo sistema.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Backend con propósito</h3>
            <p>APIs, autenticación y reglas de negocio diseñadas para resolver necesidades reales.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Aprendizaje constante</h3>
            <p>Itero, pruebo y mejoro cada proyecto hasta convertirlo en una solución sólida.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
