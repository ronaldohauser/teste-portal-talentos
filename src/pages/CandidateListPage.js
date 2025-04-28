import React, { useState } from 'react';
import './styles/CandidateListPage.css';

function CandidateListPage() {
  // Estado com lista de candidatos
  const [candidates] = useState([
    {
      code: '001',
      name: 'Ronaldo Hauser',
      email: 'ronaldo.teste@teste.com',
      phone: '11 9999-9999',
      skills: ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      code: '002',
      name: 'Ronaldo Dias',
      email: 'ronaldo.dias@teste.com',
      phone: '11 88888-8888',
      skills: ['Java', 'Spring Boot', 'SQL', 'Hibernate'],
    },
    {
      code: '003',
      name: 'Aline Hauser',
      email: 'aline.hauser@teste.com',
      phone: '11 77777-7777',
      skills: ['Python', 'Django', 'Flask', 'PostgreSQL'],
    },
    {
      code: '004',
      name: 'Aline Dias',
      email: 'aline.dias@teste.com',
      phone: '11 66666-6666',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'RxJS'],
    },
  ]);

  // Estados para controle da pesquisa e seleção
  const [search, setSearch] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectionStatus, setSelectionStatus] = useState({});
  const isManager = true; // Controle de visibilidade das ações de seleção para entrevista

  // Função para gerenciar a busca
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Função para selecionar um candidato para a entrevista
  const handleSelectCandidateForInterview = async (candidate) => {
    if (isManager && !selectionStatus[candidate.code]) {
      const selectionDate = new Date();
      selectionDate.setDate(selectionDate.getDate() + 3); // Definindo a data da entrevista para 3 dias após
      const interviewDate = new Date(selectionDate.setHours(14, 0, 0));

      try {
        // Enviando e-mail de convite para a entrevista
        const response = await fetch('/api/send-interview-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: candidate.email,
            interviewDate,
          }),
        });
        const result = await response.json();

        if (result.success) {
          alert(`Candidato selecionado para entrevista em ${interviewDate}`);
          setSelectionStatus((prevState) => ({
            ...prevState,
            [candidate.code]: 'Candidato Selecionado',
          }));
        } else {
          alert('Erro ao enviar e-mail');
        }
      } catch (error) {
        console.error('Erro ao enviar e-mail de entrevista:', error);
      }
    }
  };

  // Filtrando os candidatos com base na pesquisa
  const filteredCandidates = candidates.filter((candidate) => {
    const searchLower = search.toLowerCase();
    return (
      candidate.name.toLowerCase().includes(searchLower) ||
      candidate.skills.some((skill) => skill.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="candidate-list">
      <h2>Lista de Candidatos</h2>

      {/* Campo de pesquisa */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Nome | Código | habilidade"
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Tabela de candidatos */}
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Habilidades</th>
            {isManager && <th>Ação</th>} {/* Exibe a coluna de ação apenas para managers */}
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map((candidate) => (
            <tr
              key={candidate.code}
              onClick={() => setSelectedCandidate(candidate)}
              className={selectedCandidate?.code === candidate.code ? 'selected' : ''} // Destaca o candidato selecionado
            >
              <td>{candidate.code}</td>
              <td>{candidate.name}</td>
              <td>{candidate.email}</td>
              <td>{candidate.phone}</td>
              <td>{candidate.skills.join(', ')}</td>
              {isManager && (
                <td>
                  <button
                    onClick={() => handleSelectCandidateForInterview(candidate)}
                    disabled={selectionStatus[candidate.code] === 'Candidato Selecionado'}
                  >
                    {selectionStatus[candidate.code] || 'Selecionar para Entrevista'}
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Detalhes do candidato selecionado */}
      {selectedCandidate && (
        <div className="candidate-detail">
          <h3>Detalhes do Candidato</h3>
          <p><strong>Nome:</strong> {selectedCandidate.name}</p>
          <p><strong>Email:</strong> {selectedCandidate.email}</p>
          <p><strong>Telefone:</strong> {selectedCandidate.phone}</p>
          <p><strong>Habilidades:</strong> {selectedCandidate.skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default CandidateListPage;
