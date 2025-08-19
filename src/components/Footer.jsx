import React from "react";

export default function Footer() {
  return (
    <footer className="footer w-full bg-gray-900 text-gray-300 py-6 flex flex-col md:flex-row items-center justify-between px-6">
      
      {/* Instagram à esquerda */}
      <a
        href="https://www.instagram.com/ares_tech25"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-white transition-colors duration-300 flex items-center mb-4 md:mb-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.414a4.92 4.92 0 011.675 1.09 4.92 4.92 0 011.09 1.675c.174.46.358 1.26.414 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.414 2.43a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.46.174-1.26.358-2.43.414-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.414a4.92 4.92 0 01-1.675-1.09 4.92 4.92 0 01-1.09-1.675c-.174-.46-.358-1.26-.414-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.414-2.43a4.92 4.92 0 011.09-1.675 4.92 4.92 0 011.675-1.09c.46-.174 1.26-.358 2.43-.414C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.777.128 4.695.308 3.78.637a6.919 6.919 0 00-2.5 1.647A6.919 6.919 0 00.637 4.78c-.33.915-.509 1.997-.567 3.272C.012 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.948.058 1.275.237 2.357.567 3.272a6.919 6.919 0 001.647 2.5 6.919 6.919 0 002.5 1.647c.915.33 1.997.509 3.272.567C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.275-.058 2.357-.237 3.272-.567a6.919 6.919 0 002.5-1.647 6.919 6.919 0 001.647-2.5c.33-.915.509-1.997.567-3.272.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.058-1.275-.237-2.357-.567-3.272a6.919 6.919 0 00-1.647-2.5 6.919 6.919 0 00-2.5-1.647c-.915-.33-1.997-.509-3.272-.567C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
        </svg>
      </a>

      {/* Copyright centralizado */}
      <p className="text-sm text-gray-300 text-center md:text-left md:mx-auto">
        &copy; {new Date().getFullYear()} ARES TECNOLOGIA. Todos os direitos reservados.
      </p>

      {/* Espaço para redes sociais à direita (opcional) */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        {/* Adicione outros ícones aqui se quiser */}
      </div>
    </footer>
  );
}
