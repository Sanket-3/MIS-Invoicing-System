package com.codeb.ims.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.codeb.ims.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
