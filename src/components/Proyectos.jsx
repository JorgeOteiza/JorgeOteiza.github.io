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
            <p>
              <i>Aplicación web full stack para la venta de productos.</i>
              <div className="descriptionText">
                <ul>
                  <li>Implementación de autenticación de usuarios con JWT.</li>
                  <li>Desarrollo de APIs REST con Flask.</li>
                  <li>Manejo de estado y consumo de datos en React.</li>
                  <li>Trabajo en equipo bajo metodología Kanban.</li>
                </ul>
              </div>
            </p>
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
                src="/logo-flask.2.png"
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
              src="/minimarket-pos.png"
              className="card-img-top"
              alt="Minimarket-Pos"
            />
          </div>
          <div className="content-container">
            <h3 className="title">MINIMARKET POS</h3>
            <p>
              <i>
                Sistema de punto de venta para gestión de productos, inventario
                y ventas.
              </i>
              <div className="descriptionText">
                <ul>
                  <li>Desarrollo de API REST con Flask y SQLAlchemy.</li>
                  <li>
                    Gestión de inventario y lógica de negocio en backend .
                  </li>
                  <li>Interfaz en React con TypeScript y manejo de estado.</li>
                  <li>Arquitectura modular para escalabilidad del sistema.</li>
                </ul>
              </div>
            </p>
            <a
              href="https://github.com/JorgeOteiza/minimarket-pos"
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
                src="https://www.svgrepo.com/show/349540/typescript.svg"
                alt="TypeScript Logo"
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
                src="/logo-flask.2.png"
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
            </div>
          </div>
        </div>

        {/* Tercera tarjeta */}
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
              <i>
                Sistema de autenticación full stack para registro y gestión de
                usuarios.
              </i>
              <div className="descriptionText">
                <ul>
                  <li>Desarrollo de APIs REST con Flask.</li>
                  <li>Implementación de autenticación con JWT.</li>
                  <li>Encriptación de contraseñas para seguridad.</li>
                  <li>Protección de rutas en frontend con React.</li>
                </ul>
              </div>
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
                src="/logo-flask.2.png"
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

        {/* Cuarta tarjeta */}
        <div className="project-card">
          <div className="image-container">
            <img
              src="/captura-travelcalculator-4.png"
              className="card-img-top"
              alt="Characters add"
            />
          </div>
          <div className="content-container">
            <h3>TRAVEL CALCULATOR</h3>
            <p>
              <i>
                Aplicación para estimar consumo vehicular en base a múltiples
                variables.
              </i>
              <div className="descriptionText">
                <ul>
                  <li>Implementación de lógica de cálculo en backend.</li>
                  <li>Integración de APIs externas para obtención de datos.</li>
                  <li>Persistencia de información en base de datos local.</li>
                  <li>
                    Interfaz interactiva para ingreso y visualización de datos.
                  </li>
                </ul>
              </div>
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
                src="/logo-flask.2.png"
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

        {/* Quinta tarjeta */}
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
              <i>
                Aplicación web para visualización de información utilizando una
                API externa.
              </i>
              <div className="descriptionText">
                <ul>
                  <li>Consumo de datos desde la API pública SWAPI.</li>
                  <li>
                    Renderizado dinámico de información en interfaz React.
                  </li>
                  <li>Manejo de estado para actualización de contenido.</li>
                  <li>
                    Diseño de interfaz utilizando Bootstrap y prototipado en
                    Figma.
                  </li>
                </ul>
              </div>
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

        {/* Sexta tarjeta */}
        <div className="project-card">
          <div className="image-container">
            <img
              src="/URL-SHORT-portfolio.png"
              className="card-img-top"
              alt="Characters add"
            />
          </div>
          <div className="content-container">
            <h3>SHORT URL</h3>
            <p>
              <i>
                Aplicación web para acortar enlaces mediante integración con API
                externa.
              </i>
              <div className="descriptionText">
                <ul>
                  <li>
                    Consumo de API de TinyURL para generación de enlaces cortos.
                  </li>
                  <li>Implementación de lógica backend con FastAPI.</li>
                  <li>
                    Manejo de solicitudes HTTP y procesamiento de respuestas.
                  </li>
                  <li>Interfaz desarrollada con React y Vite.</li>
                </ul>
              </div>
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
      </div>
    </section>
  );
};

export default Proyectos;
