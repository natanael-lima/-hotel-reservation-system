"use client"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { GrConfigure } from "react-icons/gr";
import { FiChevronUp,FiChevronDown } from "react-icons/fi";
import { useAuth } from "../../../contexts/AuthContext";
import { getCurrentUser, UserDTO } from "../../../services/userService";

import ProfileEditAdminModal from "./ProfileEditAdminModal";
import ChangePasswordAdminModal from "./ChangePasswordAdminModal";



export default function ProfileCircule() {
   const [isOpen, setIsOpen] = useState(false)
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isModalOpenPass, setIsModalOpenPass] = useState(false);

   const openModalPass = () => setIsModalOpenPass(true);
   const closeModalPass = () => setIsModalOpenPass(false);

   const openModal = () => {setIsModalOpen(true);};
   const closeModal = () => {
     setIsModalOpen(false);
   };


   const { logout } = useAuth();
   const navigate = useNavigate();
 
   const handleLogout = () => {
     logout();
     navigate('/admin/login');
   };

  const [user, setUser] = useState<UserDTO | null>(null);
  useEffect(() => {
    async function loadCurrent() {
      try {
        const data = await getCurrentUser();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    }

    loadCurrent();
  }, []);
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center">
        <button
          type="button"
          className="flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
            <img
                src={user.profileImageUrl || 'default-image-url.jpg'} // Usa una imagen predeterminada si es necesario
                alt="User profile"
                className="w-full h-full object-cover"
              />
              
          </div>
          <p className="text-gray-500/80 text-sm ml-1">{user.fullName}</p>
          {isOpen ? (
            <FiChevronUp className="ml-1 h-5 w-5 text-gray-400 transition-transform duration-200" />
          ) : (
            <FiChevronDown className="ml-1 h-5 w-5 text-gray-400 transition-transform duration-200" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={openModal} // Abre el modal cuando se hace clic en el botón
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <GrConfigure size={24} className="mr-3 h-5 w-5 text-gray-400"/>
              Profile
            </button>
              {/* Renderiza el modal y le pasa las funciones para abrir y cerrar */}
              <ProfileEditAdminModal isOpen={isModalOpen} closeModal={closeModal} />
            <button
              onClick={openModalPass}
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <RiLockPasswordLine size={24} className="mr-3 h-5 w-5 text-gray-400"/>
              Change Password
            </button>
            {/* Modal */}
              <ChangePasswordAdminModal isOpen={isModalOpenPass} closeModal={closeModalPass} />
            <button
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleLogout}
              >
              <IoIosLogOut size={24} className="mr-3 h-5 w-5 text-gray-400"/>
                Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
