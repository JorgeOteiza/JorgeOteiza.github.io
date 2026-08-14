import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("presenta Archivo Galáctico de Star Wars como una aplicación de exploración responsive", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", { name: /archivo galáctico de star wars/i }),
  );

  expect(
    screen.getByAltText(/portada del archivo galáctico de star wars/i),
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen 6 de archivo galáctico de star wars/i,
    }),
  );
  expect(
    screen.getByAltText(/colecciones del archivo galáctico en vista tablet/i),
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen 7 de archivo galáctico de star wars/i,
    }),
  );
  expect(
    screen.getByAltText(/portada responsive del blog de star wars en iphone/i),
  ).toBeInTheDocument();
});
