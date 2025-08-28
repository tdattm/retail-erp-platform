package com.optima.authentication.repository;

import com.optima.authentication.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsernameOrEmail(String u, String e);
    boolean existsByUsernameOrEmail(String u, String e);
}
