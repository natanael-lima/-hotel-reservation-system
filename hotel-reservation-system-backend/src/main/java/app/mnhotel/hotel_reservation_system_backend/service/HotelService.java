package app.mnhotel.hotel_reservation_system_backend.service;

import java.util.List;
import java.util.Optional;
import app.mnhotel.hotel_reservation_system_backend.entity.Hotel;

public interface HotelService {
	
	public Hotel createHotel(Hotel hotel);
	public Optional<Hotel> getHotel(Long id);
	public List<Hotel> getAllHotel() throws Exception;
}
