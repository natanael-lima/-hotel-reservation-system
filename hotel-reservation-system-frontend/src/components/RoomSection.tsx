import React from 'react'
import ButtonGroup from './ButtonGroup'

export default function RoomSection() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Per Night</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[
            { number: '101', type: 'Single', capacity: 1, price: '$100', status: 'Available' },
            { number: '102', type: 'Double', capacity: 2, price: '$150', status: 'Occupied' },
            { number: '103', type: 'Suite', capacity: 4, price: '$300', status: 'Maintenance' },
          ].map((room) => (
            <tr key={room.number}>
              <td className="px-6 py-4 whitespace-nowrap">{room.number}</td>
              <td className="px-6 py-4 whitespace-nowrap">{room.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{room.capacity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{room.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  room.status === 'Available' ? 'bg-green-100 text-green-800' :
                  room.status === 'Occupied' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {room.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap"><ButtonGroup/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
