package com.codeb.ims.repository;

import com.codeb.ims.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {

    List<Brand> findByIsActiveTrue();

}