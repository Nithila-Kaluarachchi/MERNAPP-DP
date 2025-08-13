import mongoose from "mongoose";
import CartItem from "../models/cart.model.js";


//Get Cart items by customer ID
export const getCartItems = async (req, res) => {
    const { customerId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(customerId)) {
        return res.status(400).json({ message: 'Invalid customer ID' });
    }

    try { 
        const items = await CartItem.find({ customerId }).populate('productId');
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Add/Update Cart item
export const addOrUpdateCartItem = async (req, res) => {
    const { customerId, productId, quantity } = req.body;

    if(!customerId || !productId || !quantity || quantity < 1) {
        return res.status(400).json({ message: 'Customer ID, Product ID and Valid quantity are required' });
    }

    try{ 
        const existingItem = await CartItem.findOne({ customerId, productId });

        if (existingItem){ 
            existingItem.quantity = quantity;
            await existingItem.save();
            return res.status(200).json({ success: true, data: existingItem });
        }

        const cartItem = new CartItem({ customerId, productId, quantity });
        await cartItem.save();
        return res.status(201).json({ success: true, data: cartItem });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

    //Remove cart Items

    export const removeCartItem = async (req, res) => {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid cart item ID' });
        }

        try{
            await CartItem.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: 'Cart item removed successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
};
