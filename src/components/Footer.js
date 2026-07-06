import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="containerFooter">
        <div className="footer-grid">
          <section className="footer-panel contenedorContacto">
            <h2 className="title-contact">Contacto</h2>
            <div className="datesContact">
              <p>
                <span>Correo</span>
                <a href="mailto:oteiza.jor@gmail.com" className="footer-link">
                  oteiza.jor@gmail.com
                </a>
              </p>
              <p>
                <span>Teléfono</span>
                <a href="tel:+56964944102" className="footer-link">
                  +569-649-44-102
                </a>
              </p>
            </div>
          </section>

          <section className="footer-panel rrssFooter">
            <h2 className="title-contact">Redes</h2>
            <div className="social-links">
              <a
                href="https://github.com/JorgeOteiza"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jorgecancinooteiza/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </section>
        </div>

        <small className="copyright">
          Jorge Oteiza | Desarrollador Full Stack
        </small>
      </div>
    </footer>
  );
};

export default Footer;
