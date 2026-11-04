// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom simula un navegador en inglés; las pruebas validan la versión en
// español salvo que una prueba cambie el idioma explícitamente.
beforeEach(() => {
  window.localStorage.setItem("portfolio-lang", "es");
});
