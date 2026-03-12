package com.codeb.ims.repository;

import com.codeb.ims.model.Chain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChainRepository extends JpaRepository<Chain, Long> {

    List<Chain> findByIsActiveTrue();

    boolean existsByGstn(String gstn);
}