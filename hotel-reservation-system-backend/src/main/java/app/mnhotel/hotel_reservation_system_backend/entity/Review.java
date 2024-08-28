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

@Data
@Builder
@AllArgsConstructor
@Entity
@Table(name = "reviews")
public class Review {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(name="rating")
	private Integer rating;
	
	@Column(name="comment")
	private String comment;
	
	@Column(name="created_at")
	private LocalDateTime createdAt;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
 	@JsonBackReference
 	private User user;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "hotel_id")
 	@JsonBackReference
 	private Hotel hotel;

}
