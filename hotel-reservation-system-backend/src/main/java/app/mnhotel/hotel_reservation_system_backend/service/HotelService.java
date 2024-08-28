package app.mnhotel.hotel_reservation_system_backend.service;

import java.util.List;
import java.util.Optional;
import app.mnhotel.hotel_reservation_system_backend.dto.HotelDTO;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;

public interface HotelService {
	
	public void createHotel(HotelDTO hotelRequest) throws Exception;
	public void deleteHotel(Long id) throws Exception;
	public ApiResponse updateHotelData(HotelDTO hotelRequest) throws Exception;
	public Optional<HotelDTO> getHotel(Long id) throws Exception;
	public List<HotelDTO> getAllHotel() throws Exception;
}
