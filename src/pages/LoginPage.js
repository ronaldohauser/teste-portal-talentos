import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LoginPage.css';

function LoginPage() {
  // Estado para armazenar os valores dos campos de entrada
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para armazenar mensagens de erro
  const navigate = useNavigate(); // Hook para navegação

  // Função para tratar o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Valida as credenciais
    if (email === "teste@teste.com" && password === "Teste123") {
      navigate('/lista-candidatos'); // Se as credenciais forem corretas, redireciona
    } else {
      setError('E-mail ou senha inválidos!'); // Caso contrário, exibe a mensagem de erro
    }
  };

  return (
    <div className="login-container">
      <h2>Insira suas credenciais para começar</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Campo para o e-mail */}
        <label>
          E-mail:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado de e-mail
            required
          />
        </label>
        
        {/* Campo para a senha */}
        <label>
          Senha:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
            required
          />
        </label>
        
        {/* Exibe mensagem de erro se houver */}
        {error && <p className="error-message">{error}</p>}
        
        {/* Botão para enviar o formulário */}
        <button type="submit" className="btn">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
