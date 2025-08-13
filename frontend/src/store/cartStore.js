import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const existing = state.cart.find(item => item._id === product._id);
    if (existing) {
      return { cart: state.cart.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ) };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),
  updateQuantity: (id, qty) => set((state) => ({
    cart: state.cart.map(item => item._id === id ? { ...item, quantity: qty } : item)
  })),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item._id !== id)
  })),
  clearCart: () => set({ cart: [] })
}));
