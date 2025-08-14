import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="grid grid-cols-5 items-center py-4 text-white font-semibold text-base">
          
          <li className="text-center">
            <a 
              href="#home" 
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </a>
          </li>

          <li className="text-center">
            <a 
              href="#sobre" 
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Sobre
            </a>
          </li>

          <li className="text-center text-3xl tracking-wider text-white font-bold font-orbitron leading-tight">
            ARES
            <span className="block text-sm tracking-[0.2em]">TECNOLOGIA</span>
          </li>

          <li className="text-center">
            <a 
              href="#servicos" 
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Serviços
            </a>
          </li>

          <li className="text-center">
            <a 
              href="#Solucoes" 
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Solucoes
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
