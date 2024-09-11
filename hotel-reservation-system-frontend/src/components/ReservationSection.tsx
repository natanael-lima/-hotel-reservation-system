import React from 'react';

export default function ReservationSection() {
  const reservations = [
    {
      id: 1,
      startDate: '2024-09-10T14:00:00',
      endDate: '2024-09-12T12:00:00',
      status: 'Confirmed',
      createdAt: '2024-09-01T09:00:00',
      userId: 101,
      roomId: 1,
      payments: [{ id: 1, amount: 300, date: '2024-09-02T10:00:00' }]
    },
    {
      id: 2,
      startDate: '2024-09-15T14:00:00',
      endDate: '2024-09-18T12:00:00',
      status: 'Pending',
      createdAt: '2024-09-05T10:00:00',
      userId: 102,
      roomId: 2,
      payments: [{ id: 2, amount: 450, date: '2024-09-06T11:00:00' }]
    },
    {
      id: 3,
      startDate: '2024-09-20T14:00:00',
      endDate: '2024-09-22T12:00:00',
      status: 'Cancelled',
      createdAt: '2024-09-10T12:00:00',
      userId: 103,
      roomId: 3,
      payments: []
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <h2 className="block sm:hidden text-2xl font-bold text-gray-500 capitalize p-4 border">Reservations</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reservation ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td className="px-6 py-4 whitespace-nowrap">{reservation.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{reservation.startDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{reservation.endDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  reservation.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                  reservation.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {reservation.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{reservation.userId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{reservation.roomId}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {reservation.payments.length > 0 ? 'Paid' : 'Not Paid'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-indigo-600 hover:text-indigo-900">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
