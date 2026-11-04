import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import ui from "./ui";

export const IDIOMAS = ["es", "en"];
const STORAGE_KEY = "portfolio-lang";

const leerIdiomaInicial = () => {
  if (typeof window === "undefined") return "es";

  // 1. ?lang=en en la URL: permite compartir el enlace directo en inglés.
  try {
    const desdeUrl = new URLSearchParams(window.location.search).get("lang");
    if (IDIOMAS.includes(desdeUrl)) return desdeUrl;
  } catch (error) {
    // URL no disponible: se continúa con la siguiente fuente.
  }

  // 2. Preferencia guardada por el visitante.
  try {
    const guardado = window.localStorage.getItem(STORAGE_KEY);
    if (IDIOMAS.includes(guardado)) return guardado;
  } catch (error) {
    // Almacenamiento bloqueado (modo privado, etc.).
  }

  // 3. Idioma del navegador: español si lo prefiere, inglés en otro caso.
  const preferidos = window.navigator?.languages?.length
    ? window.navigator.languages
    : [window.navigator?.language || "es"];
  return preferidos.some((idioma) => /^es\b/i.test(idioma)) ? "es" : "en";
};

/**
 * Resuelve recursivamente los valores { es, en } de una estructura de datos
 * al idioma activo. El resto de valores se devuelve sin cambios.
 */
export const localizar = (valor, lang) => {
  if (Array.isArray(valor)) return valor.map((item) => localizar(item, lang));
  if (valor && typeof valor === "object") {
    if ("es" in valor && "en" in valor && Object.keys(valor).length === 2) {
      return valor[lang] ?? valor.es;
    }
    return Object.fromEntries(
      Object.entries(valor).map(([clave, item]) => [clave, localizar(item, lang)]),
    );
  }
  return valor;
};

const LanguageContext = createContext({
  lang: "es",
  setLang: () => {},
  t: ui.es,
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(leerIdiomaInicial);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].meta.title;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Sin almacenamiento disponible, el idioma solo dura esta visita.
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: ui[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
