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
