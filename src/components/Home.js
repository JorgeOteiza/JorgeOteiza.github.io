import React from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const handleScroll = () => {
    const nextSection = document.querySelector("#sobre-mi");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="Home my-5">
      <div className="home-container">
        <div className="profile-photo">
          <img
            src="https://avatars.githubusercontent.com/u/139603426?v=4"
            alt="Foto de Perfil"
          />
        </div>
        <div className="home-text">
          <h1>JORGE OTEIZA</h1>
          <p className="px-3">
            <strong>Desarrollador Full Stack</strong>
          </p>
        </div>
      </div>
      <div className="arrow-down my-3 py-5" onClick={handleScroll}>
        <FontAwesomeIcon icon={faAnglesDown} />
      </div>
    </section>
  );
};

export default Home;
