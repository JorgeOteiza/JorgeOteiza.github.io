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
    src: "https://www.svgrepo.com/show/349540/typescript.svg",
    alt: "TypeScript Logo",
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
    src: "/pytest-logo.svg",
    alt: "pytest Logo",
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
    src: "/skills-rest-api.svg",
    invert: true,
    alt: "REST APIs Logo",
  },
  {
    src: "/logo-postgreSQL.png",
    alt: "PostgreSQL Logo",
  },
  {
    src: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    alt: "SQLite Logo",
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
  {
    src: "/skills-github.svg",
    invert: true,
    alt: "GitHub Logo",
  },
  {
    src: "/skills-pyinstaller.png",
    alt: "PyInstaller Logo",
  },
  {
    src: "/skills-openai.svg",
    invert: true,
    alt: "ChatGPT Logo",
  },
  {
    src: "/skills-codex.png",
    alt: "Codex Logo",
  },
  {
    src: "/skills-github-copilot.svg",
    invert: true,
    alt: "GitHub Copilot Logo",
  },
  {
    src: "/skills-prompt-engineering.svg",
    invert: true,
    alt: "Prompt Engineering Logo",
  },
];

const groups = [
  {
    title: "Frontend",
    items: [
      "HTML Logo",
      "CSS Logo",
      "JavaScript Logo",
      "TypeScript Logo",
      "React Logo",
      "Vite Logo",
      "Bootstrap Logo",
    ],
  },
  {
    title: "Backend y Datos",
    items: [
      "Python Logo",
      "Flask Logo",
      "REST APIs Logo",
      "JWT Logo",
      "SQLAlchemy Logo",
      "PostgreSQL Logo",
      "SQLite Logo",
      "pytest Logo",
    ],
  },
  {
    title: "Herramientas y Flujo de Trabajo",
    items: [
      "Git Logo",
      "GitHub Logo",
      "Postman Logo",
      "Figma Logo",
      "PyInstaller Logo",
    ],
  },
  {
    title: "IA y Productividad",
    items: [
      "ChatGPT Logo",
      "Codex Logo",
      "GitHub Copilot Logo",
      "Prompt Engineering Logo",
    ],
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
                    {icon.src ? (
                      <img
                        src={icon.src}
                        alt=""
                        className={`icon ${icon.invert ? "icon-invert" : ""}`}
                        loading="lazy"
                      />
                    ) : (
                      <i
                        className={`${icon.iconClass} skill-symbol`}
                        aria-hidden="true"
                      ></i>
                    )}
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
