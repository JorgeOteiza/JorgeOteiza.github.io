import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("cambia todo el portafolio al inglés y recuerda la preferencia", () => {
  render(<App />);

  const botonEs = screen.getByRole("button", { name: "Español" });
  const botonEn = screen.getByRole("button", { name: "English" });
  expect(botonEs).toHaveAttribute("aria-pressed", "true");
  expect(botonEn).toHaveAttribute("aria-pressed", "false");

  fireEvent.click(botonEn);
  expect(botonEn).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("link", { name: "View résumé" })).toHaveAttribute(
    "href",
    expect.stringContaining("/CV_Jorge_Oteiza_Full_Stack_Developer_EN.pdf"),
  );

  expect(
    screen.getByRole("heading", { name: /i build digital products/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /products that live beyond the code/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "About me" })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe("en");
  expect(window.localStorage.getItem("portfolio-lang")).toBe("en");

  fireEvent.click(
    screen.getByRole("button", {
      name: /view full case study of minimarket manager/i,
    }),
  );
  const dialog = screen.getByRole("dialog");
  expect(within(dialog).getByText(/independent full stack development/i)).toBeInTheDocument();
  expect(within(dialog).getByText(/private repository/i)).toBeInTheDocument();
  expect(
    within(dialog).getByAltText(/minimarket manager statistics dashboard/i),
  ).toBeInTheDocument();

  fireEvent.keyDown(window, { key: "Escape" });
  fireEvent.click(screen.getByRole("button", { name: "Español" }));
  expect(
    screen.getByRole("heading", { name: /desarrollo productos digitales/i }),
  ).toBeInTheDocument();
  expect(document.documentElement.lang).toBe("es");
});

test("abre el menú móvil y lo cierra al elegir una sección", () => {
  window.scrollTo = jest.fn();
  render(<App />);

  const toggler = screen.getByRole("button", { name: "Abrir navegación" });
  expect(toggler).toHaveAttribute("aria-expanded", "false");

  fireEvent.click(toggler);
  expect(toggler).toHaveAttribute("aria-expanded", "true");
  expect(document.getElementById("navbarNav")).toHaveClass("show");

  fireEvent.click(screen.getByRole("link", { name: "Proyectos" }));
  expect(toggler).toHaveAttribute("aria-expanded", "false");
  expect(document.getElementById("navbarNav")).not.toHaveClass("show");
});
