import axios from "axios";

const API_BASE_URL = "http://localhost:8080/optima"

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getProducts = () => api.get('/inventory-service/product');
export const addProduct = (data) => api.post('/inventory-service/product', data);
export const updateProduct = (id, data) => api.put(`/inventory-service/product/${id}`, data);
export const deleteProduct = (id) => api.delete(`/inventory-service/product/${id}`);
