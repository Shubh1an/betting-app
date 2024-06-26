import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    isLoading: false,
    auth: {
      isAuth: false,
      userDetails: {},
    },
    signUpData: {},
  },
  reducers: {
    setIsLoader: (state, { payload }) => {
      state.isLoading = payload;
    },
    setUserDetails: (state, { payload }) => {
      state.auth.userDetails = payload.userDetails;
      state.auth.isAuth = payload.isAuth;
    },
    setSignUpData: (state, { payload }) => {
      state.signUpData = payload;
    },
  },
});

export const { setIsLoader, setUserDetails,setSignUpData } = commonSlice.actions;

export default commonSlice.reducer;
