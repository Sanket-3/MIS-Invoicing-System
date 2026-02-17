import { useEffect, useState } from "react";
import groupService from "../services/groupService";
import "../styles/Dashboard.css";

export default function Groups() {
  const [groups, setGroups] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const load = async () => {
    setGroups(await groupService.getAll());
  };

  useEffect(() => { load(); }, []);

  const addGroup = async () => {
    try {
      await groupService.create({ name, type });
      setName(""); setType(""); setError("");
      load();
    } catch {
      setError("Group name already exists");
    }
  };

  const del = async (id) => {
    if (confirm("Delete this group?")) {
      await groupService.remove(id);
      load();
    }
  };

  return (
    <>
      <h1>Groups</h1>
      <p className="subtitle">Manage business groups</p>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input value={name} onChange={e => setName(e.target.value)} placeholder="Group Name" />
      <input value={type} onChange={e => setType(e.target.value)} placeholder="Type" />
      <button className="primary" onClick={addGroup}>Add Group</button>

      <table className="data-table">
        <thead>
          <tr><th>Name</th><th>Type</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {groups.map(g => (
            <tr key={g.id}>
              <td>{g.name}</td>
              <td>{g.type}</td>
              <td className="active">{g.status}</td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete" onClick={() => del(g.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
