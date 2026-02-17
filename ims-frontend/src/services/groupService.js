const API = "http://localhost:8080/api/groups";

const groupService = {
  async getAll() {
    const res = await fetch(API);
    return res.json();
  },

  async create(group) {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(group),
    });
    if (!res.ok) throw new Error("Group already exists");
    return res.json();
  },

  async update(id, group) {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(group),
    });
  },

  async remove(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
  },
};

export default groupService;
