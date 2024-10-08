import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProvinces,
  getDistrictsByProvince,
  getWardsByDistrict,
} from "../../services/addressService";

export const fetchProvinces = createAsyncThunk(
  "address/fetchProvinces",
  async () => {
    const res = await getAllProvinces();
    if (res && res.data) {
      return res.data;
    }
    return [];
  },
);

export const fetchDistricsByProvinceId = createAsyncThunk(
  "address/fetchDistricsByProvinceId",
  async (province_id) => {
    const res = await getDistrictsByProvince(province_id);
    if (res && res.data) {
      return res.data;
    }
    return [];
  },
);

export const fetchWardsByDistrictId = createAsyncThunk(
  "address/fetchWardsByDistrictId",
  async (district_id) => {
    const res = await getWardsByDistrict(district_id);
    if (res && res.data) {
      return res.data;
    }
    return [];
  },
);

const initialState = {
  provinces: [],
  districts: [],
  wards: [],
  selectedProvince: null,
  nameProvince: null,
  selectedDistrict: null,
  nameDistrict: null,
  selectedWard: null,
  nameWard: null,
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setSelectedProvince: (state, action) => {
      state.selectedProvince = action.payload;
    },
    setProvinceName: (state, action) => {
      state.nameProvince = action.payload;
    },
    resetProvince: (state) => {
      state.provinces = [];
    },
    setSelectedDistrict: (state, action) => {
      state.selectedDistrict = action.payload;
    },
    setDistrictName: (state, action) => {
      state.nameDistrict = action.payload;
    },
    resetDistrict: (state) => {
      state.districts = [];
    },
    setSelectedWard: (state, action) => {
      state.selectedWard = action.payload;
    },
    setWardName: (state, action) => {
      state.nameWard = action.payload;
    },
    resetWard: (state) => {
      state.wards = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProvinces.fulfilled, (state, { payload }) => {
      state.provinces = payload?.data;
    });
    builder.addCase(
      fetchDistricsByProvinceId.fulfilled,
      (state, { payload }) => {
        state.districts = payload?.data;
      },
    );
    builder.addCase(fetchWardsByDistrictId.fulfilled, (state, { payload }) => {
      state.wards = payload?.data;
    });
  },
});

export const {
  setSelectedProvince,
  setSelectedWard,
  setSelectedDistrict,
  resetProvince,
  resetDistrict,
  resetWard,
  setWardName,
  setDistrictName,
  setProvinceName,
} = addressSlice.actions;

export default addressSlice.reducer;
