import React, { useEffect, useState } from 'react'
import ButtonGroup from '../../Buttons/ButtonGroup'
import { fetchRooms, RoomDTO } from '../../../services/roomService';
import { IoAddOutline } from 'react-icons/io5';
import RoomFormAdd from '../Forms/RoomFormAdd';
import RoomFormEdit from '../Forms/RoomFormEdit';

export default function RoomSection() {
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [selectedRoomId, setselectedRoomId] = useState<number | null>(null);
  const [rooms, setRooms] = useState<RoomDTO[]>([]);

  const openEditModal = (hotelId: number) => {
    setselectedRoomId(hotelId);
    setIsModalOpenEdit(true);
  };

  const closeEditModal = () => {
    setIsModalOpenEdit(false);
    setselectedRoomId(null);
  };

  const openAddModal = () => {
    setIsModalOpenAdd(true);
  };

  const closeAddModal = () => {
    setIsModalOpenAdd(false);
  };

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
      {/* Header and Button */}
      <header className="flex items-center justify-between p-4 border-b">
        <h2 className="text-2xl font-bold text-gray-500 capitalize">Rooms</h2>
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
              <td className="px-6 py-4 whitespace-nowrap">{room.id}</td>
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
              <td className="px-6 py-4 whitespace-nowrap">
                <ButtonGroup 
                        onClick2={() => openEditModal(room.id)}
                        onClick3={() => console.log('Button 3 clicked')}/>
              </td>
            </tr>
            ))}
        </tbody>
      </table>
       {/* Modals */}
       {isModalOpenEdit && selectedRoomId && (
        <RoomFormEdit
          isOpen={isModalOpenEdit}
          closeModal={closeEditModal}
          roomId={selectedRoomId}
        />
      )}
      {isModalOpenAdd && (
        <RoomFormAdd
          isOpen={isModalOpenAdd}
          closeModal={closeAddModal}
        />
      )}
    </div>
  )
}
