package app.mnhotel.hotel_reservation_system_backend.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
@Entity
@Table(name = "reservations")
public class Reservation {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(name="start_date")
	private LocalDateTime start_date;
	
	@Column(name="end_date")
	private LocalDateTime end_date;
	
	@Column(name="status")
	private String status;
	
	@Column(name="created_at")
	private LocalDateTime created_at;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
 	@JsonBackReference
 	private User user;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "room_id")
 	@JsonBackReference
 	private Room room;
	
	@OneToMany(mappedBy = "reservation", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Payment> payments;
}
