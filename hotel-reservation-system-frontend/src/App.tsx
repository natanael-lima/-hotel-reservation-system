import './index.css'
import './App.css'
import Home from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Room from './pages/RoomsPages';
import About from './pages/AboutPage';
import RoomDetails from './pages/RoomDetailsPage';
import AdminPanel from './pages/DashboardPage';
import LoginAdmin from './pages/AdminLoginPage';
import AuthProvider from './contexts/AuthContext';
import { ProtectedRoute } from './routes/ProtectedRoute';
import Bookings from './pages/Bookings';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<AdminPanel />} />
          </Route>
          <Route path="/rooms" element={<Room />} />
          <Route path="/roomDetail/:id" element={<RoomDetails />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
export default App
