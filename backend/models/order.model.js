import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        customerId: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true
        },
        cartItems: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    
                }
            }
        ],
        totalAmount: { type: Number, required: true },
        deliveryAddress: {
            type: String,
            required: true
        },
        status: { 
            type: String,
            default: "pending"
        }

    },
    {
        timestamps: true
    });

    const Order = mongoose.model("Order", orderSchema);
    export default Order;
