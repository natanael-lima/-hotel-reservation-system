package app.mnhotel.hotel_reservation_system_backend.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lombok.Value;

@Configuration
public class MercadoPagoConfig {

    //@Value("${mercadopago.access.token}")
    private String accessToken;

    //@Bean
    //public void init() {
    //    MercadoPago.configure("YOUR_ACCESS_TOKEN_HERE"); // Reemplaza con tu Access Token
    //}
}