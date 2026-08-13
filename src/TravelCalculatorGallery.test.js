import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("presenta Travel Calculator en tablet y conserva sus vistas responsive", () => {
  render(<App />);

  const hero = screen.getByAltText(/portada responsive de travel calculator/i);
  expect(hero.closest(".tablet-card-device")).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen siguiente de travel calculator/i,
    }),
  );
  expect(
    screen.getByAltText(/calculadora de ruta con formulario y mapa/i),
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de travel calculator/i,
    }),
  );
  expect(
    screen.getByAltText(/portada responsive de travel calculator/i),
  ).toBeInTheDocument();

  const segundaMiniatura = screen
    .getAllByRole("button", {
      name: /ver imagen 2 de travel calculator/i,
    })
    .find((button) => button.querySelector("img"));
  fireEvent.click(segundaMiniatura);
  expect(segundaMiniatura).toHaveAttribute("aria-current", "true");

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen 13 de travel calculator/i,
    }),
  );
  expect(
    screen.getByAltText(/historial de travel calculator en iphone/i),
  ).toBeInTheDocument();
});
