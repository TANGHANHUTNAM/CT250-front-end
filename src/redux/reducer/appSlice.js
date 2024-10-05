import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingApp: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoadingApp: (state, { payload }) => {
      state.isLoadingApp = payload;
    },
  },
});

export const { setIsLoadingApp } = appSlice.actions;

export default appSlice.reducer;
