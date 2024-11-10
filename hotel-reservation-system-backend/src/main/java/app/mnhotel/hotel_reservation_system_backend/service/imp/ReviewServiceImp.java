package app.mnhotel.hotel_reservation_system_backend.service.imp;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.mnhotel.hotel_reservation_system_backend.dto.ReviewDTO;
import app.mnhotel.hotel_reservation_system_backend.entity.Hotel;
import app.mnhotel.hotel_reservation_system_backend.entity.Review;
import app.mnhotel.hotel_reservation_system_backend.entity.User;
import app.mnhotel.hotel_reservation_system_backend.repository.HotelRepository;
import app.mnhotel.hotel_reservation_system_backend.repository.ReviewRepository;
import app.mnhotel.hotel_reservation_system_backend.repository.UserRepository;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;
import app.mnhotel.hotel_reservation_system_backend.service.ReviewService;

@Service
public class ReviewServiceImp implements ReviewService{

	@Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private HotelRepository hotelRepository;
    @Autowired
    private UserRepository userRepository;

    // Convertir de entidad a DTO
    private ReviewDTO convertEntityToDTO(Review review) {
        if (review == null) {
            return null;
        }

        return ReviewDTO.builder()
                .id(review.getId())
                .rating(review.getRating())
                .comment(review.getComment())
                .createdAt(review.getCreatedAt())
                .userId(review.getUser() != null ? review.getUser().getId() : null)
                .hotelId(review.getHotel() != null ? review.getHotel().getId() : null)
                .build();
    }

    // Convertir de DTO a entidad
    private Review convertDTOToEntity(ReviewDTO reviewDTO, User user, Hotel hotel) {
        if (reviewDTO == null) {
            return null;
        }

        Review review = new Review();
        review.setId(reviewDTO.getId());
        review.setRating(reviewDTO.getRating());
        review.setComment(reviewDTO.getComment());
        review.setCreatedAt(reviewDTO.getCreatedAt());
        review.setUser(user);
        review.setHotel(hotel);

        return review;
    }

    @Override
    public void createReview(ReviewDTO reviewRequest) throws Exception {
        try {
            Review review = new Review();
            review.setId(reviewRequest.getId());
            review.setRating(reviewRequest.getRating());
            review.setComment(reviewRequest.getComment());
            review.setCreatedAt(reviewRequest.getCreatedAt());

            if (reviewRequest.getUserId() != null) {
                User user = userRepository.findById(reviewRequest.getUserId())
                        .orElseThrow(() -> new Exception("User not found"));
                review.setUser(user);
            }

            if (reviewRequest.getHotelId() != null) {
                Hotel hotel = hotelRepository.findById(reviewRequest.getHotelId())
                        .orElseThrow(() -> new Exception("Hotel not found"));
                review.setHotel(hotel);
            }

            reviewRepository.save(review);

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public void deleteReview(Long id) throws Exception {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new Exception("Review not found"));
        
        reviewRepository.deleteById(id);
    }

    @Override
    public ApiResponse updateReviewData(ReviewDTO reviewRequest) throws Exception {
        Review review = reviewRepository.findById(reviewRequest.getId())
                .orElseThrow(() -> new Exception("Review not found"));

        review.setRating(reviewRequest.getRating());
        review.setComment(reviewRequest.getComment());
        
        reviewRepository.save(review);
        
        return new ApiResponse("The review was successfully updated");
    }

    @Override
    public Optional<ReviewDTO> getReview(Long id) throws Exception {
        return reviewRepository.findById(id)
                .map(this::convertEntityToDTO);
    }

    @Override
    public List<ReviewDTO> getAllReviews() throws Exception {
        return reviewRepository.findAll().stream()
                .map(this::convertEntityToDTO)
                .collect(Collectors.toList());
    }

	
}