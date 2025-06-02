import React, { useEffect } from "react";
import "../styles/StarBackground.css";

const StarBackground = () => {
  useEffect(() => {
    const starsContainer = document.getElementById("stars");
    starsContainer.innerHTML = "";

    const count = 300;
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");

      const twinkleClass = ["twinkle-soft", "twinkle-fast", "twinkle-irregular"];
      const selectedClass = twinkleClass[Math.floor(Math.random() * twinkleClass.length)];
      star.className = `star ${selectedClass}`;

      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      const size = Math.random() * 2.5 + 0.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = `${Math.random() * 0.6 + 0.3}`;

      // Nuevas líneas: asincronía total
      const delay = Math.random() * 5; // segundos
      const duration = selectedClass === "twinkle-fast"
        ? Math.random() * 1.5 + 1.5   // 1.5–3s
        : selectedClass === "twinkle-irregular"
        ? Math.random() * 2 + 3       // 3–5s
        : Math.random() * 2 + 4;      // 4–6s

      star.style.animationDelay = `${delay}s`;
      star.style.animationDuration = `${duration}s`;

      starsContainer.appendChild(star);
    }
  }, []);

  return <div id="stars"></div>;
};

export default StarBackground;
