import './index.css'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './pages/Rooms';
import About from './pages/About';
import RoomDetails from './pages/RoomDetails';
import AdminPanel from './pages/AdminPanel';
import LoginAdmin from './components/LoginAdmin';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './contexts/AuthContext';

function App() {

  return (
    <AuthProvider>
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute element={<AdminPanel />} path="/admin/dashboard" />
            }
          />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/productDetail" element={<RoomDetails />} />
          {/* Agrega otras rutas aquí */}
        </Routes>
      </Router>
    </AuthProvider>
  )
}
export default App
