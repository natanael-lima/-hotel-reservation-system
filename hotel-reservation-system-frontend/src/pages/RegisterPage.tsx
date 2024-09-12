/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { FaGoogle, FaGithub,FaRegEye } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { CgNametag } from "react-icons/cg";
import { FaLink } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { RegisterDTO, registerUser } from '../services/authService';

interface RegisterUserProps {
    closeModal: () => void;
  }
export default function RegisterUser({ closeModal }:RegisterUserProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [error, setError] = useState<string | null>(null);
  
    const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
      const newUser: RegisterDTO = {
        id: 0,
        username,
        password,
        fullName,
        profileImageUrl
      };
      try {
        await registerUser(newUser);
        closeModal();
      } catch (error) {
        setError('Error durante el registro. Por favor, inténtalo de nuevo.');
      }
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Botón de cerrar modal */}
        <button 
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <IoMdClose size={24} />
        </button>

        <h1 className="mt-6 text-2xl text-center font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Get started free.
        </h1>

        <p className="mt-4 mb-4 text-center leading-relaxed text-gray-500">
          Create an account to get started
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">Email</label>
            <div className="relative">
              <input
                type="email" 
                id="username" 
                name="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <FiUser className='text-gray-400' />
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <input
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <FaRegEye className='text-gray-400' />
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="fullName" className="sr-only">Full Name</label>
            <div className="relative">
              <input
                type="text" 
                id="fullName" 
                name="fullName" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter full name"
              />
               <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <CgNametag className='text-gray-400' />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="profileImageUrl" className="sr-only">Profile Image URL</label>
            <div className="relative">
              <input
                type="text" 
                id="profileImageUrl" 
                name="profileImageUrl" 
                value={profileImageUrl} 
                onChange={(e) => setProfileImageUrl(e.target.value)}
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter profile image URL"
              />
               <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <FaLink className='text-gray-400' />
              </span>
            </div>
          </div>

          

          <button type="submit" className="w-full inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600">
            Sign up
          </button>
        </form>

        {/* Divider and social sign-in */}
        <div className="flex items-center justify-between my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">Or sign in with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex flex-row gap-2">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 rounded-md text-red-700 hover:bg-gray-100">
            <FaGoogle />
            Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 rounded-md text-gray-900 hover:bg-gray-100">
            <FaGithub />
            GitHub
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Already have an account?</p>
          <a href="#" className="text-blue-500/50 hover:underline">Sign in</a>
        </div>
      </div>
    </div>
  )
}
