package app.mnhotel.hotel_reservation_system_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import app.mnhotel.hotel_reservation_system_backend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

}
