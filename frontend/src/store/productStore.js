import axios from "axios";
import { create } from 'zustand';

const API_URL = "http://localhost:5000/api/products";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get(API_URL);
      set({ products: data, loading: false });
      return { success: true, data };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to fetch products';
      set({ error: message, loading: false });
      return { success: false, message };
    }
  },
  addProduct: async (product) => {
    try {
      const { data } = await axios.post(API_URL, product);
      return data;
    } catch (error) {
      throw error.response?.data || { message: "Server Error" };
    }
  },
  updateProduct: async (id, product) => {
    try {
      const { data } = await axios.put(`${API_URL}/${id}`, product);
      return data;
    } catch (error) {
      throw error.response?.data || { message: "Server Error" };
    }
  },
  deleteProduct: async (id) => {
    try {
      const { data } = await axios.delete(`${API_URL}/${id}`);
      return data;
    } catch (error) {
      throw error.response?.data || { message: "Server Error" };
    }
  }
}));