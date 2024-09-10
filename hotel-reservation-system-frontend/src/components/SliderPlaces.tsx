import React, { useState } from 'react'

const places = [
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMEQhe2S6knxEYo4uGxPxrrgJRyroPJ6L-g&s', province: 'Buenos Aires', availability: 5 },
    { id: 2, image: 'https://media.traveler.es/photos/61376210c4f3d95786667be3/1:1/w_1114,h_1114,c_limit/198677.jpg', province: 'Córdoba', availability: 3 },
    { id: 3, image: 'https://media.ambito.com/p/0842947a0f7a8828780c4ddab04ad998/adjuntos/239/imagenes/039/854/0039854354/santa-fejpg.jpg', province: 'Santa Fe', availability: 7 },
    { id: 4, image: 'https://sentimendoza.com.ar/medios/Mendoza-1024x687.jpg', province: 'Mendoza', availability: 8 },
    { id: 5, image: 'https://www.rionegro.com.ar/wp-content/uploads/2023/12/salta-turismo-03-1.jpg?w=1200', province: 'Salta', availability: 2 },
    { id: 6, image: 'https://www.civitatis.com/f/argentina/salta/salta-jujuy-tucuman-7-dias-589x392.jpg', province: 'Jujuy', availability: 4 },
    { id: 7, image: 'https://cdn.elterritorio.com.ar/img/11/1/2020101020161000_1.jpg', province: 'Tucumán', availability: 6 },
    { id: 8, image: 'https://www.plataforma10.com.ar/viajes/wp-content/uploads/2023/05/resistencia.webp', province: 'Chaco', availability: 9 },
    { id: 9, image: 'https://vidamoderna.com/wp-content/uploads/2019/03/Argentina-Vida-Moderna.jpg', province: 'Misiones', availability: 3 },
    { id: 10, image: 'https://turismo-en-argentina.com/wp-content/uploads/2023/02/Turismo-en-Neuquen.jpg', province: 'Neuquén', availability: 5 },
  ];
export default function SliderPlace() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
      if (currentIndex < places.length - 6) {
        setCurrentIndex(currentIndex + 1);
      }
    };
    const prevSlide = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
    // Calcular la cantidad de elementos visibles según el tamaño de la pantalla
    const visibleCount = window.innerWidth >= 1024
    ? 6
    : window.innerWidth >= 768
    ? 4
    : 2;

  return (
    <div className="relative w-full overflow-hidden">
        {/* Título */}
        <div className="text-center mb-6 mt-5">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Discover Argentina
          </h1>
        </div>
        {/* Cards */}
      <div className="flex">
        {places.slice(currentIndex, currentIndex + visibleCount).map((place) => (
          <a href='https://www.booking.com/index.es-ar.html' key={place.id} className={`w-${Math.floor(100 / visibleCount)}% p-5`}>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src={place.image}
                alt={place.province}
                className="w-64 h-32 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{place.province}</h3>
                <p className="text-sm text-gray-600">
                  Disponibilidad: {place.availability}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <button
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-200 focus:outline-none absolute border left-0 lg:left-0 top-1/2 transform -translate-y-1/6 z-10"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="M3.86 8.753l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592a1 1 0 0 1-1.658.753l-5.48-4.796a1 1 0 0 1 0-1.506z"/>
              </svg>
      </button>

      <button
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-200 focus:outline-none absolute border right-0 lg:right-0 top-1/2 transform -translate-y-1/6 z-10"
        onClick={nextSlide}
        disabled={currentIndex === places.length - 6}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
      </button>
  </div>
  )
}
