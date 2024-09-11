import { useState } from 'react';
import HotelSection from '../components/HotelSection';
import RoomSection from '../components/RoomSection';
import UserSection from '../components/UserSection';
import Dashboard from '../components/Dashboard';
import HeaderAdmin from '../components/HeaderAdmin';
import Sidebar from '../components/Sidebar';
import PaymentSection from '../components/PaymentSection';
import ReservationSection from '../components/ReservationSection';
import ReviewSection from '../components/ReviewSection';


export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
         isMobileMenuOpen={isMobileMenuOpen}
         activeTab={activeTab}
         setActiveTab={setActiveTab}
         toggleMobileMenu={toggleMobileMenu}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <HeaderAdmin 
          activeTab={activeTab}
          toggleMobileMenu={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {activeTab === 'dashboard' && <Dashboard/>}
          {activeTab === 'hotels' && <HotelSection />}
          {activeTab === 'rooms' && <RoomSection />}
          {activeTab === 'users' && <UserSection />}
          {activeTab === 'reservations' && <ReservationSection/>}
          {activeTab === 'payments' && <PaymentSection />}
          {activeTab === 'reviews' && <ReviewSection />}
          
        </main>
      </div>
    </div>
  );
}
