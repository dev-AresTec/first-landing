import { useState, useEffect } from "react";

const images = [
  "/images/pb1.png",
  "/images/pb2.png",
  "/images/pb3.png",
];

export default function VerticalCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black rounded-lg">
      {images.map((src, index) => {
        const position = (index - current + images.length) % images.length;

        let className =
          "absolute rounded-lg shadow-lg object-contain max-w-full max-h-full transition-transform transition-opacity duration-1000 ease-in-out";

        if (position === 0) {
          // imagem central - menor que antes
          className +=
            " z-30 scale-[0.9] opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-[0.95] hover:shadow-2xl hover:brightness-110 bg-black";
        } else if (position === images.length - 1) {
          // imagem anterior - menor que antes
          className +=
            " z-10 scale-50 opacity-70 top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-sm shadow-md";
        } else if (position === 1) {
          // imagem próxima - menor que antes
          className +=
            " z-10 scale-50 opacity-70 top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-sm shadow-md";
        } else {
          // invisível
          className += " opacity-0 scale-75 pointer-events-none";
        }

        return (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index}`}
            className={className}
          />
        );
      })}
    </div>
  );
}
