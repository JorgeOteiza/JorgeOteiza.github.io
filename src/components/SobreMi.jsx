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
              Soy desarrollador Full Stack especializado en React, Flask y
              FastAPI. Diseño interfaces, construyo APIs REST, modelo datos con
              PostgreSQL y convierto necesidades reales en productos completos.
          </p>
          <p>
              Minimarket Manager resume mi forma de trabajar: comprender el
              negocio, cuidar los detalles y transformar una necesidad real en
              una solución utilizable. También trabajo con autenticación segura,
              pruebas automatizadas, contenedores y despliegues en producción.
              Actualmente busco mi primera oportunidad profesional para aportar,
              aprender y seguir creciendo junto a un equipo.
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
          <p className="about-process-label">Cómo trabajo</p>
          <article>
            <span>01</span>
            <h3>Entender el problema</h3>
            <p>Traduzco la necesidad del usuario y del negocio en un alcance concreto.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Diseñar la arquitectura</h3>
            <p>Conecto interfaz, API, datos y reglas de negocio como un solo producto.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Probar e iterar</h3>
            <p>Valido recorridos críticos, automatizo pruebas y refino la experiencia.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Publicar y observar</h3>
            <p>Preparo el despliegue, la persistencia y la operación del producto.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
