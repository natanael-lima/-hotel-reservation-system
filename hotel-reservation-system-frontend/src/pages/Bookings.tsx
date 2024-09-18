import React from 'react';
import { FaCalendarAlt, FaCreditCard, FaDownload, FaStar } from 'react-icons/fa';
import Header from '../components/Layouts/Header';
import HeaderBanner from '../components/Layouts/HeaderBanner';

const bookings = [
  {
    id: 'ORD001',
    roomName: 'Deluxe Suite',
    pricePerNight: 199,
    checkIn: '2023-07-01',
    checkOut: '2023-07-05',
    amount: 796,
    date: '2023-06-15',
    status: 'Booked'
  },
  {
    id: 'ORD002',
    roomName: 'Ocean View Room',
    pricePerNight: 249,
    checkIn: '2023-08-10',
    checkOut: '2023-08-15',
    amount: 1245,
    date: '2023-07-20',
    status: 'Canceled'
  },
  {
    id: 'ORD003',
    roomName: 'Penthouse Suite',
    pricePerNight: 399,
    checkIn: '2023-09-01',
    checkOut: '2023-09-03',
    amount: 798,
    date: '2023-08-01',
    status: 'Booked'
  },
  {
    id: 'ORD004',
    roomName: 'Garden View Room',
    pricePerNight: 149,
    checkIn: '2023-10-12',
    checkOut: '2023-10-15',
    amount: 447,
    date: '2023-09-10',
    status: 'Canceled'
  },
  {
    id: 'ORD005',
    roomName: 'Family Suite',
    pricePerNight: 299,
    checkIn: '2023-11-05',
    checkOut: '2023-11-10',
    amount: 1495,
    date: '2023-10-20',
    status: 'Booked'
  },
  {
    id: 'ORD006',
    roomName: 'Luxury Suite',
    pricePerNight: 499,
    checkIn: '2023-12-01',
    checkOut: '2023-12-07',
    amount: 2994,
    date: '2023-11-15',
    status: 'Booked'
  }
];

export default function Bookings() {
  return (
    <div>
    <Header />
    <HeaderBanner/>
    <main className='flex'>
        <section className="w-full py-2 md:py-2 lg:py-0 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-2">
                {bookings.map((booking) => (
                <div key={booking.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">{booking.roomName}</h2>
                        <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            booking.status === 'Booked'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                        >
                        {booking.status}
                        </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center">
                        
                        <span className="text-gray-700 font-semibold">${booking.pricePerNight} per night </span>
                        </div>
                        <div className="flex items-center">
                        <FaCalendarAlt className="h-5 w-5 text-gray-500 mr-2" />
                            <div className="text-gray-600 flex">
                                    <span className="font-bold mr-2">Check-in:</span> 
                                    <span>{booking.checkIn}</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                        <FaCalendarAlt className="h-5 w-5 text-gray-500 mr-2" />
                            <div className="text-gray-600 flex">
                                    <span className="font-bold mr-2">Check-out:</span> 
                                    <span>{booking.checkOut}</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                        <FaCreditCard className="h-5 w-5 text-gray-500 mr-2" />
                            <div className="text-gray-600 flex">
                                    <span className="font-bold mr-2">Total Amount:</span> 
                                    <span>${booking.amount}</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                        <FaCalendarAlt className="h-5 w-5 text-gray-500 mr-2" />
                            <div className="text-gray-600 flex">
                                    <span className="font-bold mr-2">Booking Date:</span> 
                                    <span>{booking.date}</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-gray-600 flex">
                                    <span className="font-bold mr-2">Order ID:</span> 
                                    <span>{booking.id}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <FaDownload className="h-5 w-5 mr-2" />
                        Download PDF
                        </button>
                        <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                        <FaStar className="h-5 w-5 mr-2" />
                        Rate & Review
                        </button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </section>

    </main>
    </div>
  );
}
