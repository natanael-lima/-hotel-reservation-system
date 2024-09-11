package app.mnhotel.hotel_reservation_system_backend.dto;

import java.time.LocalDateTime;
import java.util.List;

import app.mnhotel.hotel_reservation_system_backend.enums.RoleType;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
	private Long id;
    private String username;
    private String fullName;
    private LocalDateTime createdAt;
    private String profileImageUrl;
    private RoleType role; 
    
    // Opcionalmente, puedes incluir listas de IDs o DTOs relacionados
    private List<Long> reservationIds;
    private List<ReviewDTO> reviews;
    
    
	}
