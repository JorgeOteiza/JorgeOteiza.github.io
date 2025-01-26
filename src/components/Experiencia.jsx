import React from "react";
import "../styles/Experiencia.css";

const Experiencia = () => {
  return (
    <section id="experiencia" className="experiencia h-auto">
      <div>
        <h4 className="title-exp h-auto">EXPERIENCIA</h4>
        <ul>
          <li>
            Participé en el desarrollo de una aplicación web e-commerce como
            parte de un equipo de 4 desarrolladores.
          </li>
          <li>
            <strong>Implementación:</strong> Funcionalidades clave basadas en
            historias de usuario.
          </li>
          <li>
            <strong>Diseño:</strong> Creación y validación de interfaces con{" "}
            <em>Figma</em>.
          </li>
          <li>
            <strong>Gestión:</strong> Organización de tareas y tiempos
            utilizando la metodología <em>Kanban</em>, equilibrando el esfuerzo
            del equipo.
          </li>
          <li>
            <strong>Código:</strong> Desarrollo y mantenimiento de las
            funcionalidades del proyecto.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experiencia;
