import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newCart = _.cloneDeep(state);

      const item = newCart.find((item) => item.id === action?.payload?.id);

      if (item) {
        item.quantity += +action?.payload?.quantity;
      } else {
        newCart.unshift({
          id: action?.payload?.id,
          quantity: action?.payload?.quantity,
        });
      }

      return newCart;
    },
    changeQuantity: (state, action) => {
      const newCart = _.cloneDeep(state);
      const item = newCart.find((item) => item.id === action?.payload?.id);
      item.quantity = action?.payload?.quantity;

      return newCart;
    },
    removeFromCart: (state, action) => {
      const newCart = state.filter((item) => item.id !== action?.payload?.id);
      return newCart;
    },
    removeAll: () => [],
  },
});

export const { addToCart, changeQuantity, removeFromCart, removeAll } =
  cartSlice.actions;

export default cartSlice.reducer;
