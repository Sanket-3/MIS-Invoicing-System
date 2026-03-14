package com.codeb.ims.controller;

import com.codeb.ims.model.Invoice;
import com.codeb.ims.service.InvoiceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoices")
@CrossOrigin
public class InvoiceController {

    private final InvoiceService invoiceService;

    public InvoiceController(InvoiceService invoiceService){
        this.invoiceService = invoiceService;
    }

    @PostMapping
    public Invoice createInvoice(@RequestBody Invoice invoice){
        return invoiceService.createInvoice(invoice);
    }

    @GetMapping
    public List<Invoice> getAllInvoices(){
        return invoiceService.getAllInvoices();
    }

    @PutMapping("/{id}")
    public Invoice updateInvoice(@PathVariable Long id,@RequestBody Invoice invoice){
        return invoiceService.updateInvoice(id,invoice);
    }

    @DeleteMapping("/{id}")
    public void deleteInvoice(@PathVariable Long id){
        invoiceService.deleteInvoice(id);
    }

}