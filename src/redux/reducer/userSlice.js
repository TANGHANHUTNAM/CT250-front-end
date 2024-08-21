import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuth = true;
    },
  },
});

export const { loginSuccess } = userSlice.actions;

export default userSlice.reducer;
