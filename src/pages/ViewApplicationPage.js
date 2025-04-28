import React, { useState } from 'react';
import './styles/ViewApplicationPage.css';

function ViewApplicationPage() {
  const [applicationCode, setApplicationCode] = useState('');
  const [applicationData, setApplicationData] = useState(null);
  const [error, setError] = useState('');

  const dummyApplications = [
    {
      code: 'ABC123',
      name: 'João Silva',
      email: 'joao.silva@example.com',
      jobPosition: 'Desenvolvedor Full Stack',
      status: 'Candidatura recebida',
    },
    {
      code: 'DEF456',
      name: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      jobPosition: 'Designer de UI/UX',
      status: 'Em análise',
    },
    {
      code: '001',
      name: 'Ronaldo Dias',
      email: 'ronaldo.dias@teste.com',
      jobPosition: 'Desenvolvedor Fullstack Web',
      status: 'Entrevista agendada para 01/05/2025',
    },
  ];

  const handleSearch = () => {
    const foundApplication = dummyApplications.find(
      (app) => app.code === applicationCode
    );

    if (foundApplication) {
      setApplicationData(foundApplication);
      setError('');
    } else {
      setError('Candidatura não encontrada. Verifique o código inserido.');
      setApplicationData(null);
    }
  };

  return (
    <div className="view-application-container">
      <h2>Ver minha Candidatura</h2>

      <div className="search-form">
        <label>
          Código da Candidatura:
          <input
            type="text"
            value={applicationCode}
            onChange={(e) => setApplicationCode(e.target.value)}
            placeholder="Digite seu código de candidatura"
          />
        </label>
        <button onClick={handleSearch} className="btn">Buscar</button>
      </div>

      {error && <p className="error">{error}</p>}

      {applicationData && (
        <div className="application-details">
          <h3>Detalhes da Candidatura</h3>
          <p><strong>Nome:</strong> {applicationData.name}</p>
          <p><strong>Email:</strong> {applicationData.email}</p>
          <p><strong>Cargo:</strong> {applicationData.jobPosition}</p>
          <p><strong>Status:</strong> {applicationData.status}</p>
        </div>
      )}
    </div>
  );
}

export default ViewApplicationPage;
