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
    src: "/pytest-logo.svg",
    alt: "Pytest",
  },
  bootstrap: {
    src: "/logoBootstrap.png",
    alt: "Bootstrap",
  },
};

const minimarketMedia = [
  {
    src: "/projects/minimarket-pos/estadisticas-resumen.png",
    alt: "Dashboard de estadísticas y resumen comercial de Minimarket Manager",
  },
  {
    src: "/projects/minimarket-pos/estadisticas-inventario.png",
    alt: "Productos más vendidos y alertas de inventario",
  },
  {
    src: "/projects/minimarket-pos/lista-productos.png",
    alt: "Listado y búsqueda de productos en Minimarket Manager",
  },
  {
    src: "/projects/minimarket-pos/ajuste-inventario.png",
    alt: "Ajuste manual de inventario en Minimarket Manager",
  },
  {
    src: "/projects/minimarket-pos/caja-carrito.png",
    alt: "Punto de venta de Minimarket Manager con productos en el carrito",
  },
  {
    src: "/projects/minimarket-pos/reportes-ventas.png",
    alt: "Reporte de ventas por periodo de Minimarket Manager",
  },
  {
    src: "/projects/minimarket-pos/edicion-producto.png",
    alt: "Edición de costos, precios y stock de un producto",
  },
  {
    src: "/projects/minimarket-pos/reposicion-sacos-paquetes.png",
    alt: "Registro de reposición de sacos y paquetes",
  },
  {
    src: "/projects/minimarket-pos/historial-reposiciones.png",
    alt: "Historial de reposiciones de productos a granel",
  },
  {
    src: "/projects/minimarket-pos/atajos.png",
    alt: "Panel de atajos de teclado de Minimarket Manager",
  },
];

const minimarketPhoneMedia = [
  minimarketMedia[0],
  minimarketMedia[2],
  minimarketMedia[4],
];

const ecommercePhoneMedia = [
  {
    src: "/projects/ecommerce/responsive-catalog-filters.png",
    alt: "Catálogo responsive con filtros aplicados en El Rincón del Vino",
  },
  {
    src: "/projects/ecommerce/product-detail.png",
    alt: "Detalle responsive de un vino en El Rincón del Vino",
  },
  {
    src: "/projects/ecommerce/mobile-showcase.png",
    alt: "Vitrina de vinos de El Rincón del Vino en vista móvil",
  },
];

const ecommerceMedia = [
  {
    src: "/projects/ecommerce/home.png",
    alt: "Página principal de El Rincón del Vino",
  },
  {
    src: "/projects/ecommerce/favorites.png",
    alt: "Selección de vinos favoritos de El Rincón del Vino",
  },
  ecommercePhoneMedia[1],
  {
    src: "/projects/ecommerce/cart.png",
    alt: "Carrito y resumen de compra de El Rincón del Vino",
  },
  {
    src: "/projects/ecommerce/payment.png",
    alt: "Selección de método de pago de El Rincón del Vino",
  },
  {
    src: "/projects/ecommerce/order-confirmation.png",
    alt: "Confirmación de compra de El Rincón del Vino",
  },
  {
    src: "/projects/ecommerce/purchase-history.png",
    alt: "Historial de compras de El Rincón del Vino",
  },
  {
    src: "/projects/ecommerce/profile.png",
    alt: "Perfil y accesos rápidos del usuario en El Rincón del Vino",
  },
  {
    src: "/projects/ecommerce/contact.png",
    alt: "Formulario de contacto de El Rincón del Vino",
  },
  ecommercePhoneMedia[2],
  ecommercePhoneMedia[0],
];

