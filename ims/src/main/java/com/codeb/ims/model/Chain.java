package com.codeb.ims.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "chains")
public class Chain {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Column(unique = true, nullable = false)
    private String gstn;

    @ManyToOne
    @JoinColumn(name = "group_id", nullable = false)
    private Group group;

    private Boolean isActive = true;

    private LocalDateTime createdAt = LocalDateTime.now();

    // Getters
    public Long getId() { return id; }
    public String getCompanyName() { return companyName; }
    public String getGstn() { return gstn; }
    public Group getGroup() { return group; }
    public Boolean getIsActive() { return isActive; }
    public LocalDateTime getCreatedAt() { return createdAt; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setCompanyName(String companyName) { this.companyName = companyName; }
    public void setGstn(String gstn) { this.gstn = gstn; }
    public void setGroup(Group group) { this.group = group; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }
}