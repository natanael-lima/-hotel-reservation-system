package app.mnhotel.hotel_reservation_system_backend.service.imp;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import app.mnhotel.hotel_reservation_system_backend.dto.GoogleUserDTO;
import app.mnhotel.hotel_reservation_system_backend.dto.UserDTO;
import app.mnhotel.hotel_reservation_system_backend.entity.User;
import app.mnhotel.hotel_reservation_system_backend.enums.RoleType;
import app.mnhotel.hotel_reservation_system_backend.jwt.JwtService;
import app.mnhotel.hotel_reservation_system_backend.repository.UserRepository;
import app.mnhotel.hotel_reservation_system_backend.request.RegisterRequest;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;
import app.mnhotel.hotel_reservation_system_backend.service.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService{

	 	@Autowired
	    private UserRepository userRepository;
	 	
	 	private final PasswordEncoder passwordEncoder;
	 	
	 	  private UserDTO convertEntityToDTO(User user) {
		        // Implement conversion from User entity to UserDTO
		        return UserDTO.builder()
		                .id(user.getId())
		                .username(user.getUsername())
		                .fullName(user.getFullName())
		                .createdAt(user.getCreatedAt())
		                .profileImageUrl(user.getProfileImageUrl())
		                .role(user.getRole())
		                // Add other fields as needed
		                .build();
		    }

		    private User convertDTOToEntity(UserDTO userDTO) {
		        // Implement conversion from UserDTO to User entity
		        return User.builder()
		                .id(userDTO.getId())
		                .username(userDTO.getUsername())
		                .fullName(userDTO.getFullName())
		                .createdAt(userDTO.getCreatedAt())
		                .profileImageUrl(userDTO.getProfileImageUrl())
		                .role(userDTO.getRole())
		                // Add other fields as needed
		                .build();
		    }
	 	
		@Override
	    public void createUser(RegisterRequest request) throws Exception { 
		         try {	
		        	 
		        	 User user = User.builder()
		     		        .username(request.getUsername())
		     		        .password(passwordEncoder.encode(request.getPassword()))
		     		        .fullName(request.getFullName())
		     		        .createdAt(LocalDateTime.now())
		     		        .profileImageUrl(request.getProfileImageUrl())
		     		        .role(RoleType.USER)
		     		        .build();
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
		        // Actualiza los campos del usuario
		        if (userDTO.getUsername() != null) {
		            existingUser.setUsername(userDTO.getUsername()); // Actualiza el email
		        }

		        if (userDTO.getFullName() != null) {
		            existingUser.setFullName(userDTO.getFullName()); // Actualiza el nombre completo
		        }

		        if (userDTO.getProfileImageUrl() != null) {
		            existingUser.setProfileImageUrl(userDTO.getProfileImageUrl()); // Actualiza la URL de la imagen
		        }

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
		public Optional<User>findByUsername(String username) {
			// TODO Auto-generated method stub
			Optional<User> result= userRepository.findByUsername(username);
			
			return result;
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
