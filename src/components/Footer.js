import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer p-3 m-auto">
      <div className="container">
        <div className="row">
          {/* Sección de contacto */}
          <div className="contenedorContacto col-md-6 mb-4 text-center">
            <h2 className="title-contact">Contacto</h2>
            <p>
              Correo:{" "}
              <a href="mailto:oteiza.jor@gmail.com" className="footer-link">
                oteiza.jor@gmail.com
              </a>
            </p>
            <p>
              Teléfono:{" "}
              <a href="tel:+569649XXXX" className="footer-link">
                +569 649-XX-XXX
              </a>
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="col-md-6 text-center">
            <a
              href="https://github.com/JorgeOteiza"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://linkedin.com/in/jorgeoteiza"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Línea de derechos de autor */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <small className="copyright">
              © 2024 Jorge Oteiza | Desarrollador Full Stack |
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
