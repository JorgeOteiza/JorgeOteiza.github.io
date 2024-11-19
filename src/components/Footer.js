import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <section id="contacto" className="contact">
        <h2>Contacto</h2>
        <div className="lista-contacto">
          <p><span>Correo:</span> oteiza.jor@gmail.com</p>
          <p><span>Teléfono:</span> +569 649-XX-XXX</p>
        </div>
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
      </section>
      <p className="footer-note">Jorge Oteiza.</p>
    </footer>
  );
};

export default Footer;
