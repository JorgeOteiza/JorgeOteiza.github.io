import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Encabezado */}
      <header className="header">
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#educación">Educación</a></li>
            <li><a href="#proyectos">Proyectos</a></li>

            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Sección principal (Inicio) */}
      <section id="inicio" className="Home">
        <div className="home-container">
          <div className="profile-photo">
            <img 
              src="https://avatars.githubusercontent.com/u/139603426?v=4" 
              alt="Foto de Perfil" 
            />
          </div>
          <div className="home-text">
            <h1>Jorge Oteiza</h1>
            <p>Desarrollador Full Stack Junior</p>
          </div>
        </div>
      {/* Sección Tecnologías */}
      <section id="tecnologias" className="technologies">
        <h2>Tecnologías</h2>
        <p>
          *Buscar las imágenes de esto:
          Html, CSS, GIT, Bootstrap, JavaScript, React, Python, Flask, 
          SQLAlchemy, JWT, PostgreSQL, Postman, Figma
        </p>
      </section>
      </section>

      {/* Flecha para navegar */}
      <div className="arrow-down">↓</div>

      <div className="green-cards">
  {/* Sección Sobre mí */}
  <div className="sobre-mi-foto">
    <section id="sobre-mi" className="hero">
      <h1>Sobre mí</h1>
      <p>Si pudiera definirme en sólo una palabra, no podría.</p>
    </section>
  </div>

  {/* Sección Educación */}
  <div className="estudios">
    <section id="educación" className="educación">
      <h2>Educación</h2>
      <p>4Geeks Academy</p>
    </section>
  </div>
</div>



      {/* Sección Proyectos */}
      <section id="proyectos" className="projects">
        <h2>Proyectos</h2>
        <div className="project-card">
          <h3>Proyecto 1</h3>
          <p>Autenticación de usuario.</p>
          <h5>Tecnologías:</h5>
          <p>Javascript, React, Python</p>
        </div>
        <div className="project-card">
          <h3>Proyecto 2</h3>
          <p>En proceso.</p>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="contact">
        <h2>Contacto</h2>
        <div className="lista-contacto">
          <p>Correo: oteiza.jor@gmail.com</p>
          <p className="teléfono">Teléfono: +569 649-XX-XXX</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          github 
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
    </div>
  );
}

export default App;
