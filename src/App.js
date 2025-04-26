import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CandidateListPage from './pages/CandidateListPage'; 
import CandidateApplicationPage from './pages/CandidateApplicationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lista-candidatos" element={<CandidateListPage />} />  {}
        <Route path="/se-candidatar" element={<CandidateApplicationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
