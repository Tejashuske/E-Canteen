package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.backend.model.USER_ROLE;
import com.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {  

    User findByUserName(String userName);
    boolean existsByUserName(String userName);
    List<User> findByRole(USER_ROLE role);
}
