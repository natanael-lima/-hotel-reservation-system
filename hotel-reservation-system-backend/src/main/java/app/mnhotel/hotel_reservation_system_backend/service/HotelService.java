package app.mnhotel.hotel_reservation_system_backend.service;

import java.util.List;
import app.mnhotel.hotel_reservation_system_backend.entity.Hotel;

public interface HotelService {
	
	public Hotel createHotel(Hotel hotel);
	
	public List<Hotel> getAllHotel() throws Exception;
}
