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
  expect(screen.getByText(/pytest/i)).toBeInTheDocument();
  expect(screen.getByText("FastAPI")).toBeInTheDocument();
  expect(screen.getByText("Docker")).toBeInTheDocument();
  expect(screen.getByText("GitHub Actions")).toBeInTheDocument();
  expect(screen.getByText("Playwright")).toBeInTheDocument();
  expect(screen.getByText("Diseño de prompts")).toBeInTheDocument();
  expect(screen.getByText("Cómo trabajo")).toBeInTheDocument();
  expect(screen.getAllByText(/full stack/i).length).toBeGreaterThanOrEqual(4);
  expect(
    screen.getByRole("link", { name: /ver aplicación/i }),
  ).toHaveAttribute("href", "https://short-url-cl.onrender.com/");
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
