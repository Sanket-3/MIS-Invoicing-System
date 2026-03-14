package com.codeb.ims.repository;

import com.codeb.ims.model.Zone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ZoneRepository extends JpaRepository<Zone, Long> {

    List<Zone> findByIsActiveTrue();

    // FIXED METHOD
    List<Zone> findByBrand_BrandId(Long brandId);

}