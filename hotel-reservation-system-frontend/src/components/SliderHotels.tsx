import { useState } from 'react'
import CardHotelSlider from './CardHotelSlider'

const cards = [
  {
    id: 1,
    title: 'San Salvador de Jujuy',
    price: '$ 49.921',
    location: '220 West 41st Street',
    description: 'Luxurious hotel with stunning views and world-class amenities.',
    imageUrl: 'https://mediterrani.com/wp-content/uploads/2020/01/Tipos-de-habitaciones-de-un-hotel-2.jpg'
  },
  {
    id: 2,
    title: 'Cordoba',
    price: '$ 179.921',
    location: '220 West 41st Street',
    description: 'Comfortable stay with great amenities and city views.',
    imageUrl: 'https://i.pinimg.com/originals/da/39/ce/da39ceccbd966c17c74c016e311e1ec2.png'
  },
  {
    id: 3,
    title: 'Salta',
    price: '$ 110.221',
    location: '220 West 41st Street',
    description: 'Cozy and affordable with a beach view.',
    imageUrl: 'https://t1.uc.ltmcdn.com/es/posts/1/9/2/guia_de_decoracion_para_habitaciones_de_hoteles_47291_orig.jpg'
  },
  {
    id: 4,
    title: 'Neuquen',
    price: '$ 100.921',
    location: '220 West 41st Street',
    description: 'Elegant hotel with top-notch service and cityscape.',
    imageUrl: 'https://images.mirai.com/INFOROOMS/100376355/gMTRa4gTj2qTSjgroLJ5/gMTRa4gTj2qTSjgroLJ5_large.jpg'
  },
  {
    id: 5,
    title: 'Buenos Aires',
    price: '$ 59.921',
    location: '220 West 41st Street',
    description: 'Luxury hotel with entertainment and dining options.',
    imageUrl: 'https://www.stanzahotel.com/wp-content/uploads/2023/10/habitacion_Doble_1.jpg'
  },
  {
    id: 6,
    title: 'Mendoza',
    price: '$ 80.921',
    location: '220 West 41st Street',
    description: 'Luxury hotel with entertainment and dining options.',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/244761737.jpg?k=40131134630aaed754b1e29f45795895f5f9c20f05b748416d40571132c38342&o=&hp=1'
  },
];

export default function SliderHotels() {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  // Calcular la cantidad de elementos visibles según el tamaño de la pantalla
  const visibleCount = window.innerWidth >= 1024
  ? 4
  : window.innerWidth >= 768
  ? 3
  : 1;
  const visibleCards = cards.slice(currentIndex, currentIndex + visibleCount);

  
  return (
      <div className="relative w-full overflow-hidden p-4">
        {/* Título */}
        <div className="text-center mb-6 mt-2">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Are you looking for the perfect accommodation?
          </h1>
        </div>
        {/* Cards */}
        <div className="overflow-hidden flex flex-col items-center justify-center">
          <div className="flex space-x-4 " >
            {visibleCards.map((card, index) => (
              <div key={index} className="w-90 p-1" >
              <CardHotelSlider
                  title={card.title}
                  price={card.price}
                  location={card.location}
                  description={card.description} imageUrl={card.imageUrl}/>
              </div>
            ))}
          </div>
        </div>

       
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 focus:outline-none absolute left-0 lg:left-0 top-1/2 border transform -translate-y-1/2 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path d="M3.86 8.753l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592a1 1 0 0 1-1.658.753l-5.48-4.796a1 1 0 0 1 0-1.506z"/>
            </svg>
          </button>

        {/* Next Button */}
        <button
           onClick={handleNext}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 focus:outline-none absolute right-0 lg:right-0 top-1/2 transform -translate-y-1/2 z-10"
        > 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </button>
      </div>
    )
}
