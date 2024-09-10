package app.mnhotel.hotel_reservation_system_backend.service.imp;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.mnhotel.hotel_reservation_system_backend.dto.GoogleUserDTO;
import app.mnhotel.hotel_reservation_system_backend.dto.UserDTO;
import app.mnhotel.hotel_reservation_system_backend.entity.User;
import app.mnhotel.hotel_reservation_system_backend.repository.UserRepository;
import app.mnhotel.hotel_reservation_system_backend.request.RegisterRequest;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;
import app.mnhotel.hotel_reservation_system_backend.service.UserService;

@Service
public class UserServiceImp implements UserService{

	 	@Autowired
	    private UserRepository userRepository;
	 	
	 	  private UserDTO convertEntityToDTO(User user) {
		        // Implement conversion from User entity to UserDTO
		        return UserDTO.builder()
		                .id(user.getId())
		                .username(user.getUsername())
		                .email(user.getEmail())
		                .createdAt(user.getCreatedAt())
		                // Add other fields as needed
		                .build();
		    }

		    private User convertDTOToEntity(UserDTO userDTO) {
		        // Implement conversion from UserDTO to User entity
		        return User.builder()
		                .id(userDTO.getId())
		                .username(userDTO.getUsername())
		                //.password(userDTO.getPassword())
		                .email(userDTO.getEmail())
		                .createdAt(userDTO.getCreatedAt())
		                // Add other fields as needed
		                .build();
		    }
	 	
		@Override
	    public void createUser(RegisterRequest request) throws Exception { 
		         try {	

		        	 User user = new User();
		        	 	user.setId(request.getId());
		 		 		user.setUsername(request.getUsername());
		 		 		user.setPassword(request.getPassword());
		 		 		user.setEmail(request.getEmail());
		 		 		user.setCreatedAt(request.getCreatedAt());
		 		       userRepository.save(user);
		 	 		
		 		} catch (Exception e) {
		 	        throw new Exception(e.getMessage());
		 	    }   
		}    
		
		@Override
		public void deleteUser(Long id) throws Exception {
		      User user = userRepository.findById(id)
		            .orElseThrow(() -> new Exception("User not found"));
		      userRepository.delete(user);
		}
		
	    @Override
		public ApiResponse updateUser(Long id, UserDTO userDTO) throws Exception {
		        User existingUser = userRepository.findById(id)
		            .orElseThrow(() -> new Exception("User not found"));
		        // Update user fields
		        existingUser.setUsername(userDTO.getUsername());
		        existingUser.setEmail(userDTO.getEmail());
		        //existingUser.setCreatedAt(date);
		        // Add other fields as needed
		        userRepository.save(existingUser);
		        return new ApiResponse("El Room se actualizó satisfactoriamente");
		}
	    @Override
	    public UserDTO getUserById(Long id) throws Exception {
	        User user = userRepository.findById(id)
	           .orElseThrow(() -> new Exception("User not found"));
	        return convertEntityToDTO(user);
	    }
	    @Override
	    public Optional<UserDTO> getUser(Long id) throws Exception {
	        return userRepository.findById(id)
			        .map(this::convertEntityToDTO);
	    }

	    @Override
	    public List<UserDTO> getAllUsers() {
	        List<User> users = userRepository.findAll();
	        return users.stream().map(this::convertEntityToDTO).collect(Collectors.toList());
	    }

	    @Override
	    public UserDTO registerOrLoginWithGoogle(GoogleUserDTO googleUserDTO) throws Exception {
	        // Implement logic to handle Google registration or login
	    	// Verificar si el usuario ya existe en la base de datos usando el ID de Google o el correo electrónico
	        /*User user = userRepository.findByEmail(googleUserDTO.getEmail());
	        if (user == null) {
	            // Si el usuario no existe, crear uno nuevo
	            user = User.builder()
	                .username(googleUserDTO.getName())
	                .email(googleUserDTO.getEmail())
	                .password("N/A") // Puedes manejar el password de una forma diferente o dejarlo vacío
	                .createdAt(LocalDateTime.now())
	                .build();
	        } else {
	            // Si el usuario ya existe, actualizar información si es necesario
	            user.setUsername(googleUserDTO.getName());
	            // Puedes actualizar otros campos si es necesario
	        }

	        // Guardar el usuario en la base de datos
	        User savedUser = userRepository.save(user);

	        // Retornar el UserDTO
	        return convertEntityToDTO(savedUser);*/
	    	return null;
	    }

	  
}
