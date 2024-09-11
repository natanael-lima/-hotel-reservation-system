package app.mnhotel.hotel_reservation_system_backend.dto;

import java.util.List;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HotelDTO {

    private Long id;
	private String name;
    private String location;
	private String description;
	private Double rating;
	private String image;
	private String province;
	
	// Opcional: Nombres de habitaciones o sus IDs
    private List<Long> roomIds;
    
    // Opcional: Información de reseñas como DTO o sólo IDs
    private List<ReviewDTO> reviews;
}
