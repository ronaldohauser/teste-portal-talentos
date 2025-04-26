import React, { useState, useEffect } from 'react';
import './styles/CandidateListPage.css';

function CandidateListPage() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch('/api/candidates');
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error('Erro ao carregar candidatos:', error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div className="candidate-list">
      <h2>Lista de Candidatos</h2>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Habilidades</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.code}>
              <td>{candidate.code}</td>
              <td>{candidate.name}</td>
              <td>{candidate.email}</td>
              <td>{candidate.phone}</td>
              <td>{candidate.skills.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateListPage;
