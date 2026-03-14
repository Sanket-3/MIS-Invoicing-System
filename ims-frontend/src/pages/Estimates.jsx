import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  getEstimates,
  createEstimate,
  deleteEstimate
} from "../services/estimateService";

import "../styles/groups.css";

const Estimates = () => {

  const navigate = useNavigate();

  const [estimates, setEstimates] = useState([]);

  const [groups, setGroups] = useState([]);
  const [chains, setChains] = useState([]);
  const [brands, setBrands] = useState([]);
  const [zones, setZones] = useState([]);

  const [groupName, setGroupName] = useState("");
  const [chainId, setChainId] = useState("");
  const [brandName, setBrandName] = useState("");
  const [zoneName, setZoneName] = useState("");

  const [service, setService] = useState("");
  const [qty, setQty] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryDetails, setDeliveryDetails] = useState("");

  useEffect(() => {
    fetchEstimates();
    fetchGroups();
    fetchChains();
    fetchBrands();
    fetchZones();
  }, []);

  const fetchEstimates = async () => {
    const res = await getEstimates();
    setEstimates(res.data);
  };

  const fetchGroups = async () => {
    const res = await axios.get("http://localhost:8080/api/groups");
    setGroups(res.data);
  };

  const fetchChains = async () => {
    const res = await axios.get("http://localhost:8080/api/chains");
    setChains(res.data);
  };

  const fetchBrands = async () => {
    const res = await axios.get("http://localhost:8080/api/brands");
    setBrands(res.data);
  };

  const fetchZones = async () => {
    const res = await axios.get("http://localhost:8080/api/zones");
    setZones(res.data);
  };

  const handleAdd = async () => {

    if (!chainId || !service || !qty || !costPerUnit) {
      alert("Please fill required fields");
      return;
    }

    const totalCost = qty * costPerUnit;

    const estimate = {
      groupName,
      brandName,
      zoneName,
      service,
      qty,
      costPerUnit,
      totalCost,
      deliveryDate,
      deliveryDetails,
      chain: { id: chainId }
    };

    await createEstimate(estimate);

    setService("");
    setQty("");
    setCostPerUnit("");
    setDeliveryDate("");
    setDeliveryDetails("");

    fetchEstimates();
  };

  const handleDelete = async (id) => {

    if (window.confirm("Delete this estimate?")) {
      await deleteEstimate(id);
      fetchEstimates();
    }

  };

  return (
    <div className="groups-page">

      <h2>Manage Estimates</h2>

      {/* FORM */}

      <select value={groupName} onChange={(e) => setGroupName(e.target.value)}>
        <option value="">Select Group</option>
        {groups.map((g) => (
          <option key={g.id} value={g.name}>{g.name}</option>
        ))}
      </select>

      <select value={chainId} onChange={(e) => setChainId(e.target.value)}>
        <option value="">Select Company</option>
        {chains.map((c) => (
          <option key={c.id} value={c.id}>{c.companyName}</option>
        ))}
      </select>

      <select value={brandName} onChange={(e) => setBrandName(e.target.value)}>
        <option value="">Select Brand</option>
        {brands.map((b) => (
          <option key={b.brandId} value={b.brandName}>{b.brandName}</option>
        ))}
      </select>

      <select value={zoneName} onChange={(e) => setZoneName(e.target.value)}>
        <option value="">Select Zone</option>
        {zones.map((z) => (
          <option key={z.id} value={z.zoneName}>{z.zoneName}</option>
        ))}
      </select>

      <input
        placeholder="Service Details"
        value={service}
        onChange={(e) => setService(e.target.value)}
      />

      <input
        placeholder="Quantity"
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />

      <input
        placeholder="Cost Per Unit"
        type="number"
        value={costPerUnit}
        onChange={(e) => setCostPerUnit(e.target.value)}
      />

      <input
        type="date"
        value={deliveryDate}
        onChange={(e) => setDeliveryDate(e.target.value)}
      />

      <textarea
        placeholder="Delivery Details"
        value={deliveryDetails}
        onChange={(e) => setDeliveryDetails(e.target.value)}
      />

      <button onClick={handleAdd}>
        Create Estimate
      </button>

      {/* TABLE */}

      <table>

        <thead>
          <tr>
            <th>Group</th>
            <th>Company</th>
            <th>Brand</th>
            <th>Zone</th>
            <th>Service</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {estimates.map((e) => (

            <tr key={e.id}>

              <td>{e.groupName}</td>
              <td>{e.chain?.companyName}</td>
              <td>{e.brandName}</td>
              <td>{e.zoneName}</td>
              <td>{e.service}</td>
              <td>{e.qty}</td>
              <td>{e.costPerUnit}</td>
              <td>{e.totalCost}</td>

              <td>

                <button onClick={() => navigate(`/dashboard/create-invoice/${e.id}`)}>
                  Generate
                </button>

                <button onClick={() => handleDelete(e.id)}>
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

export default Estimates;