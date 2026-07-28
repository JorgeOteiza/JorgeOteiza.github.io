import React, { useEffect, useRef, useState } from "react";
import "../styles/Proyectos.css";

const iconos = {
  figma: {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    alt: "Figma",
  },
  javascript: {
    src: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png",
    alt: "JavaScript",
  },
  typescript: {
    src: "https://www.svgrepo.com/show/349540/typescript.svg",
    alt: "TypeScript",
  },
  react: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
  },
  vite: {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
    alt: "Vite",
  },
  python: {
    src: "https://tse4.mm.bing.net/th?id=OIP.dJToM1TiZiJA0GYwzDHwjQHaHY&pid=Api",
    alt: "Python",
  },
  flask: {
    src: "/logo-flask.2.png",
    alt: "Flask",
  },
  fastapi: {
    src: "/pngwing.com.png",
    alt: "FastAPI",
  },
  postgres: {
    src: "/logo-postgreSQL.png",
    alt: "PostgreSQL",
  },
  sqlite: {
    src: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    alt: "SQLite",
  },
  sqlalchemy: {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/SQLAlchemy.svg",
    alt: "SQLAlchemy",
  },
  jwt: {
    src: "/JWTicon.png",
    alt: "JWT",
  },
  postman: {
    src: "/LogoPostman.png",
    alt: "Postman",
  },
  pytest: {
    src: "https://docs.pytest.org/en/stable/_static/pytest_logo_curves.svg",
    alt: "Pytest",
  },
  bootstrap: {
    src: "/logoBootstrap.png",
    alt: "Bootstrap",
  },
};

