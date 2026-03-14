package com.codeb.ims.controller;

import com.codeb.ims.model.Estimate;
import com.codeb.ims.service.EstimateService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/estimates")
@CrossOrigin
public class EstimateController {

    private final EstimateService estimateService;

    public EstimateController(EstimateService estimateService) {
        this.estimateService = estimateService;
    }

    @PostMapping
    public Estimate createEstimate(@RequestBody Estimate estimate) {
        return estimateService.createEstimate(estimate);
    }

    @GetMapping
    public List<Estimate> getAllEstimates() {
        return estimateService.getAllEstimates();
    }

    @PutMapping("/{id}")
    public Estimate updateEstimate(@PathVariable Long id, @RequestBody Estimate estimate) {
        return estimateService.updateEstimate(id, estimate);
    }

    @DeleteMapping("/{id}")
    public void deleteEstimate(@PathVariable Long id) {
        estimateService.deleteEstimate(id);
    }
}