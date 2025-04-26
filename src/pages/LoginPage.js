import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/lista-candidatos');
  };

  return (
    <div className="login-container">
      <h2>Insira suas credenciais para começar</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          E-mail:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </label>
        <label>
          Senha:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </label>
        <button type="submit" className="btn">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
