import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    isLoading: false,
    auth: {
      isAuth: false,
      userDetails: {},
    },
  },
  reducers: {
    setIsLoader: (state, { payload }) => {
      state.isLoading = payload;
    },
    setUserDetails: (state, { payload }) => {
      state.auth.userDetails = payload.userDetails;
      state.auth.isAuth = payload.isAuth;
    },
  },
});

export const { setIsLoader, setUserDetails } = commonSlice.actions;

export default commonSlice.reducer;
