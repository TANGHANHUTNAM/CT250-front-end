import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {};

export const favouriteDishSlice = createSlice({
  name: "favourite-dish",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      let newFavourite = _.cloneDeep(state);

      const id = action?.payload?.id;
      newFavourite[id] = id;

      return newFavourite;
    },
    removeFromFavourite: (state, action) => {
      let newFavourite = _.cloneDeep(state);

      delete newFavourite[action?.payload?.id];

      return newFavourite;
    },
  },
});

export const { addToFavourite, removeFromFavourite } =
  favouriteDishSlice.actions;

export default favouriteDishSlice.reducer;
