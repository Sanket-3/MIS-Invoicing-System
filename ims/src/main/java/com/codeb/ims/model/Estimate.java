package com.codeb.ims.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "estimates")
public class Estimate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "chain_id", nullable = false)
    private Chain chain;

    private String groupName;
    private String brandName;
    private String zoneName;

    private String service;

    private Integer qty;

    private Double costPerUnit;

    private Double totalCost;

    private LocalDate deliveryDate;

    private String deliveryDetails;

    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime updatedAt;

    private Boolean isActive = true;

    // Getters
    public Long getId() { return id; }
    public Chain getChain() { return chain; }
    public String getGroupName() { return groupName; }
    public String getBrandName() { return brandName; }
    public String getZoneName() { return zoneName; }
    public String getService() { return service; }
    public Integer getQty() { return qty; }
    public Double getCostPerUnit() { return costPerUnit; }
    public Double getTotalCost() { return totalCost; }
    public LocalDate getDeliveryDate() { return deliveryDate; }
    public String getDeliveryDetails() { return deliveryDetails; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setChain(Chain chain) { this.chain = chain; }
    public void setGroupName(String groupName) { this.groupName = groupName; }
    public void setBrandName(String brandName) { this.brandName = brandName; }
    public void setZoneName(String zoneName) { this.zoneName = zoneName; }
    public void setService(String service) { this.service = service; }
    public void setQty(Integer qty) { this.qty = qty; }
    public void setCostPerUnit(Double costPerUnit) { this.costPerUnit = costPerUnit; }
    public void setTotalCost(Double totalCost) { this.totalCost = totalCost; }
    public void setDeliveryDate(LocalDate deliveryDate) { this.deliveryDate = deliveryDate; }
    public void setDeliveryDetails(String deliveryDetails) { this.deliveryDetails = deliveryDetails; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }
}