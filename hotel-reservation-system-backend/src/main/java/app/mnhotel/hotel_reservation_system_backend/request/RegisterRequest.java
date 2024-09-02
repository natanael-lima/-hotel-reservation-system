package app.mnhotel.hotel_reservation_system_backend.request;


import java.time.LocalDateTime;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
	
	Long id;
    String username;
    String password;
    String email;
    LocalDateTime createdAt;
}

