import React from "react";
import "../styles/Proyectos.css";

const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos row col-12 m-5 p-5">
      <h2 className="title-prjct">Proyectos</h2>
      <div className="prjct col col-auto m-5 p-5">
        {/* Primera tarjeta */}
        <div className="project-card">
          <img
            src="/logoElRinconDelVino.png"
            className="card-img-top"
            alt="Logo del proyecto e-commerce"
          />
          <h3 className="title">e-commerce</h3>
          <p>Sitio para ventas de vinos elaborados en Chile.</p>
          <div className="icon-container">
            <img
              src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-1.png"
              alt="HTML Logo"
              className="icon-mini"
            />
            <img
              src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png"
              alt="CSS Logo"
              className="icon-mini"
            />
            <img
              src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"
              alt="JavaScript Logo"
              className="icon-mini"
            />
          </div>
        </div>

        {/* Segunda tarjeta */}
        <div className="project-card">
          <h3>Búsqueda indexada</h3>
          <p>
            Un proyecto Full-Stack diseñado para facilitar la busqueda de
            objetos mediante millones de de posibilidades, en tan sólo segundos.
            desarrollo web.
          </p>
          <div className="icon-container">
            <img
              src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"
              alt="JavaScript Logo"
              className="icon-mini"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
              className="icon-mini"
            />
          </div>
        </div>

        {/* Tercera tarjeta */}
        <div className="project-card">
          <h3>Gestor de Tareas</h3>
          <p>
            Aplicación para organizar tareas, con funcionalidades de
            autenticación y categorías.
          </p>
          <div className="icon-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
              className="icon-mini"
            />
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.dJToM1TiZiJA0GYwzDHwjQHaHY&pid=Api"
              alt="Python Logo"
              className="icon-mini"
            />
            <img
              src="https://repository-images.githubusercontent.com/596892/cc2c69ec-9251-4b33-8283-b86a8659c9cb"
              alt="Flask Logo"
              className="icon-mini"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
