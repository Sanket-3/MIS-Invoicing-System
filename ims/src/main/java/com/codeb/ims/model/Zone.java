package com.codeb.ims.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "zones")
public class Zone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "zone_name", nullable = false)
    private String zoneName;

    @ManyToOne
    @JoinColumn(name = "brand_id", nullable = false)
    private Brand brand;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    public Long getId() {
        return id;
    }

    public String getZoneName() {
        return zoneName;
    }

    public Brand getBrand() {
        return brand;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setZoneName(String zoneName) {
        this.zoneName = zoneName;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }
}