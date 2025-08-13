import React from "react";
import { Button, Typography, Container } from "@mui/material";
import { useCartStore } from "../store/cartStore";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCartStore();

  const handleUpdateQuantity = (id, qty) => {
    if (qty > 0) {
      updateQuantity(id, qty);
    }
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  return (
    <Container maxWidth="md" style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      {(!cart || cart.length === 0) ? (
        <Typography variant="body1">Your cart is empty</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #eee",
                borderRadius: "4px"
              }}
            >
              <Typography variant="body1">{item.name}</Typography>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  style={{ width: "60px", padding: "5px" }}
                  onChange={(e) => handleUpdateQuantity(item._id, parseInt(e.target.value))}
                />
                <Button 
                  variant="outlined" 
                  color="error" 
                  onClick={() => handleRemoveItem(item._id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </>
      )}
    </Container>
  );
};

export default CartPage;