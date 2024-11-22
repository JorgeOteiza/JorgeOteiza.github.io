import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="dates-person">
        <section id="contacto" className="contact">
          <h2>Contacto</h2>
          <div className="lista-contacto">
            <p>
              <span>Correo:</span> oteiza.jor@gmail.com
            </p>
            <p>
              <span>Teléfono:</span> +569 649-XX-XXX
            </p>
          </div>
        </section>
        <div className="RRSS">
          <div className="social-links">
            <a
              href="https://github.com/JorgeOteiza"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/jorgecancinoote%C3%ADza/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i class="fa-brands fa-linkedin"></i> Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
