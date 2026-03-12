import axios from "axios";

const API_URL = "http://localhost:8080/api/chains";

export const getChains = () => axios.get(API_URL);

export const createChain = (chain) => axios.post(API_URL, chain);

export const updateChain = (id, chain) => axios.put(`${API_URL}/${id}`, chain);

export const deleteChain = (id) => axios.delete(`${API_URL}/${id}`);