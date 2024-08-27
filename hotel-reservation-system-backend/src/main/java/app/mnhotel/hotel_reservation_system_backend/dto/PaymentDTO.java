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
public class PaymentDTO {

    private Long id;
	private Integer amount;
	private LocalDateTime paymentDate;
	private String status;
 	private ReservationDTO reservation;
}
