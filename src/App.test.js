import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("muestra la presentación y las secciones principales", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /desarrollo productos digitales/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /un stack para construir/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /productos que viven/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Ver CV" })).toHaveAttribute(
    "href",
    expect.stringContaining("/CV_Jorge_Oteiza_Full_Stack_Developer.pdf"),
  );
  expect(
    screen.getByRole("link", {
      name: "Abrir currículum de Jorge Oteiza en una pestaña nueva",
    }),
  ).toHaveAttribute(
    "href",
    expect.stringContaining("/CV_Jorge_Oteiza_Full_Stack_Developer.pdf"),
  );
  expect(screen.getByText(/pytest/i)).toBeInTheDocument();
  expect(screen.getByText("FastAPI")).toBeInTheDocument();
  expect(screen.getByText("Docker")).toBeInTheDocument();
  expect(screen.getByText("GitHub Actions")).toBeInTheDocument();
  expect(screen.getByText("Playwright")).toBeInTheDocument();
  expect(screen.getByText("Cloudflare Pages")).toBeInTheDocument();
  expect(screen.getByText("MapLibre")).toBeInTheDocument();
  expect(screen.getByText("LocationIQ")).toBeInTheDocument();
  expect(screen.queryByText("Google Maps")).not.toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /datos e infraestructura/i }),
  ).toBeInTheDocument();
  expect(screen.getByText("Prompt Engineering")).toBeInTheDocument();
  expect(screen.getByText("Claude Code")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Herramientas complementarias" }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/asistentes de IA utilizados como apoyo al desarrollo/i),
  ).toBeInTheDocument();
  document
    .querySelectorAll("#tecnologias .skill-icon-card")
    .forEach((card) => {
      const image = card.querySelector("img");
      expect(image || card.querySelector(".skill-symbol")).toBeTruthy();
      if (image) {
        expect(image).toHaveAttribute("src");
      }
      expect(card.querySelector("span:last-child")).not.toBeEmptyDOMElement();
    });
  expect(screen.getByText("Cómo trabajo")).toBeInTheDocument();
  expect(screen.getAllByText(/full stack/i).length).toBeGreaterThanOrEqual(4);
  expect(screen.getByText(/Full Stack Developer Junior/i)).toBeInTheDocument();
  expect(
    screen.getByText(/mi primera oportunidad profesional en desarrollo de software/i),
  ).toBeInTheDocument();
  expect(
    Array.from(document.querySelectorAll(".projects-grid .phone-project h3")).map(
      (heading) => heading.textContent,
    ),
  ).toEqual([
    "Minimarket Manager",
    "Travel Calculator",
    "El Rincón del Vino",
    "AuthFlow",
  ]);
  const shortUrlCard = screen.getByText("Short URL").closest(".other-project-card-shell");
  expect(
    within(shortUrlCard).getByRole("link", { name: /ver aplicación/i }),
  ).toHaveAttribute("href", "https://short-url-cl.onrender.com/");
});

test("distingue el origen independiente y colaborativo de los proyectos", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de el rincón del vino/i,
    }),
  );
  expect(
    screen.getByText(/proyecto colaborativo desarrollado junto a un equipo de cuatro personas durante la formación en 4geeks academy/i),
  ).toBeInTheDocument();
  expect(
    screen
      .getAllByRole("link", { name: /ver repositorio/i })
      .every(
        (link) =>
          link.getAttribute("href") ===
          "https://github.com/JorgeOteiza/Sitio.Web_E-Comerce-wine",
      ),
  ).toBe(true);

  fireEvent.keyDown(window, { key: "Escape" });
  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de minimarket manager/i,
    }),
  );
  expect(
    screen.getByText(/desarrollo full stack independiente para un minimarket familiar/i),
  ).toBeInTheDocument();

  fireEvent.keyDown(window, { key: "Escape" });
  expect(
    screen.getByText(/aplicación personal full stack con una versión publicada/i),
  ).toBeInTheDocument();
});

