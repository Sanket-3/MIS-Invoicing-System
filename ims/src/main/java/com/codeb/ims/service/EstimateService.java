package com.codeb.ims.service;

import com.codeb.ims.model.Estimate;
import java.util.List;

public interface EstimateService {

    Estimate createEstimate(Estimate estimate);

    List<Estimate> getAllEstimates();

    Estimate updateEstimate(Long id, Estimate estimate);

    void deleteEstimate(Long id);
}