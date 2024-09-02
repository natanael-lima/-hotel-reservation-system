package app.mnhotel.hotel_reservation_system_backend.service.imp;

import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import app.mnhotel.hotel_reservation_system_backend.entity.User;
import app.mnhotel.hotel_reservation_system_backend.jwt.JwtService;
import app.mnhotel.hotel_reservation_system_backend.repository.UserRepository;
import app.mnhotel.hotel_reservation_system_backend.request.LoginRequest;
import app.mnhotel.hotel_reservation_system_backend.request.RegisterRequest;
import app.mnhotel.hotel_reservation_system_backend.response.AuthResponse;
import app.mnhotel.hotel_reservation_system_backend.service.AuthService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImp implements AuthService{
	@Autowired
	private  UserRepository	userRepository;
	@Autowired
	private final JwtService jwtService;
	
	private final PasswordEncoder passwordEncoder;
	
	private final AuthenticationManager authenticationManager;

	@Override
	public AuthResponse registerUser(RegisterRequest request) {
		// TODO Auto-generated method stub
		// Construir el objeto User
		User user = User.builder()
		        .username(request.getUsername())
		        .password(passwordEncoder.encode(request.getPassword()))
		        .email(request.getEmail())
		        .createdAt(LocalDateTime.now())
		        //.role(RoleType.USER)
		        .build();

		// Guardar el usuario en la base de datos
		userRepository.save(user);

		// Crear y devolver la respuesta de autenticación
		return AuthResponse.builder()
		        .token(jwtService.getToken(user))
		        .build();
	}
	
	@Override
	public AuthResponse loginUser(LoginRequest request) {
		// TODO Auto-generated method stub
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails user=userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token=jwtService.getToken(user);
        return AuthResponse.builder()
            .token(token)
            .build();
	}
	
}
