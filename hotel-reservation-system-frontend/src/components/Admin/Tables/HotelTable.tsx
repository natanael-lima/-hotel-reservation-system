import React, { useEffect, useState } from 'react';
import { fetchHotels, HotelDTO } from '../../../services/hotelService';
import ButtonGroup from '../../Buttons/ButtonGroup';
import HotelFormEdit from '../Forms/HotelFormEdit';
import HotelFormAdd from "../Forms/HotelFormAdd";
import { IoAddOutline } from "react-icons/io5";

export default function Dashboard() {
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState<number | null>(null);
  const [hotels, setHotels] = useState<HotelDTO[]>([]);

  const openEditModal = (hotelId: number) => {
    setSelectedHotelId(hotelId);
    setIsModalOpenEdit(true);
  };

  const closeEditModal = () => {
    setIsModalOpenEdit(false);
    setSelectedHotelId(null);
  };


  const openAddModal = () => {
    setIsModalOpenAdd(true);
  };

  const closeAddModal = () => {
    setIsModalOpenAdd(false);
  };

  useEffect(() => {
    async function loadHotels() {
      try {
        const data = await fetchHotels();
        setHotels(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    }

    loadHotels();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Header and Button */}
      <header className="flex items-center justify-between p-4 border-b">
        <h2 className="text-2xl font-bold text-gray-500 capitalize">Hotels</h2>
        <button
          className="
            flex items-center gap-2
            rounded-md border border-green-300
            bg-green-200 px-4 py-2
            text-green-800 font-semibold
            hover:bg-green-300 hover:border-green-400
            focus:outline-none focus:ring-2 focus:ring-green-400
            transition duration-200 ease-in-out
          "
          onClick={openAddModal}
        >
          <IoAddOutline className="text-xl" />
          Add New
        </button>
      </header>

      {/* Table */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rooms</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reviews</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <td className="px-6 py-4 whitespace-nowrap">{hotel.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{hotel.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{hotel.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{hotel.description}</td>
              <td className="px-6 py-4 whitespace-nowrap"><span>{hotel.rating}</span></td>
              <td className="px-6 py-4 whitespace-nowrap">{hotel.id} Rooms</td>
              <td className="px-6 py-4 whitespace-nowrap">{hotel.id} Reviews</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <ButtonGroup
                  onClick2={() => openEditModal(hotel.id)}
                  onClick3={() => console.log('Button 3 clicked')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modals */}
      {isModalOpenEdit && selectedHotelId && (
        <HotelFormEdit
          isOpen={isModalOpenEdit}
          closeModal={closeEditModal}
          hotelId={selectedHotelId}
        />
      )}
      {isModalOpenAdd && (
        <HotelFormAdd
          isOpen={isModalOpenAdd}
          closeModal={closeAddModal}
        />
      )}
    </div>
  );
}
/*const hotelss = [
  {
    id: 1,
    name: 'Hotel Grand',
    location: 'New York',
    description: 'A luxurious stay in the heart of the city.',
    rating: 4.5,
    roomIds: [101, 102, 103],
    reviews: [{ id: 1, content: 'Great stay!' }, { id: 2, content: 'Very comfortable.' }]
  },
  {
    id: 2,
    name: 'Ocean View Inn',
    location: 'California',
    description: 'Beautiful views and excellent service.',
    rating: 4.2,
    roomIds: [201, 202],
    reviews: [{ id: 3, content: 'Fantastic views!' }]
  }
];*/