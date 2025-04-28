import React from 'react';
import { Link } from 'react-router-dom';  // Importando o Link para navegação entre páginas
import './styles/HomePage.css';  // Importando o estilo da página

// Componente da página inicial
function HomePage() {
  return (
    <div className="home-container">
      {/* Título principal da página */}
      <h1>Bem-vindo ao Portal de Talentos</h1>

      {/* Descrição breve sobre a plataforma */}
      <p>Encontre o candidato ideal ou se candidate para oportunidades.</p>

      {/* Seção de botões para navegação */}
      <div className="home-buttons">
        {/* Botão para acessar a página de login do recrutador */}
        <Link to="/login">
          <button className="btn">Sou recrutador</button>
        </Link>

        {/* Botão para se candidatar a uma vaga */}
        <Link to="/se-candidatar">
          <button className="btn">Nova candidatura</button>
        </Link>

        {/* Botão para ver candidaturas já enviadas */}
        <Link to="/ver-candidatura">
          <button className="btn">Ver minha candidatura</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
