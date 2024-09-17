import React, { useEffect, useState } from 'react'
import ButtonGroup from '../../Buttons/ButtonGroup'
import { fetchUsers, UserDTO } from '../../../services/userService';
import StatusBadge from '../../Buttons/StatusBadge';
import UserFormEdit from '../Forms/UserFormEdit';
import { IoAddOutline } from 'react-icons/io5';

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
              <td className="px-6 py-4 whitespace-nowrap">
                <ButtonGroup
                  onClick2={() => openEditModal(user.id)}
                  onClick3={() => console.log('Button 3 clicked')}
                />
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
