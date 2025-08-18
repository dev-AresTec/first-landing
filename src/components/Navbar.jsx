import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setHidden(true); // rolando para baixo -> esconde
      } else {
        setHidden(false); // rolando para cima -> mostra
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
