import React, { useEffect, useRef, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const isNearTop = currentScrollY < 80;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      setIsHidden(!isNearTop && isScrollingDown);
      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (e, hash) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (!el) return;

    const nav = document.querySelector(".navbar");
    const navH = nav ? nav.offsetHeight : 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - (navH + 12);

    window.history.pushState(null, "", hash);
    window.scrollTo({ top: y, behavior: "smooth" });

    const collapse = document.getElementById("navbarNav");
    if (collapse && collapse.classList.contains("show")) {
      collapse.classList.remove("show");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        isHidden ? "navbar-hidden" : ""
      }`}
    >
      <div className="container-fluid mx-1 px-1">
        <a
          className="navbar-brand"
          href="#inicio"
          onClick={(e) => scrollToId(e, "#inicio")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/logo_portafolio_fullstack_enduro.svg`}
            className="logo-portafolio"
            alt="Logo Full Stack Enduro de Jorge Oteiza"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Abrir navegación"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
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
                href="#tecnologías"
                onClick={(e) => scrollToId(e, "#tecnologías")}
              >
                Tecnologías
              </a>
            </li>
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
