package app.mnhotel.hotel_reservation_system_backend.service;

import java.util.List;
import java.util.Optional;

import app.mnhotel.hotel_reservation_system_backend.dto.ReservationDTO;

public interface ReservationService {
	ReservationDTO createReservation(ReservationDTO reservationDTO)throws Exception;
    ReservationDTO updateReservation(Long id, ReservationDTO reservationDTO)throws Exception;
    void deleteReservation(Long id)throws Exception;
    Optional<ReservationDTO> getReservationById(Long id)throws Exception;
    List<ReservationDTO> getAllReservations()throws Exception;
}
