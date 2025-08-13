import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { createOrder } from "../store/orderStore";

const CheckoutPage = ({ cart, setCart }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = async () => {
    try {
      const orderData = {
        customer: form,
        items: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };

      await createOrder(orderData);
      alert("Order placed successfully!");
      setCart([]);
    } catch (error) {
      alert(error.message || "Failed to place order");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Checkout</Typography>
      <TextField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address"
        name="address"
        value={form.address}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleOrder}>
        Place Order
      </Button>
    </div>
  );
};

export default CheckoutPage;