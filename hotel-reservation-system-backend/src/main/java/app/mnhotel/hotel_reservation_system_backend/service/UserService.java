package app.mnhotel.hotel_reservation_system_backend.service;

import java.util.List;
import java.util.Optional;
import app.mnhotel.hotel_reservation_system_backend.dto.GoogleUserDTO;
import app.mnhotel.hotel_reservation_system_backend.dto.UserDTO;
import app.mnhotel.hotel_reservation_system_backend.request.RegisterRequest;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;

public interface UserService {
	
	void createUser(RegisterRequest request) throws Exception;
	void deleteUser(Long id) throws Exception;
	ApiResponse updateUser(Long id, UserDTO userDTO) throws Exception;
    UserDTO getUserById(Long id) throws Exception;
    List<UserDTO> getAllUsers();
    UserDTO registerOrLoginWithGoogle(GoogleUserDTO googleUserDTO) throws Exception;
    
    // void changePassword(Long userId, String currentPassword, String newPassword) throws Exception;
    //public boolean existsByName(String name);
	//public boolean existsAdminRole();
	//public boolean existsUsername(String name);
	//Optional<User> findByUsername(String username);
	
}
