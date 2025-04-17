import React, { useEffect } from "react";
import "../styles/Proyectos.css";

const Proyectos = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    if (cards.length > 0) {
      let maxHeight = 0;

      // Encuentra la altura máxima
      cards.forEach((card) => {
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      });

      // Asigna la altura máxima a todas las tarjetas
      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    }
  }, []);
  return (
    <section id="proyectos" className="proyectos py-5 my-5 mx-1">
      <h2 className="title-prjct text-center">PROYECTOS</h2>
      <div className="prjct row g-4 justify-content-center col-md-7 col-md-12 col-sm-11 col-lg-auto">
        {/* Primera tarjeta */}
        <div className="project-card col-12 col-sm-6 col-lg-4">
          <div className="image-container">
            <img
              src="/logoElRinconDelVino.png"
              className="card-img-top"
              alt="Logo del proyecto e-commerce"
            />
          </div>
          <div className="content-container">
            <h3 className="title">E-COMMERCE</h3>
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
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="Figma Logo"
                className="icon-mini"
              />
              <img
                src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"
                alt="JavaScript Logo"
                className="icon-mini"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
                className="icon-mini"
              />{" "}
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
              <img
                src="/logo-postgreSQL.png"
                alt="PostgreSQL Logo"
                className="icon-mini"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/SQLAlchemy.svg"
                alt="SQLAlchemy Logo"
                className="icon-mini"
              />
              <img src="/JWTicon.png" alt="JWT Logo" className="icon-mini" />
            </div>
          </div>
        </div>

        {/* Segunda tarjeta */}
        <div className="project-card col-12 col-sm-6 col-lg-4">
          <div className="image-container">
            <img
              src="/registroCreadoAutenticacion.png"
              className="card-img-top"
              alt="usuario creado"
            />
          </div>
          <div className="content-container">
            <h3>AUTENTICACIÓN</h3>
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
              <img
                src="/logo-postgreSQL.png"
                alt="PostgreSQL Logo"
                className="icon-mini"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/SQLAlchemy.svg"
                alt="SQLAlchemy Logo"
                className="icon-mini"
              />
              <img src="/JWTicon.png" alt="JWT Logo" className="icon-mini" />
              <img
                src="/LogoPostman.png"
                alt="Postman logo"
                className="icon-mini"
              />
            </div>
          </div>
        </div>

        {/* Tercera tarjeta */}
        <div className="project-card col-12 col-sm-6 col-lg-4">
          <div className="image-container">
            <img
              src="/characterslistportfolio.png"
              className="card-img-top"
              alt="Characters add"
            />
          </div>
          <div className="content-container">
            <h3>BLOG DE STAR WARS</h3>
            <p>
              Desarrollo de un blog informativo sobre Star Wars, utilizando la
              API "SWAPI" para obtener datos.
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
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="Figma Logo"
                className="icon-mini"
              />
              <img
                src="/logoBootstrap.png"
                alt="Bootstrap logo"
                className="icon-mini"
              />
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
        </div>

        {/* Cuarta tarjeta */}
        <div className="project-card">
          <div className="image-container">
            <img
              src="/URL-SHORT-portfolio.png"
              className="card-img-top"
              alt="Characters add"
            />
          </div>
          <div className="content-container">
            <h3>ACORTADOR DE LINKS</h3>
            <p>
              Aplicación web para acortar URLs utilizando la API de TinyURL, con
              lógica backend en FastAPI e interfaz moderna con React.
            </p>
            <a
              href="https://github.com/JorgeOteiza/Short-url"
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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
                alt="Vite Logo"
                className="icon-mini"
              />
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.dJToM1TiZiJA0GYwzDHwjQHaHY&pid=Api"
                alt="Python Logo"
                className="icon-mini"
              />
              <img
                src="/pngwing.com.png"
                alt="Fast API"
                className="icon-mini"
              />
            </div>
          </div>
        </div>

        {/* Quinta tarjeta */}
        <div className="project-card">
          <div className="image-container">
            <img
              src="/URL-SHORT-portfolio.png"
              className="card-img-top"
              alt="Characters add"
            />
          </div>
          <div className="content-container">
            <h3>Travel Calculator</h3>
            <p>
              Aplicación web para calcular el consumo de vehículos, se consideran diversos factores externos e internos que puedan afectar su rendimiento.
            </p>
            <a
              href="https://github.com/JorgeOteiza/travel.calculator"
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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
                alt="Vite Logo"
                className="icon-mini"
              />
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.dJToM1TiZiJA0GYwzDHwjQHaHY&pid=Api"
                alt="Python Logo"
                className="icon-mini"
              />
              <img
                src="/pngwing.com.png"
                alt="Fast API"
                className="icon-mini"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
