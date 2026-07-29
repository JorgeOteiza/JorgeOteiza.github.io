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
    screen.getByRole("button", { name: /ver caso completo de minimarket pos/i }),
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

test("separa la galería breve y el detalle completo de Minimarket POS", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen siguiente de minimarket pos/i,
    }),
  );
  expect(screen.getByAltText(/ajuste manual de inventario/i)).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de minimarket pos/i,
    }),
  );
  fireEvent.keyDown(window, { key: "ArrowRight" });
  expect(
    screen.getAllByAltText(/ajuste manual de inventario/i),
  ).toHaveLength(2);

    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(
      screen.getByAltText(/punto de venta de minimarket pos/i),
    ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen 10 de minimarket pos/i,
    }),
  );

  expect(
    screen.getByAltText(/productos más vendidos y alertas de inventario/i),
  ).toBeInTheDocument();
});