const proyectos = [
  {
    titulo: "Minimarket POS",
    imagen: "/minimarket-pos.png",
    alt: "Captura de Minimarket POS",
    resumen: "Sistema de punto de venta local para un minimarket.",
    repo: "https://github.com/JorgeOteiza/minimarket-pos",
    demo: "",
    rol: "Desarrollo full stack",
    enfoque:
      "Aplicación diseñada para usarse localmente en un solo equipo, sin servidor remoto ni conexión a internet obligatoria. Permite registrar productos, controlar stock, vender desde una caja web, revisar análisis de inventario y mantener respaldos locales de la base de datos. El pago ocurre fuera de la aplicación: el sistema registra la venta, descuenta inventario y conserva la información necesaria para reportes.",
    media: [
      {
        src: "/minimarket-pos.png",
        alt: "Pantalla principal de Minimarket POS",
      },
    ],
    detalles: [
      "Registro y edición de productos.",
      "Control de inventario, stock mínimo y ajustes manuales.",
      "Carrito y registro de ventas.",
      "Validación de stock insuficiente y productos sin precio.",
      "Reportes, analytics y generación de PDFs.",
      "Backups locales manuales y respaldo automático diario.",
      "Importación de productos desde CSV.",
      "Módulo de reposición de sacos y productos a granel.",
      "Configuración local de datos del negocio.",
    ],
    stack: {
      Backend: [
        "Python 3.12",
        "Flask",
        "SQLAlchemy",
        "Flask-Migrate / Alembic",
        "SQLite local",
        "Marshmallow",
        "Pytest",
      ],
      Frontend: [
        "Node.js 20.19.0 o superior",
        "React",
        "TypeScript",
        "Vite",
        "React Router",
        "Recharts",
      ],
    },
    tecnologias: [
      "typescript",
      "react",
      "vite",
      "python",
      "flask",
      "sqlite",
      "sqlalchemy",
      "pytest",
    ],
    destacado: true,
  },
  {
    titulo: "E-commerce",
    imagen: "/logoElRinconDelVino.png",
    alt: "Logo del proyecto E-commerce",
    resumen: "Aplicación web full stack para la venta de productos.",
    repo: "https://github.com/JorgeOteiza/final-project-FT22-g2_sitio.Web_E-Comerce",
    demo: "",
    rol: "Frontend y backend en equipo",
    enfoque:
      "Construcción de un flujo completo de tienda online, desde autenticación hasta consumo de APIs y persistencia de datos.",
    media: [
      {
        src: "/logoElRinconDelVino.png",
        alt: "Logo de El Rincon del Vino",
      },
    ],
    detalles: [
      "Autenticación de usuarios con JWT.",
      "Desarrollo de APIs REST con Flask.",
      "Manejo de estado y consumo de datos en React.",
      "Trabajo en equipo bajo metodología Kanban.",
    ],
    tecnologias: [
      "figma",
      "javascript",
      "react",
      "python",
      "flask",
      "postgres",
      "sqlalchemy",
      "jwt",
    ],
  },
  {
    titulo: "Travel Calculator",
    imagen: "/captura-travelcalculator-4.png",
    alt: "Captura de Travel Calculator",
    imageFit: "contain",
    resumen:
      "Aplicación para estimar consumo vehicular en base a múltiples variables.",
    repo: "https://github.com/JorgeOteiza/travel.calculator",
    demo: "",
    rol: "Desarrollo full stack",
    enfoque:
      "Herramienta para estimar consumo vehicular a partir de datos del viaje, vehículo y cálculos del backend.",
    media: [
      {
        src: "/captura-travelcalculator-4.png",
        alt: "Resumen de cálculo de Travel Calculator",
      },
      {
        src: "/deleteVehicle.png",
        alt: "Gestión de vehículos en Travel Calculator",
      },
    ],
    detalles: [
      "Lógica de cálculo implementada en backend.",
      "Integración de APIs externas para obtener datos.",
      "Persistencia de información en base de datos local.",
      "Interfaz interactiva para ingreso y visualización de datos.",
    ],
    tecnologias: [
      "javascript",
      "react",
      "vite",
      "python",
      "flask",
      "postgres",
      "sqlalchemy",
      "jwt",
    ],
  },
  {
    titulo: "Autenticación",
    imagen: "/registroCreadoAutenticacion.png",
    alt: "Pantalla de usuario creado en proyecto de autenticación",
    imageFit: "contain",
    resumen:
      "Sistema full stack para registro, inicio de sesión y gestión de usuarios.",
    repo: "https://github.com/JorgeOteiza/Project_autenticacion-login--React-flask",
    demo: "",
    rol: "Desarrollo full stack",
    enfoque:
      "Proyecto centrado en seguridad de usuarios, protección de rutas y comunicación entre frontend y backend.",
    media: [
      {
        src: "/registroCreadoAutenticacion.png",
        alt: "Registro creado en el sistema de autenticación",
      },
    ],
    detalles: [
      "APIs REST desarrolladas con Flask.",
      "Autenticación mediante tokens JWT.",
      "Encriptación de contraseñas para seguridad.",
      "Protección de rutas en frontend con React.",
    ],
    tecnologias: [
      "javascript",
      "react",
      "python",
      "flask",
      "postgres",
      "sqlalchemy",
      "jwt",
      "postman",
    ],
  },
  {
    titulo: "Blog de Star Wars",
    imagen: "/characterslistportfolio.png",
    alt: "Listado de personajes del blog de Star Wars",
    resumen: "Aplicación web para visualizar información desde una API externa.",
    repo: "https://github.com/JorgeOteiza/project_Blog_de_StarWars",
    demo: "",
    rol: "Frontend",
    enfoque:
      "Exploración de consumo de API externa, renderizado dinámico y manejo de estado en React.",
    media: [
      {
        src: "/characterslistportfolio.png",
        alt: "Listado de personajes del blog de Star Wars",
      },
    ],
    detalles: [
      "Consumo de datos desde la API pública SWAPI.",
      "Renderizado dinámico de información en React.",
      "Manejo de estado para actualizar contenido.",
      "Diseño de interfaz con Bootstrap y prototipado en Figma.",
    ],
    tecnologias: ["figma", "bootstrap", "javascript", "react"],
    secundario: true,
  },
  {
    titulo: "Short URL",
    imagen: "/URL-SHORT-portfolio.png",
    alt: "Captura del proyecto Short URL",
    resumen: "Aplicación web para acortar enlaces con una API externa.",
    repo: "https://github.com/JorgeOteiza/Short-url",
    demo: "",
    rol: "Frontend y backend",
    enfoque:
      "Integración de un backend ligero con FastAPI para consumir servicios externos y devolver enlaces cortos.",
    media: [
      {
        src: "/URL-SHORT-portfolio.png",
        alt: "Pantalla del acortador de URL",
      },
    ],
    detalles: [
      "Consumo de TinyURL para generar enlaces cortos.",
      "Backend desarrollado con FastAPI.",
      "Procesamiento de solicitudes HTTP y respuestas.",
      "Interfaz desarrollada con React y Vite.",
    ],
    tecnologias: ["javascript", "react", "vite", "python", "fastapi"],
    secundario: true,
  },
];

