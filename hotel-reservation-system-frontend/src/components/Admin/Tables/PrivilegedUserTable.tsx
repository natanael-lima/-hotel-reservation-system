import React from 'react';
import { IoAddOutline } from 'react-icons/io5';
import ButtonGroup from '../../Buttons/ButtonGroup';

export default function PrivilegedUserTable() {
  const admins = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      createdAt: '2024-01-15T10:00:00'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      createdAt: '2024-03-22T12:30:00'
    },
    {
      id: 3,
      name: 'Carol White',
      email: 'carol.white@example.com',
      createdAt: '2024-05-10T14:45:00'
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
       {/* Header and Button */}
       <header className="flex items-center justify-between p-4 border-b">
        <h2 className="text-2xl font-bold text-gray-500 capitalize">Users Queries</h2>
        <button
          className="
            flex items-center gap-2
            rounded-md border border-green-300
            bg-green-200 px-4 py-2
            text-green-800 font-semibold
            hover:bg-green-300 hover:border-green-400
            focus:outline-none focus:ring-2 focus:ring-green-400
            transition duration-200 ease-in-out
          "
          
        >
          <IoAddOutline className="text-xl" />
          Add New
        </button>
      </header>
      <header className="flex items-center justify-between p-4 border-b">
        <h2 className="text-2xl font-bold text-gray-500 capitalize">Users</h2>
      </header>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admin ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Created</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td className="px-6 py-4 whitespace-nowrap">{admin.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{admin.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{admin.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(admin.createdAt).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <ButtonGroup
                  onClick2={() => console.log('Button 2 clicked')}
                  onClick3={() => console.log('Button 3 clicked')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
