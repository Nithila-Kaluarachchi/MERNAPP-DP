import CartItem from "../models/cart.model.js";
import Order from "../models/order.model.js";
import mongoose from "mongoose";


export const createOrder = async (req, res) => {
    const { customerId, deliveryAddress } = req.body;

    if(!customerId || !deliveryAddress){ 
        return res.status(400).json({ message: 'Customer ID and delivery address are required' });
    }

    if(!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({ message: 'Invalid customer ID' });
    }

    try {
        const cartItems = await CartItem.find({ customerId });

        if (cartItems.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });  
        }
        
        const totalAmount = cartItems.reduce((acc, item) => acc + (item.quantity * (item.productId.price || 0)), 0);

        const order = new Order({
            customerId,
            cartItems: cartItems.map(item => ({
                productId: item.productId,
                quantity: item.quantity
            })),
            totalAmount,
            deliveryAddress,
            status: 'Confirmed'
        });

        await order.save();

        await CartItem.deleteMany({ customerId });

        sendOrderEmail(order,  req.body.customerEmail);

        res.status(201).json({ success: true, message: 'Order Placed Successfully', data: order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


