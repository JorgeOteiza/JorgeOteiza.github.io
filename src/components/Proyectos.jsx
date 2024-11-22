import React from "react";
import "../styles/Proyectos.css";

const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos">
      <h2 className="title-prjct">Proyectos</h2>

      <div className="prjct row col-6">
        {/* Primera tarjeta */}
        <div className="project-card-vino">
          <img
            src="/logoElRinconDelVino.png"
            className="card-img-top"
            alt="Logo del proyecto e-commerce"
          />
          <h3 className="titleE-commerce">e-commerce</h3>
          <p className="párrafo-vino">
            Trabajo en equipo de 4 personas. Como medios de organización
            utilizamos historias de usuario, Figma y modelo kanban.
          </p>
          <div className="icon-container">
            <img
              src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-1.png"
              alt="HTML Logo"
              className="icon"
            />
            <img
              src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png"
              alt="CSS Logo"
              className="icon"
            />
            <img
              src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"
              alt="JavaScript Logo"
              className="icon"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
              className="icon"
            />
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.dJToM1TiZiJA0GYwzDHwjQHaHY&pid=Api"
              alt="Python Logo"
              className="icon"
            />
            <img
              src="https://repository-images.githubusercontent.com/596892/cc2c69ec-9251-4b33-8283-b86a8659c9cb"
              alt="Flask Logo"
              className="icon"
            />
          </div>
        </div>

        {/* Segunda tarjeta */}
        <div className="project-card-en-proceso">
          <h3>Proyecto 2</h3>
          <p>En proceso.</p>
          <h5>Tecnologías:</h5>
          <div className="icon-container">
            <img
              src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"
              alt="JavaScript Logo"
              className="icon"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
              className="icon"
            />
            <img
              src="https://repository-images.githubusercontent.com/596892/cc2c69ec-9251-4b33-8283-b86a8659c9cb"
              alt="Flask Logo"
              className="icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
