package app.mnhotel.hotel_reservation_system_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import app.mnhotel.hotel_reservation_system_backend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

	Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    //@Query("SELECT u FROM User u WHERE u.username = :username AND u.email = :email")
    //Optional<User> findByUsernameAndEmail(@Param("username") String username, @Param("email") String email);
    
}