test("no expone repositorios privados y aclara el estado publicado de Travel Calculator", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de travel calculator/i,
    }),
  );
  expect(
    screen.getByText(/no todas las mejoras locales descritas están integradas/i),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("link", { name: /ver repositorio/i }),
  ).not.toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /ver aplicación/i }).some(
      (link) => link.getAttribute("href") === "https://travel-calculator-44v.pages.dev/",
    ),
  ).toBe(true);

  fireEvent.keyDown(window, { key: "Escape" });
  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de minimarket manager/i,
    }),
  );
  expect(
    screen.queryByRole("link", { name: /ver repositorio/i }),
  ).not.toBeInTheDocument();
});

test("abre y cierra el detalle de un proyecto con Escape", () => {
  render(<App />);
  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de minimarket manager/i,
    }),
  );
  expect(screen.getByRole("dialog")).toBeInTheDocument();

  fireEvent.keyDown(window, { key: "Escape" });
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("muestra las capturas adicionales en el proyecto correcto", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", {
      name: /archivo galáctico de star wars aplicación react/i,
    }),
  );

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen 2 de archivo galáctico de star wars/i,
    }),
  );

  expect(
    screen.getByAltText(/colecciones de personajes, vehículos y planetas/i),
  ).toBeInTheDocument();
});

test("separa la galería breve y el detalle completo de Minimarket Manager", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen siguiente de minimarket manager/i,
    }),
  );
  expect(screen.getByAltText(/punto de venta de minimarket manager/i)).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de minimarket manager/i,
    }),
  );
  fireEvent.keyDown(window, { key: "ArrowRight" });
  expect(
    within(screen.getByRole("dialog")).getByAltText(/punto de venta de minimarket manager/i),
  ).toBeInTheDocument();

  fireEvent.keyDown(window, { key: "ArrowLeft" });
  expect(
    screen.getByAltText(/dashboard de estadísticas y resumen comercial/i),
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen 10 de minimarket manager/i,
    }),
  );

  expect(
    screen.getByAltText(/reposición de sacos y paquetes con el estado de sincronización/i),
  ).toBeInTheDocument();
  expect(document.querySelector(".project-preview-tablet")).toBeInTheDocument();
  expect(screen.getByText(/administración remota · reposición y estado/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /ver imagen 9 de minimarket manager/i }));
  expect(document.querySelector(".project-preview-phone")).toBeInTheDocument();
  expect(screen.getByAltText(/minimarket manager desde celular/i)).toBeInTheDocument();
});

test("permite arrastrar con el mouse la galería del celular", () => {
  render(<App />);

  const firstImage = screen.getByAltText(
    /dashboard de estadísticas y resumen comercial/i,
  );
  const carousel = firstImage.closest(".phone-media");

  const dispatchPointer = (type, clientX) => {
    const event = new Event(type, { bubbles: true });
    Object.defineProperties(event, {
      pointerId: { value: 1 },
      clientX: { value: clientX },
    });
    fireEvent(carousel, event);
  };

  dispatchPointer("pointerdown", 180);
  dispatchPointer("pointermove", 90);
  dispatchPointer("pointerup", 90);

  expect(screen.getByAltText(/punto de venta de minimarket manager/i)).toBeInTheDocument();
});

test("presenta una galería responsive y el flujo completo de El Rincón del Vino", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen siguiente de el rincón del vino/i,
    }),
  );
  expect(
    screen.getByAltText(/carrito desplegable.+iphone 12 pro/i),
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de el rincón del vino/i,
    }),
  );
  expect(screen.getByAltText(/página principal de el rincón del vino/i)).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen 10 de el rincón del vino/i,
    }),
  );
  expect(screen.getByAltText(/historial de compras de el rincón del vino/i)).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen 11 de el rincón del vino/i,
    }),
  );
  expect(screen.getByAltText(/control de consumo responsable/i)).toBeInTheDocument();
});
