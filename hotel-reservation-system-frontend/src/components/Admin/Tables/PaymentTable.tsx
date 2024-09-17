import React from 'react';

export default function PaymentSection() {
  const payments = [
    {
      id: 1,
      amount: 100,
      paymentDate: '2024-09-01T14:00:00',
      status: 'Completed',
      reservation: { id: 101, startDate: '2024-08-01T12:00:00', endDate: '2024-08-05T12:00:00' },
    },
    {
      id: 2,
      amount: 200,
      paymentDate: '2024-09-05T16:00:00',
      status: 'Pending',
      reservation: { id: 102, startDate: '2024-08-10T14:00:00', endDate: '2024-08-15T11:00:00' },
    },
    {
      id: 3,
      amount: 300,
      paymentDate: '2024-09-10T18:00:00',
      status: 'Failed',
      reservation: { id: 103, startDate: '2024-08-20T13:00:00', endDate: '2024-08-22T10:00:00' },
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
       {/* Header and Button */}
       <header className="flex items-center justify-between p-4 border-b">
        <h2 className="text-2xl font-bold text-gray-500 capitalize">Payments</h2>
      </header>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reservation ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reservation Period</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="px-6 py-4 whitespace-nowrap">{payment.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">${payment.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap">{payment.paymentDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  payment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {payment.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{payment.reservation.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{`${payment.reservation.startDate} - ${payment.reservation.endDate}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