const proyectos = [
  {
    titulo: "Minimarket Manager",
    imagen: minimarketMedia[0].src,
    alt: minimarketMedia[0].alt,
    resumen:
      "Sistema local de gestión comercial para ventas, inventario, reportes y respaldos.",
    repo: "https://github.com/JorgeOteiza/minimarket-pos",
    demo: "",
    rol: "Desarrollo full stack",
    enfoque:
      "Aplicación diseñada para usarse localmente en un solo equipo, sin servidor remoto ni conexión a internet obligatoria. Permite registrar productos, controlar stock, vender desde una caja web, revisar análisis de inventario y mantener respaldos locales de la base de datos. El pago ocurre fuera de la aplicación: el sistema registra la venta, descuenta inventario y conserva la información necesaria para reportes.",
    phoneMedia: minimarketPhoneMedia,
    media: minimarketMedia,
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
    imagen: ecommerceMedia[0].src,
    alt: ecommerceMedia[0].alt,
    resumen: "Tienda online de vinos con catálogo, compra y experiencia responsive.",
    repo: "https://github.com/JorgeOteiza/final-project-FT22-g2_sitio.Web_E-Comerce",
    demo: "",
    rol: "Frontend y backend en equipo",
    enfoque:
      "Construcción en equipo de una experiencia e-commerce completa para descubrir vinos, filtrar el catálogo, guardar favoritos y recorrer el proceso de compra desde cualquier dispositivo.",
    phoneMedia: ecommercePhoneMedia,
    media: ecommerceMedia,
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
      {
        src: "/deleteVehicle.png",
        alt: "Listado de vehículos y favoritos del blog de Star Wars",
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

const formatCurrentDateTime = (date) => ({
  time: new Intl.DateTimeFormat("es-CL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date),
  date: new Intl.DateTimeFormat("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date),
});

const PhoneMediaCarousel = ({ proyecto, eager = false }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const pointerStart = useRef(null);
  const slides = proyecto.phoneMedia?.length
    ? proyecto.phoneMedia
    : proyecto.media?.length
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

  const handlePointerDown = (event) => {
    if (event.target.closest("button")) return;

    pointerStart.current = {
      id: event.pointerId,
      x: event.clientX,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (pointerStart.current?.id !== event.pointerId) return;

    const distance = event.clientX - pointerStart.current.x;
    const dragLimit = event.currentTarget.clientWidth
      ? event.currentTarget.clientWidth * 0.88
      : 280;
    setDragOffset(Math.max(-dragLimit, Math.min(dragLimit, distance)));
  };

  const finishPointerDrag = (event) => {
    if (pointerStart.current?.id !== event.pointerId) return;

    const distance = pointerStart.current.x - event.clientX;
    pointerStart.current = null;
    setDragOffset(0);
    setIsDragging(false);
    event.currentTarget.releasePointerCapture?.(event.pointerId);

    if (Math.abs(distance) < 42) return;
    if (distance > 0) showNext();
    else showPrevious();
  };

  const cancelPointerDrag = (event) => {
    if (pointerStart.current?.id !== event.pointerId) return;
    pointerStart.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <div
      className={`phone-media ${isDragging ? "is-dragging" : ""}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishPointerDrag}
      onPointerCancel={cancelPointerDrag}
      style={{ "--phone-drag-offset": `${dragOffset}px` }}
    >
      <img
        key={currentSlide.src}
        src={currentSlide.src}
        alt={currentSlide.alt}
        loading={eager ? "eager" : "lazy"}
        draggable="false"
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
  const [currentDateTime, setCurrentDateTime] = useState(() =>
    formatCurrentDateTime(new Date()),
  );
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
    const updateCurrentDateTime = () => {
      setCurrentDateTime(formatCurrentDateTime(new Date()));
    };
    const clockInterval = window.setInterval(updateCurrentDateTime, 1000);

    return () => window.clearInterval(clockInterval);
  }, []);

  useEffect(() => {
    if (!proyectoActivo) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        cerrarDetalle();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setMediaActiva((current) => {
          const total = proyectoActivo.media?.length || 1;
          return (current + 1) % total;
        });
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setMediaActiva((current) => {
          const total = proyectoActivo.media?.length || 1;
          return (current - 1 + total) % total;
        });
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
  const mostrarMediaAnterior = () => {
    setMediaActiva((current) => {
      const total = proyectoActivo?.media?.length || 1;
      return (current - 1 + total) % total;
    });
  };
  const mostrarMediaSiguiente = () => {
    setMediaActiva((current) => {
      const total = proyectoActivo?.media?.length || 1;
      return (current + 1) % total;
    });
  };

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
                <div
                  className="phone-side-button phone-volume phone-volume-up"
                  aria-hidden="true"
                ></div>
                <div
                  className="phone-side-button phone-volume phone-volume-down"
                  aria-hidden="true"
                ></div>
                <div className="phone-side-button phone-power" aria-hidden="true"></div>
                <div className="phone-screen">
                  <div className="phone-status" aria-hidden="true">
                    <time dateTime={new Date().toISOString()}>
                      {currentDateTime.time}
                    </time>
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
              <div className="project-modal-featured-media">
                <div className="project-monitor">
                  <div className="project-monitor-screen">
                    <div className="project-monitor-toolbar" aria-hidden="true">
                      <div className="project-monitor-window-controls">
                        <span>
                          <i className="fa-solid fa-xmark"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-minus"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </div>
                      <time
                        className="project-monitor-datetime"
                        dateTime={new Date().toISOString()}
                        aria-label={`${currentDateTime.time}, ${currentDateTime.date}`}
                      >
                        <strong>{currentDateTime.time}</strong>
                        <small>{currentDateTime.date}</small>
                      </time>
                    </div>
                    <div className="project-monitor-display">
                      {mediaSeleccionada?.type === "video" ? (
                        <video src={mediaSeleccionada.src} controls playsInline />
                      ) : (
                        <img
                          key={mediaSeleccionada?.src || proyectoActivo.imagen}
                          src={mediaSeleccionada?.src || proyectoActivo.imagen}
                          alt={mediaSeleccionada?.alt || proyectoActivo.alt}
                        />
                      )}

                      {proyectoActivo.media.length > 1 && (
                        <>
                          <button
                            type="button"
                            className="phone-gallery-control modal-gallery-control previous"
                            onClick={mostrarMediaAnterior}
                            aria-label={`Ver imagen anterior de ${proyectoActivo.titulo} en detalle`}
                          >
                            <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                          </button>
                          <button
                            type="button"
                            className="phone-gallery-control modal-gallery-control next"
                            onClick={mostrarMediaSiguiente}
                            aria-label={`Ver imagen siguiente de ${proyectoActivo.titulo} en detalle`}
                          >
                            <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                          </button>
                          <span className="project-modal-media-count">
                            {mediaActiva + 1} / {proyectoActivo.media.length}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="project-monitor-chin" aria-hidden="true">
                    <span className="project-monitor-power"></span>
                  </div>
                </div>
                <div className="project-monitor-stand" aria-hidden="true">
                  <span></span>
                </div>
              </div>

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
