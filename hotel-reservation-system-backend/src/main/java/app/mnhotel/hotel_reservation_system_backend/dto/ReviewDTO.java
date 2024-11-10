package app.mnhotel.hotel_reservation_system_backend.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDTO {

	private Long id;
    private Integer rating;
    private String comment;
    private LocalDateTime createdAt;
    
    // Información del usuario que escribió la reseña
    private Long userId;
    
    // Información del hotel sobre el que se escribió la reseña
    private Long hotelId;
}
