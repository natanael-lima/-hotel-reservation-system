import React, { useState } from 'react';
import { HotelDTO, createHotel } from '../../../services/hotelService';

interface HotelFormAddProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function HotelFormAdd({ isOpen, closeModal }: HotelFormAddProps) {
  const [newHotel, setNewHotel] = useState<HotelDTO>({
    id: 0,
    name: '',
    location: '',
    description: '',
    rating: 0,
    image: '',
    province: '',
    roomIds: [],
    reviews: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewHotel({
      ...newHotel,
      [name]: name === 'rating' ? parseFloat(value) : value,
    });
  };

  const handleAddHotel = async () => {
    try {
      await createHotel(newHotel);
      closeModal(); // Close the modal after adding
    } catch (error) {
      console.error('Error adding hotel:', error);
    }
  };

  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/4">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Hotel</h2>
          {/* Form fields for adding new hotel */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={newHotel.name}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter hotel name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={newHotel.location}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter hotel location"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={newHotel.description}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter hotel description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              value={newHotel.rating}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter hotel rating"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Province</label>
            <input
              type="text"
              name="province"
              value={newHotel.province}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter hotel province"
            />
          </div>
          {/* Add more fields as necessary */}
        </div>
        <div className="px-6 py-4 bg-gray-50 flex justify-end">
          <button
            onClick={closeModal}
            className="mr-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleAddHotel}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add Hotel
          </button>
        </div>
      </div>
    </div>
  );
}