import api from './axiosConfig'; // Usa la instancia configurada

export interface UserDTO {
  id: number;
  username: string;
  fullName?: string; // Opcional según tu modelo
  profileImageUrl?: string; // Opcional según tu modelo
  createdAt?: string; // Formato de fecha ISO
  role?: string; // Opcional según tu modelo
}

interface CreateUserResponse {
  success: boolean;
  user: UserDTO;
}
export async function fetchUsers(): Promise<UserDTO[]> {
  const response = await api.get('/api/user/get-all');
  return response.data as UserDTO[];
}

export async function createUser(data: Partial<UserDTO>): Promise<CreateUserResponse> {
  const response = await api.post('/api/user/registration-user', data);
  return response.data as CreateUserResponse;
}

export async function updateUser(id: number, data: Partial<UserDTO>): Promise<CreateUserResponse> {
  const response = await api.put(`/api/user/update-user/${id}`, data);
  return response.data as CreateUserResponse;
}

export async function deleteUser(id: number): Promise<void> {
  await api.delete(`/api/user/delete-user/${id}`);
}

export async function getCurrentUser(): Promise<UserDTO> {
  const response = await api.get('/api/user/current');
  return response.data as UserDTO;
}