
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export interface HotelDTO {
    id: number;
    name: string;
    location: string;          
    description: string;       
    rating: number;            
    image: string;       
    province: string;    
    roomIds?: number[];         // Opcional, como en el DTO de Java, lista de IDs de habitaciones
    reviews?: ReviewDTO[];      // Opcional, como en el DTO de Java, lista de reseñas (asegúrate de definir ReviewDTO también)
  }
  
  export interface ReviewDTO {
    id?: number;
    content?: string;
    rating?: number;
    // Otros campos de reseña según sea necesario
  }
  
// Get all hotels
export async function fetchHotels(): Promise<HotelDTO[]> {
  const response = await fetch(`${API_URL}/api/hotel/get-all`);
  if (!response.ok) {
    throw new Error('Failed to fetch hotels');
  }
  return response.json();
}
// Create hotel
export async function createHotel(data: HotelDTO): Promise<void> {
  const response = await fetch(`${API_URL}/api/hotel/registration-hotel`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create hotel');
  }
}
// Update hotel
export async function updateHotel(id: number, data: HotelDTO): Promise<void> {
  const response = await fetch(`${API_URL}/api/hotel/update-hotel/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to update hotel');
  }
}
// Delete hotel
export async function deleteHotel(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/api/hotel/delete-hotel/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete hotel');
  }
}
// Get hotel by ID
export async function fetchHotelById(id: number): Promise<HotelDTO> {
  const response = await fetch(`${API_URL}/api/hotel/get-hotel/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch hotel');
  }
  return response.json();
}
