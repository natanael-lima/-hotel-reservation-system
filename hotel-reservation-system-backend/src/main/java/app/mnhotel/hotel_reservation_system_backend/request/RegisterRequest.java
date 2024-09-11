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
	
	private Long id;
    private String username; // Aquí se almacenará el email
    private String password;
    private String fullName; // Cambiado de `fullname` a `fullName` para seguir el estándar de Java
    private String profileImageUrl;
    private LocalDateTime createdAt;
}

