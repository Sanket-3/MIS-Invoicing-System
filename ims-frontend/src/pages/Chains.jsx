import React, { useEffect, useState } from "react";
import { getChains, createChain, deleteChain } from "../services/chainService";
import axios from "axios";
import "../styles/groups.css";

const Chains = () => {

  const [chains, setChains] = useState([]);
  const [filteredChains, setFilteredChains] = useState([]);
  const [groups, setGroups] = useState([]);

  const [companyName, setCompanyName] = useState("");
  const [gstn, setGstn] = useState("");
  const [groupId, setGroupId] = useState("");

  const [filterGroup, setFilterGroup] = useState("");

  useEffect(() => {
    fetchChains();
    fetchGroups();
  }, []);

  const fetchChains = async () => {
    const res = await getChains();
    setChains(res.data);
    setFilteredChains(res.data);
  };

  const fetchGroups = async () => {
    const res = await axios.get("http://localhost:8080/api/groups");
    setGroups(res.data);
  };

  const handleAdd = async () => {

    if (!companyName || !gstn || !groupId) {
      alert("Please fill all fields");
      return;
    }

    const chain = {
      companyName,
      gstn,
      group: { id: groupId }
    };

    await createChain(chain);

    setCompanyName("");
    setGstn("");
    setGroupId("");

    fetchChains();
  };

  const handleDelete = async (id) => {
    await deleteChain(id);
    fetchChains();
  };

  const handleFilter = (groupId) => {

    setFilterGroup(groupId);

    if (!groupId) {
      setFilteredChains(chains);
      return;
    }

    const filtered = chains.filter(
      (c) => c.group && c.group.id === parseInt(groupId)
    );

    setFilteredChains(filtered);
  };

  return (
    <div className="groups-page">

      <h2>Manage Chains</h2>

      {/* ADD COMPANY FORM */}

      <input
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <input
        placeholder="GST Number"
        value={gstn}
        onChange={(e) => setGstn(e.target.value)}
      />

      <select value={groupId} onChange={(e) => setGroupId(e.target.value)}>
        <option value="">Select Group</option>
        {groups.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>

      <button onClick={handleAdd}>Add Company</button>

      {/* FILTER */}

      <h3 style={{marginTop:"20px"}}>Filter by Group</h3>

      <select
        value={filterGroup}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="">All Groups</option>
        {groups.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>

      {/* TABLE */}

      <table>

        <thead>
          <tr>
            <th>Company</th>
            <th>GSTN</th>
            <th>Group</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredChains.map((c) => (
            <tr key={c.id}>
              <td>{c.companyName}</td>
              <td>{c.gstn}</td>
              <td>{c.group?.name}</td>

              <td>
                <button onClick={() => handleDelete(c.id)}>
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

export default Chains;