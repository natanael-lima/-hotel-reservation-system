import React, { useEffect, useState } from 'react'
import ButtonGroup from '../../Buttons/ButtonGroup'
import { fetchUsers, UserDTO } from '../../../services/userService';
import StatusBadge from '../../Buttons/StatusBadge';

// Función para formatear la fecha usando JavaScript nativo
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString('es-ES', options); // Puedes cambiar 'es-ES' por el locale que prefieras
};
export default function UserSection() {
  const [users, setUser] = useState<UserDTO[]>([]);
  useEffect(() => {
    async function loadUser() {
      try {
        const data = await fetchUsers();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    }

    loadUser();
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <h2 className="block sm:hidden text-2xl font-bold text-gray-500 capitalize p-4 border">Users</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FullName</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CreatedAt</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap"><div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                    src={user.profileImageUrl || 'default-image-url'} // Usa una imagen por defecto si profileImageUrl es null
                    alt="Profile"
                    className="w-full h-full object-cover"/>
              </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.fullName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatDate(user.createdAt)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status="Active" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap"><ButtonGroup/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
