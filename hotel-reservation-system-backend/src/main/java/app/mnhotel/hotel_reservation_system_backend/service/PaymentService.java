package app.mnhotel.hotel_reservation_system_backend.service;

import java.util.List;

import app.mnhotel.hotel_reservation_system_backend.dto.PaymentDTO;
import app.mnhotel.hotel_reservation_system_backend.dto.ReservationDTO;

public interface PaymentService {
	 // Método para crear un nuevo pago
    public PaymentDTO createPayment(PaymentDTO paymentDTO) throws Exception;

    // Método para obtener detalles de un pago existente
    public PaymentDTO getPaymentDetails(String paymentId) throws Exception;

    // Método para cancelar un pago
    public void cancelPayment(String paymentId) throws Exception;

    // Método para listar todos los pagos realizados
    public List<PaymentDTO> listPayments() throws Exception;

    // Método para verificar el estado de un pago
    //public PaymentStatusDTO checkPaymentStatus(String paymentId) throws Exception;
}
