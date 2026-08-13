import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="containerFooter">
        <span className="footer-eyebrow">¿Construimos algo juntos?</span>
        <h2 className="title-contact">
          Convirtamos la próxima idea <em>en un producto real.</em>
        </h2>
        <p className="footer-copy">
          Estoy disponible para colaborar en productos digitales y sumarme a un
          equipo donde pueda aportar desde el frontend hasta el backend. Si tienes
          un desafío, conversemos.
        </p>
        <a href="mailto:oteiza.jor@gmail.com" className="contact-cta">
          Escríbeme
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
        <div className="footer-bottom">
          <a href="mailto:oteiza.jor@gmail.com" className="footer-email">
            oteiza.jor@gmail.com
          </a>
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
          <small className="copyright">
            © {new Date().getFullYear()} Jorge Oteiza
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
