import React from "react";
import "../styles/Proyectos.css";

const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos py-5 my-5 mx-1">
      <h2 className="title-prjct">Proyectos</h2>
      <div className="prjct">
        {/* Primera tarjeta */}
        <div className="project-card">
          <img
            src="/logoElRinconDelVino.png"
            className="card-img-top"
            alt="Logo del proyecto e-commerce"
          />
          <h3 className="title">e-commerce</h3>
          <p>Aplicación para ventas de vinos elaborados en Chile.</p>
          <a
            href="https://github.com/JorgeOteiza/final-project-FT22-g2_sitio.Web_E-Comerce"
            className="repositorios-target"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="repositorios-targets fa-solid fa-link"></i>
          </a>
          <div className="logos-proyect">
            <img
              src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-1.png"
              alt="HTML Logo"
              className="icon-mini"
            />
            <img
              src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png"
              alt="CSS Logo"
              className="icon-mini"
            />
            <img
              src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"
              alt="JavaScript Logo"
              className="icon-mini"
            />
          </div>
        </div>

        {/* Segunda tarjeta */}
        <div className="project-card">
          <img
            src="/registroCreadoAutenticacion.png"
            className="card-img-top"
            alt="usuario creado"
          />
          <h3>Autenticación</h3>
          <p>
            Proyecto Full-Stack diseñado para crear registros con id únicas y
            encriptación de contraseñas.
          </p>
          <a
            href="https://github.com/JorgeOteiza/Project_autenticacion-login--React-flask"
            className="repositorios-target"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="repositorios-targets fa-solid fa-link"></i>
          </a>
          <div className="logos-proyect">
            <img
              src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"
              alt="JavaScript Logo"
              className="icon-mini"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
              className="icon-mini"
            />
          </div>
        </div>

        {/* Tercera tarjeta */}
        <div className="project-card">
          <img
            src="/swCharacters.png"
            className="card-img-top"
            alt="Characters add"
          />
          <h3>Blog de Star Wars</h3>
          <p>
            Desarrollo de un blog informativo sobre Star Wars, utilizando la API
            "SWAPI" para obtener datos y almacenamiento local en localhost para
            gestionar la información.
          </p>
          <a
            href="https://github.com/JorgeOteiza/project_Blog_de_StarWars"
            className="repositorios-target"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="repositorios-targets fa-solid fa-link"></i>
          </a>
          <div className="logos-proyect">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.dJToM1TiZiJA0GYwzDHwjQHaHY&pid=Api"
              alt="Python Logo"
              className="icon-mini"
            />
            <img
              src="https://repository-images.githubusercontent.com/596892/cc2c69ec-9251-4b33-8283-b86a8659c9cb"
              alt="Flask Logo"
              className="icon-mini"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
