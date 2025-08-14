import React from "react";
import VerticalCarousel from "./VerticalCarousel";
import '../assets/styles/Hero.css'; // Assuming you have a CSS file for styles

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Container das duas colunas */}
        <div className="hero-columns">
          {/* Esquerda */}
          <div className="hero-left">
            <h1>
              Desenvolvemos soluções digitais <br /> sob medida para o seu negócio.
            </h1>
            <p>
              Landing pages, dashboards e sistemas pensados para o que você realmente precisa.
            </p>
          </div>

          {/* Direita */}
          <div className="hero-right">
            <VerticalCarousel />
          </div>
        </div>

        {/* Botão abaixo */}
        <div className="hero-button-container">
          <button className="hero-button">
            Iniciar Missão Ares
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
