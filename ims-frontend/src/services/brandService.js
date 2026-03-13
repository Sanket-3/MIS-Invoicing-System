import axios from "axios";

const API_URL = "http://localhost:8080/api/brands";

export const getBrands = () => axios.get(API_URL);

export const createBrand = (brand) => axios.post(API_URL, brand);

export const updateBrand = (id, brand) => axios.put(`${API_URL}/${id}`, brand);

export const deleteBrand = (id) => axios.delete(`${API_URL}/${id}`);