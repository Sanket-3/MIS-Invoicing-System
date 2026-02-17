import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import "../styles/groups.css";
import groupService from "../services/groupService";

export default function CreateGroup() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    groupService.create({
      name,
      owner,
      status: "ACTIVE",
    });

    navigate("/dashboard/groups");
  };

  return (
    <DashboardLayout>
      <div className="form-card">
        <h2>Create New Group</h2>

        <form onSubmit={handleSubmit}>
          <label>Group Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Owner Name</label>
          <input
            type="text"
            required
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />

          <button className="primary-btn">Create Group</button>
        </form>
      </div>
    </DashboardLayout>
  );
}
