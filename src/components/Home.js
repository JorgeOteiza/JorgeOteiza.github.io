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
        <div className="profile-photo mt-2">
          <img
            src="https://avatars.githubusercontent.com/u/139603426?v=4"
            alt="Foto de Perfil"
          />
        </div>
        <div className="home-text">
          <h1>Jorge Oteiza</h1>
          <p>Desarrollador Full Stack Junior</p>
        </div>
      </div>
      <div className="arrow-down my-3 py-5" onClick={handleScroll}>
        <FontAwesomeIcon icon={faAnglesDown} />
      </div>
    </section>
  );
};

export default Home;
