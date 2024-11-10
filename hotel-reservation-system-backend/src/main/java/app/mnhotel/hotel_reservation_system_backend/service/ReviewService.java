package app.mnhotel.hotel_reservation_system_backend.service;

import java.util.List;
import java.util.Optional;

import app.mnhotel.hotel_reservation_system_backend.dto.ReviewDTO;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;

public interface ReviewService {

	 	public void createReview(ReviewDTO reviewRequest) throws Exception;
	    public void deleteReview(Long id) throws Exception;
	    public ApiResponse updateReviewData(ReviewDTO reviewRequest) throws Exception;
	    public Optional<ReviewDTO> getReview(Long id) throws Exception;
	    public List<ReviewDTO> getAllReviews() throws Exception;
}
