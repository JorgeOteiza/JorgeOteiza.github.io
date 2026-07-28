import React from "react";
import "../styles/Tecnologías.css";

const icons = [
  {
    src: "https://logodownload.org/wp-content/uploads/2016/10/html5-logo-1.png",
    alt: "HTML Logo",
  },
  {
    src: "https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png",
    alt: "CSS Logo",
  },
  {
    src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    alt: "Git Logo",
  },
  {
    src: "/logoBootstrap.png",
    alt: "Bootstrap Logo",
  },
  {
    src: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png",
    alt: "JavaScript Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
    alt: "Vite Logo",
  },
  {
    src: "/Jest-test.png",
    alt: "Jest Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    alt: "Figma Logo",
  },
  {
    src: "/LogoNewPython.png",
    alt: "Python Logo",
  },
  {
    src: "/logo-postgreSQL.png",
    alt: "PostgreSQL Logo",
  },
  {
    src: "/logo-flask.2.png",
    alt: "Flask Logo",
  },
  {
    src: "https://blog.desdelinux.net/wp-content/uploads/2023/02/sqlalchemy.png.webp",
    alt: "SQLAlchemy Logo",
  },
  {
    src: "/JWTicon.png",
    alt: "JWT Logo",
  },
  {
    src: "/LogoPostman.png",
    alt: "Postman Logo",
  },
];

const groups = [
  {
    title: "Frontend",
    items: ["HTML Logo", "CSS Logo", "JavaScript Logo", "React Logo", "Vite Logo", "Bootstrap Logo"],
  },
  {
    title: "Backend y datos",
    items: ["Python Logo", "Flask Logo", "PostgreSQL Logo", "SQLAlchemy Logo", "JWT Logo"],
  },
  {
    title: "Flujo de trabajo",
    items: ["Git Logo", "Figma Logo", "Postman Logo", "Jest Logo"],
  },
];

const Tecnologías = () => {
  return (
    <section id="tecnologías" className="tecnologias">
      <div className="technology-heading">
        <span className="section-number">02</span>
        <div>
          <span className="section-eyebrow">Herramientas que uso</span>
          <h2 className="title-tecnologias">Un stack para construir, medir y mejorar.</h2>
        </div>
      </div>
      <div className="technology-groups">
        {groups.map((group) => (
          <article className="technology-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="icon-container">
              {group.items.map((name) => {
                const icon = icons.find((item) => item.alt === name);
                return (
                  <span className="skill-icon-card" key={icon.alt}>
                    <img src={icon.src} alt="" className="icon" loading="lazy" />
                    <span>{icon.alt.replace(" Logo", "")}</span>
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Tecnologías;
