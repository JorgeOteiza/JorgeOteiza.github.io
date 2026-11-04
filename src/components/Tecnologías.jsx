import React from "react";
import "../styles/Tecnologías.css";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [
  {
    src: "/logos/html5.webp",
    alt: "HTML Logo",
  },
  {
    src: "/logos/css3.webp",
    alt: "CSS Logo",
  },
  {
    src: "/logos/typescript.svg",
    alt: "TypeScript Logo",
  },
  {
    src: "/logos/git.png",
    alt: "Git Logo",
  },
  {
    src: "/logos/bootstrap.webp",
    alt: "Bootstrap Logo",
  },
  {
    src: "/logos/javascript.webp",
    alt: "JavaScript Logo",
  },
  {
    src: "/logos/react.svg",
    alt: "React Logo",
  },
  {
    src: "/logos/vite.svg",
    alt: "Vite Logo",
  },
  {
    src: "/pytest-logo.svg",
    alt: "pytest Logo",
  },
  {
    src: "/logos/figma.svg",
    alt: "Figma Logo",
  },
  {
    src: "/logos/python.webp",
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
    src: "/logos/sqlite.svg",
    alt: "SQLite Logo",
  },
  {
    src: "/logos/flask.webp",
    alt: "Flask Logo",
  },
  {
    src: "/logos/sqlalchemy.webp",
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
    src: "/logos/claude.svg",
    alt: "Claude Code Logo",
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
  {
    src: "/logos/reactrouter.svg",
    alt: "React Router Logo",
  },
  {
    src: "/logos/fastapi.svg",
    alt: "FastAPI Logo",
  },
  {
    src: "/logos/maplibre.svg",
    alt: "MapLibre Logo",
  },
  {
    src: "/logos/redis.svg",
    alt: "Redis Logo",
  },
  {
    src: "/logos/docker.svg",
    alt: "Docker Logo",
  },
  {
    src: "/logos/neon.svg",
    alt: "Neon Logo",
  },
  {
    src: "/logos/supabase.svg",
    alt: "Supabase Logo",
  },
  {
    src: "/logos/render.svg",
    alt: "Render Logo",
  },
  {
    src: "/logos/cloudflare.svg",
    alt: "Cloudflare Pages Logo",
  },
  {
    iconClass: "fa-solid fa-location-dot",
    alt: "LocationIQ Logo",
  },
  {
    src: "/logos/vitest.svg",
    alt: "Vitest Logo",
  },
  {
    src: "/logos/playwright.svg",
    alt: "Playwright Logo",
  },
  {
    src: "/logos/githubactions.svg",
    alt: "GitHub Actions Logo",
  },
];

const groups = [
  {
    key: "frontend",
    primary: true,
    items: [
      "React Logo",
      "TypeScript Logo",
      "JavaScript Logo",
      "HTML Logo",
      "CSS Logo",
      "React Router Logo",
      "Vite Logo",
      "Bootstrap Logo",
    ],
  },
  {
    key: "backend",
    primary: true,
    items: [
      "Python Logo",
      "Flask Logo",
      "FastAPI Logo",
      "SQLAlchemy Logo",
      "REST APIs Logo",
      "JWT Logo",
    ],
  },
  {
    key: "data",
    primary: true,
    items: [
      "PostgreSQL Logo",
      "SQLite Logo",
      "Supabase Logo",
      "Neon Logo",
      "Docker Logo",
      "Render Logo",
      "Cloudflare Pages Logo",
      "MapLibre Logo",
      "LocationIQ Logo",
      "Redis Logo",
    ],
  },
  {
    key: "testing",
    primary: true,
    items: [
      "pytest Logo",
      "Vitest Logo",
      "Playwright Logo",
      "Git Logo",
      "GitHub Logo",
      "GitHub Actions Logo",
      "Postman Logo",
    ],
  },
  {
    key: "tools",
    hasDescription: true,
    items: [
      "Figma Logo",
      "PyInstaller Logo",
      "ChatGPT Logo",
      "Codex Logo",
      "Claude Code Logo",
      "GitHub Copilot Logo",
      "Prompt Engineering Logo",
    ],
  },
];

const Tecnologías = () => {
  const { t } = useLanguage();

  return (
    <section id="tecnologias" className="tecnologias">
      <div className="technology-heading">
        <span className="section-number">02</span>
        <div>
          <span className="section-eyebrow">{t.tech.eyebrow}</span>
          <h2 className="title-tecnologias">{t.tech.title}</h2>
        </div>
      </div>
      <div className="technology-groups">
        {groups.map((group) => (
          <article
            className={`technology-group ${group.primary ? "technology-group-primary" : ""}`}
            key={group.key}
          >
            <h3>{t.tech.groups[group.key]}</h3>
            {group.hasDescription && (
              <p className="technology-group-description">{t.tech.toolsDescription}</p>
            )}
            <div className="icon-container">
              {group.items.map((name) => {
                const icon = icons.find((item) => item.alt === name);
                return (
                  <span className="skill-icon-card" key={icon.alt}>
                    {icon.src ? (
                      <img
                        src={`${process.env.PUBLIC_URL}${icon.src}`}
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
