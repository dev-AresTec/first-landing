import React from "react";
import '../assets/styles/solucoes.css';

export default function Solucoes() {
  return (
    <div className="solucoes-wrapper">
      <h1 className="solucoes-titulo">
        Soluções digitais sob medida para o seu negócio
      </h1>
      <p className="solucoes-subtexto">
        Oferecemos serviços especializados para potencializar sua presença online e otimizar
        seus processos, unindo tecnologia, estratégia e inovação para entregar resultados
        de alto impacto.
      </p>

      <div className="solucoes-cards">
        <div className="solucao-card">
          <img src="/images/a1.jpg" alt="Serviço 1" />
          <h2>Desenvolvimento Web</h2>
          <p>Criamos sites modernos, responsivos e otimizados para garantir a melhor experiência.</p>
        </div>

        <div className="solucao-card">
          <img src="/images/a2.jpg" alt="Serviço 2" />
          <h2>Automação de Processos</h2>
          <p>Automatizamos tarefas para reduzir custos e aumentar a eficiência do seu negócio.</p>
        </div>

        <div className="solucao-card">
          <img src="/images/a3.jpg" alt="Serviço 3" />
          <h2>Marketing Digital</h2>
          <p>Estratégias inteligentes para aumentar sua visibilidade e atrair mais clientes.</p>
        </div>
      </div>
    </div>
  );
}
