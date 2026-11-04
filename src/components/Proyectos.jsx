import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/Proyectos.css";
import proyectosBase, { nombresTecnologias } from "../data/proyectos";
import { localizar, useLanguage } from "../i18n/LanguageContext";

const conPublicUrl = (src) => `${process.env.PUBLIC_URL}${src}`;

const formatearHora = (date, locale) =>
  new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

const formatearFecha = (date, locale) =>
  new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);

// El reloj vive en su propio componente: así solo se vuelve a dibujar esta
// etiqueta, y no toda la sección de proyectos. Como guarda el texto ya
// formateado, React omite el render cuando el minuto no ha cambiado.
const useAhora = (formatear, locale) => {
  const [valor, setValor] = useState(() => formatear(new Date(), locale));

  useEffect(() => {
    const actualizar = () => setValor(formatear(new Date(), locale));
    actualizar();
    const intervalo = window.setInterval(actualizar, 1000);
    return () => window.clearInterval(intervalo);
  }, [formatear, locale]);

  return valor;
};

const HoraActual = ({ locale, ...props }) => {
  const hora = useAhora(formatearHora, locale);
  return <time {...props}>{hora}</time>;
};

const FechaHoraActual = ({ locale }) => {
  const hora = useAhora(formatearHora, locale);
  const fecha = useAhora(formatearFecha, locale);
  return (
    <time className="project-monitor-datetime" aria-label={`${hora}, ${fecha}`}>
      <strong>{hora}</strong>
      <small>{fecha}</small>
    </time>
  );
};

