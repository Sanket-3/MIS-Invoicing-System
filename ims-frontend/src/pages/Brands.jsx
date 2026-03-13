import React, { useEffect, useState } from "react";
import { getBrands, createBrand, deleteBrand } from "../services/brandService";
import { getChains } from "../services/chainService";
import "../styles/groups.css";

const Brands = () => {

  const [brands, setBrands] = useState([]);
  const [chains, setChains] = useState([]);

  const [brandName, setBrandName] = useState("");
  const [chainId, setChainId] = useState("");

  useEffect(() => {
    fetchBrands();
    fetchChains();
  }, []);

  const fetchBrands = async () => {
    const res = await getBrands();
    setBrands(res.data);
  };

  const fetchChains = async () => {
    const res = await getChains();
    setChains(res.data);
  };

  const handleAdd = async () => {

    if (!brandName || !chainId) {
      alert("Please fill all fields");
      return;
    }

    const brand = {
      brandName,
      chain: { id: chainId }
    };

    await createBrand(brand);

    setBrandName("");
    setChainId("");

    fetchBrands();
  };

  const handleDelete = async (id) => {
    await deleteBrand(id);
    fetchBrands();
  };

  return (
    <div className="groups-page">

      <h2>Manage Brands</h2>

      <input
        placeholder="Brand Name"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
      />

      <select
        value={chainId}
        onChange={(e) => setChainId(e.target.value)}
      >
        <option value="">Select Company</option>

        {chains.map((c) => (
          <option key={c.id} value={c.id}>
            {c.companyName}
          </option>
        ))}

      </select>

      <button onClick={handleAdd}>
        Add Brand
      </button>

      <table>

        <thead>
          <tr>
            <th>Brand</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {brands.map((b) => (
            <tr key={b.brandId}>

              <td>{b.brandName}</td>
              <td>{b.chain?.companyName}</td>

              <td>
                <button onClick={() => handleDelete(b.brandId)}>
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

export default Brands;