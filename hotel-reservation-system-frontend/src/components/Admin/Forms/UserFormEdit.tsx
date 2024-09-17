import React, { useEffect, useState } from 'react';
import { getUserById, UserDTO } from '../../../services/userService';


interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  userId: number; // Nuevo prop para pasar el ID del usuario
}

export default function UserFormEdit({ isOpen, closeModal, userId }: ModalProps) {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [fullName, setFullName] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (isOpen) {
      async function loadUser() {
        try {
          const data = await getUserById(userId); // Usa fetchUserById en lugar de getCurrentUser
          setUser(data);
          setFullName(data.fullName || '');
          setProfileImageUrl(data.profileImageUrl || '');
          setRole(data.role || '');
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }

      loadUser();
    }
  }, [isOpen, userId]); // Añade userId a las dependencias

  const handleUpdate = () => {
    // Maneja la lógica de actualización aquí, como enviar los datos al backend.
    console.log({ fullName, profileImageUrl, role });
    closeModal(); // Cierra el modal después de la actualización.
  };

  if (!user) {
    return null; // Oculta el modal mientras se cargan los datos.
  }

  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-96">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Profile Settings</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <span className="block w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600">
              {user?.username}
            </span>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Profile Image URL</label>
            <input
              type="text"
              value={profileImageUrl}
              onChange={(e) => setProfileImageUrl(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter image URL"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter role"
            />
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-50 flex justify-end">
          <button
            onClick={closeModal}
            className="mr-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
