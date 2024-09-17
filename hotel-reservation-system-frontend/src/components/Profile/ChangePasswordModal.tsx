import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function ChangePasswordModal({ isOpen, closeModal }: ModalProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // Aquí iría la lógica para manejar el cambio de contraseña
    console.log({ currentPassword, newPassword, confirmPassword });
    closeModal(); // Cierra el modal después de intentar cambiar la contraseña
  };

  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-96">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Change Password</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter current password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter new password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Confirm new password"
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
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
