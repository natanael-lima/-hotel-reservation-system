package app.mnhotel.hotel_reservation_system_backend.entity;

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
@Table(name = "rooms")
public class Room {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "hotel_id")
 	@JsonBackReference
 	private Hotel hotel;
	
	@Column(name="room_number")
    private String roomNumber;
	
	@Column(name="type")
	private String type;
	
	@Column(name="price_per_night")
	private Integer pricePerNight;
	
	@Column(name="availbility")
	private Boolean availbility;

}
