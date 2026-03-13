package com.codeb.ims.service;

import com.codeb.ims.model.Brand;
import java.util.List;

public interface BrandService {

    Brand createBrand(Brand brand);

    List<Brand> getAllBrands();

    Brand updateBrand(Long id, Brand brand);

    void deleteBrand(Long id);

}