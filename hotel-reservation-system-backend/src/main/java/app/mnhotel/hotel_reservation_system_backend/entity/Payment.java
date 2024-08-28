package app.mnhotel.hotel_reservation_system_backend.entity;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "payments")
public class Payment {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(name="amount")
	private Integer amount;
	
	@Column(name="payment_date")
	private LocalDateTime paymentDate;
	
	@Column(name="status")
	private String status;

	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "reservation_id")
 	@JsonBackReference
 	private Reservation reservation;
}
