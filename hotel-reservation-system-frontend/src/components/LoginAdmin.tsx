import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';



export default function LoginAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          await login(username, password);
          navigate('/admin/dashboard'); // Redirecciona al usuario después del login
        } catch (error) {
          console.error('Failed to login:', error);
        }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            

            <form onSubmit={handleLogin} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-gray-100">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Admin Control Panel</h1>

            <p className="mx-auto mt-4 max-w-md text-center text-gray-400">
            Access the administrative control panel to manage user activities, oversee content, and handle system settings.
            </p>

            <div>
                <label htmlFor="email" className="sr-only">Email</label>

                <div className="relative">
                <input
                     type="text" 
                     id="username" 
                     name="username" 
                     value={username} 
                     onChange={(e) => setUsername(e.target.value)}
                     required
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                />

               
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
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                />
                </div>
            </div>

            <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
                Sign in
            </button>
            <p className="text-center text-sm text-gray-500">
                No account?
                <a className="underline" href="#">Sign up</a>
            </p>
            </form>
        </div>
    </div>
  )
}
