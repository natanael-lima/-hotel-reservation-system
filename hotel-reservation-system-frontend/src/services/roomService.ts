import api from './axiosConfig'; // Usa la instancia configurada

export interface RoomDTO {
  id: number;
  roomNumber: string;
  type: string;
  pricePerNight: number;
  availability: boolean;
  description: string;
  capacity: number;
  image: string;
  amenities: string[];
  hotelId: number;  // Opcional
}

interface CreateRoomResponse {
  success: boolean;
  room: RoomDTO;
}

export async function fetchRooms(): Promise<RoomDTO[]> {
  const response = await api.get('/api/room/get-all');
  return response.data as RoomDTO[];
}

export async function createRoom(data: Partial<RoomDTO>): Promise<CreateRoomResponse> {
  const response = await api.post('/api/room/registration-room', data);
  return response.data as CreateRoomResponse;
}

export async function updateRoom(id: number, data: Partial<RoomDTO>): Promise<CreateRoomResponse> {
  const response = await api.put(`/api/room/update-room/${id}`, data);
  return response.data as CreateRoomResponse;
}

export async function deleteRoom(id: number): Promise<void> {
  await api.delete(`/api/room/delete-room/${id}`);
}

export async function getRoomById(id: number): Promise<RoomDTO> {
  const response = await api.get(`/api/room/get-room/${id}`);
  return response.data as RoomDTO;
}