import React from 'react';
import './styles/App.css';
import './styles/Sections.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SobreMi from './components/SobreMi';
import Experiencia from './components/Experiencia';
import Tecnologías from './components/Tecnologías';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SobreMi />
      <Experiencia />
      <Tecnologías />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
