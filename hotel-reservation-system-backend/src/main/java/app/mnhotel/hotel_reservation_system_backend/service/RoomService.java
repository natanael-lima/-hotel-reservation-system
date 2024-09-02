package app.mnhotel.hotel_reservation_system_backend.service;

import java.util.List;
import java.util.Optional;
import app.mnhotel.hotel_reservation_system_backend.dto.RoomDTO;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;

public interface RoomService {

	public void createRoom(RoomDTO hotelRequest) throws Exception;
	public void deleteRoom(Long id) throws Exception;
	public ApiResponse updateRoomData(RoomDTO hotelRequest) throws Exception;
	public Optional<RoomDTO> getRoom(Long id) throws Exception;
	public List<RoomDTO> getAllRoom() throws Exception;
}
