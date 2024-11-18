import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        GitHub 
        <a 
          href="https://github.com/JorgeOteiza" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: 'darkgoldenrod', textDecoration: 'none' }}
        >
          Jorge Oteiza
        </a>
      </p>
    </footer>
  );
};

export default Footer;
