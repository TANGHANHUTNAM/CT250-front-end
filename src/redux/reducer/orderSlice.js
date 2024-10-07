import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getShippingFee } from "../../services/addressService";
import { set } from "react-hook-form";

export const fetchFeeShipping = createAsyncThunk(
  "order/fetchFeeShipping",
  async (data) => {
    const res = await getShippingFee(data);
    if (res && res.data) {
      return res.data;
    }
    return 0;
  },
);

export const initialState = {
  recevierName: null,
  receiverPhone: null,
  receiverAddress: null,
  note: "",
  totalPrice: 0,
  shippingFee: 0,
  totalDiscount: 0,
  totalQuantity: 0,
  finalPrice: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setTotalQuantity: (state, action) => {
      state.totalQuantity = action.payload;
    },
    setShippingFee: (state, action) => {
      state.shippingFee = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setTotalDiscount: (state, action) => {
      state.totalDiscount = action.payload;
    },
    setFinalPrice: (state, action) => {
      state.finalPrice = action.payload;
    },
    setReceiverName: (state, action) => {
      state.recevierName = action.payload;
    },
    setReceiverPhone: (state, action) => {
      state.receiverPhone = action.payload;
    },
    setReceiverAddress: (state, action) => {
      state.receiverAddress = action.payload;
    },
    setNote: (state, action) => {
      state.note = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeeShipping.fulfilled, (state, { payload }) => {
      state.shippingFee = payload?.data?.total;
    });
  },
});

export const {
  setTotalQuantity,
  setShippingFee,
  setTotalPrice,
  setTotalDiscount,
  setFinalPrice,
  setReceiverName,
  setReceiverPhone,
  setReceiverAddress,
  setNote,
} = orderSlice.actions;

export default orderSlice.reducer;
