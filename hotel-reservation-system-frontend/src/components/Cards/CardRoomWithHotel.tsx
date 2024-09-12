import React from 'react'
import { Link } from 'react-router-dom';

// CardSlider.tsx
interface CardProps {
    name: string;
    location: string;
    description: string;
    rating: number;
    price: number;
    imageUrl: string;
}
  
export default function CardHotelSlider({ name, price, location, imageUrl,rating }: CardProps) {
 

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md">
       <Link to="/productDetail">
        <img
            src={imageUrl}
            alt="Hotel Image"
            className="object-cover rounded-t-lg aspect-[2/2] w-full"/>
            
        <div className="p-4 space-y-4">
            <div className="flex items-center">
            <h3 className="text-lg font-semibold text-black">{name}</h3>
                <span
                  className="gap-1 ml-1 text-sm font-semibold inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg>

                  <p className="text-sm">{rating}</p>
                </span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="w-4 h-4 text-gray-500 bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
            <span  >{location}</span>
            </div>
            <div className="text-sm text-gray-500">Desde <strong className="font-bold text-black">$ {price} </strong> 
            </div>
        </div>
        </Link>
    </div>
  )
}
