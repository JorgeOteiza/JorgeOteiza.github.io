document.addEventListener("DOMContentLoaded", () => {
  const columns = document.querySelectorAll(".column");

  if (columns.length > 1) {
    let maxHeight = 0;

    // Encuentra la altura máxima
    columns.forEach((col) => {
      const colHeight = col.offsetHeight;
      if (colHeight > maxHeight) maxHeight = colHeight;
    });

    // Ajusta todas las columnas a la misma altura
    columns.forEach((col) => {
      col.style.height = `${maxHeight}px`;
    });
  }
});
