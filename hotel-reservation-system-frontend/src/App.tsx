import './index.css'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} /> {/* Ruta para Products */}
        {/* Agrega otras rutas aquí */}
      </Routes>
    </Router>
  )
}

export default App
