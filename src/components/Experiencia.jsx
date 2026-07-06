import React from "react";
import "../styles/Experiencia.css";

const Experiencia = () => {
  return (
    <section id="experiencia" className="experiencia h-auto">
      <div>
        <h4 className="title-exp h-auto text-center">Experiencia</h4>
        <ul>
          <li>
            Participé en el desarrollo de una aplicación web e-commerce como
            parte de un equipo de 4 desarrolladores.
          </li>
          <li>
            <strong>Implementación:</strong> funcionalidades clave basadas en
            historias de usuario.
          </li>
          <li>
            <strong>Diseño:</strong> creación y validación de interfaces con{" "}
            <em>Figma</em>.
          </li>
          <li>
            <strong>Gestión:</strong> organización de tareas y tiempos
            utilizando metodología <em>Kanban</em>.
          </li>
          <li>
            <strong>Código:</strong> desarrollo y mantenimiento de las
            funcionalidades del proyecto.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experiencia;