const PhoneMediaCarousel = ({ proyecto, eager = false, t }) => {
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
      className={`phone-media ${
        currentSlide.cardFrame === "monitor" ? "phone-media-monitor" : ""
      } ${isDragging ? "is-dragging" : ""}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishPointerDrag}
      onPointerCancel={cancelPointerDrag}
      style={{ "--phone-drag-offset": `${dragOffset}px` }}
    >
      {currentSlide.cardFrame === "monitor" ? (
        <div className="phone-monitor-preview" key={currentSlide.src}>
          <img
            src={conPublicUrl(currentSlide.src)}
            alt={currentSlide.alt}
            loading={eager ? "eager" : "lazy"}
            draggable="false"
          />
        </div>
      ) : (
        <img
          key={currentSlide.src}
          src={conPublicUrl(currentSlide.src)}
          alt={currentSlide.alt}
          loading={eager ? "eager" : "lazy"}
          draggable="false"
        />
      )}
      {hasMultipleSlides && (
        <>
          <button
            type="button"
            className="phone-gallery-control previous"
            onClick={showPrevious}
            aria-label={t.previousImage(proyecto.titulo)}
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className="phone-gallery-control next"
            onClick={showNext}
            aria-label={t.nextImage(proyecto.titulo)}
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <div className="phone-gallery-dots" aria-label={t.projectImages}>
            {slides.map((slide, index) => (
              <button
                type="button"
                className={index === activeSlide ? "active" : ""}
                key={slide.src}
                onClick={() => setActiveSlide(index)}
                aria-label={t.imageN(index + 1, proyecto.titulo)}
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
  const { lang, t: textos } = useLanguage();
  const t = textos.projects;
  const locale = textos.meta.locale;
  const proyectos = useMemo(() => localizar(proyectosBase, lang), [lang]);
  const [proyectoActivoId, setProyectoActivoId] = useState(null);
  const proyectoActivo = proyectos.find((proyecto) => proyecto.id === proyectoActivoId) || null;
  const [mediaActiva, setMediaActiva] = useState(0);
  const [modalDragOffset, setModalDragOffset] = useState(0);
  const [isModalDragging, setIsModalDragging] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const modalPointerStart = useRef(null);
  const thumbnailStripRef = useRef(null);
  const thumbnailPointerStart = useRef(null);
  const thumbnailDidDrag = useRef(false);

  const abrirDetalle = (proyecto) => {
    triggerRef.current = document.activeElement;
    setProyectoActivoId(proyecto.id);
    setMediaActiva(0);
  };

  const cerrarDetalle = () => {
    setProyectoActivoId(null);
    setMediaActiva(0);
    setModalDragOffset(0);
    setIsModalDragging(false);
  };

  const totalMediaActiva = proyectoActivo?.media?.length || 1;

  // Depende del id (no del objeto) para que cambiar de idioma con el modal
  // abierto no mueva el foco ni reinicie la galería.
  useEffect(() => {
    if (!proyectoActivoId) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        cerrarDetalle();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setMediaActiva((current) => (current + 1) % totalMediaActiva);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setMediaActiva((current) => (current - 1 + totalMediaActiva) % totalMediaActiva);
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
  }, [proyectoActivoId, totalMediaActiva]);

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

  useEffect(() => {
    if (!proyectoActivoId || !thumbnailStripRef.current) return;
    const activeThumbnail = thumbnailStripRef.current.querySelector(
      `button[data-media-index="${mediaActiva}"]`,
    );
    activeThumbnail?.scrollIntoView?.({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [mediaActiva, proyectoActivoId]);

  const iniciarArrastreModal = (event) => {
    if (event.target.closest("button") || !proyectoActivo?.media?.length) return;
    modalPointerStart.current = { id: event.pointerId, x: event.clientX };
    setIsModalDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const moverArrastreModal = (event) => {
    if (modalPointerStart.current?.id !== event.pointerId) return;
    const distance = event.clientX - modalPointerStart.current.x;
    const limit = Math.max(120, event.currentTarget.clientWidth * 0.72);
    setModalDragOffset(Math.max(-limit, Math.min(limit, distance)));
  };

  const finalizarArrastreModal = (event) => {
    if (modalPointerStart.current?.id !== event.pointerId) return;
    const distance = modalPointerStart.current.x - event.clientX;
    modalPointerStart.current = null;
    setModalDragOffset(0);
    setIsModalDragging(false);
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    if (Math.abs(distance) < 55) return;
    if (distance > 0) mostrarMediaSiguiente();
    else mostrarMediaAnterior();
  };

  const cancelarArrastreModal = (event) => {
    if (modalPointerStart.current?.id !== event.pointerId) return;
    modalPointerStart.current = null;
    setModalDragOffset(0);
    setIsModalDragging(false);
  };

  const iniciarArrastreMiniaturas = (event) => {
    const strip = thumbnailStripRef.current;
    if (!strip || (event.button !== undefined && event.button !== 0)) return;
    const thumbnail = event.target.closest("button[data-media-index]");
    thumbnailDidDrag.current = false;
    thumbnailPointerStart.current = {
      id: event.pointerId,
      x: event.clientX,
      scrollLeft: strip.scrollLeft,
      mediaIndex: thumbnail ? Number(thumbnail.dataset.mediaIndex) : null,
    };
  };

  const moverArrastreMiniaturas = (event) => {
    const start = thumbnailPointerStart.current;
    const strip = thumbnailStripRef.current;
    if (!strip || start?.id !== event.pointerId) return;
    const distance = event.clientX - start.x;
    if (Math.abs(distance) > 7 && !thumbnailDidDrag.current) {
      thumbnailDidDrag.current = true;
      strip.setPointerCapture?.(event.pointerId);
    }
    strip.scrollLeft = start.scrollLeft - distance;
  };

  const finalizarArrastreMiniaturas = (event) => {
    if (thumbnailPointerStart.current?.id !== event.pointerId) return;
    const { mediaIndex } = thumbnailPointerStart.current;
    const huboArrastre = thumbnailDidDrag.current;
    thumbnailPointerStart.current = null;
    if (thumbnailStripRef.current?.hasPointerCapture?.(event.pointerId)) {
      thumbnailStripRef.current.releasePointerCapture(event.pointerId);
    }
    if (!huboArrastre && Number.isInteger(mediaIndex)) {
      setMediaActiva(mediaIndex);
    }
    // El clic sintético que sigue a un arrastre se ignora, pero el próximo
    // clic normal sobre cualquier miniatura vuelve a quedar disponible.
    if (huboArrastre) {
      window.setTimeout(() => {
        thumbnailDidDrag.current = false;
      }, 0);
    }
  };

  const cancelarArrastreMiniaturas = (event) => {
    if (thumbnailPointerStart.current?.id !== event.pointerId) return;
    thumbnailPointerStart.current = null;
    thumbnailDidDrag.current = false;
    if (thumbnailStripRef.current?.hasPointerCapture?.(event.pointerId)) {
      thumbnailStripRef.current.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section id="proyectos" className="proyectos">
      <div className="projects-heading">
        <div className="projects-title-row">
          <span className="section-number">01</span>
          <div>
            <span className="section-eyebrow">{t.eyebrow}</span>
            <h2 className="title-prjct">{t.title}</h2>
          </div>
        </div>
        <p className="projects-intro">{t.intro}</p>
      </div>

      <div className="projects-grid">
        {proyectosPrincipales.map((proyecto, projectIndex) => (
          <article
            className={`phone-project ${proyecto.destacado ? "featured" : ""} ${
              proyecto.phoneMedia?.every((item) => item.device === "phone")
                ? "phone-project-native"
                : ""
            } ${proyecto.id === "rincon-del-vino" ? "ecommerce-phone-card" : ""} ${
              proyecto.id === "authflow" ? "authflow-phone-card" : ""
            } ${
              proyecto.cardDevice === "desktop" ? "desktop-project-card" : ""
            } ${
              proyecto.cardDevice === "tablet" ? "tablet-project-card" : ""
            }`}
            key={proyecto.id}
          >
            {proyecto.cardDevice === "desktop" ? (
              <div className="desktop-card-stage">
                {proyecto.destacado && (
                  <span className="featured-label">{t.featured}</span>
                )}
                <div className="desktop-card-monitor">
                  <div className="desktop-card-toolbar" aria-hidden="true">
                    <span className="desktop-card-controls">
                      <i></i><i></i><i></i>
                    </span>
                    <strong>{proyecto.titulo}</strong>
                    <HoraActual locale={locale} />
                  </div>
                  <PhoneMediaCarousel
                    proyecto={proyecto}
                    eager={projectIndex === 0}
                    t={t}
                  />
                </div>
                <div className="desktop-card-stand" aria-hidden="true"></div>
                <div className="desktop-card-content">
                  <div className="phone-project-category">{proyecto.categoria}</div>
                  <div className="phone-project-number">
                    {t.case} {String(projectIndex + 1).padStart(2, "0")}
                  </div>
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.resumen}</p>
                  <div className="phone-tags" aria-label={t.mainTech}>
                    {(proyecto.tecnologiasTarjeta || proyecto.tecnologias.slice(0, 3)).map((tecnologia) => (
                      <span key={tecnologia}>{nombresTecnologias[tecnologia]}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="phone-open-project"
                    onClick={() => abrirDetalle(proyecto)}
                    aria-label={t.exploreAria(proyecto.titulo)}
                  >
                    {t.explore}
                    <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ) : proyecto.cardDevice === "tablet" ? (
              <div className="tablet-card-stage">
                <div className="tablet-card-device">
                  <span className="tablet-card-camera" aria-hidden="true"></span>
                  <div className="tablet-card-screen">
                    <PhoneMediaCarousel
                      proyecto={proyecto}
                      eager={projectIndex === 0}
                      t={t}
                    />
                  </div>
                </div>
                <div className="desktop-card-content tablet-card-content">
                  <div className="phone-project-category">{proyecto.categoria}</div>
                  <div className="phone-project-number">
                    {t.case} {String(projectIndex + 1).padStart(2, "0")}
                  </div>
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.resumen}</p>
                  <div className="phone-tags" aria-label={t.mainTech}>
                    {(proyecto.tecnologiasTarjeta || proyecto.tecnologias.slice(0, 3)).map((tecnologia) => (
                      <span key={tecnologia}>{nombresTecnologias[tecnologia]}</span>
                    ))}
                  </div>
                  <div className="tablet-card-actions">
                    <button
                      type="button"
                      className="phone-open-project"
                      onClick={() => abrirDetalle(proyecto)}
                      aria-label={t.exploreAria(proyecto.titulo)}
                    >
                      <span>{t.explore}</span>
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </button>
                    {proyecto.demo && (
                      <a
                        href={proyecto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="other-project-demo"
                      >
                        <span>{t.viewApp}</span>
                        <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ) : (
            <div className="phone-stage">
              {proyecto.destacado && (
                <span className="featured-label">{t.featured}</span>
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
                    <HoraActual locale={locale} />
                    <div className="phone-island"></div>
                    <span className="status-icons">
                      <i className="fa-solid fa-signal"></i>
                      <i className="fa-solid fa-battery-three-quarters"></i>
                    </span>
                  </div>
                  <PhoneMediaCarousel
                    proyecto={proyecto}
                    eager={projectIndex === 0}
                    t={t}
                  />
                  <div className="phone-content">
                    <div className="phone-project-category">{proyecto.categoria}</div>
                    <div className="phone-project-number">
                      {t.case} {String(projectIndex + 1).padStart(2, "0")}
                    </div>
                    <h3>{proyecto.titulo}</h3>
                    <p>{proyecto.resumen}</p>
                    <div className="phone-tags" aria-label={t.mainTech}>
                      {(proyecto.tecnologiasTarjeta || proyecto.tecnologias.slice(0, 3)).map((tecnologia) => (
                        <span key={tecnologia}>{nombresTecnologias[tecnologia]}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="phone-open-project"
                      onClick={() => abrirDetalle(proyecto)}
                      aria-label={t.exploreAria(proyecto.titulo)}
                    >
                      {t.explore}
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="phone-home-indicator" aria-hidden="true"></div>
                </div>
              </div>
            </div>
            )}
          </article>
        ))}
      </div>

      <div className="other-projects">
        <div className="other-projects-heading">
          <span className="section-eyebrow">{t.othersEyebrow}</span>
          <h3>{t.othersTitle}</h3>
        </div>

        <div className="other-projects-list">
          {proyectosSecundarios.map((proyecto) => (
            <article className="other-project-card-shell" key={proyecto.id}>
              <button
                type="button"
                className="other-project-card"
                onClick={() => abrirDetalle(proyecto)}
              >
                <em>{proyecto.categoria}</em>
                <span>{proyecto.titulo}</span>
                <small>{proyecto.resumen}</small>
              </button>
              {proyecto.demo && (
                <a
                  href={proyecto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="other-project-demo"
                >
                  {t.viewApp}
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
              )}
            </article>
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
              aria-label={t.closeDetail}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="project-modal-media">
              <div
                className={`project-modal-featured-media ${isModalDragging ? "is-dragging" : ""}`}
                onPointerDown={iniciarArrastreModal}
                onPointerMove={moverArrastreModal}
                onPointerUp={finalizarArrastreModal}
                onPointerCancel={cancelarArrastreModal}
                style={{ "--modal-drag-offset": `${modalDragOffset}px` }}
              >
                <div
                  className={`project-monitor project-preview-${mediaSeleccionada?.device || "desktop"}`}
                >
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
                      <FechaHoraActual locale={locale} />
                    </div>
                    <div className="project-monitor-display">
                      {mediaSeleccionada?.type === "video" ? (
                        <video src={mediaSeleccionada.src} controls playsInline />
                      ) : (
                        <img
                          key={mediaSeleccionada?.src || proyectoActivo.imagen}
                          src={conPublicUrl(mediaSeleccionada?.src || proyectoActivo.imagen)}
                          alt={mediaSeleccionada?.alt || proyectoActivo.alt}
                          draggable="false"
                        />
                      )}

                      {proyectoActivo.media.length > 1 && (
                        <span className="project-modal-media-count">
                          {mediaActiva + 1} / {proyectoActivo.media.length}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="project-monitor-chin" aria-hidden="true">
                    <span className="project-monitor-power"></span>
                  </div>
                </div>
                {(mediaSeleccionada?.device || "desktop") === "desktop" && (
                  <div className="project-monitor-stand" aria-hidden="true">
                    <span></span>
                  </div>
                )}
                {proyectoActivo.media.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="phone-gallery-control modal-gallery-control previous"
                      onClick={mostrarMediaAnterior}
                      aria-label={t.previousImageDetail(proyectoActivo.titulo)}
                    >
                      <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button
                      type="button"
                      className="phone-gallery-control modal-gallery-control next"
                      onClick={mostrarMediaSiguiente}
                      aria-label={t.nextImageDetail(proyectoActivo.titulo)}
                    >
                      <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                  </>
                )}
              </div>

              {mediaSeleccionada?.caption && (
                <p className="project-gallery-caption" aria-live="polite">
                  {mediaSeleccionada.caption}
                </p>
              )}

              {proyectoActivo.media.length > 1 && (
                <div
                  className="project-thumbnails"
                  ref={thumbnailStripRef}
                  onPointerDown={iniciarArrastreMiniaturas}
                  onPointerMove={moverArrastreMiniaturas}
                  onPointerUp={finalizarArrastreMiniaturas}
                  onPointerCancel={cancelarArrastreMiniaturas}
                  onDragStart={(event) => event.preventDefault()}
                >
                  {proyectoActivo.media.map((item, index) => (
                    <button
                      type="button"
                      className={index === mediaActiva ? "active" : ""}
                      key={item.src}
                      data-media-index={index}
                      title={item.caption || item.alt}
                      onClick={() => {
                        if (thumbnailDidDrag.current) return;
                        setMediaActiva(index);
                      }}
                      aria-current={index === mediaActiva ? "true" : undefined}
                      aria-label={t.imageN(index + 1, proyectoActivo.titulo)}
                    >
                      <img src={conPublicUrl(item.src)} alt="" loading="lazy" draggable="false" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="project-modal-content">
              <span className="section-kicker">{proyectoActivo.categoria}</span>
              <h2 id="project-modal-title">{proyectoActivo.titulo}</h2>
              {(proyectoActivo.repo || proyectoActivo.demo) && (
                <div className="project-modal-quick-actions">
                  {proyectoActivo.repo && (
                    <a
                      href={proyectoActivo.repo}
                      className="repositorios-target compact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                      <span>{t.viewRepo}</span>
                    </a>
                  )}
                  {proyectoActivo.demo && (
                    <a
                      href={proyectoActivo.demo}
                      className="repositorios-target secondary compact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-up-right-from-square"></i>
                      <span>{t.viewApp}</span>
                    </a>
                  )}
                </div>
              )}
              {proyectoActivo.repoPrivado && (
                <p className="project-private-repo">
                  <i className="fa-solid fa-lock" aria-hidden="true"></i>
                  <span>
                    <strong>{t.privateRepo}.</strong> {proyectoActivo.repoPrivado}
                  </span>
                </p>
              )}
              {proyectoActivo.fraseImpacto && (
                <p className="project-impact-line">{proyectoActivo.fraseImpacto}</p>
              )}
              <p className="project-modal-summary">{proyectoActivo.enfoque}</p>

              {proyectoActivo.estadoPublicacion && (
                <div className="project-context-block">
                  <h3>{t.publicationStatus}</h3>
                  <p>{proyectoActivo.estadoPublicacion}</p>
                </div>
              )}

              <div className={`project-meta ${proyectoActivo.stack ? "role-only" : ""}`}>
                <div>
                  <span>{t.role}</span>
                  <strong>{proyectoActivo.rol}</strong>
                </div>
                {!proyectoActivo.stack && (
                  <div>
                    <span>{t.stack}</span>
                    <strong>
                      {proyectoActivo.stackTexto ||
                        proyectoActivo.tecnologias
                          .map((tecnologia) => nombresTecnologias[tecnologia])
                          .join(", ")}
                    </strong>
                  </div>
                )}
              </div>

              {proyectoActivo.stack && (
                <div className="project-stack-detail">
                  {proyectoActivo.stack.map(({ area, items }) => (
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

              <h3>{t.solves}</h3>
              <ul className="modal-detail-list">
                {proyectoActivo.detalles.map((detalle) => (
                  <li key={detalle}>{detalle}</li>
                ))}
              </ul>

              {proyectoActivo.aporteTecnico && (
                <div className="project-technical-highlight">
                  <h3>{t.technicalHighlight}</h3>
                  <p>{proyectoActivo.aporteTecnico}</p>
                </div>
              )}

              {proyectoActivo.calidadValidacion && (
                <div className="project-context-block">
                  <h3>{t.quality}</h3>
                  <p>{proyectoActivo.calidadValidacion}</p>
                </div>
              )}

              {proyectoActivo.origenProyecto && (
                <div className="project-context-block">
                  <h3>{t.origin}</h3>
                  <p>{proyectoActivo.origenProyecto}</p>
                </div>
              )}

              {(proyectoActivo.repo ||
                proyectoActivo.demo ||
                proyectoActivo.apiDocs) && (
                <div className="project-modal-actions">
                  {proyectoActivo.repo && (
                    <a
                      href={proyectoActivo.repo}
                      className="repositorios-target"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                      <span>{t.viewRepo}</span>
                    </a>
                  )}
                  {proyectoActivo.demo && (
                    <a
                      href={proyectoActivo.demo}
                      className="repositorios-target secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-up-right-from-square"></i>
                      <span>{t.viewApp}</span>
                    </a>
                  )}
                  {proyectoActivo.apiDocs && (
                    <a
                      href={proyectoActivo.apiDocs}
                      className="repositorios-target secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-book-open"></i>
                      <span>{t.viewApiDocs}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default Proyectos;
