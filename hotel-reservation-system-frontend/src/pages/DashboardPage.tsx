import { useState } from 'react';
import HotelSection from '../components/Admin/Tables/HotelTable';
import RoomSection from '../components/Admin/Tables/RoomTable';
import UserSection from '../components/Admin/Tables/UserTable';
import Dashboard from '../components/Admin/Dashboard/Dashboard';
import HeaderAdmin from '../components/Admin/Navigation/HeaderAdmin';
import Sidebar from '../components/Admin/Navigation/Sidebar';
import PaymentSection from '../components/Admin/Tables/PaymentTable';
import ReservationSection from '../components/Admin/Tables/ReservationTable';
import ReviewSection from '../components/Admin/Tables/ReviewTable';


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
