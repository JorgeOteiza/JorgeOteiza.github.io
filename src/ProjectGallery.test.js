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
