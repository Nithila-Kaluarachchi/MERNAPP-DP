import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/product.model.js';
import { connectDB } from './db.js';

dotenv.config();

const products = [
    {
        name: "Gaming Laptop",
        description: "High-performance gaming laptop with RTX 3080",
        price: 1999.99,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3",
        category: "Laptops"
    },
    {
        name: "Mechanical Keyboard",
        description: "RGB mechanical keyboard with Cherry MX switches",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3",
        category: "Accessories"
    },
    {
        name: "Gaming Mouse",
        description: "High-precision gaming mouse with adjustable DPI",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3",
        category: "Accessories"
    },
    {
        name: "4K Monitor",
        description: "32-inch 4K gaming monitor with 144Hz refresh rate",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3",
        category: "Monitors"
    },
    {
        name: "Gaming Headset",
        description: "Surround sound gaming headset with noise cancellation",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3",
        category: "Audio"
    },
    {
        name: "Gaming Chair",
        description: "Ergonomic gaming chair with lumbar support",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3",
        category: "Furniture"
    },
    {
        name: "Gaming Desktop",
        description: "Pre-built gaming PC with RTX 3090",
        price: 2499.99,
        image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2b?ixlib=rb-4.0.3",
        category: "Desktops"
    },
    {
        name: "SSD 1TB",
        description: "NVMe SSD with 1TB storage",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3",
        category: "Storage"
    },
    {
        name: "Gaming Router",
        description: "Gaming router with WiFi 6 support",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1544408134-b69fd1e567f4?ixlib=rb-4.0.3",
        category: "Networking"
    },
    {
        name: "Webcam 4K",
        description: "4K webcam for streaming",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?ixlib=rb-4.0.3",
        category: "Accessories"
    },
    {
        name: "RGB LED Strip",
        description: "Addressable RGB LED strip for PC",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1550353185-761a5da3ee96?ixlib=rb-4.0.3",
        category: "Accessories"
    },
    {
        name: "Graphics Card",
        description: "RTX 4080 Gaming Graphics Card",
        price: 899.99,
        image: "https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?ixlib=rb-4.0.3",
        category: "Components"
    },
    {
        name: "Gaming Mousepad",
        description: "Extended RGB gaming mousepad",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1616248304589-6a3d8d60ad7d?ixlib=rb-4.0.3",
        category: "Accessories"
    },
    {
        name: "Microphone",
        description: "USB condenser microphone for streaming",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3",
        category: "Audio"
    },
    {
        name: "Capture Card",
        description: "4K60 capture card for streaming",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3",
        category: "Streaming"
    }
];

const seedProducts = async () => {
    try {
        await connectDB();
        
        await Product.deleteMany({});
        console.log('Cleared existing products');
        
        const createdProducts = await Product.insertMany(products);
        console.log(`Created ${createdProducts.length} products`);

        process.exit(0);
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
};

seedProducts();
