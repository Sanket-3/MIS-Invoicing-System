package com.codeb.ims.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "brands")
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long brandId;

    @Column(nullable = false)
    private String brandName;

    @ManyToOne
    @JoinColumn(name = "chain_id", nullable = false)
    private Chain chain;

    private Boolean isActive = true;

    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime updatedAt;

    // Getters

    public Long getBrandId() {
        return brandId;
    }

    public String getBrandName() {
        return brandName;
    }

    public Chain getChain() {
        return chain;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    // Setters

    public void setBrandId(Long brandId) {
        this.brandId = brandId;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public void setChain(Chain chain) {
        this.chain = chain;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}