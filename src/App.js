import React, { useEffect } from "react";
import "./styles/App.css";
import "./styles/Sections.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
import Experiencia from "./components/Experiencia";
import Tecnologías from "./components/Tecnologías";
import Proyectos from "./components/Proyectos";

function App() {
  useEffect(() => {
    const ajustarAlturas = () => {
      const columnas = document.querySelectorAll(".col-lg-6.col-12");
      let alturaMaxima = 0;

      columnas.forEach((col) => {
        col.style.height = "auto";
        const altura = col.offsetHeight;
        if (altura > alturaMaxima) alturaMaxima = altura;
      });

      columnas.forEach((col) => {
        col.style.height = `${alturaMaxima}px`;
      });
    };

    ajustarAlturas();
    window.addEventListener("resize", ajustarAlturas);
    return () => window.removeEventListener("resize", ajustarAlturas);
  }, []);

  useEffect(() => {
    const scrollHashWithOffset = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.querySelector(hash);
      if (!el) return;
      const nav = document.querySelector(".navbar");
      const navH = nav ? nav.offsetHeight : 0;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - (navH + 12);
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    setTimeout(scrollHashWithOffset, 0);

    window.addEventListener("hashchange", scrollHashWithOffset);
    return () => window.removeEventListener("hashchange", scrollHashWithOffset);
  }, []);

  // src/App.js (dentro de App(), debajo del primer useEffect)
  useEffect(() => {
    // evita que el navegador restaure scroll automáticamente
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const nav = document.querySelector(".navbar");
    const navH = nav ? nav.offsetHeight : 0;

    // Detecta tipo de navegación (reload, back_forward, navigate)
    const navEntry = performance.getEntriesByType("navigation")[0];
    const navType = navEntry ? navEntry.type : "navigate";

    const hash = window.location.hash;

    if (hash) {
      if (navType !== "reload") {
        // si llegaste desde un enlace externo con hash, respétalo (con offset)
        const el = document.querySelector(hash);
        if (el) {
          const y =
            el.getBoundingClientRect().top + window.pageYOffset - (navH + 12);
          window.scrollTo({ top: y, behavior: "auto" });
        }
      } else {
        // si es recarga con hash: volvemos al inicio y quitamos el hash
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <div className="App mx-4 col col-12">
      <div className="video-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/backgroundEstrellado.mp4" type="video/mp4" />
        </video>

        <video
          className="background-video duplicate"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/backgroundEstrellado.mp4" type="video/mp4" />
        </video>
      </div>

      <Navbar />
      <Home />
      <div className="descripcionExp container my-3 col col-12 col-lg-12">
        <div className="contenedordescripción row gy-4 m-1 mb-5 p-3 col col-lg-10">
          <div className="col-lg-6 col-12 col-md-6 h-auto">
            <SobreMi />
          </div>
          <div className="col-lg-6 col-12 col-md-6 h-auto">
            <Experiencia />
          </div>
        </div>
      </div>
      <Tecnologías />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
