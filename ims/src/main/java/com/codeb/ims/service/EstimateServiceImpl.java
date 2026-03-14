package com.codeb.ims.service;

import com.codeb.ims.model.Estimate;
import com.codeb.ims.repository.EstimateRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EstimateServiceImpl implements EstimateService {

    private final EstimateRepository estimateRepository;

    public EstimateServiceImpl(EstimateRepository estimateRepository) {
        this.estimateRepository = estimateRepository;
    }

    @Override
    public Estimate createEstimate(Estimate estimate) {
        return estimateRepository.save(estimate);
    }

    @Override
    public List<Estimate> getAllEstimates() {
        return estimateRepository.findByIsActiveTrue();
    }

    @Override
    public Estimate updateEstimate(Long id, Estimate updated) {

        Estimate estimate = estimateRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Estimate not found"));

        estimate.setService(updated.getService());
        estimate.setQty(updated.getQty());
        estimate.setCostPerUnit(updated.getCostPerUnit());
        estimate.setTotalCost(updated.getTotalCost());
        estimate.setDeliveryDate(updated.getDeliveryDate());
        estimate.setDeliveryDetails(updated.getDeliveryDetails());
        estimate.setUpdatedAt(LocalDateTime.now());

        return estimateRepository.save(estimate);
    }

    @Override
    public void deleteEstimate(Long id) {

        Estimate estimate = estimateRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Estimate not found"));

        estimate.setIsActive(false);

        estimateRepository.save(estimate);
    }
}