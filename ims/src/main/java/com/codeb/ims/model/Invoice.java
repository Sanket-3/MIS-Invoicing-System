package com.codeb.ims.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "invoices")
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer invoiceNo;

    @ManyToOne
    @JoinColumn(name = "estimate_id")
    private Estimate estimate;

    @ManyToOne
    @JoinColumn(name = "chain_id")
    private Chain chain;

    private String serviceDetails;

    private Integer qty;

    private Double costPerQty;

    private Double amountPayable;

    private Double amountPaid;

    private Double balance;

    private LocalDate dateOfService;

    private LocalDateTime dateOfPayment;

    private String deliveryDetails;

    private String emailId;

    private Boolean isActive = true;

    private LocalDateTime createdAt = LocalDateTime.now();

    // ---------- GETTERS ----------

    public Long getId() {
        return id;
    }

    public Integer getInvoiceNo() {
        return invoiceNo;
    }

    public Estimate getEstimate() {
        return estimate;
    }

    public Chain getChain() {
        return chain;
    }

    public String getServiceDetails() {
        return serviceDetails;
    }

    public Integer getQty() {
        return qty;
    }

    public Double getCostPerQty() {
        return costPerQty;
    }

    public Double getAmountPayable() {
        return amountPayable;
    }

    public Double getAmountPaid() {
        return amountPaid;
    }

    public Double getBalance() {
        return balance;
    }

    public LocalDate getDateOfService() {
        return dateOfService;
    }

    public LocalDateTime getDateOfPayment() {
        return dateOfPayment;
    }

    public String getDeliveryDetails() {
        return deliveryDetails;
    }

    public String getEmailId() {
        return emailId;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    // ---------- SETTERS ----------

    public void setId(Long id) {
        this.id = id;
    }

    public void setInvoiceNo(Integer invoiceNo) {
        this.invoiceNo = invoiceNo;
    }

    public void setEstimate(Estimate estimate) {
        this.estimate = estimate;
    }

    public void setChain(Chain chain) {
        this.chain = chain;
    }

    public void setServiceDetails(String serviceDetails) {
        this.serviceDetails = serviceDetails;
    }

    public void setQty(Integer qty) {
        this.qty = qty;
    }

    public void setCostPerQty(Double costPerQty) {
        this.costPerQty = costPerQty;
    }

    public void setAmountPayable(Double amountPayable) {
        this.amountPayable = amountPayable;
    }

    public void setAmountPaid(Double amountPaid) {
        this.amountPaid = amountPaid;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public void setDateOfService(LocalDate dateOfService) {
        this.dateOfService = dateOfService;
    }

    public void setDateOfPayment(LocalDateTime dateOfPayment) {
        this.dateOfPayment = dateOfPayment;
    }

    public void setDeliveryDetails(String deliveryDetails) {
        this.deliveryDetails = deliveryDetails;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}