package app.mnhotel.hotel_reservation_system_backend.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import app.mnhotel.hotel_reservation_system_backend.entity.Hotel;
import app.mnhotel.hotel_reservation_system_backend.service.HotelService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/hotel")
public class HotelController {

	@Autowired
    private HotelService hotelService;
	
	// API para obtener todos los hoteles.
	@GetMapping("/get-all")
	public ResponseEntity<List<Hotel>> findAllHotel() {
	    try {
	        List<Hotel> hotelAll = hotelService.getAllHotel();
	        if (hotelAll.isEmpty()) {
	            return ResponseEntity.noContent().build();
	        }
	        return ResponseEntity.ok(hotelAll);
	    } catch (Exception e) {
	        e.printStackTrace(); // Para depuración
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }
	}

	
	// API para obtener un producto by ID.
    @GetMapping("/get-hotel/{id}")
    public ResponseEntity<Optional<Hotel>> findProductById(@PathVariable Long id) throws Exception {
        try {
        	Optional<Hotel> hotel = hotelService.getHotel(id);
            return ResponseEntity.ok(hotel);
        } catch (RuntimeException e) {
            return ResponseEntity.noContent().build(); 
        }
    }
}
