import { useState } from 'react'
import CardSlider from './CardSlider'

const cards = [
  {
    id: 1,
    title: 'Hotel 1',
    price: '$399',
    location: 'New York, NY',
    description: 'Luxurious hotel with stunning views and world-class amenities.',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/244761737.jpg?k=40131134630aaed754b1e29f45795895f5f9c20f05b748416d40571132c38342&o=&hp=1'
  },
  {
    id: 2,
    title: 'Hotel 2',
    price: '$299',
    location: 'Los Angeles, CA',
    description: 'Comfortable stay with great amenities and city views.',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/244761737.jpg?k=40131134630aaed754b1e29f45795895f5f9c20f05b748416d40571132c38342&o=&hp=1'
  },
  {
    id: 3,
    title: 'Hotel 3',
    price: '$199',
    location: 'Miami, FL',
    description: 'Cozy and affordable with a beach view.',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/244761737.jpg?k=40131134630aaed754b1e29f45795895f5f9c20f05b748416d40571132c38342&o=&hp=1'
  },
  {
    id: 4,
    title: 'Hotel 4',
    price: '$499',
    location: 'San Francisco, CA',
    description: 'Elegant hotel with top-notch service and cityscape.',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/244761737.jpg?k=40131134630aaed754b1e29f45795895f5f9c20f05b748416d40571132c38342&o=&hp=1'
  },
  {
    id: 5,
    title: 'Hotel 5',
    price: '$399',
    location: 'Las Vegas, NV',
    description: 'Luxury hotel with entertainment and dining options.',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/244761737.jpg?k=40131134630aaed754b1e29f45795895f5f9c20f05b748416d40571132c38342&o=&hp=1'
  },
  {
    id: 6,
    title: 'Hotel 6',
    price: '$699',
    location: 'Texas, USA',
    description: 'Luxury hotel with entertainment and dining options.',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/244761737.jpg?k=40131134630aaed754b1e29f45795895f5f9c20f05b748416d40571132c38342&o=&hp=1'
  },
];

export default function SliderHotels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  /*const itemsToShow = window.innerWidth < 768 ? 1 : 3; // Muestra una tarjeta en dispositivos móviles y dos en pantallas grandes
  
  // Función para ir al siguiente conjunto de productos
  const goToNext = () => {
    if (currentIndex < cards.length - 2) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  // Función para ir al conjunto de productos anterior
  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };
   // Ajusta el estilo del contenedor y los productos
  const containerStyle = {
    transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
    transition: 'transform 0.5s ease-in-out',
  };
  */

  const handlePrev = () => {
    setCurrentIndex((prevIndex:number) =>
      prevIndex === 0 ? cards.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex:number) =>
      prevIndex === cards.length - 4 ? 0 : prevIndex + 1
    );
  };
  
 
  const visibleCards = cards.slice(currentIndex, currentIndex + 4);
  return (
    
      <div className="relative bg-gray-100 p-6 ">
        {/* Título */}
        <div className="text-center mb-6 mt-5">
          <h1 className="text-2xl font-bold text-gray-800 md:text-4xl">
            ¿Buscas el alojamiento perfecto?
          </h1>
        </div>
        {/* Slider */}
        <div className="overflow-hidden flex flex-col items-center justify-center">
          <div className="flex space-x-4 " >
            {visibleCards.map((card, index) => (
              <div key={index} className="w-64" >
              <CardSlider
                  title={card.title}
                  price={card.price}
                  location={card.location}
                  description={card.description} imageUrl={'https://cf.bstatic.com/xdata/images/hotel/max1024x768/244761737.jpg?k=40131134630aaed754b1e29f45795895f5f9c20f05b748416d40571132c38342&o=&hp=1'}              />
              </div>
            ))}
          </div>
        </div>

       
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 focus:outline-none absolute left-2 md:left-2 lg:left-80 top-1/2 transform -translate-y-1/2 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path d="M3.86 8.753l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592a1 1 0 0 1-1.658.753l-5.48-4.796a1 1 0 0 1 0-1.506z"/>
            </svg>
          </button>

        {/* Next Button */}
        <button
           onClick={handleNext}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 focus:outline-none absolute right-2 md:right-2 lg:right-80 top-1/2 transform -translate-y-1/2 z-10"
        > 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </button>
      </div>
    )
}
