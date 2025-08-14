import React from "react";
import '../assets/styles/servicos.css';

export default function Servico() {
  return (
    <div className="servico-wrapper">

      {/* Div de cima - topo */}
      <div className="topo">
        <h1 className="topo-titulo">COMO SE INICIA A MISSÃO ARES</h1>
        <p className="topo-texto">
          Nosso processo é estratégico, colaborativo e voltado para resultados. <br />
          Da ideia à entrega, cada passo é planejado para levar sua missão ao sucesso.
        </p>
      </div>

      {/* Div de baixo com imagem como background */}
      <div className="bottom-container background-img"></div>
    </div>
  );
}
