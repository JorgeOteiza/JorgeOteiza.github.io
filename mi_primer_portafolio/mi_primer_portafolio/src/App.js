import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Encabezado */}
      <header className="header">
        <nav>
          <ul>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#tecnologias">Tecnologías</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Sección principal */}
      <section id="sobre-mi" className="hero">
        <h1>Nombre del Desarrollador</h1>
        <p>Desarrollador Full Stack Junior especializado en desarrollo web</p>
      </section>

      {/* Flecha para navegar */}
      <div className="arrow-down">↓</div>

      {/* Sección Proyectos */}
      <section id="proyectos" className="projects">
        <h2>Proyectos</h2>
        <div className="project-card">
          <h3>Proyecto 1</h3>
          <p>Descripción breve del proyecto.</p>
        </div>
        <div className="project-card">
          <h3>Proyecto 2</h3>
          <p>Descripción breve del proyecto.</p>
        </div>
      </section>

      {/* Sección Habilidades */}
      <section id="habilidades" className="skills">
        <h2>Habilidades</h2>
        <p>HTML, CSS, JavaScript, React</p>
      </section>

      {/* Sección Tecnologías */}
      <section id="tecnologias" className="technologies">
        <h2>Tecnologías</h2>
        <p>Bootstrap, Python, Flask, SQLAlchemy, JWT, PostgreSQL, Postman, Figma</p>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="contact">
        <h2>Contacto</h2>
        <p>Correo: ejemplo@correo.com</p>
      </section>

      {/* Footer */}
      <footer>
        <p>Desarrollado por Nombre del Desarrollador</p>
      </footer>
    </div>
  );
}

export default App;
