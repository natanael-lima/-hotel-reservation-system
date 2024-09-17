import { BsBuildingsFill } from "react-icons/bs";

interface SidebarProps {
  isMobileMenuOpen: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  toggleMobileMenu: () => void;
}
export default function Sidebar({ isMobileMenuOpen, activeTab, setActiveTab, toggleMobileMenu  }:SidebarProps) {
  return (
    <aside className={`w-72 bg-slate-700 shadow-lg fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:w-64 lg:translate-x-0 transition duration-200 ease-in-out z-30 lg:static lg:inset-0`}>
      <div className="h-16 bg-slate-700 flex items-center justify-between px-4">
        {isMobileMenuOpen && (
            <button
              className="text-white lg:hidden"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        <span className="text-white text-2xl font-semibold flex"><BsBuildingsFill className="ml-2 mr-2" /> Hotel MN</span>
      </div>
      <nav className="mt-8">
        {['dashboard','hotels', 'rooms','users','reservations','payments','reviews' ].map((tab) => (
          
          <button
            key={tab}
            className={`w-full flex items-center px-6 py-3 text-gray-100 hover:bg-slate-800/80 hover:text-gray-200 ${
              activeTab === tab ? 'bg-slate-800/50 text-gray-800' : ''
            }`}
            onClick={() => {
              setActiveTab(tab);
              toggleMobileMenu(); // Close mobile menu after selection
            }}
            >
            <span className="capitalize">{tab}</span>
            
          </button>
        ))}
      </nav>
    </aside>
   
  )
}
