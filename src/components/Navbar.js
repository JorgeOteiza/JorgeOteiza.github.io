// src/components/Navbar.js
import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const scrollToId = (e, hash) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (!el) return;

    const nav = document.querySelector(".navbar");
    const navH = nav ? nav.offsetHeight : 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - (navH + 12);

    window.scrollTo({ top: y, behavior: "smooth" });

    // cerrar el menú móvil si está abierto
    const collapse = document.getElementById("navbarNav");
    if (collapse && collapse.classList.contains("show")) {
      collapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid mx-1 px-1">
        <a
          className="navbar-brand"
          href="#inicio"
          onClick={(e) => scrollToId(e, "#inicio")}
        >
          <img
            src="/logo_portafolio.png"
            className="logo-portafolio"
            alt="logo portafolio"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sobre-mi"
                onClick={(e) => scrollToId(e, "#sobre-mi")}
              >
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#experiencia"
                onClick={(e) => scrollToId(e, "#experiencia")}
              >
                Experiencia
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#tecnologías"
                onClick={(e) => scrollToId(e, "#tecnologías")}
              >
                Tecnologías
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#proyectos"
                onClick={(e) => scrollToId(e, "#proyectos")}
              >
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contacto"
                onClick={(e) => scrollToId(e, "#contacto")}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
