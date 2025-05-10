import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // This holds all plants added to the cart
  },
  reducers: {
    // ✅ 1. Add Item to Cart
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        // If the item is already in the cart, increase its quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add it to the cart with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // ✅ 2. Remove Item from Cart
    removeItem: (state, action) => {
      const itemNameToRemove = action.payload;

      // Remove the item with the given name
      state.items = state.items.filter(item => item.name !== itemNameToRemove);
    },

    // ✅ 3. Update Quantity of Cart Item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find(item => item.name === name);

      // Update the quantity if found and quantity is valid
      if (itemToUpdate && quantity > 0) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
