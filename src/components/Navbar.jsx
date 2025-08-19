import React, { useState, useEffect } from "react";
import "../assets/styles/navbar.css"; // Certifique-se de que o caminho está correto

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHidden(true); // rolou para baixo -> esconde
      } else {
        setHidden(false); // está no topo -> mostra
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${hidden ? "is-hidden" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item center"><a href="#home">Home</a></li>
          <li className="nav-item center"><a href="#sobre">Sobre</a></li>

          <li className="nav-logo">
            ARES
            <span>TECNOLOGIA</span>
          </li>

          <li className="nav-item center"><a href="#servicos">Serviços</a></li>
          <li className="nav-item center"><a href="#solucoes">Soluções</a></li>
        </ul>
      </nav>
    </div>
  );
}
