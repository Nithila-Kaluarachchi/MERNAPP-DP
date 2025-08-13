import axios from "axios";
import { create } from 'zustand';

const API_URL = "http://localhost:5000/api/customers/create";

const useCustomerStore = create((set) => ({
  customer: null,
  error: null,
  loading: false,
  
  createCustomer: async (customer) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(API_URL, customer, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const { data } = response;
      
      if (data && data.success) {
        set({ customer: data.data, loading: false });
        return { success: true, data: data.data };
      } else {
        throw new Error(data.message || 'Failed to create customer');
      }
    } catch (error) {
      console.error('Error creating customer:', error);
      const errorMessage = error.response?.data?.message || error.message || "Server Error";
      set({ error: errorMessage, loading: false });
      return { success: false, message: errorMessage };
    }
  },

  getCustomerByEmail: async (email) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get(`http://localhost:5000/api/customers?email=${email}`);
      set({ customer: data, loading: false });
      return data;
    } catch (error) {
      const errorMessage = error.response?.data || { message: "Server Error" };
      set({ error: errorMessage, loading: false });
      throw errorMessage;
    }
  }
}));

export { useCustomerStore };
export const { createCustomer, getCustomerByEmail } = useCustomerStore.getState();