import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Portal de Talentos</h1>
      <p>Encontre o candidato ideal ou se candidate para oportunidades.</p>

      <div className="home-buttons">
        <Link to="/login">
          <button className="btn">Recrutador</button>
        </Link>
        <Link to="/se-candidatar">
          <button className="btn">Candidato</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
