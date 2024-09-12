import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Buttons/Button'
import ButtonSecondary from '../Buttons/ButtonSecondary';

// CardSlider.tsx
interface CardProps {
  name: string;
  location: string;
  province: string;
  rating: number;
  type: string;
  price: number;
  imageUrl: string;
  available:boolean;
}

type CardRoomProps = {
    room: CardProps
}
  
export default function CardProduct({ room }: CardRoomProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md group hover:shadow-xl transition-transform duration-300 ease-in-out bg-white">
        <img
            src={room.imageUrl}
            alt="Hotel Name"
            width={500}
            height={400}
            className="object-cover w-full h-64"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-black">{room.type} Room</h3>
                <div className="text-2xl font-bold text-black">${room.price}/night</div>
            </div>
                <p className={`text-sm ${room.available ? 'text-green-600' : 'text-red-600'} mb-2`}>
                    {room.available ? 'Available' : 'Not Available'}
                </p>
            <div className="flex items-center gap-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-gray-500 bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <span>{room.province}</span>
            </div>
            <div className="mt-4 md:mt-8 ">
                <Link to="/roomDetail" >
                  <Button content="Book now" className={'inline-block w-50 px-12 py-3 text-center mr-2'}/>
                </Link>
                <Link to="/roomDetail" >
                  <ButtonSecondary content="More details" className={'inline-block w-50 px-12 py-3 text-center mt-2'}/>
                </Link>
            </div>
        </div>            
    </div>
  )
}
