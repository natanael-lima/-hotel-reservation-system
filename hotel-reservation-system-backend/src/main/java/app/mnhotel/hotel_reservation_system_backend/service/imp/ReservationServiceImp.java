package app.mnhotel.hotel_reservation_system_backend.service.imp;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import app.mnhotel.hotel_reservation_system_backend.dto.RoomDTO;
import app.mnhotel.hotel_reservation_system_backend.dto.UserDTO;
import app.mnhotel.hotel_reservation_system_backend.entity.Room;
import app.mnhotel.hotel_reservation_system_backend.entity.User;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;
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
	@Autowired
	private UserServiceImp userService;
	@Autowired
	private RoomServiceImp roomService;
    
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
				.userId(reservation.getUser() !=null ? reservation.getUser().getId() : null)
				.roomId(reservation.getRoom() !=null ? reservation.getRoom().getId() : null)
                .build();
    }

    private Reservation mapToEntity(ReservationDTO reservationDTO) throws Exception {
        if (reservationDTO == null) {
            return null;
        }
		//para construir la entidad de reservacion
		UserDTO userDTO= reservationDTO.getUserId()!=null ? userService.getUserById(reservationDTO.getUserId()) : null;
		RoomDTO roomDTO= reservationDTO.getRoomId()!=null ? roomService.getRoom(reservationDTO.getRoomId()).orElse(null) : null;
		Reservation reservation= Reservation.builder()
                .id(reservationDTO.getId())
                .startDate(reservationDTO.getStartDate())
                .endDate(reservationDTO.getEndDate())
                .status(reservationDTO.getStatus())
                .createdAt(reservationDTO.getCreatedAt())
				.user(userDTO == null ? null : User.builder()
						.id(userDTO.getId())
						.username(userDTO.getUsername())
						.fullName(userDTO.getFullName())
						.createdAt(userDTO.getCreatedAt())
						.profileImageUrl(userDTO.getProfileImageUrl())
						.role(userDTO.getRole())
						.build()
				)
				.room(roomDTO == null ? null: Room.builder()
						.id(roomDTO.getId())
						.roomNumber(roomDTO.getRoomNumber())
						.type(roomDTO.getType())
						.pricePerNight(roomDTO.getPricePerNight())
						.availbility(roomDTO.getAvailability())
						.build()
				)
                .build();
		return reservation;
    }
    
    
	@Override
	public ReservationDTO createReservation(ReservationDTO reservationDTO) throws Exception {
		// TODO Auto-generated method stub
		 Reservation reservation = mapToEntity(reservationDTO);
		 reservation.setCreatedAt(LocalDateTime.now());
	     reservation = reservationRepository.save(reservation);
	     return mapToDTO(reservation);
	}

	@Override
	public ApiResponse updateReservation(Long id, ReservationDTO reservationDTO) throws Exception{
		// TODO Auto-generated method stub
		if (!reservationRepository.existsById(id)) {
            throw new ResourceNotFoundException("Reservation not found with id " + id);
        }
		//modificar solo los datos que vienen y mantener los existentes
		ReservationDTO reservationAux= getReservationById(id).orElse(null);
		if(reservationAux!=null) {
			Reservation reservation = Reservation.builder()
					.id(id)
					//este se mantiene ya que no cambia la fecha creada
					.createdAt(reservationAux.getCreatedAt())
					.startDate(reservationDTO.getStartDate() != null ? reservationDTO.getStartDate() : reservationAux.getStartDate())
					.endDate(reservationDTO.getEndDate()!=null ? reservationDTO.getEndDate():reservationAux.getEndDate())
					.status(reservationDTO.getStatus()!=null?reservationDTO.getStatus():reservationAux.getStatus())
					.room(reservationDTO.getRoomId()==null?
							Room.builder()
									.id(reservationAux.getRoomId())
									.build()
							:
							Room.builder()
									.id(reservationDTO.getRoomId())
									.build()
							)
					//el usuario tambien se mantiene ya que es el usuario el que modifica su reserva
					.user(User.builder()
							.id(reservationAux.getUserId())
							.build())
				.build();
			reservation = reservationRepository.save(reservation);
			return new ApiResponse("La reservacion se actualizo correctamente");
		}else{
			return new ApiResponse("La reservacion no se pudo guardar: no existe ID");
		}




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
