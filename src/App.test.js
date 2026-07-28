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

test("permite recorrer las imágenes dentro del teléfono", () => {
  render(<App />);

  expect(
    screen.getByAltText(/resumen de cálculo de travel calculator/i),
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen siguiente de travel calculator/i,
    }),
  );

  expect(
    screen.getByAltText(/gestión de vehículos en travel calculator/i),
  ).toBeInTheDocument();
});
