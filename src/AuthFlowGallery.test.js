import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("presenta AuthFlow como caso de seguridad full stack y muestra su galería responsive", () => {
  render(<App />);

  const hero = screen.getByAltText(/portada de authflow en iphone 12 pro/i);
  expect(hero.closest(".phone-device")).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver imagen siguiente de authflow/i,
    }),
  );
  expect(
    screen.getByAltText(/creación de cuenta de authflow en iphone 12 pro/i),
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de authflow/i,
    }),
  );

  expect(
    screen.getByRole("heading", { name: "AuthFlow", level: 2 }),
  ).toBeInTheDocument();
  expect(screen.getByText("Calidad y validación")).toBeInTheDocument();
  expect(screen.getByText("Origen del proyecto")).toBeInTheDocument();
  const repoLinks = screen.getAllByRole("link", { name: /ver repositorio/i });
  expect(repoLinks.length).toBeGreaterThanOrEqual(2);
  repoLinks.forEach((link) => {
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/JorgeOteiza/authflow-react-flask",
    );
  });
});
