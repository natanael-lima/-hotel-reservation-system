package app.mnhotel.hotel_reservation_system_backend.service.imp;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.mnhotel.hotel_reservation_system_backend.dto.ReservationDTO;
import app.mnhotel.hotel_reservation_system_backend.entity.Reservation;
import app.mnhotel.hotel_reservation_system_backend.exception.ResourceNotFoundException;
import app.mnhotel.hotel_reservation_system_backend.repository.ReservationRepository;
import app.mnhotel.hotel_reservation_system_backend.service.ReservationService;

@Service
public class ReservationServiceImp implements ReservationService{

    @Autowired
    private ReservationRepository reservationRepository;
    
    private ReservationDTO mapToDTO(Reservation reservation) {
        if (reservation == null) {
            return null;
        }
        return ReservationDTO.builder()
                .id(reservation.getId())
                .startDate(reservation.getStartDate())
                .endDate(reservation.getEndDate())
                .status(reservation.getStatus())
                .createdAt(reservation.getCreatedAt())
                //.user(UserDTO.fromEntity(reservation.getUser())) // Assumes UserDTO has a fromEntity method
                //.room(RoomDTO.fromEntity(reservation.getRoom())) // Assumes RoomDTO has a fromEntity method
                //.payments(reservation.getPayments().stream()
                //        .map(PaymentDTO::fromEntity) // Assumes PaymentDTO has a fromEntity method
                //        .collect(Collectors.toList()))
                .build();
    }

    private Reservation mapToEntity(ReservationDTO reservationDTO) {
        if (reservationDTO == null) {
            return null;
        }
        return Reservation.builder()
                .id(reservationDTO.getId())
                .startDate(reservationDTO.getStartDate())
                .endDate(reservationDTO.getEndDate())
                .status(reservationDTO.getStatus())
                .createdAt(reservationDTO.getCreatedAt())
                //.user(UserDTO.toEntity(reservationDTO.getUser())) // Assumes UserDTO has a toEntity method
                //.room(RoomDTO.toEntity(reservationDTO.getRoom())) // Assumes RoomDTO has a toEntity method
                //.payments(reservationDTO.getPayments().stream()
                //        .map(PaymentDTO::toEntity) // Assumes PaymentDTO has a toEntity method
                //        .collect(Collectors.toList()))
                .build();
    }
    
    
	@Override
	public ReservationDTO createReservation(ReservationDTO reservationDTO) throws Exception {
		// TODO Auto-generated method stub
		 Reservation reservation = mapToEntity(reservationDTO);
	     reservation = reservationRepository.save(reservation);
	     return mapToDTO(reservation);
	}

	@Override
	public ReservationDTO updateReservation(Long id, ReservationDTO reservationDTO) throws Exception{
		// TODO Auto-generated method stub
		if (!reservationRepository.existsById(id)) {
            throw new ResourceNotFoundException("Reservation not found with id " + id);
        }
        Reservation reservation = mapToEntity(reservationDTO);
        reservation.setId(id);
        reservation = reservationRepository.save(reservation);
        return mapToDTO(reservation);
	}

	@Override
	public void deleteReservation(Long id) throws Exception{
		// TODO Auto-generated method stub
		 if (!reservationRepository.existsById(id)) {
	            throw new ResourceNotFoundException("Reservation not found with id " + id);
	        }
	        reservationRepository.deleteById(id);
	}

	@Override
	public Optional<ReservationDTO> getReservationById(Long id)throws Exception {
		// TODO Auto-generated method stub
		Optional<Reservation> reservation = reservationRepository.findById(id);
        return reservation.map(this::mapToDTO);
	}

	@Override
	public List<ReservationDTO> getAllReservations() throws Exception{
		// TODO Auto-generated method stub
		List<Reservation> reservations = reservationRepository.findAll();
        return reservations.stream().map(this::mapToDTO).collect(Collectors.toList());
	}

}
