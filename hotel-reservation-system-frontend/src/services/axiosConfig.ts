import axios from 'axios';
import { getToken } from '../services/authService';

// Crear una instancia de Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
});
// Interceptor para agregar el token a las solicitudes
api.interceptors.request.use(
  (config) => {
     // Obtener el token del almacenamiento local o contexto de autenticación
    const token = getToken();
    if (token) {
    // Agregar el token al encabezado Authorization
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;