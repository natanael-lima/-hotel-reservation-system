package app.mnhotel.hotel_reservation_system_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoomDTO {
	private Long id;
    private String roomNumber;
    private String type;
    private Integer pricePerNight;
    private Boolean availability;

    // Información del hotel asociado (opcional)
    private Long hotelId;  // O usa HotelDTO si prefieres incluir detalles del hotel
}
