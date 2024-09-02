package app.mnhotel.hotel_reservation_system_backend.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GoogleUserDTO {
    private String email;
    private String name;
    private String picture;
    private String googleId; // El ID único de Google para el usuario
}
