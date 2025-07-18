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

const Tecnologías = () => {
  return (
    <section id="tecnologías" className="tecnologias col row-cols-lg-auto pb-5">
      <h2 className="title-tecnologías">STACK TECNOLÓGICO</h2>
      <div className="icon-container row col col-sm-10 col-sm-10 col-lg-9 column-gap-md-4 column-gap-lg-3">
        {icons.map((icon, index) => (
          <img src={icon.src} alt={icon.alt} className="icon" key={index} />
        ))}
      </div>
    </section>
  );
};

export default Tecnologías;
