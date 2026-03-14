package com.codeb.ims.repository;

import com.codeb.ims.model.Estimate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EstimateRepository extends JpaRepository<Estimate, Long> {

    List<Estimate> findByIsActiveTrue();
}