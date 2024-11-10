package app.mnhotel.hotel_reservation_system_backend.service.imp;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.mnhotel.hotel_reservation_system_backend.dto.PaymentDTO;
import app.mnhotel.hotel_reservation_system_backend.dto.ReservationDTO;
import app.mnhotel.hotel_reservation_system_backend.dto.RoomDTO;
import app.mnhotel.hotel_reservation_system_backend.dto.UserDTO;
import app.mnhotel.hotel_reservation_system_backend.entity.Payment;
import app.mnhotel.hotel_reservation_system_backend.entity.Reservation;
import app.mnhotel.hotel_reservation_system_backend.entity.Room;
import app.mnhotel.hotel_reservation_system_backend.entity.User;
import app.mnhotel.hotel_reservation_system_backend.enums.PaymentStatus;
import app.mnhotel.hotel_reservation_system_backend.repository.PaymentRepository;
import app.mnhotel.hotel_reservation_system_backend.service.PaymentService;

@Service
public class PaymentServiceImp implements PaymentService {

	@Autowired
    private PaymentRepository paymentRepository;
	@Autowired
	private ReservationServiceImp reservationService;
	@Autowired
	private UserServiceImp userService;
	@Autowired
	private RoomServiceImp roomService;
	
	private PaymentDTO mapToDTO(Payment payment) {
	    if (payment == null) {
	        return null;
	    }
	    return PaymentDTO.builder()
	            .id(payment.getId())
	            .amount(payment.getAmount())
	            .paymentDate(payment.getPaymentDate())
	            .status(payment.getStatus())
	            .idReservation(payment.getReservation() != null ? payment.getReservation().getId() : null)
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

	
	private Payment mapToEntity(PaymentDTO paymentDTO) throws Exception {
	    if (paymentDTO == null) {
	        return null;
	    }

	    Reservation reservation = null;

	    if (paymentDTO.getIdReservation() != null) {
	        // Obtener el ReservationDTO usando el idReservation
	        ReservationDTO reservationDTO = reservationService.getReservationById(paymentDTO.getIdReservation())
	                .orElseThrow(() -> new Exception("Reservation not found with id: " + paymentDTO.getIdReservation()));

	        // Convertir el ReservationDTO a la entidad Reservation
	        reservation = mapToEntity(reservationDTO);  // Método que convierte de DTO a entidad
	    }

	    return Payment.builder()
	            .id(paymentDTO.getId())
	            .amount(paymentDTO.getAmount())
	            .paymentDate(paymentDTO.getPaymentDate())
	            .status(paymentDTO.getStatus())
	            .reservation(reservation)  // Asignar la entidad Reservation
	            .build();
	}


	
	@Override
	public PaymentDTO createPayment(PaymentDTO paymentDTO) throws Exception {
		// TODO Auto-generated method stub
		// Convertir DTO a entidad
	    Payment payment = mapToEntity(paymentDTO);

	    // Guardar el pago en la base de datos
	    Payment savedPayment = paymentRepository.save(payment);

	    // Retornar el DTO del pago guardado
	    return mapToDTO(savedPayment);
	}

	@Override
	public PaymentDTO getPaymentDetails(Long paymentId) throws Exception {
		Long id = Long.valueOf(paymentId);
	    // Obtener el pago por ID
	    Payment payment = paymentRepository.findById(id)
	            .orElseThrow(() -> new Exception("Payment no encontrado"));

	    // Convertir la entidad a DTO
	    return mapToDTO(payment);
	}

	@Override
	public void cancelPayment(Long paymentId) throws Exception {
		// TODO Auto-generated method stub
		  Long id = Long.valueOf(paymentId);
		  // Verificar si el pago existe
		  Payment payment = paymentRepository.findById(id)
		            .orElseThrow(() -> new Exception("Payment no encontrado"));

		  // Implementar la lógica para cancelar el pago (puede variar según tus requerimientos)
		  payment.setStatus(PaymentStatus.CANCELLED);
		    
		  // Guardar los cambios
		  paymentRepository.save(payment);	
	}

	@Override
	public List<PaymentDTO> getAllPayments() throws Exception {
		// TODO Auto-generated method stub
		// Obtener todos los pagos y convertir a DTO
	    return paymentRepository.findAll().stream()
	            .map(this::mapToDTO)
	            .collect(Collectors.toList());
	}

}
