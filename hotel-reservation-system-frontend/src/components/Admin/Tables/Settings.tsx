import React from 'react';
import { FaEdit, FaPlus, FaTrashAlt, FaPowerOff } from 'react-icons/fa';

export default function Settings() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* General Settings Section */}
      <section className="bg-white rounded-lg shadow mb-6 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">General Settings</h2>
          <button className="text-blue-600 hover:text-blue-800">
            <FaEdit className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Site Title</h3>
            <p className="text-gray-600">Your site title goes here</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Description</h3>
            <p className="text-gray-600">A brief description of your site.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">About Us</h3>
            <p className="text-gray-600">Information about your organization.</p>
          </div>
        </div>
      </section>

      {/* Website Shutdown Section */}
      <section className="bg-white rounded-lg shadow mb-6 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Shutdown Website</h2>
          <button className="text-blue-600 hover:text-blue-800">
            <FaPowerOff className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-600 mb-4">Announcement text about shutting down the website or maintenance notice.</p>
        <div className="flex items-center">
          <span className="mr-4">Disable Website:</span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" />
            <div className="relative">
              <div className="block bg-gray-400 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform"></div>
            </div>
          </label>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Management Team</h2>
            <button className="text-blue-600 hover:text-blue-800">
            <FaPlus className="w-5 h-5" />
            </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-4">
            {/* Example team members */}
            {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="relative bg-gray-200 rounded-lg overflow-hidden max-w-xs mx-auto">
                    <img
                src={`https://via.placeholder.com/150?text=Member+${item}`}
                alt={`Team Member ${item}`}
                className="w-full h-36 object-cover"
                />
                <button className="absolute top-2 right-2 bg-red-600 text-white rounded-md p-1.5 hover:bg-red-700">
                <FaTrashAlt className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent text-white p-4 text-center">
                <span className="block">Member {item}</span>
                </div>
            </div>
            ))}
        </div>
        </section>
    </div>
  );
}
