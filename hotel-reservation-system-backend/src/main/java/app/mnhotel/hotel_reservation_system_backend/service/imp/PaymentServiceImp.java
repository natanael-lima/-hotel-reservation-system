package app.mnhotel.hotel_reservation_system_backend.service.imp;

import java.util.List;

import org.springframework.stereotype.Service;

import app.mnhotel.hotel_reservation_system_backend.dto.PaymentDTO;
import app.mnhotel.hotel_reservation_system_backend.service.PaymentService;

@Service
public class PaymentServiceImp implements PaymentService {

	@Override
	public PaymentDTO createPayment(PaymentDTO paymentDTO) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PaymentDTO getPaymentDetails(String paymentId) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void cancelPayment(String paymentId) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<PaymentDTO> listPayments() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
