import { useState } from "react";
import { Container, TextField, Button, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCustomerStore } from "../store/customerStore";

export default function CustomerForm() {
    const [customer , setCustomer] = useState({ name: "", email: "", phone: "", address: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { createCustomer } = useCustomerStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        
        // Validate form
        if (!customer.name || !customer.email || !customer.phone) {
            setError("Name, Email, and Phone are required");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(customer.email)) {
            setError("Please enter a valid email address");
            return;
        }

        try {
            const res = await createCustomer(customer);
            if (res.success) {
                navigate("/products");
            } else {
                setError(res.message || "Failed to create customer");
            }
        } catch (err) {
            setError(err.message || "An unexpected error occurred");
        }
    };

    return (
        <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Welcome to GearUp</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField 
            label="Name" 
            fullWidth margin="normal"
            value={customer.name} 
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })} 
        />
        <TextField 
            label="Email" 
            type="email" 
            fullWidth margin="normal"
            value={customer.email} 
            onChange={(e) => setCustomer({ ...customer, email: e.target.value })} 
        />
        <TextField 
            label="Phone" 
            fullWidth margin="normal"
            value={customer.phone} 
            onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} 
        />
        <Button variant="contained" type="submit" color="primary">Continue</Button>
      </form>
    </Container>
    );
}
