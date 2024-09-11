import React from 'react'

// CardSlider.tsx
interface CardProps {
    place: {
        id: number;
        image: string;
        province: string;
        availability: number;
      };
    visibleCount: number;
  }

  
export default function CardPlace({ place, visibleCount }: CardProps) {
  return (
            <a
            href="https://www.booking.com/index.es-ar.html"
            key={place.id}
            className={`w-${Math.floor(100 / visibleCount)}% p-5`}
        >
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
  )
}
