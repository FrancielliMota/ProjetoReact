import React, { useState } from 'react';
import '../style.css'; 
import homemImg from './homem.png'; // Importe a imagem do homem
import mulherImg from './mulher.png'; // Importe a imagem da mulher
import maisImg from './mais.png'; // Importe a imagem do botão de adicionar
import menosImg from './menos.png'; // Importe a imagem do botão de subtrair

const ContadorDePessoas = () => {
  const [quantidadeHomens, setQuantidadeHomens] = useState(0);
  const [quantidadeMulheres, setQuantidadeMulheres] = useState(0);

  const incrementarHomens = () => {
    setQuantidadeHomens(quantidadeHomens + 1);
  };

  const decrementarHomens = () => {
    if (quantidadeHomens > 0) {
      setQuantidadeHomens(quantidadeHomens - 1);
    }
  };

  const incrementarMulheres = () => {
    setQuantidadeMulheres(quantidadeMulheres + 1);
  };

  const decrementarMulheres = () => {
    if (quantidadeMulheres > 0) {
      setQuantidadeMulheres(quantidadeMulheres - 1);
    }
  };

  return (
    <div className="container">
      <div className="contador">
        <h1>Atividade 2: Contador de Pessoas</h1>

        {/* Homens */}
        <main>
          <div className="imagem">
            <img src={homemImg} alt="Homem" />
          </div>
          <span>Homens</span>
          <div className="pessoa">
            <img src={menosImg} alt="Menor" className="imagem-menor" onClick={decrementarHomens} />
            <img src={maisImg} alt="Maior" className="imagem-maior" onClick={incrementarHomens} />
            <br />
            <span>Quantidade = {quantidadeHomens}</span>
          </div>
        </main>

        {/* Mulheres */}
        <main className="espaco">
          <div className="imagem">
            <img src={mulherImg} alt="Mulher" />
          </div>
          <span>Mulheres</span>
          <div className="pessoa">
            <img src={menosImg} alt="Menor" className="imagem-menor" onClick={decrementarMulheres} />
            <img src={maisImg} alt="Maior" className="imagem-maior" onClick={incrementarMulheres} />
            <br />
            <span>Quantidade = {quantidadeMulheres}</span>
          </div>
        </main>

        <div className="total">Total: {quantidadeHomens + quantidadeMulheres}</div>
      </div>
    </div>
  );
};

export default ContadorDePessoas;
