import React from "react";
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
  return (
    <div className="App mx-4 col col-12">
      <Navbar />
      <Home />
      <div className="descripcionExp container my-5 col col-12 col-lg-12">
        <div className="row gy-4 m-1 mb-5 p-3 col col-lg-10">
          <div className="col-lg-6 col-12">
            <SobreMi />
          </div>
          <div className="col-lg-6 col-12">
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
