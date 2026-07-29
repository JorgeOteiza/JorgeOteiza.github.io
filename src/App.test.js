import { fireEvent, render, screen } from "@testing-library/react";
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
  expect(screen.getByText("Prompt Engineering")).toBeInTheDocument();
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
      name: /blog de star wars aplicación web/i,
    }),
  );

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen 2 de blog de star wars/i,
    }),
  );

  expect(screen.getByAltText(/listado de vehículos y favoritos/i)).toBeInTheDocument();
});

test("separa la galería breve y el detalle completo de Minimarket Manager", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen siguiente de minimarket manager/i,
    }),
  );
  expect(screen.getByAltText(/ajuste manual de inventario/i)).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de minimarket manager/i,
    }),
  );
  fireEvent.keyDown(window, { key: "ArrowRight" });
  expect(
    screen.getAllByAltText(/ajuste manual de inventario/i),
  ).toHaveLength(2);

    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(
      screen.getByAltText(/punto de venta de minimarket manager/i),
    ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen 10 de minimarket manager/i,
    }),
  );

  expect(
    screen.getByAltText(/productos más vendidos y alertas de inventario/i),
  ).toBeInTheDocument();
});

test("permite arrastrar con el mouse la galería del celular", () => {
  render(<App />);

  const firstImage = screen.getByAltText(
    /punto de venta de minimarket manager/i,
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

  expect(screen.getByAltText(/ajuste manual de inventario/i)).toBeInTheDocument();
});
