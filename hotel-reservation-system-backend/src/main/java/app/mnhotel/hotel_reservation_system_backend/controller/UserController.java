package app.mnhotel.hotel_reservation_system_backend.controller;

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
import app.mnhotel.hotel_reservation_system_backend.dto.RoomDTO;
import app.mnhotel.hotel_reservation_system_backend.dto.UserDTO;
import app.mnhotel.hotel_reservation_system_backend.request.RegisterRequest;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;
import app.mnhotel.hotel_reservation_system_backend.service.RoomService;
import app.mnhotel.hotel_reservation_system_backend.service.UserService;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5173") // Reemplaza esto con el dominio de tu frontend
@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
	@Autowired
    private UserService userService;
	
	// API para crear un hotel.
	@PostMapping("/registration-user")
	public ResponseEntity<ApiResponse> createUser(@RequestBody RegisterRequest request) {
		if (request == null) {
	    	 return ResponseEntity.badRequest().body(new ApiResponse("Error: la solicitud están vacíos"));
	    } else {
	    	    try {
	    	    	userService.createUser(request);
	    		        return ResponseEntity.ok(new ApiResponse("El User se registró correctamente"));
	    		    } catch (Exception e) {
	    		        e.printStackTrace(); // Para depuración
	    		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    		    }
	    	    }
			
	}
	
	// API para elimanar un hotel by ID.
	@DeleteMapping("/delete-user/{id}")
	public ResponseEntity<ApiResponse> deleteUser(@PathVariable Long id) throws Exception {
		 try {
			 	userService.deleteUser(id);
			 	return ResponseEntity.ok(new ApiResponse("El user se elimino correctamente"));
	        } catch (RuntimeException e) {
	            return ResponseEntity.noContent().build();
	        }
	}
	
	// API para editar un hotel by ID.
	@PutMapping("/update-room/{id}")
	public ResponseEntity<ApiResponse> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
		    try {
		        return ResponseEntity.ok(userService.updateUser(id,userDTO));
		    } catch (Exception e) {
		        e.printStackTrace(); // Para depuración
		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(new ApiResponse("Error al obtener el User: " + e.getMessage()));
		    }
	}
	
	// API para obtener todos los hoteles.
	@GetMapping("/get-all")
	public ResponseEntity<List<UserDTO>> findAllUser() {
	    try {
	        List<UserDTO> all = userService.getAllUsers();
	        if (all.isEmpty()) {
	            return ResponseEntity.noContent().build();
	        }
	        return ResponseEntity.ok(all);
	    } catch (Exception e) {
	        e.printStackTrace(); // Para depuración
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }
	}

	
	// API para obtener un producto by ID.
    @GetMapping("/get-user/{id}")
    public ResponseEntity<?> findUserById(@PathVariable Long id) throws Exception {
    	
        try {
        	 Optional<UserDTO> user = userService.getUser(id);
             // Verifica si el Optional contiene un valor
             if (user.isPresent()) {
                 return ResponseEntity.ok(user.get());
             } else {
                 // Si no existe el room, devuelve un mensaje indicando que no se encontró
                 return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                      .body(new ApiResponse("User no encontrado con ID: " + id));
             }
        } catch (RuntimeException e) {
        	// Maneja cualquier excepción inesperada
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(new ApiResponse("Error al obtener el user: " + e.getMessage()));
        }
    }
}
