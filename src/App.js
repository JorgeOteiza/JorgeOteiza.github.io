import React from "react";
import "./styles/App.css";
import "./styles/Sections.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
import Tecnologías from "./components/Tecnologías";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <div className="App">
      <div className="video-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src={`${process.env.PUBLIC_URL}/backgroundEstrellado.mp4`}
            type="video/mp4"
          />
        </video>
      </div>

      <Navbar />
      <Home />
      <Proyectos />
      <Tecnologías />
      <SobreMi />
      <Footer />
    </div>
  );
}

export default App;
