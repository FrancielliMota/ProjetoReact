import React from 'react';
import './Header.css';
import logo from './logo.svg';

const Header = () => {
  return (
    <header className="header-container"> {/* Aplica uma classe para estilização */}
      <img className="imglogo" src={logo} alt="Logo" /> {/* Usa a imagem importada */}
      <div className="header-content">
        <h1>Disciplina: Laboratório de Engenharia de Software</h1>
        <h4>Aluna: Francielli Viana Mota</h4>
      </div>
    </header>
  );
};

export default Header;

