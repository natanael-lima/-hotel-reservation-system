import React, { useState, useEffect } from 'react';
import { RoomDTO, updateRoom, getRoomById } from '../../../services/roomService';

interface RoomFormEditProps {
  isOpen: boolean;
  closeModal: () => void;
  roomId: number; // ID of the room to be edited
}

export default function RoomFormEdit({ isOpen, closeModal, roomId }: RoomFormEditProps) {
  const [room, setRoom] = useState<RoomDTO | null>(null);

  // Fetch room data when the component mounts or roomId changes
  useEffect(() => {
    if (roomId) {
      const fetchRoom = async () => {
        try {
          const fetchedRoom = await getRoomById(roomId);
          setRoom(fetchedRoom);
        } catch (error) {
          console.error('Error fetching room data:', error);
        }
      };

      fetchRoom();
    }
  }, [roomId]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (room) {
      const { name, value } = e.target;
      setRoom({
        ...room,
        [name]: name === 'pricePerNight' ? parseFloat(value) : value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (room) {
      try {
        await updateRoom(roomId,room);
        closeModal(); // Close the modal after updating the room
      } catch (error) {
        console.error('Error updating room:', error);
      }
    }
  };

  if (!isOpen || !room) return null; // Return null if the modal is closed or room data is not loaded

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/3">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Room</h2>
          {/* Form fields for editing room */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Room Number</label>
            <input
              type="text"
              name="roomNumber"
              value={room.roomNumber}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter room number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <input
              type="text"
              name="type"
              value={room.type}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter room type"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price Per Night</label>
            <input
              type="number"
              name="pricePerNight"
              value={room.pricePerNight}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter price per night"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={room.description}
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
              value={room.capacity}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter room capacity"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Availability</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="availability"
                  value="true"
                  checked={room.availability === true}
                  onChange={() => setRoom({ ...room, availability: true })}
                  className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-gray-700">Available</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="availability"
                  value="false"
                  checked={room.availability === false}
                  onChange={() => setRoom({ ...room, availability: false })}
                  className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-gray-700">Unavailable</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              value={room.image}
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
              value={room.amenities.join(', ')}
              onChange={(e) => setRoom({
                ...room,
                amenities: e.target.value.split(',').map(amenity => amenity.trim()),
              })}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter amenities separated by commas"
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
