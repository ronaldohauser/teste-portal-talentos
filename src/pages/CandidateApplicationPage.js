import React, { useState } from 'react';
import './styles/CandidateApplicationPage.css';

function CandidateApplicationPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    experiencia: '',
    habilidades: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Candidatura enviada:', formData);
    alert('Sua candidatura foi enviada com sucesso!');
  };

  return (
    <div className="candidate-application-container">
      <h1>Formulário de Candidatura</h1>
      <p>Preencha os dados abaixo para se candidatar à vaga.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="experiencia">Experiência Profissional:</label>
          <textarea
            id="experiencia"
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="habilidades">Habilidades:</label>
          <textarea
            id="habilidades"
            name="habilidades"
            value={formData.habilidades}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn">Enviar Candidatura</button>
      </form>
    </div>
  );
}

export default CandidateApplicationPage;
