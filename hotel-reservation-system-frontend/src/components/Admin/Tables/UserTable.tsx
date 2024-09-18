import React, { useEffect, useState } from 'react'
import ButtonGroup from '../../Buttons/ButtonGroup'
import { fetchUsers, UserDTO } from '../../../services/userService';
import UserFormEdit from '../Forms/UserFormEdit';
import { FaCheck } from 'react-icons/fa';
import ButtonStatusBadge from '../../Buttons/ButtonStatusBadge';

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
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  //const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [selectedUserId, setselectedUserId] = useState<number | null>(null);

  const openEditModal = (hotelId: number) => {
    setselectedUserId(hotelId);
    setIsModalOpenEdit(true);
  };

  const closeEditModal = () => {
    setIsModalOpenEdit(false);
    setselectedUserId(null);
  };
  
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
       {/* Header and Button */}
       <header className="flex items-center justify-between p-4 border-b">
        <h2 className="text-2xl font-bold text-gray-500 capitalize">Users</h2>
      </header>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FullName</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CreatedAt</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verfied</th>
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
              <td className="px-6 py-4 whitespace-nowrap">
                    <ButtonStatusBadge status="Active" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2 py-1 bg-green-600 text-white rounded-lg border border-green-600">
                  <FaCheck className="w-3 h-3 " />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       {/* Modals */}
       {isModalOpenEdit && selectedUserId && (
        <UserFormEdit
          isOpen={isModalOpenEdit}
          closeModal={closeEditModal}
          userId={selectedUserId}
        />
      )}
    </div>
  )
}
