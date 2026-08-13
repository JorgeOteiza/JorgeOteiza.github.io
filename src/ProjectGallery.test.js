import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

const dispatchPointer = (target, type, clientX) => {
  const event = new Event(type, { bubbles: true });
  Object.defineProperties(event, {
    pointerId: { value: 7 },
    clientX: { value: clientX },
  });
  fireEvent(target, event);
};

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

test("permite deslizar la imagen grande y la tira de miniaturas", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de minimarket manager/i,
    }),
  );

  const featuredMedia = document.querySelector(".project-modal-featured-media");
  const thumbnails = document.querySelector(".project-thumbnails");

  dispatchPointer(featuredMedia, "pointerdown", 220);
  dispatchPointer(featuredMedia, "pointermove", 110);
  dispatchPointer(featuredMedia, "pointerup", 110);
  expect(screen.getByAltText(/productos más vendidos/i)).toBeInTheDocument();

  Object.defineProperty(thumbnails, "scrollLeft", { value: 0, writable: true });
  dispatchPointer(thumbnails, "pointerdown", 180);
  dispatchPointer(thumbnails, "pointermove", 80);
  expect(thumbnails.scrollLeft).toBe(100);
  dispatchPointer(thumbnails, "pointerup", 80);
});

test("selecciona una miniatura sin interferir con el arrastre del carrusel", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de minimarket manager/i,
    }),
  );

  const thumbnail = screen
    .getAllByRole("button", {
      name: /ver imagen 3 de minimarket manager/i,
    })
    .find((button) => button.querySelector("img"));
  dispatchPointer(thumbnail, "pointerdown", 120);
  dispatchPointer(thumbnail, "pointerup", 120);

  expect(thumbnail).toHaveAttribute("aria-current", "true");
});

test("permite tocar miniaturas de vistas tablet y teléfono", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", {
      name: /ver caso completo de travel calculator/i,
    }),
  );

  const tabletThumbnail = screen
    .getAllByRole("button", {
      name: /ver imagen 2 de travel calculator/i,
    })
    .find((button) => button.querySelector("img"));
  dispatchPointer(tabletThumbnail, "pointerdown", 120);
  dispatchPointer(tabletThumbnail, "pointerup", 120);
  expect(tabletThumbnail).toHaveAttribute("aria-current", "true");

  const phoneThumbnail = screen.getByRole("button", {
    name: /ver imagen 13 de travel calculator/i,
  });
  dispatchPointer(phoneThumbnail, "pointerdown", 120);
  dispatchPointer(phoneThumbnail, "pointerup", 120);
  expect(phoneThumbnail).toHaveAttribute("aria-current", "true");
});
