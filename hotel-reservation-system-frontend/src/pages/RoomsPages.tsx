import { useState } from 'react'
import CardRoom from '../components/Cards/CardRoom'
import SideBarFilter from '../components/Sidebars/SideBarFilter'
import Header from '../components/Layouts/Header'
import HeaderBanner from '../components/Layouts/HeaderBanner'



export default function Product() {
  const [filters, setFilters] = useState({
    roomTypes: {
      singleRoom: false,
      doubleRoom: false,
      suite: false,
    },
    priceRange: [0, 500],
    dateRange: {
      checkIn: '',
      checkOut: '',
    },
    availability: false,
    province: '',
  })
  const rooms = [
    { id: 1, type: 'singleRoom', name: 'Cozy Single', price: 80, available: true, province: 'Buenos Aires' },
    { id: 2, type: 'doubleRoom', name: 'Spacious Double', price: 120, available: true, province: 'Córdoba' },
    { id: 3, type: 'suite', name: 'Luxury Suite', price: 200, available: false, province: 'Mendoza' },
    { id: 4, type: 'singleRoom', name: 'Economy Single', price: 70, available: true, province: 'Santa Fe' },
    { id: 5, type: 'doubleRoom', name: 'Family Double', price: 140, available: false, province: 'Tucumán' },
    { id: 6, type: 'suite', name: 'Presidential Suite', price: 300, available: true, province: 'Buenos Aires' },
  ]
  const filteredRooms = rooms.filter(room => 
    (Object.entries(filters.roomTypes).some(([type, checked]) => checked && room.type === type) || 
     Object.values(filters.roomTypes).every(value => !value)) &&
    room.price <= filters.priceRange[1] &&
    (!filters.availability || room.available) &&
    (!filters.province || room.province === filters.province)
  )
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
          <div className="h rounded-lg bg-white shadow-sm  lg:col-span-2">
            <main className="flex-1 p-4 ">
                <section className="container mx-auto max-w-screen-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
                  {filteredRooms.map(room => (
                    <CardRoom key={room.id} room={room} />
                  ))}
                  </div>
                </section>
              </main>
          </div>
        </main>
    </div>
  )
}
