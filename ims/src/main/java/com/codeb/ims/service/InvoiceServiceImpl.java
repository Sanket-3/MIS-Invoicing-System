package com.codeb.ims.service;

import com.codeb.ims.model.Invoice;
import com.codeb.ims.repository.InvoiceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceServiceImpl implements InvoiceService {

    private final InvoiceRepository invoiceRepository;

    public InvoiceServiceImpl(InvoiceRepository invoiceRepository){
        this.invoiceRepository = invoiceRepository;
    }

    @Override
    public Invoice createInvoice(Invoice invoice){

        int invoiceNo = (int)(Math.random()*9000)+1000;
        invoice.setInvoiceNo(invoiceNo);

        return invoiceRepository.save(invoice);
    }

    @Override
    public List<Invoice> getAllInvoices(){
        return invoiceRepository.findByIsActiveTrue();
    }

    @Override
    public Invoice updateInvoice(Long id,Invoice updated){

        Invoice invoice = invoiceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Invoice not found"));

        invoice.setEmailId(updated.getEmailId());

        return invoiceRepository.save(invoice);
    }

    @Override
    public void deleteInvoice(Long id){

        Invoice invoice = invoiceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Invoice not found"));

        invoice.setIsActive(false);

        invoiceRepository.save(invoice);
    }
}