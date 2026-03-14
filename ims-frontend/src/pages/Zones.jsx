import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  getZones,
  createZone,
  deleteZone
} from "../services/zoneService";

import "../styles/groups.css";

const Zones = () => {

  const [zones, setZones] = useState([]);
  const [allZones, setAllZones] = useState([]);
  const [brands, setBrands] = useState([]);

  const [zoneName, setZoneName] = useState("");
  const [brandId, setBrandId] = useState("");

  const [filterBrand, setFilterBrand] = useState("");

  useEffect(() => {
    fetchZones();
    fetchBrands();
  }, []);

  const fetchZones = async () => {
    try {
      const res = await getZones();
      setZones(res.data);
      setAllZones(res.data);
    } catch (error) {
      console.error("Error loading zones", error);
    }
  };

  const fetchBrands = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/brands");
      console.log("Brands:", res.data);
      setBrands(res.data);
    } catch (error) {
      console.error("Error loading brands", error);
    }
  };

  const handleAdd = async () => {

    if (!zoneName || !brandId) {
      alert("Please fill all fields");
      return;
    }

    const zone = {
      zoneName,
      brand: { brandId: brandId }
    };

    try {
      await createZone(zone);

      setZoneName("");
      setBrandId("");

      fetchZones();
    } catch (error) {
      console.error("Error adding zone", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteZone(id);
      fetchZones();
    } catch (error) {
      console.error("Error deleting zone", error);
    }
  };

  const handleFilter = (brandId) => {

    setFilterBrand(brandId);

    if (!brandId) {
      setZones(allZones);
      return;
    }

    const filtered = allZones.filter(
      (z) => z.brand && z.brand.brandId === parseInt(brandId)
    );

    setZones(filtered);
  };

  return (
    <div className="groups-page">

      <h2>Manage Zones</h2>

      {/* Zone Name Input */}
      <input
        placeholder="Zone Name"
        value={zoneName}
        onChange={(e) => setZoneName(e.target.value)}
      />

      {/* Brand Dropdown */}
      <select
        value={brandId}
        onChange={(e) => setBrandId(e.target.value)}
      >

        <option value="">Select Brand</option>

        {brands.map((b) => (
          <option key={b.brandId} value={b.brandId}>
            {b.brandName}
          </option>
        ))}

      </select>

      <button onClick={handleAdd}>
        Add Zone
      </button>

      {/* FILTER SECTION */}

      <h3 style={{ marginTop: "20px" }}>
        Filter by Brand
      </h3>

      <select
        value={filterBrand}
        onChange={(e) => handleFilter(e.target.value)}
      >

        <option value="">
          All Brands
        </option>

        {brands.map((b) => (
          <option key={b.brandId} value={b.brandId}>
            {b.brandName}
          </option>
        ))}

      </select>

      {/* TABLE */}

      <table>

        <thead>
          <tr>
            <th>Zone</th>
            <th>Brand</th>
            <th>Company</th>
            <th>Group</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {zones.map((z) => (

            <tr key={z.id}>

              <td>{z.zoneName}</td>

              <td>{z.brand?.brandName}</td>

              <td>{z.brand?.chain?.companyName}</td>

              <td>{z.brand?.chain?.group?.name}</td>

              <td>

                <button
                  onClick={() => handleDelete(z.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Zones;