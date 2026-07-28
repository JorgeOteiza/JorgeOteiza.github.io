import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="containerFooter">
        <span className="footer-eyebrow">¿Construimos algo juntos?</span>
        <h2 className="title-contact">
          Tengo ganas de llevar la próxima idea <em>a producción.</em>
        </h2>
        <p className="footer-copy">
          Busco mi primera oportunidad profesional como desarrollador Full Stack.
          Si tienes un desafío, conversemos.
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
