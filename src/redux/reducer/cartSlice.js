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
        newCart.push({
          id: action?.payload?.id,
          quantity: action?.payload?.quantity,
        });
      }

      return newCart;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
