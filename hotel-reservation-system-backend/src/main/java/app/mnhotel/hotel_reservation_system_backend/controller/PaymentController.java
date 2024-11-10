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
import app.mnhotel.hotel_reservation_system_backend.dto.PaymentDTO;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;
import app.mnhotel.hotel_reservation_system_backend.service.PaymentService;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

	 @Autowired
	 private PaymentService paymentService;
	 
	 @PostMapping("/registration-payment")
	    public ResponseEntity<ApiResponse> createPayment(@RequestBody PaymentDTO paymentRequest){
	        
	        if(paymentRequest==null){
	            return ResponseEntity.badRequest().body(new ApiResponse("Error: la solicitud están vacíos"));
	        }
	        try{
	        	paymentService.createPayment(paymentRequest);
	            return ResponseEntity.ok(new ApiResponse("El pago se registro exitosamente"));
	        }catch (Exception e){
	            e.printStackTrace();
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	        }
	    }

	    @PutMapping("/cancel-payment/{id}")
	    public ResponseEntity<ApiResponse> cancelPayment(@PathVariable Long id) throws Exception{
	        try{
	        	paymentService.cancelPayment(id);
	            return ResponseEntity.ok(new ApiResponse("El pago se cancelo correctamente"));
	        }catch(RuntimeException e) {
	            return ResponseEntity.noContent().build();
	        }
	    }

	    @GetMapping("/get-all")
	    public ResponseEntity<List<PaymentDTO>> findAllReservation(){
	        try{
	            List<PaymentDTO> all= paymentService.getAllPayments();
	            if (all.isEmpty()) {
	                return ResponseEntity.noContent().build();
	            }
	            return ResponseEntity.ok(all);
	        }catch(Exception e){
	            e.printStackTrace(); // Para depuración
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	        }
	    }

	    @GetMapping("/get-payment-details/{id}")
	    public ResponseEntity<?> findReservationById(@PathVariable Long id) throws Exception{
	        try{
	            PaymentDTO payment = paymentService.getPaymentDetails(id);
	            if (payment!=null){
	                return ResponseEntity.ok(payment);
	            }else {
	                return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                        .body(new ApiResponse("Payment no encontrado con ID: " + id));
	            }
	        }catch(RuntimeException e){
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                    .body(new ApiResponse("Error al obtener la payment: " + e.getMessage()));
	        }
	    }
}
