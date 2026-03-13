package com.codeb.ims.controller;

import com.codeb.ims.model.Brand;
import com.codeb.ims.service.BrandService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/brands")
@CrossOrigin
public class BrandController {

    private final BrandService brandService;

    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }

    @PostMapping
    public Brand createBrand(@RequestBody Brand brand) {
        return brandService.createBrand(brand);
    }

    @GetMapping
    public List<Brand> getAllBrands() {
        return brandService.getAllBrands();
    }

    @PutMapping("/{id}")
    public Brand updateBrand(@PathVariable Long id, @RequestBody Brand brand) {
        return brandService.updateBrand(id, brand);
    }

    @DeleteMapping("/{id}")
    public void deleteBrand(@PathVariable Long id) {
        brandService.deleteBrand(id);
    }
}