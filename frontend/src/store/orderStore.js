import axios from "axios";

const API_URL = "http://localhost:5000/api/orders";

export const createOrder = async (order) => {
  try {
    const { data } = await axios.post(API_URL, order);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Server Error" };
  }
};

export const fetchOrders = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Server Error" };
  }
};