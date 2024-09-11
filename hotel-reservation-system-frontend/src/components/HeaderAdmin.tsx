
import React from 'react';
import ProfileCircleAdmin from './ProfileCircleAdmin';

interface HeaderProps {
  activeTab: string;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export default function HeaderAdmin({ activeTab, toggleMobileMenu, isMobileMenuOpen }:HeaderProps) {
  
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b">
      <button 
        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 lg:hidden"
        onClick={toggleMobileMenu}
      >
      {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
      </button>
      <h2 className="hidden lg:block lg:text-2xl font-semibold capitalize">{activeTab}</h2>
      <div className="flex items-center justify-between">
        <ProfileCircleAdmin/>
      </div>
    </header>
  )
}
