import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Buttons/Button'
import ButtonSecondary from '../Buttons/ButtonSecondary';
import { GrCapacity, GrLocation } from "react-icons/gr";
import { MdEventAvailable } from "react-icons/md";
import {  } from "react-icons/gr";
import { RoomWithHotel } from '../Sliders/SliderRoomWithHotel';
// CardSlider.tsx


type CardRoomProps = {
    room: RoomWithHotel
}
  
export default function CardProduct({ room }: CardRoomProps) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-orange-700/10 shadow-sm group hover:shadow-xl transition-transform duration-300 ease-in-out bg-white">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
    <figure className="bg-red-200/5">
      <img
        src={room.image}
        alt={`${room.type} Room`}
        className="object-cover w-full h-64 p-3 rounded-lg"
      />
    </figure>
    <section className="col-span-2 bg-blue-200/5">
      <div className="p-4 space-y-6">
        <header className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-black">{room.type} Room</h3>
          <div className="text-3xl font-bold text-black">${room.pricePerNight}/night</div>
        </header>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-500">
            <GrLocation size={20} />
            <span>{room.hotel.location}, {room.hotel.province}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <GrCapacity size={20} />
            <span>Capacity {room.capacity}5</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <MdEventAvailable size={20} />
            <span className={`text-sm ${room.availability ? 'text-green-600/70' : 'text-red-600/70'}`}>
                    {room.availability ? 'Available' : 'Not Available'}
            </span>
          </div>
        </div>
        <footer className="flex items-center justify-between">
          <p className="text-white p-1 rounded-tr-lg bg-teal-600"><span className='text-semibold px-1 text-1xl'>{room.hotel.rating}</span></p>
          <div className="flex space-x-2">
            <Link to="/roomDetail">
              <Button
                    content="Book now"
                    className="inline-block w-50 px-12 py-3 text-center" onClick={function (): void {
                      throw new Error('Function not implemented.');
                    } }              />
            </Link>
            <Link to="/roomDetail">
              <ButtonSecondary
                    content="More details"
                    className="inline-block w-50 px-12 py-3 text-center" onClick={function (): void {
                      throw new Error('Function not implemented.');
                    } }              />
            </Link>
          </div>
        </footer>
      </div>
    </section>
  </div>
</article>

  )
}
