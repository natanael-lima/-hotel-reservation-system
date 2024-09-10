
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export interface RegisterDTO {
    id?: number;
    username: string;
    password: string;     
    email: string;     
    createdAt?: Date;// Opcional, como en el DTO de Java
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
  const response = await fetch(`${API_URL}/api/registration-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }
}