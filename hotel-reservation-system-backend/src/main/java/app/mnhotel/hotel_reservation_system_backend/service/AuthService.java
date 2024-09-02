package app.mnhotel.hotel_reservation_system_backend.service;

import app.mnhotel.hotel_reservation_system_backend.request.LoginRequest;
import app.mnhotel.hotel_reservation_system_backend.request.RegisterRequest;
import app.mnhotel.hotel_reservation_system_backend.response.AuthResponse;

public interface AuthService {

	public AuthResponse loginUser (LoginRequest request);
	public AuthResponse registerUser(RegisterRequest request);
}
