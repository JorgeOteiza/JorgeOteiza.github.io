import React from "react";
import "../styles/Proyectos.css";

const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos py-5 my-5 mx-1">
      <h2 className="title-prjct">Proyectos</h2>
      <div className="prjct">
        {/* Primera tarjeta */}
        <div className="project-card">
          <img
            src="/logoElRinconDelVino.png"
            className="card-img-top"
            alt="Logo del proyecto e-commerce"
          />
          <h3 className="title">e-commerce</h3>
          <p>Aplicación para ventas de vinos elaborados en Chile.</p>
          <div className="logos-proyect">
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
          <img
            src="/registroCreadoAutenticacion.png"
            className="card-img-top"
            alt="usuario creado"
          />
          <h3>Sistema de Autenticación</h3>
          <p>
            Proyecto Full-Stack diseñado para crear registros con id únicas y
            encriptación de contraseñas.
          </p>
          <div className="logos-proyect">
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
          <img
            src="/DarthVaderCharacter.png"
            className="DarthVaderPJ"
            alt="Yo soy tu padre"
          />
          <h3>Blog de Star Wars</h3>
          <p>Simulador informativo, complementado con API "SWAPI".</p>
          <div className="logos-proyect">
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
