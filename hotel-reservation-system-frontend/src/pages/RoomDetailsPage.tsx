import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Layouts/Header'
import HeaderBanner from '../components/Layouts/HeaderBanner'
import Button from '../components/Buttons/Button'
import { getRoomById, RoomDTO } from '../services/roomService';
import { fetchHotelById, HotelDTO } from '../services/hotelService';
import { FaBath, FaMapMarkerAlt, FaSnowflake, FaStar, FaTv, FaWifi } from 'react-icons/fa';
import ConfirmBookingModal from '../components/Modals/ConfirmBookingModal';

export default function RoomDetails() {
  const { id } = useParams<{ id: string }>(); // Obtén el id de los parámetros de la URL
  const [room, setRoom] = useState<RoomDTO | null>(null);
  const [hotel, setHotel] = useState<HotelDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  useEffect(() => {
    if (!id) return;

    const fetchDetails = async () => {
      try {
        const roomId = parseInt(id, 10);
        if (isNaN(roomId)) {
          setError('Invalid room ID.');
          return;
        }
        
        // Obtener detalles de la habitación
        const roomData = await getRoomById(roomId);
        setRoom(roomData);

        // Obtener detalles del hotel
        const hotelData = await fetchHotelById(roomData.hotelId);
        setHotel(hotelData);
      } catch (error) {
        console.error('Error fetching details:', error);
        setError('Failed to fetch room details. Please try again later.');
      }
    };

    fetchDetails();

    // Limpieza del efecto
    return () => {
      setRoom(null);
      setHotel(null);
      setError(null);
    };
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!room || !hotel) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
    <Header />
        <HeaderBanner/>
        <main className="py-12 px-4 sm:px-6 lg:px-8"> 
            <div className="max-w-6xl mx-auto">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="md:flex">
                  {/* Columna de la imagen */}
                  <div className="md:flex-shrink-0"> 
                    <img
                      src={room.image}
                      alt={room.type}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Columna de los datos */}
                  <div className="p-8 flex-1 flex flex-col justify-between"> 
                    <div>
                      <div className="uppercase tracking-wide text-2xl sm:text-3xl text-gray-900 font-bold">
                        {room.type} - Room {room.roomNumber}
                      </div>
                      <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        ${room.pricePerNight} <span className="text-base font-normal text-gray-500">/ night</span>
                      </p>
                      <div className="mt-2 flex items-center">
                        <FaStar className="text-yellow-400" />
                        <span className="ml-1 text-gray-500">{hotel.rating} / 5</span>
                      </div>

                      <div className="mt-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Amenities</h3>
                        <ul className="mt-2 flex flex-wrap gap-4">
                          {room.amenities.map((amenity, index) => (
                            <li key={index} className="flex items-center text-gray-500">
                              {amenity === 'Free WiFi' && <FaWifi className="mr-2" />}
                              {amenity === 'Air Conditioning' && <FaSnowflake className="mr-2" />}
                              {amenity === 'Jacuzzi' && <FaBath className="mr-2" />}
                              {amenity === 'Balcony' && <FaTv className="mr-2" />}
                              {amenity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Disposición en 2 columnas para Location, Province, Capacity, Availability */}
                      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 flex items-center">
                        <div className="sm:col-span-1 mb-4">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            <FaMapMarkerAlt className="inline mr-2" />Location
                          </h3>
                          <p className="mt-1 text-gray-500">{hotel.location}</p>
                        </div>
                        <div className="sm:col-span-1 mb-4">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Province</h3>
                          <p className="mt-1 text-gray-500">{hotel.province}</p>
                        </div>
                        <div className="sm:col-span-1 mb-4">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Capacity</h3>
                          <p className="mt-1 text-gray-500">{room.capacity} Guests</p>
                        </div>
                        <div className="sm:col-span-1 mb-4">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Availability</h3>
                          <p className="mt-1 text-gray-500">
                            {room.availability ? 'Available' : 'Not Available'}
                          </p>
                        </div>
                      </div>

                      {/* Nueva sección para la descripción */}
                      <div className="mb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Description</h3>
                        <p className="mt-1 text-gray-500">{room.description}</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button content="Book now" className="w-full text-center" onClick={openModal} />
                      {/* Render the modal only if it's open */}
                      {isModalOpen && (
                        <ConfirmBookingModal isOpen={isModalOpen} closeModal={closeModal} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>



    </div>
  )
}
