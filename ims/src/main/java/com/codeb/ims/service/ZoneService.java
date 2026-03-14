package com.codeb.ims.service;

import com.codeb.ims.model.Zone;
import java.util.List;

public interface ZoneService {

    Zone createZone(Zone zone);

    List<Zone> getAllZones();

    List<Zone> getZonesByBrand(Long brandId);

    Zone updateZone(Long id, Zone zone);

    void deleteZone(Long id);
}