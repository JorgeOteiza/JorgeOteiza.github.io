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

  {/* Sección Experiencia */}
    <section id="experiencia" className="experiencia my-3">
      <h2>Experiencia</h2>
      <p>Proyectos personales</p>
    </section>
  
</div>

      {/* Sección Tecnologías */}
      <section id="tecnologias" className="technologies my-3">
        <h2>Tecnologías</h2>
        <p>
        <div className="icon-container my-3">
  <img src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-1.png" alt="HTML Logo" className="icon" />
  <img src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png" alt="CSS Logo" className="icon" />
  <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git Logo" className="icon" />
  <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap Logo" className="icon" />
  <img src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png" alt="JavaScript Logo" className="icon" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="icon" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="Vite Logo" className="icon"/>
  <img src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" alt="Jest Logo" className="icon"  />
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma Logo" className="icon" />
  <img src="https://tse4.mm.bing.net/th?id=OIP.dJToM1TiZiJA0GYwzDHwjQHaHY&pid=Api" alt="Python Logo" className="icon" />
  <img src="/logo-postgreSQL.png" alt="PostgreSQL Logo" className="icon" />
  <img src="/logo-Flask.png" alt="Flask Logo" className="icon" />
  <img src="https://icon.icepanel.io/Technology/svg/SQLAlchemy.svg" alt="SQLAlchemy Logo" className="icon" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png" alt="Postman Logo" className="icon"/>

  
  
</div>
        </p>
      </section>


      {/* Sección Proyectos */}
      <section id="proyectos" className="projects my-3">
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
      <section id="contacto" className="contact my-3">
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