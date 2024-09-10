const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

interface User {
  id: number;
  name: string;
  email: string;
  // Agrega más campos según sea necesario
}

interface CreateUserResponse {
  success: boolean;
  user: User;
  // Agrega más campos según sea necesario
}

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return await response.json() as User[];
}

export async function createUser(data: Partial<User>): Promise<CreateUserResponse> {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return await response.json() as CreateUserResponse;
}
