import React, { useState } from 'react'


interface Filters {
  roomTypes: {
    Single: boolean
    Double: boolean
    Suite: boolean
  }
  priceRange: [number, number]
  dateRange: {
    checkIn: string
    checkOut: string
  }
  availability: boolean
  province: string
}

interface SideBarFilterProps {
  onFilterChange: (filters: Filters) => void
}


export default function SideBarFilter({ onFilterChange }: SideBarFilterProps){
  const [filters, setFilters] = useState<Filters>({
    roomTypes: {
      Single: false,
      Double: false,
      Suite: false,
    },
    priceRange: [0, 500], // Asegúrate de que sea un tupla de [number, number]
    dateRange: {
      checkIn: '',
      checkOut: '',
    },
    availability: false,
    province: '',
  })
   // Tipar category como keyof Filters y value según corresponda
   const handleFilterChange = (category: keyof Filters, value: Filters[keyof Filters]) => {
    const updatedFilters = { ...filters, [category]: value }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  // Tipar roomType como keyof Filters['roomTypes']
  const handleRoomTypeChange = (roomType: keyof Filters['roomTypes']) => {
    const updatedRoomTypes = { ...filters.roomTypes, [roomType]: !filters.roomTypes[roomType] }
    handleFilterChange('roomTypes', updatedRoomTypes)
  }

  const provinces = [
    "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos",
    "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro",
    "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero",
    "Tierra del Fuego", "Tucumán"
  ];

  return (
    
    <aside className="w-full md:w-64 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-5 flex items-center">
        Filters
      </h2>
      {/* Room Type Filter */}
      <details className="mb-4" open>
        <summary className="font-semibold mb-2 cursor-pointer">Room Type</summary>
        <div className="space-y-2 pl-4">
          {Object.entries(filters.roomTypes).map(([type, checked]) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleRoomTypeChange(type as keyof Filters['roomTypes'])}
                className="form-checkbox"
              />
              <span className="capitalize">{type.replace(/([A-Z])/g, ' $1').trim()}</span>
            </label>
          ))}
        </div>
      </details>

      {/* Price Range Filter */}
      <details className="mb-4">
        <summary className="font-semibold mb-2 cursor-pointer flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="mr-2 bi bi-currency-dollar" viewBox="0 0 16 16">
          <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
        </svg>
          Price Range
        </summary>
        <div className="space-y-2 pl-4">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={filters.priceRange[1]}
            onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </details>

      {/* Date Range Filter */}
      <details className="mb-4">
        <summary className="font-semibold mb-2 cursor-pointer flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="mr-2 bi bi-calendar-event" viewBox="0 0 16 16">
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
          </svg>
          Date Range
        </summary>
        <div className="space-y-2 pl-4">
          <label className="block">
            Check-in:
            <input
              type="date"
              value={filters.dateRange.checkIn}
              onChange={(e) => handleFilterChange('dateRange', { ...filters.dateRange, checkIn: e.target.value })}
              className="w-full mt-1 p-1 border rounded"
            />
          </label>
          <label className="block">
            Check-out:
            <input
              type="date"
              value={filters.dateRange.checkOut}
              onChange={(e) => handleFilterChange('dateRange', { ...filters.dateRange, checkOut: e.target.value })}
              className="w-full mt-1 p-1 border rounded"
            />
          </label>
        </div>
      </details>

      {/* Availability Filter */}
      <details className="mb-4">
        <summary className="font-semibold mb-2 cursor-pointer flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="mr-2 bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
          </svg>
          Availability
        </summary>
        <div className="pl-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.availability}
              onChange={(e) => handleFilterChange('availability', e.target.checked)}
              className="form-checkbox"
            />
            <span>Show only available rooms</span>
          </label>
        </div>
      </details>

      {/* Province Filter */}
      <details className="mb-4">
        <summary className="font-semibold mb-2 cursor-pointer flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="mr-2 bi bi-geo" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
          </svg>
          Province
        </summary>
        <div className="pl-4">
          <select
            value={filters.province}
            onChange={(e) => handleFilterChange('province', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">All Provinces</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
      </details>
    </aside>
  )
}
