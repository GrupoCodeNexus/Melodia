import React, { useState } from 'react';
import '../styles/style.css';

function CarrosselManual() {
  const depoimentos = [
    {
      nome: "Arthur",
      texto: "Este app trouxe tudo que eu precisava sem anúncios e com boa qualidade!",
      cargo: "Empresário da Amazon",
    },
    {
      nome: "Lucas",
      texto: "Comecei a usar com poucas espectativas depois do spotify mas me surpreendi com a qualidade so sistema!",
      cargo: "Gerente da Latam",
    },
    {
      nome: "Giovani",
      texto: "Muito bom!Apenas o melhor sistema do mercado de música atual!",
      cargo: "Empresário do Google",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? depoimentos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === depoimentos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-400 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {depoimentos.map((depoimento, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex justify-center items-center p-5"
          >
            <div className="c-depoimento flex justify-center bg-black">
              <div className="bg-green-900 ring-gradient-verde depoimento border-3 rounded text-white">
                <h3>{depoimento.nome}</h3>
                <p>{depoimento.texto}</p>
                <small>{depoimento.cargo}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="padm5 flex justify-center mt-4 space-x-4 c-depoimento"> {/* Adicionando o espaço entre os botões */}
        <button
          onClick={goToPrevious}
          className="px-6 py-2 bg-green-600 text-white rounded-lg transition duration-300 hover:bg-green-700"
        >
          Anterior
        </button>
        <button
          onClick={goToNext}
          className="px-6 py-2 bg-green-600 text-white rounded-lg transition duration-300 hover:bg-green-700"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}

export default CarrosselManual;
