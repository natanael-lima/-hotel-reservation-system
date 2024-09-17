/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import Button from '../Buttons/Button';
import ButtonSecondary from '../Buttons/ButtonSecondary';
import LoginUser from '../../pages/LoginPage';
import RegisterUser from '../../pages/RegisterPage';
import ProfileCircle from '../Profile/ProfileCircle';
import { login } from '../../services/authService'; // Asegúrate de que esta función maneje el inicio de sesión
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Estado para el menú

  const openModal = (type: string) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };
  const handleLogin = async (username: string, password: string) => {
    try {
      const data = await login(username, password);
      setIsAuthenticated(true); // Actualiza el estado a autenticado
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 ">
        <a className="block text-orange-600 flex justify-center text-orange-600 lg:justify-start" href="#">
          <span className="sr-only">Home</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-buildings-fill" viewBox="0 0 16 16">
            <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
          </svg>
          <p className="font-bold  text-1xl">HOTEL MN</p>
        </a>

      <div className="flex flex-1 items-center justify-end md:justify-between ">
        <nav aria-label="Global" className={`fixed inset-0 z-20 ${
            isMenuOpen ? 'bg-orange-50 flex flex-col items-center justify-center' : 'hidden'
          } md:relative md:flex md:flex-row md:gap-6 md:bg-transparent md:top-0 md:p-0 md:h-auto`}
          style={{ height: isMenuOpen ? '50vh' : 'auto' }}>
          {/* Button to close the menu */}
          {isMenuOpen && (
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 text-gray-500/70 md:hidden"
            >
              <IoMdClose className="h-6 w-6" />
            </button>
          )}
          {/* Menu items */}
          <ul className="flex flex-col items-center gap-8 text-lg md:flex-row md:gap-6 md:text-sm">
            <li>
              <Link to="/" className="text-gray-800 transition hover:text-gray-300/70 md:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="text-gray-800 transition hover:text-gray-300/70 md:text-gray-200">
              Rooms
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-800 transition hover:text-gray-300/70 md:text-gray-200">
              About Us
              </Link>
            </li>
            {/* Register button visible only on mobile */}
            <li className="md:hidden">
              <ButtonSecondary content='Register' onClick={() => openModal('register')} className={''} />
            </li>
          </ul>
        </nav>


        <div className="flex items-center gap-4">
            {!isAuthenticated ? (
              <div className="sm:flex sm:gap-4">
                <Button content='Login' onClick={() => openModal('login')} className={''} />
                <ButtonSecondary content='Register' onClick={() => openModal('register')} className={'hidden sm:block'} />
              </div>
            ) : (
              <div className="flex items-center">
                <ProfileCircle />
              </div>
            )}
              {/* Modal for Login */}
              {modalType === 'login' && <LoginUser closeModal={closeModal} onLogin={handleLogin} />}
              
              {/* Modal for Register */}
              {modalType === 'register' && <RegisterUser closeModal={closeModal} />}
            
              <button
                onClick={toggleMenu}
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                {isMenuOpen ? (
                  <IoMdClose className="h-5 w-5" />
                ) : (
                  <RxHamburgerMenu className="h-5 w-5" />
                )}
            </button>
        </div>
      </div>
    </div>
  </header>
  )
}
