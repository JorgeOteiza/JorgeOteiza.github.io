import React, { useEffect, useRef, useState } from "react";
import "../styles/Navbar.css";
import { useLanguage } from "../i18n/LanguageContext";

const IDIOMAS_MENU = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
];

const SECCIONES = [
  { hash: "#proyectos", key: "projects" },
  { hash: "#tecnologias", key: "technologies" },
  { hash: "#sobre-mi", key: "about" },
  { hash: "#contacto", key: "contact" },
];

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const isNearTop = currentScrollY < 80;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      const shouldHide = !isNearTop && isScrollingDown;
      setIsHidden(shouldHide);
      if (shouldHide) setIsMenuOpen(false);
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

    setIsMenuOpen(false);
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
            alt={t.nav.logoAlt}
          />
        </a>
        <div className="navbar-actions order-lg-last">
          <div className="language-toggle" role="group" aria-label={t.nav.languageGroup}>
            <i className="fa-solid fa-globe" aria-hidden="true"></i>
            {IDIOMAS_MENU.map(({ code, label, name }) => (
              <button
                type="button"
                key={code}
                lang={code}
                className={lang === code ? "active" : ""}
                aria-pressed={lang === code}
                aria-label={name}
                onClick={() => setLang(code)}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t.nav.close : t.nav.open}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <i
              className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
              aria-hidden="true"
            ></i>
          </button>
        </div>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {SECCIONES.map(({ hash, key }) => (
              <li className="nav-item" key={hash}>
                <a
                  className="nav-link"
                  href={hash}
                  onClick={(e) => scrollToId(e, hash)}
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
