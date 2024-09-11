import './index.css'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './pages/Rooms';
import About from './pages/About';
import RoomDetails from './pages/RoomDetails';
import AdminPanel from './pages/AdminPanel';
import LoginAdmin from './components/LoginAdmin';
import AuthProvider from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

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
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/productDetail" element={<RoomDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
export default App
