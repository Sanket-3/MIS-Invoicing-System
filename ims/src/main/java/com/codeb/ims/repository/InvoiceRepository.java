package com.codeb.ims.repository;

import com.codeb.ims.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface InvoiceRepository extends JpaRepository<Invoice,Long>{

    List<Invoice> findByIsActiveTrue();

}