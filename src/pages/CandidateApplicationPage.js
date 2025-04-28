import React, { useState, useEffect } from 'react';
import './styles/CandidateApplicationPage.css';

// Lista de habilidades disponíveis
const habilidadesDisponiveis = [
  "Java", "Node.js", "C++", "PHP", "Python", "Go", "ADVPL",
  "Angular", "Electron", "React", "React Native", "MongoDB",
  "MySQL", "SQLServer", "Postgres", "Backend", "Front-End"
];

// Níveis de curso disponíveis
const niveisCurso = [
  "Técnico/Profisionalizante", "Graduação", "Pós-graduação", "Mestrado", "Doutorado"
];

let codigoSequencial = 1; // Código sequencial começa de 1

function CandidateApplicationPage() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    codigo: '',
    nome: '',
    dataNascimento: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    habilidades: [],
    formacoes: [{ curso: '', instituicao: '', conclusao: '', nivel: '' }]
  });

  // Estado para armazenar a habilidade selecionada
  const [habilidadeSelecionada, setHabilidadeSelecionada] = useState('');

  // Atualiza o código da candidatura com o número sequencial
  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      codigo: `${codigoSequencial++}`  // Atualiza código sequencial
    }));
  }, []);

  // Função para atualizar os campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Função para buscar o endereço via CEP
  const handleCepBlur = async () => {
    if (formData.cep.length === 8) { // Verifica se o CEP tem 8 caracteres
      try {
        const response = await fetch(`https://viacep.com.br/ws/${formData.cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setFormData(prevData => ({
            ...prevData,
            endereco: `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
          }));
        } else {
          alert('CEP não encontrado!');
        }
      } catch (error) {
        alert('Erro ao buscar CEP!');
      }
    }
  };

  // Função para adicionar ou remover habilidades
  const handleHabilidadeChange = () => {
    if (habilidadeSelecionada) {
      setFormData(prevData => {
        const habilidades = prevData.habilidades.includes(habilidadeSelecionada)
          ? prevData.habilidades.filter(h => h !== habilidadeSelecionada) // Remove habilidade
          : [...prevData.habilidades, habilidadeSelecionada]; // Adiciona habilidade
        return {
          ...prevData,
          habilidades
        };
      });
      setHabilidadeSelecionada(''); // Limpa habilidade selecionada após a mudança
    }
  };

  // Função para atualizar os dados da formação acadêmica
  const handleFormacaoChange = (index, e) => {
    const { name, value } = e.target;
    const novasFormacoes = [...formData.formacoes];
    novasFormacoes[index][name] = value;
    setFormData(prevData => ({
      ...prevData,
      formacoes: novasFormacoes
    }));
  };

  // Função para adicionar nova formação acadêmica
  const adicionarFormacao = () => {
    setFormData(prevData => ({
      ...prevData,
      formacoes: [...prevData.formacoes, { curso: '', instituicao: '', conclusao: '', nivel: '' }]
    }));
  };

  // Função para enviar o formulário
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
        {/* Código da Candidatura */}
        <div className="form-group">
          <label htmlFor="codigo">Código da Candidatura:</label>
          <input
            type="text"
            id="codigo"
            name="codigo"
            value={formData.codigo}
            readOnly // Campo apenas de leitura
            required
          />
        </div>

        {/* Dados Pessoais */}
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
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
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
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>

        {/* CEP e Endereço */}
        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            onBlur={handleCepBlur}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            readOnly
            required
          />
        </div>

        {/* Habilidades */}
        <div className="form-group">
          <label>Habilidades:</label>
          <select
            value={habilidadeSelecionada}
            onChange={(e) => setHabilidadeSelecionada(e.target.value)}
          >
            <option value="">Selecione uma habilidade</option>
            {habilidadesDisponiveis.map(habilidade => (
              <option key={habilidade} value={habilidade}>{habilidade}</option>
            ))}
          </select>
          <button type="button" onClick={handleHabilidadeChange}>
            {formData.habilidades.includes(habilidadeSelecionada) ? 'Remover' : 'Adicionar'}
          </button>
        </div>

        <div className="form-group">
          <label>Habilidades Selecionadas:</label>
          <ul>
            {formData.habilidades.map((habilidade, index) => (
              <li key={index}>{habilidade}</li>
            ))}
          </ul>
        </div>

        {/* Formações Acadêmicas */}
        <div className="form-group">
          <label>Formações Acadêmicas:</label>
          {formData.formacoes.map((formacao, index) => (
            <div key={index} className="formacao-group">
              <input
                type="text"
                name="curso"
                placeholder="Nome do Curso"
                value={formacao.curso}
                onChange={(e) => handleFormacaoChange(index, e)}
                required
              />
              <input
                type="text"
                name="instituicao"
                placeholder="Nome da Instituição"
                value={formacao.instituicao}
                onChange={(e) => handleFormacaoChange(index, e)}
                required
              />
              <input
                type="date"
                name="conclusao"
                value={formacao.conclusao}
                onChange={(e) => handleFormacaoChange(index, e)}
                required
              />
              <select
                name="nivel"
                value={formacao.nivel}
                onChange={(e) => handleFormacaoChange(index, e)}
                required
              >
                <option value="">Selecione o Nível</option>
                {niveisCurso.map((nivel) => (
                  <option key={nivel} value={nivel}>{nivel}</option>
                ))}
              </select>
            </div>
          ))}
          <button type="button" onClick={adicionarFormacao}>Adicionar Formação</button>
        </div>

        <button type="submit" className="btn">Enviar Candidatura</button>
      </form>
    </div>
  );
}

export default CandidateApplicationPage;
