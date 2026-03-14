import axios from "axios";

const API_URL = "http://localhost:8080/api/estimates";

export const getEstimates = () => axios.get(API_URL);

export const createEstimate = (estimate) => axios.post(API_URL, estimate);

export const updateEstimate = (id, estimate) =>
  axios.put(`${API_URL}/${id}`, estimate);

export const deleteEstimate = (id) =>
  axios.delete(`${API_URL}/${id}`);