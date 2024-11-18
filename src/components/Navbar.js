import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <Navbar className="navbar">
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#educacion">Educación</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </Navbar>
  );
};

export default Navbar;
