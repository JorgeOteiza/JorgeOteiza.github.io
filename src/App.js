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
    <div className="App mx-4">
      <Navbar />
      <Home />
      <div className="section-container m-5 m-5 p-5 p-5">
        <SobreMi />
        <Experiencia />
      </div>
      <Tecnologías />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
