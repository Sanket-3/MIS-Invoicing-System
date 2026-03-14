import axios from "axios";

const API_URL = "http://localhost:8080/api/zones";

export const getZones = () => axios.get(API_URL);

export const getZonesByBrand = (brandId) =>
  axios.get(`${API_URL}/brand/${brandId}`);

export const createZone = (zone) => axios.post(API_URL, zone);

export const updateZone = (id, zone) =>
  axios.put(`${API_URL}/${id}`, zone);

export const deleteZone = (id) =>
  axios.delete(`${API_URL}/${id}`);