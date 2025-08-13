import express from 'express';

import { addOrUpdateCartItem,removeCartItem, getCartItems } from '../controllers/cart.controller.js';


const router = express.Router();

router.get('/:customerId', getCartItems);
router.post('/add', addOrUpdateCartItem);
router.delete('/:id', removeCartItem);

export default router;