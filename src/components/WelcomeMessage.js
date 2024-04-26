import React from 'react';
import './WelcomeMessage.css';

function WelcomeMessage() {
  return (
    <div className="welcome-message-container">
      <h1 className="welcome-message-title">Bem-vindo ao Site de Receitas de Bolos!</h1>
      <p className="welcome-message-text">Qual receita deseja?</p>
    </div>
  );
}

export default WelcomeMessage;
