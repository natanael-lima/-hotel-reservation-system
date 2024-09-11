const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export interface RegisterDTO {
    id: number;
    username: string;
    password: string;
    fullName?: string; // Opcional según tu modelo
    profileImageUrl?: string; // Opcional según tu modelo
    createdAt?: string; // Formato de fecha ISO
    role?: string; // Opcional según tu modelo
}
export async function login(username: string, password: string) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    const data = await response.json();
    // Almacena el token JWT en el localStorage
    localStorage.setItem('token', data.token);
    return data;
}

export function logout() {
    // Elimina el token JWT del localStorage
    localStorage.removeItem('token');
  }
  
  export function getToken() {
    return localStorage.getItem('token');
  }
  
  export function isAuthenticated() {
    // Verifica si hay un token JWT en el localStorage
    return !!getToken();
  }


// Register new user
export async function registerUser(data: RegisterDTO): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/auth/registration-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Lee el cuerpo de la respuesta para obtener detalles del error
      const errorData = await response.json();
      const errorMessage = errorData.message || 'Failed to create user';
      throw new Error(errorMessage);
    }

    // Opcional: Maneja la respuesta si es necesario
    const result = await response.json();
    console.log('User registered successfully:', result);
    
  } catch (error) {
    // Maneja errores de red u otros errores inesperados
    console.error('Error during registration:', error);
    throw error; // Re-lanzar el error para que pueda ser manejado por la función llamadora
  }
}

// Función para añadir el token a las peticiones
export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const token = getToken();
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return fetch(url, options);
}