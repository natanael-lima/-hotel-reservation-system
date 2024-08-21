import React from 'react'
import { Link } from 'react-router-dom'

export default function CardProduct() {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out bg-white">
        <img
            src="https://img.freepik.com/foto-gratis/suite-dormitorio-moderno-clasico-lujo-hotel_105762-1787.jpg"
            alt="Hotel 1"
            width={500}
            height={400}
            className="object-cover w-full h-64"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-black">The Ritz-Carlton, Bali</h3>
                <div className="text-2xl font-bold text-black">$5555</div>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-gray-500 bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <span>Madrid</span>
            </div>
            <div className="mt-4 md:mt-8 ">
                <Link to="/productDetail" className="inline-block w-full text-center rounded-lg bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Ver Disponiblidad
                </Link>
            </div>
        </div>            
    </div>
  )
}
