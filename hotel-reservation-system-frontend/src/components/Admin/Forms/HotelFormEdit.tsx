import React, { useEffect, useState } from 'react';
import { HotelDTO, fetchHotelById, updateHotel } from '../../../services/hotelService'; // Asegúrate de importar correctamente

interface HotelModalProps {
  isOpen: boolean;
  closeModal: () => void;
  hotelId: number; // ID del hotel a editar
}

export default function HotelFormEdit({ isOpen, closeModal, hotelId }: HotelModalProps) {
  const [hotel, setHotel] = useState<HotelDTO | null>(null);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState('');
  const [province, setProvince] = useState('');

  useEffect(() => {
    if (isOpen && hotelId) {
      async function loadHotel() {
        try {
          const data = await fetchHotelById(hotelId);
          setHotel(data);
          setName(data.name || '');
          setLocation(data.location || '');
          setDescription(data.description || '');
          setRating(data.rating || 0);
          setImage(data.image || '');
          setProvince(data.province || '');
        } catch (error) {
          console.error('Error fetching hotel data:', error);
        }
      }

      loadHotel();
    }
  }, [isOpen, hotelId]);

  const handleUpdate = async () => {
    if (hotel) {
      const updatedHotel: HotelDTO = {
        ...hotel,
        name,
        location,
        description,
        rating,
        image,
        province,
      };

      try {
        await updateHotel(hotel.id!, updatedHotel);
        closeModal(); // Cierra el modal después de la actualización.
      } catch (error) {
        console.error('Error updating hotel:', error);
      }
    }
  };

  if (!hotel) {
    return null; // Oculta el modal mientras se cargan los datos.
  }

  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/4">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Hotel</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter hotel name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter location"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter rating"
              min="0"
              max="5"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter image URL"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Province</label>
            <input
              type="text"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter province"
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
            onClick={handleUpdate}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
