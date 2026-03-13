package com.codeb.ims.service;

import com.codeb.ims.model.Brand;
import com.codeb.ims.repository.BrandRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BrandServiceImpl implements BrandService {

    private final BrandRepository brandRepository;

    public BrandServiceImpl(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    @Override
    public Brand createBrand(Brand brand) {
        return brandRepository.save(brand);
    }

    @Override
    public List<Brand> getAllBrands() {
        return brandRepository.findByIsActiveTrue();
    }

    @Override
    public Brand updateBrand(Long id, Brand updatedBrand) {

        Brand brand = brandRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Brand not found"));

        brand.setBrandName(updatedBrand.getBrandName());
        brand.setChain(updatedBrand.getChain());
        brand.setUpdatedAt(LocalDateTime.now());

        return brandRepository.save(brand);
    }

    @Override
    public void deleteBrand(Long id) {

        Brand brand = brandRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Brand not found"));

        brand.setIsActive(false);

        brandRepository.save(brand);
    }
}