import { useState } from 'react'
import ButtonBorder from './ButtonBorder';

// Definir provincias con el tipo string[]
const provinces: string[] = [
    "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", 
    "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", 
    "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", 
    "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"
];


export default function Search() {
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        setSuggestions(
            provinces.filter(province =>
                province.toLowerCase().startsWith(value.toLowerCase())
            )
        );
    };

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        setSuggestions([]);
    };

  return (
    <div className="absolute inset-x-0  mx-auto max-w-4xl bg-gray-100/90 rounded-md shadow-lg p-2 sm:p-3 bottom-1/2 lg:bottom-1/3 w-full z-0 ">
        {/* Buscador de rooms */}
        <div className="max-w-7xl mx-auto p-1">
        <form action="#" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-end">
            <div className="col-span-1">
                <label htmlFor="Location" className="block text-sm font-medium text-gray-700">
                Location
                </label>
                <input
                    type="text"
                    id="Location"
                    placeholder="Search for provinces..."
                    name="location"
                    value={query}
                    onChange={handleChange}
                    className="mt-1 w-full py-2 px-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {suggestions.length > 0 && (
                    <ul className="absolute bg-white border border-gray-200 mt-1 w-60 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="col-span-1 grid grid-cols-2 gap-2">
            <div>
                <label htmlFor="checkin_date" className="block text-sm font-medium text-gray-700">
                Check-in 
                </label>
                <input
                type="date"
                id="checkin_date"
                name="checkin_date"
                className="mt-1 w-full py-2 px-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
            </div>

            <div>
                <label htmlFor="checkout_date" className="block text-sm font-medium text-gray-700">
                Check-out
                </label>
                <input
                type="date"
                id="checkout_date"
                name="checkout_date"
                className="mt-1 w-full py-2 px-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
            </div>
            </div>
            <div className="col-span-2 flex items-end justify-between">
            <div className="relative w-full">
                <label htmlFor="guests_rooms" className="block text-sm font-medium text-gray-700">
                Guests and Rooms
                </label>
                <button
                type="button"
                onClick={handleToggle}
                className="mt-1 w-90 py-2 px-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm flex justify-between items-center"
                >
                <span>{`${adults} Adults, ${children} Children, ${rooms} Rooms`}</span>
                <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                </button>
                {isOpen && (
                <div className="absolute z-10 mt-2 w-full py-2 rounded-md border border-gray-300 bg-white shadow-lg">
                    <div className="p-2">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-600">Adults</span>
                        <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                            type="button"
                            onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        >
                            -
                        </button>
                        <span className="px-4 py-2">{adults}</span>
                        <button
                            type="button"
                            onClick={() => setAdults(adults + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        >
                            +
                        </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-600">Children</span>
                        <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                            type="button"
                            onClick={() => setChildren(children > 0 ? children - 1 : 0)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        >
                            -
                        </button>
                        <span className="px-4 py-2">{children}</span>
                        <button
                            type="button"
                            onClick={() => setChildren(children + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        >
                            +
                        </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-600">Rooms</span>
                        <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                            type="button"
                            onClick={() => setRooms(rooms > 1 ? rooms - 1 : 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        >
                            -
                        </button>
                        <span className="px-4 py-2">{rooms}</span>
                        <button
                            type="button"
                            onClick={() => setRooms(rooms + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        >
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                )}
            </div>
            <ButtonBorder content='Search'/>
            </div>        
            </form>        

            

            {/* Filtros 
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
            </div>*/}
        </div>
        </div>


  )
}
