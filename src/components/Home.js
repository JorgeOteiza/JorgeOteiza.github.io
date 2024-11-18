import React from 'react';

const Home = () => {
  return (
    <section id="inicio" className="Home">
      <div className="home-container">
        <div className="profile-photo">
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
      <div className="arrow-down">↓</div>
    </section>
  );
};

export default Home;
