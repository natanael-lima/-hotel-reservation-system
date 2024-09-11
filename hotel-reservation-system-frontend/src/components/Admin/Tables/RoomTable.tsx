import React, { useEffect, useState } from 'react'
import ButtonGroup from '../../Buttons/ButtonGroup'
import { fetchRooms, RoomDTO } from '../../../services/roomService';

export default function RoomSection() {
  const [rooms, setRooms] = useState<RoomDTO[]>([]);
  useEffect(() => {
    async function loadRooms() {
      try {
        const data = await fetchRooms();
        setRooms(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    }

    loadRooms();
  }, []);

  if (!rooms) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <h2 className="block sm:hidden text-2xl font-bold text-gray-500 capitalize p-4 border">Rooms</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Per Night</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HotelId</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          
          {rooms.map((room) => (
            <tr key={room.id}>
              <td className="px-6 py-4 whitespace-nowrap">{room.roomNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{room.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">$ {room.pricePerNight}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  room.availability 
                    ? 'bg-green-100 text-green-800'  // Estilo para disponible
                    : 'bg-red-100 text-red-800'     // Estilo para ocupado
                }`}>
                  {room.availability ? 'Available' : 'Occupied'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{room.capacity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{room.hotelId}</td>
              <td className="px-6 py-4 whitespace-nowrap"><ButtonGroup/></td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
