import React, { useEffect, useState } from "react";
import "./styles/App.css";
import "./styles/Sections.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
import Tecnologías from "./components/Tecnologías";
import Proyectos from "./components/Proyectos";
import { LanguageProvider } from "./i18n/LanguageContext";

// El video pesa varios MB: se omite en pantallas pequeñas (datos móviles)
// y cuando el usuario pide reducir el movimiento.
const VIDEO_QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

const useBackgroundVideo = () => {
  const getMatch = () =>
    typeof window !== "undefined" && typeof window.matchMedia === "function"
      ? window.matchMedia(VIDEO_QUERY).matches
      : false;
  const [enabled, setEnabled] = useState(getMatch);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const media = window.matchMedia(VIDEO_QUERY);
    const update = () => setEnabled(media.matches);
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  return enabled;
};

function App() {
  const showVideo = useBackgroundVideo();

  return (
    <LanguageProvider>
      <div className="App">
        <div className="video-container">
          {showVideo && (
            <video
              className="background-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source
                src={`${process.env.PUBLIC_URL}/backgroundEstrellado.mp4`}
                type="video/mp4"
              />
            </video>
          )}
        </div>

        <Navbar />
        <Home />
        <Proyectos />
        <Tecnologías />
        <SobreMi />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
