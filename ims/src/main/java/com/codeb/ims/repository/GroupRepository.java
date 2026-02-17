package com.codeb.ims.repository;

import com.codeb.ims.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

    // Used by GroupController (case-insensitive check)
    Optional<Group> findByNameIgnoreCase(String name);

    // Used by GroupServiceImpl
    Optional<Group> findByName(String name);

    // Used to fetch only active groups
    List<Group> findByIsActiveTrue();
}
