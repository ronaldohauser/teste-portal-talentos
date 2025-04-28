import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importando as páginas do projeto
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CandidateListPage from './pages/CandidateListPage'; 
import CandidateApplicationPage from './pages/CandidateApplicationPage';
import ViewApplicationPage from './pages/ViewApplicationPage';

// Componente principal da aplicação
function App() {
  return (
    // Usando Router para gerenciar as rotas da aplicação
    <Router>
      <Routes>
        {/* Definindo as rotas e seus componentes correspondentes */}
        
        {/* Página Inicial - HomePage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Página de Login - LoginPage */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Página de Lista de Candidatos - CandidateListPage */}
        <Route path="/lista-candidatos" element={<CandidateListPage />} />
        
        {/* Página de Candidatura - CandidateApplicationPage */}
        <Route path="/se-candidatar" element={<CandidateApplicationPage />} />
        
        {/* Página para visualizar uma candidatura específica - ViewApplicationPage */}
        <Route path="/ver-candidatura" element={<ViewApplicationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