const PhoneMediaCarousel = ({ proyecto, eager = false }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef(null);
  const slides = proyecto.media?.length
    ? proyecto.media
    : [{ src: proyecto.imagen, alt: proyecto.alt }];
  const hasMultipleSlides = slides.length > 1;
  const currentSlide = slides[activeSlide];

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const distance = touchStartX.current - event.changedTouches[0].clientX;
    touchStartX.current = null;

    if (Math.abs(distance) < 42) return;
    if (distance > 0) showNext();
    else showPrevious();
  };

  return (
    <div
      className="phone-media"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        key={currentSlide.src}
        src={currentSlide.src}
        alt={currentSlide.alt}
        loading={eager ? "eager" : "lazy"}
      />
      {hasMultipleSlides && (
        <>
          <button
            type="button"
            className="phone-gallery-control previous"
            onClick={showPrevious}
            aria-label={`Ver imagen anterior de ${proyecto.titulo}`}
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className="phone-gallery-control next"
            onClick={showNext}
            aria-label={`Ver imagen siguiente de ${proyecto.titulo}`}
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <div className="phone-gallery-dots" aria-label="Imágenes del proyecto">
            {slides.map((slide, index) => (
              <button
                type="button"
                className={index === activeSlide ? "active" : ""}
                key={slide.src}
                onClick={() => setActiveSlide(index)}
                aria-label={`Ver imagen ${index + 1} de ${proyecto.titulo}`}
                aria-current={index === activeSlide ? "true" : undefined}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Proyectos = () => {
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const [mediaActiva, setMediaActiva] = useState(0);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const abrirDetalle = (proyecto) => {
    triggerRef.current = document.activeElement;
    setProyectoActivo(proyecto);
    setMediaActiva(0);
  };

  const cerrarDetalle = () => {
    setProyectoActivo(null);
    setMediaActiva(0);
  };

  useEffect(() => {
    if (!proyectoActivo) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        cerrarDetalle();
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);
    dialogRef.current
      ?.querySelector(".project-modal-close")
      ?.focus();

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [proyectoActivo]);

  const mediaSeleccionada = proyectoActivo?.media?.[mediaActiva];
  const proyectosPrincipales = proyectos.filter((proyecto) => !proyecto.secundario);
  const proyectosSecundarios = proyectos.filter((proyecto) => proyecto.secundario);

  return (
    <section id="proyectos" className="proyectos">
      <div className="projects-heading">
        <div className="projects-title-row">
          <span className="section-number">01</span>
          <div>
            <span className="section-eyebrow">Trabajo seleccionado</span>
            <h2 className="title-prjct">Productos que viven más allá del código.</h2>
          </div>
        </div>
        <p className="projects-intro">
          Cada dispositivo abre una historia: el problema, las decisiones y la
          tecnología que convirtió una idea en una aplicación funcional.
        </p>
      </div>

      <div className="projects-grid">
        {proyectosPrincipales.map((proyecto, projectIndex) => (
          <article
            className={`phone-project ${proyecto.destacado ? "featured" : ""}`}
            key={proyecto.titulo}
          >
            <div className="phone-stage">
              {proyecto.destacado && (
                <span className="featured-label">Proyecto destacado</span>
              )}
              <div className="phone-shadow" aria-hidden="true"></div>
              <div className="phone-device">
                <div className="phone-side-button phone-volume" aria-hidden="true"></div>
                <div className="phone-side-button phone-power" aria-hidden="true"></div>
                <div className="phone-screen">
                  <div className="phone-status" aria-hidden="true">
                    <span>9:41</span>
                    <div className="phone-island"></div>
                    <span className="status-icons">
                      <i className="fa-solid fa-signal"></i>
                      <i className="fa-solid fa-battery-three-quarters"></i>
                    </span>
                  </div>
                  <PhoneMediaCarousel
                    proyecto={proyecto}
                    eager={projectIndex === 0}
                  />
                  <div className="phone-content">
                    <div className="phone-project-number">
                      Proyecto {String(projectIndex + 1).padStart(2, "0")}
                    </div>
                    <h3>{proyecto.titulo}</h3>
                    <p>{proyecto.resumen}</p>
                    <div className="phone-tags" aria-label="Tecnologías principales">
                      {proyecto.tecnologias.slice(0, 3).map((tecnologia) => (
                        <span key={tecnologia}>{iconos[tecnologia].alt}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="phone-open-project"
                      onClick={() => abrirDetalle(proyecto)}
                      aria-label={`Ver caso completo de ${proyecto.titulo}`}
                    >
                      Explorar proyecto
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="phone-home-indicator" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="other-projects">
        <div className="other-projects-heading">
          <span className="section-eyebrow">Más exploraciones</span>
          <h3>Otros proyectos</h3>
        </div>

        <div className="other-projects-list">
          {proyectosSecundarios.map((proyecto) => (
            <button
              type="button"
              className="other-project-card"
              key={proyecto.titulo}
              onClick={() => abrirDetalle(proyecto)}
            >
              <span>{proyecto.titulo}</span>
              <small>{proyecto.resumen}</small>
            </button>
          ))}
        </div>
      </div>

      {proyectoActivo && (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              cerrarDetalle();
            }
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            ref={dialogRef}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={cerrarDetalle}
              aria-label="Cerrar detalle del proyecto"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="project-modal-media">
              {mediaSeleccionada?.type === "video" ? (
                <video src={mediaSeleccionada.src} controls playsInline />
              ) : (
                <img
                  src={mediaSeleccionada?.src || proyectoActivo.imagen}
                  alt={mediaSeleccionada?.alt || proyectoActivo.alt}
                />
              )}

              {proyectoActivo.media.length > 1 && (
                <div className="project-thumbnails">
                  {proyectoActivo.media.map((item, index) => (
                    <button
                      type="button"
                      className={index === mediaActiva ? "active" : ""}
                      key={item.src}
                      onClick={() => setMediaActiva(index)}
                      aria-label={`Ver imagen ${index + 1} de ${proyectoActivo.titulo}`}
                    >
                      <img src={item.src} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="project-modal-content">
              <span className="section-kicker">Detalle del proyecto</span>
              <h2 id="project-modal-title">{proyectoActivo.titulo}</h2>
              <p className="project-modal-summary">{proyectoActivo.enfoque}</p>

              <div className="project-meta">
                <div>
                  <span>Rol</span>
                  <strong>{proyectoActivo.rol}</strong>
                </div>
                <div>
                  <span>Stack</span>
                  <strong>
                    {proyectoActivo.tecnologias
                      .map((tecnologia) => iconos[tecnologia].alt)
                      .join(", ")}
                  </strong>
                </div>
              </div>

              {proyectoActivo.stack && (
                <div className="project-stack-detail">
                  {Object.entries(proyectoActivo.stack).map(([area, items]) => (
                    <div className="stack-group" key={area}>
                      <h3>{area}</h3>
                      <ul>
                        {items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <h3>Qué resuelve</h3>
              <ul className="modal-detail-list">
                {proyectoActivo.detalles.map((detalle) => (
                  <li key={detalle}>{detalle}</li>
                ))}
              </ul>

              <div className="project-modal-actions">
                <a
                  href={proyectoActivo.repo}
                  className="repositorios-target"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>Ver repositorio</span>
                </a>
                {proyectoActivo.demo && (
                  <a
                    href={proyectoActivo.demo}
                    className="repositorios-target secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-up-right-from-square"></i>
                    <span>Ver demo</span>
                  </a>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default Proyectos;
