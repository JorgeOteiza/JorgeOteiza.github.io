import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("presenta Short URL como aplicación full stack y conserva su galería responsive", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /short url/i }));

  expect(
    screen.getByAltText(/portada de short url con el formulario/i),
  ).toBeInTheDocument();
  expect(
    screen
      .getAllByRole("link", { name: /ver aplicación/i })
      .some((link) => link.getAttribute("href") === "https://short-url-cl.onrender.com/"),
  ).toBe(true);
  expect(
    screen.getByRole("link", { name: /ver documentación api/i }),
  ).toHaveAttribute("href", "https://short-url-cl.onrender.com/docs");

  fireEvent.click(
    screen.getByRole("button", { name: /ver imagen 4 de short url/i }),
  );
  expect(
    screen.getByAltText(/generador de códigos qr de short url en ipad air/i),
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", { name: /ver imagen 6 de short url/i }),
  );
  expect(
    screen.getByAltText(/vista inicial responsive de short url en iphone/i),
  ).toBeInTheDocument();
});
