import mongoose from "mongoose";
import Customer from "../models/customer.model.js";

export const createCustomer = async (req, res) => {
    const { name, email, phone, address } = req.body;

    if (!name || !email) {
        return res.status(400).json({  message: 'Name and email are required' });
    }

    try {
        const existing = await Customer.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'Email already registered.' });

        }

        const customer = new Customer({ name, email, phone, address }); 
        await customer.save();

        res.status(201).json({ success: true, data: customer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
};