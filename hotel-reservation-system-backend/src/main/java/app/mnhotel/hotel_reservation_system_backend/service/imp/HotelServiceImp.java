package app.mnhotel.hotel_reservation_system_backend.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.mnhotel.hotel_reservation_system_backend.entity.Hotel;
import app.mnhotel.hotel_reservation_system_backend.repository.HotelRepository;
import app.mnhotel.hotel_reservation_system_backend.service.HotelService;

@Service
public class HotelServiceImp implements HotelService{
	@Autowired
	private HotelRepository hotelRepository;
	
	@Override
	public Hotel createHotel(Hotel hotel) {
		// TODO Auto-generated method stub
		return hotelRepository.save(hotel);
	}

	@Override
	public List<Hotel> getAllHotel() throws Exception {
		// TODO Auto-generated method stub
		return hotelRepository.findAll();
	}

	@Override
	public Optional<Hotel> getHotel(Long id) {
		// TODO Auto-generated method stub
		return hotelRepository.findById(id);
	}

	
}
