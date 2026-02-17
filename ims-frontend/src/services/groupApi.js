import axios from "axios";

const API = "http://localhost:8080/api/groups";

export const getGroups = () => axios.get(API);
export const createGroup = (data) => axios.post(API, data);
export const updateGroup = (id, data) => axios.put(`${API}/${id}`, data);
export const deactivateGroup = (id) => axios.delete(`${API}/${id}`);
