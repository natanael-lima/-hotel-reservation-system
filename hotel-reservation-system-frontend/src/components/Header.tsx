import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import Button from './Button';
import ButtonSecondary from './ButtonSecondary';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';

export default function Header() {
  const [modalType, setModalType] = useState<'login' | 'register' | null>(null);

  const openModal = (type: 'login' | 'register') => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };
  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-[rgba(255,255,255,0)]">
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a className="block text-orange-600 flex justify-center text-orange-600 lg:justify-start" href="#">
        <span className="sr-only">Home</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-buildings-fill" viewBox="0 0 16 16">
          <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
        </svg>
        <p className="font-bold  text-1xl">HOTEL MN</p>
      </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link to="/" className="text-gray-200 transition hover:text-gray-300/75">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="text-gray-200 transition hover:text-gray-300/75">
             Rooms
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-200 transition hover:text-gray-300/75">
             About Us
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <Button content='Login' onClick={() => openModal('login')} className={''} />

          <ButtonSecondary content='Register' onClick={() => openModal('register')} className={'hidden sm:block'}/>
        </div>
          
          {/* Modal for Login */}
          {modalType === 'login' && <LoginUser closeModal={closeModal} />}
          
          {/* Modal for Register */}
          {modalType === 'register' && <RegisterUser closeModal={closeModal} />}
        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}
