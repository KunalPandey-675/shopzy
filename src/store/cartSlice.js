import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};
const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity = 1 } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ id: id, quantity: quantity });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart(state, action) {
      const result = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(result));
      return result;
    },
    checkout(state) {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
