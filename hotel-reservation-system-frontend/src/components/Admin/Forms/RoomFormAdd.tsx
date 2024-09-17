import React, { useState } from 'react'
import { RoomDTO, createRoom } from '../../../services/roomService';

interface RoomFormAddProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function RoomFormAdd({ isOpen,closeModal}:RoomFormAddProps) {
  const [room, setRoom] = useState<Partial<RoomDTO>>({
    roomNumber: '',
    type: '',
    pricePerNight: 0,
    availability: true,
    description: '',
    capacity: 0,
    image: '',
    amenities: [],
    hotelId: 0,  // Opcional
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRoom({
      ...room,
      [name]: name === 'pricePerNight' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async () => {
    try {
      await createRoom(room);
      closeModal(); // Close the modal after creating
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/4">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Room</h2>
        {/* Form fields for adding new room */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Room Number</label>
          <input
            type="text"
            name="roomNumber"
            value={room.roomNumber || ''}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter room number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <input
            type="text"
            name="type"
            value={room.type || ''}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter room type"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price Per Night</label>
          <input
            type="text"
            name="pricePerNight"
            value={room.pricePerNight || ''}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter price per night"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Availability</label>
          <select
            name="availability"
            value={room.availability ? 'true' : 'false'}
            onChange={(e) => setRoom({ ...room, availability: e.target.value === 'true' })}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={room.description || ''}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter room description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Capacity</label>
          <input
            type="number"
            name="capacity"
            value={room.capacity || ''}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter room capacity"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={room.image || ''}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter image URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amenities</label>
          <input
            type="text"
            name="amenities"
            value={(room.amenities || []).join(', ')}
            onChange={(e) => setRoom({ ...room, amenities: e.target.value.split(',').map(item => item.trim()) })}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter amenities, separated by commas"
          />
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 flex justify-end">
        <button
          onClick={closeModal}
          className="mr-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Room
        </button>
      </div>
    </div>
  </div>
  );
}