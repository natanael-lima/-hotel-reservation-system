import { useEffect, useState } from 'react'

import SideBarFilter from '../components/Sidebars/SidebarFilter'
import Header from '../components/Layouts/Header'
import HeaderBanner from '../components/Layouts/HeaderBanner'
import CardRoom from '../components/Cards/CardRoom'
import { fetchRooms, RoomDTO } from '../services/roomService'
import { fetchHotelById, HotelDTO } from '../services/hotelService'


export interface RoomWithHotel extends RoomDTO {
  hotel: HotelDTO;
}

export default function Product() {
  //nueva version con datos reales de la base de datos
  const [roomsWithHotels, setRoomsWithHotels] = useState<RoomWithHotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    roomTypes: {
      Single: false,
      Double: false,
      Suite: false,
    },
    priceRange: [0, 500],
    dateRange: {
      checkIn: '',
      checkOut: '',
    },
    availability: false,
    province: '',
  })

  useEffect(() => {
    async function loadRoomsAndHotels() {
      try {
        setLoading(true);
        const rooms = await fetchRooms();
        
        const roomsWithHotelsPromises = rooms.map(async (room) => {
          if (room.hotelId) {
            const hotel = await fetchHotelById(room.hotelId);
            return { ...room, hotel } as RoomWithHotel;
          }
          return null; // Ignoramos las habitaciones sin hotelId
        });

        const roomsWithHotelsResult = (await Promise.all(roomsWithHotelsPromises)).filter((room): room is RoomWithHotel => room !== null);
        setRoomsWithHotels(roomsWithHotelsResult);
      } catch (err) {
        setError('Error fetching rooms and hotels');
        console.error('Error fetching rooms and hotels:', err);
      } finally {
        setLoading(false);
      }
    }

    loadRoomsAndHotels();
  }, []);

  const filteredRooms = roomsWithHotels.filter(room => 
    (Object.entries(filters.roomTypes).some(([type, checked]) => checked && room.type === type) || 
     Object.values(filters.roomTypes).every(value => !value)) &&
    room.pricePerNight <= filters.priceRange[1] &&
    (!filters.availability || room.availability) &&
    (!filters.province || room.hotel.province === filters.province)
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
        <Header />
        <HeaderBanner/>
        <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-2'>
          {/* Columna de Filtros */}
          <aside className=" lg:sticky top-0 w-full md:w-1/1 p-6 bg-white shadow-sm lg:h-screen overflow-y-auto rounded-lg">
              {/* Aquí va tu contenido del sidebar */}
              <SideBarFilter onFilterChange={setFilters} />
          </aside>
          {/* Columna de Rooms */}
          <div className="h rounded-lg lg:col-span-2">
            <main className="flex-1 p-1 ">
                <section className="container mx-auto max-w-screen-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-10">
                  {filteredRooms.map(room => (
                  <CardRoom 
                    key={room.id} 
                    room={{
                      id: room.id,
                      roomNumber: room.roomNumber,
                      type: room.type,
                      pricePerNight: room.pricePerNight,
                      availability: room.availability,
                      description: room.description,
                      capacity: room.capacity,
                      image: room.image,
                      amenities: room.amenities,
                      hotelId: room.hotelId,
                      hotel: room.hotel
                    }} 
                  />
                ))}
                  </div>
                </section>
              </main>
          </div>
        </main>
    </div>
  )
}
