package com.codeb.ims.service;

import com.codeb.ims.model.Zone;
import com.codeb.ims.repository.ZoneRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZoneServiceImpl implements ZoneService {

    private final ZoneRepository zoneRepository;

    public ZoneServiceImpl(ZoneRepository zoneRepository) {
        this.zoneRepository = zoneRepository;
    }

    @Override
    public Zone createZone(Zone zone) {
        return zoneRepository.save(zone);
    }

    @Override
    public List<Zone> getAllZones() {
        return zoneRepository.findByIsActiveTrue();
    }

    @Override
    public List<Zone> getZonesByBrand(Long brandId) {
        return zoneRepository.findByBrand_BrandId(brandId);
    }

    @Override
    public Zone updateZone(Long id, Zone updatedZone) {

        Zone zone = zoneRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Zone not found"));

        zone.setZoneName(updatedZone.getZoneName());
        zone.setBrand(updatedZone.getBrand());

        return zoneRepository.save(zone);
    }

    @Override
    public void deleteZone(Long id) {

        Zone zone = zoneRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Zone not found"));

        zone.setIsActive(false);

        zoneRepository.save(zone);
    }
}