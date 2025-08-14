// Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 flex flex-col items-center justify-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.</p>
      <div className="mt-2 flex space-x-4">
        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
          aria-label="Facebook"
        >
          Facebook
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
          aria-label="Twitter"
        >
          Twitter
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

