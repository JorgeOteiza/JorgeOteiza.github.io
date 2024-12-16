document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  if (cards.length > 0) {
    let maxHeight = 0;

    // Encuentra la altura máxima
    cards.forEach((card) => {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    // Asigna la altura máxima a todas las tarjetas
    cards.forEach((card) => {
      card.style.height = `${maxHeight}px`;
    });
  }
});
