import '../assets/styles/Sobre.css';

export default function Sobre() {
  const cards = [
    {
      title: "Inovação que impulsiona",
      text: "Aplicamos tecnologia de forma criativa para resolver desafios reais."
    },
    {
      title: "Compromisso com resultados",
      text: "Estamos ao seu lado em cada etapa, entregando valor e confiança."
    },
    {
      title: "Tecnologia com segurança",
      text: "Seus dados são prioridade. Atuamos com responsabilidade e segurança total."
    },
    {
      title: "Decisões com inteligência",
      text: "Transformamos dados em estratégias que fazem seu negócio evoluir."
    }
  ];

  return (
    <section className="sobre">
      <div className="sobre-container">
        <h2 className="sobre-titulo">
          SOLUÇÕES TECNOLÓGICAS QUE GERAM RESULTADOS REAIS
        </h2>

        <p className="sobre-descricao">
          Na Ares Tecnologia, unimos criatividade, estratégia e inovação para entregar soluções
          digitais que realmente fazem a diferença. Desenvolvemos sites modernos e painéis
          em Power BI que ajudam sua empresa a se destacar, tomar decisões mais inteligentes
          e crescer com eficiência. Nosso foco é gerar valor real para o seu negócio, com
          tecnologia sob medida e atendimento próximo.
        </p>

        <div className="cards-container">
          {cards.map((c, i) => (
            <div key={i} className="card">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
