package app.mnhotel.hotel_reservation_system_backend.jwt;

import org.springframework.security.core.userdetails.UserDetails;

public interface JwtService {
	public String getToken(UserDetails user);
	public String getUsernameFromToken(String token);
	public boolean isTokenValid(String token, UserDetails userDetails);
	 
}
