import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer p-3 px-5 m-auto" id="contacto">
      <div className="container containerFooter">
        <div className="row">
          {/* Sección de contacto */}
          <div className="contenedorContacto col-md-6 my-4 text-center">
            <h2 className="title-contact">Contacto</h2>
            <div className="datesContact">
              <p className="dates-contact">
                CORREO:{" "}
                <a href="mailto:oteiza.jor@gmail.com" className="footer-link">
                  OTEIZA.JOR@GMAIL.COM
                </a>
              </p>
              <p>
                TELÉFONO:{" "}
                <a href="tel:+569649XXXX" className="footer-link">
                  +569-649-44-102
                </a>
              </p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="rrssFooter text-center col-md-6 align-content-center">
            <a
              href="https://github.com/JorgeOteiza"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jorgecancinooteiza/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <small className="copyright">
              Jorge Oteiza | Desarrollador Full Stack |
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
