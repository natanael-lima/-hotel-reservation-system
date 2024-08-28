import React from 'react'
import { Link } from 'react-router-dom';

// CardSlider.tsx
interface CardProps {
    title: string;
    price: string;
    location: string;
    description: string;
    imageUrl: string;
  }

export default function CardHotelSlider({ title, price, location, imageUrl }: CardProps) {
 

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md">
       <Link to="/productDetail">
        <img
            src={imageUrl}
            alt="Hotel Image"
            className="object-cover rounded-t-lg aspect-[2/2] w-full"/>
        <div className="p-4 space-y-4">
            <div className="flex items-center">
            <h3 className="text-lg font-semibold text-black">{title}</h3>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="w-4 h-4 text-gray-500 bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
            <span  >{location}</span>
            </div>
            <div className="text-sm text-gray-500">Desde <strong className="font-bold text-black"> {price} </strong> 
            </div>
        </div>
        </Link>
    </div>
  )
}
