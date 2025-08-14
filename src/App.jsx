import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Sobre from './components/Sobre.jsx';
import Servico from './components/Servicos.jsx';
import Solucoes from './components/Solucoes.jsx';

function App() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: "url('/images/space.jpg')" }}
    >
      <Navbar />
      <main className="pt-16">
        {/* Adicione o id correspondente a cada seção */}
        <section id="home">
          <Hero />
        </section>

        <section id="sobre">
          <Sobre />
        </section>

        <section id="servicos">
          <Servico />
        </section>

        <section id="Solucoes">
          <Solucoes />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
