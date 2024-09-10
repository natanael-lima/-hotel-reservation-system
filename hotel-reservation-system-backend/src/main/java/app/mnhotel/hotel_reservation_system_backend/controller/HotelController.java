package app.mnhotel.hotel_reservation_system_backend.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import app.mnhotel.hotel_reservation_system_backend.dto.HotelDTO;
import app.mnhotel.hotel_reservation_system_backend.entity.Hotel;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;
import app.mnhotel.hotel_reservation_system_backend.service.HotelService;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/hotel")
@RequiredArgsConstructor
public class HotelController {

	@Autowired
    private HotelService hotelService;
	
	// API para crear un hotel.
	@PostMapping("/registration-hotel")
	public ResponseEntity<ApiResponse> createHotel(@RequestBody HotelDTO hotelRequest) {
		if (hotelRequest == null) {
	    	 return ResponseEntity.badRequest().body(new ApiResponse("Error: la solicitud están vacíos"));
	    } else {
	    	    try {
	    		        hotelService.createHotel(hotelRequest);
	    		        return ResponseEntity.ok(new ApiResponse("El Hotel se registró correctamente"));
	    		    } catch (Exception e) {
	    		        e.printStackTrace(); // Para depuración
	    		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    		    }
	    	    }
			
	}
	
	// API para elimanar un hotel by ID.
	@DeleteMapping("/delete-hotel/{id}")
	public ResponseEntity<ApiResponse> deleteHotel(@PathVariable Long id) throws Exception {
		 try {
			 	hotelService.deleteHotel(id);
			 	return ResponseEntity.ok(new ApiResponse("El hotel se elimino correctamente"));
	        } catch (RuntimeException e) {
	            return ResponseEntity.noContent().build();
	        }
	}
	
	// API para editar un hotel by ID.
	@PutMapping("/update-hotel/{id}")
	public ResponseEntity<ApiResponse> updateHotel(@PathVariable Long id, @RequestBody HotelDTO hotelDTO) {
		    try {
		    	hotelDTO.setId(id);
		        return ResponseEntity.ok(hotelService.updateHotelData(hotelDTO));
		    } catch (Exception e) {
		        e.printStackTrace(); // Para depuración
		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(new ApiResponse("Error al obtener el hotel: " + e.getMessage()));
		    }
	}
	
	// API para obtener todos los hoteles.
	@GetMapping("/get-all")
	public ResponseEntity<List<HotelDTO>> findAllHotel() {
	    try {
	        List<HotelDTO> hotelAll = hotelService.getAllHotel();
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
    public ResponseEntity<?> findProductById(@PathVariable Long id) throws Exception {
    	
        try {
        	 Optional<HotelDTO> hotel = hotelService.getHotel(id);
             // Verifica si el Optional contiene un valor
             if (hotel.isPresent()) {
                 return ResponseEntity.ok(hotel.get());
             } else {
                 // Si no existe el hotel, devuelve un mensaje indicando que no se encontró
                 return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                      .body(new ApiResponse("Hotel no encontrado con ID: " + id));
             }
        } catch (RuntimeException e) {
        	// Maneja cualquier excepción inesperada
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(new ApiResponse("Error al obtener el hotel: " + e.getMessage()));
        }
    }
}
