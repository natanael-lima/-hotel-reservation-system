import React from 'react'

export default function Search() {
  return (
    <div className="absolute inset-x-0  mx-auto max-w-4xl bg-gray-100 border rounded-md shadow-lg p-4 sm:p-6 bottom-0 w-full z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Buscador de hoteles */}
            <div className="flex items-center space-x-2">
            <input
                type="text"
                placeholder="Search for hotels..."
                className="flex-1 rounded-full py-2 px-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="rounded-full px-4 py-2 text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                Search
            </button>
            </div>

            {/* Filtros */}
            <div className="flex items-center justify-end space-x-2">
            <div className="relative">
                <button className="rounded-full px-4 py-2 text-sm font-medium bg-white border border-gray-300 flex items-center space-x-2 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                <span>Filters</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 hidden group-hover:block">
                <div className="px-4 py-2 text-gray-700 font-semibold">Filter by:</div>
                <div className="border-t border-gray-300"></div>
                <label className="block px-4 py-2 hover:bg-gray-100">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span>Price</span>
                </label>
                <label className="block px-4 py-2 hover:bg-gray-100">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span>Rating</span>
                </label>
                <label className="block px-4 py-2 hover:bg-gray-100">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span>Amenities</span>
                </label>
                <label className="block px-4 py-2 hover:bg-gray-100">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span>Location</span>
                </label>
                </div>
            </div>
            </div>
        </div>
        </div>


  )
}
