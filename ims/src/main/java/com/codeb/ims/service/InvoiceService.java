package com.codeb.ims.service;

import com.codeb.ims.model.Invoice;
import java.util.List;

public interface InvoiceService {

    Invoice createInvoice(Invoice invoice);

    List<Invoice> getAllInvoices();

    Invoice updateInvoice(Long id, Invoice invoice);

    void deleteInvoice(Long id);

}