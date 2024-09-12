import { useState } from 'react'
import { FiChevronUp,FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom';


// Definir provincias con el tipo string[]
const provinces: string[] = [
    "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", 
    "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", 
    "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", 
    "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"
];


export default function Search() {
    const [capacities, setCapacities] = useState(2);
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
    <div className="relative lg:absolute inset-x-0 mx-auto max-w-4xl bg-white/90 rounded-md shadow-lg p-2 sm:p-3 lg:bottom-1/3 w-full z-0 lg:z-0 border lg:border-none">
        {/* Buscador de rooms */}
        <div className="max-w-4xl mx-auto p-1">
            <form action="#" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 items-end">
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
                        className="mt-1 w-full py-2 px-4 rounded-md border-gray-200 bg-gray-200/50 lg:bg-white text-sm text-gray-700 shadow-sm"
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
                <div className="col-span-2 grid grid-cols-2 gap-2">
                    <div>
                        <label htmlFor="checkin_date" className="block text-sm font-medium text-gray-700">
                        Check-in 
                        </label>
                        <input
                        type="date"
                        id="checkin_date"
                        name="checkin_date"
                        className="mt-1 w-full py-2 px-4 rounded-md border-gray-200  bg-gray-200/50 lg:bg-white text-sm text-gray-700 shadow-sm"
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
                        className="mt-1 w-full py-2 px-4 rounded-md border-gray-200  bg-gray-200/50 lg:bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>
                </div>
                <div className="col-span-2 flex items-end justify-between">
                <div className="relative w-full">
                    <label htmlFor="guests_rooms" className="block text-sm font-medium text-gray-700">
                    Guests
                    </label>
                    <button
                    type="button"
                    onClick={handleToggle}
                    className="mt-1 w-90 py-2 px-4 rounded-md border-gray-200 bg-gray-200/50 lg:bg-white text-sm text-gray-700 shadow-sm flex justify-between items-center"
                    >
                    <span>{`${capacities} Capacity`}</span>
                        {isOpen ? (
                            <FiChevronUp className="ml-1 h-5 w-5 text-gray-400 transition-transform duration-200" />
                        ) : (
                            <FiChevronDown className="ml-1 h-5 w-5 text-gray-400 transition-transform duration-200" />
                        )}
                    </button>
                    {isOpen && (
                    <div className="absolute z-10 mt-2 w-full py-2 rounded-md border border-gray-300 bg-white shadow-lg">
                        <div className="p-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-medium text-gray-600">Capacity</span>
                            <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                                type="button"
                                onClick={() => setCapacities(capacities > 1 ? capacities - 1 : 1)}
                                className="w-4 h-4 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                            >
                                -
                            </button>
                            <span className="px-4 py-2">{capacities}</span>
                            <button
                                type="button"
                                onClick={() => setCapacities(capacities + 1)}
                                className="w-4 h-4 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                            >
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    )}
                </div>
                    <Link to="/rooms" className="shrink-0 rounded-md border border-orange-600 bg-orange-600 px-20 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring focus:ring-orange-400 active:text-orange-800">
                        Search
                    </Link>
                </div>        
            </form>           
        </div>
    </div>
  )
}
