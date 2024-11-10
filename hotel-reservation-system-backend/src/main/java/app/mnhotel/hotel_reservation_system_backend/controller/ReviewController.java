package app.mnhotel.hotel_reservation_system_backend.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.mnhotel.hotel_reservation_system_backend.dto.ReviewDTO;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;
import app.mnhotel.hotel_reservation_system_backend.service.ReviewService;

@RestController
@RequestMapping("/api/review")
public class ReviewController {
	 	@Autowired
	    private ReviewService reviewService;

	    @PostMapping("/registration-review")
	    public ResponseEntity<ApiResponse> createReview(@RequestBody ReviewDTO reviewRequest) {
	        if (reviewRequest == null) {
	            return ResponseEntity.badRequest().body(new ApiResponse("Error: la solicitud está vacía"));
	        }
	        try {
	            reviewService.createReview(reviewRequest);
	            return ResponseEntity.ok(new ApiResponse("La reseña se registró exitosamente"));
	        } catch (Exception e) {
	            e.printStackTrace();
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse("Error al registrar la reseña"));
	        }
	    }

	    @PutMapping("/update-review/{id}")
	    public ResponseEntity<ApiResponse> updateReview(@PathVariable Long id, @RequestBody ReviewDTO reviewRequest) {
	        try {
	            reviewRequest.setId(id); // Asegura que el ID del DTO sea el correcto
	            ApiResponse response = reviewService.updateReviewData(reviewRequest);
	            return ResponseEntity.ok(response);
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse("Error al actualizar la reseña"));
	        }
	    }

	    @DeleteMapping("/delete-review/{id}")
	    public ResponseEntity<ApiResponse> deleteReview(@PathVariable Long id) {
	        try {
	            reviewService.deleteReview(id);
	            return ResponseEntity.ok(new ApiResponse("La reseña se eliminó correctamente"));
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("Reseña no encontrada con ID: " + id));
	        }
	    }

	    @GetMapping("/get-all")
	    public ResponseEntity<List<ReviewDTO>> getAllReviews() {
	        try {
	            List<ReviewDTO> allReviews = reviewService.getAllReviews();
	            if (allReviews.isEmpty()) {
	                return ResponseEntity.noContent().build();
	            }
	            return ResponseEntity.ok(allReviews);
	        } catch (Exception e) {
	            e.printStackTrace();
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	        }
	    }

	    @GetMapping("/get-review/{id}")
	    public ResponseEntity<?> getReviewById(@PathVariable Long id) {
	        try {
	            Optional<ReviewDTO> review = reviewService.getReview(id);
	            if (review.isPresent()) {
	                return ResponseEntity.ok(review.get());
	            } else {
	                return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                        .body(new ApiResponse("Reseña no encontrada con ID: " + id));
	            }
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                    .body(new ApiResponse("Error al obtener la reseña: " + e.getMessage()));
	        }
	    }
	}