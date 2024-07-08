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
    walletBalance: {},
    activeColorRoom: {},
    wingoHistory: [],
    myWingoHistory: [],
    luckyHitHistory: [],
    currentCardWinner: {},
    activeLuckyHitRoom: {},
  },
  reducers: {
    setIsLoader: (state, { payload }) => {
      state.isLoading = payload;
    },
    setUserDetails: (state, { payload }) => {
      console.log({ payload });
      state.auth.userDetails = payload.userDetails;
      state.auth.isAuth = payload.isAuth;
    },
    setSignUpData: (state, { payload }) => {
      state.signUpData = payload;
    },
    setLogOut: (state) => {
      localStorage.clear();
      state.auth.isAuth = false;
      state.auth.userDetails = {};
    },
    setWalletBalance: (state, { payload }) => {
      state.walletBalance = payload;
    },
    setActiveColorRoom: (state, { payload }) => {
      state.activeColorRoom = payload;
    },
    setWinGoHistory: (state, { payload }) => {
      const d = payload?.filter((e: any) => e.winNumber);
      state.wingoHistory = d;
    },
    updateWinGoHistory: (state, { payload }: any) => {
      let data: any = [{ ...payload }, ...state.wingoHistory];
      data.pop();
      state.wingoHistory = data;
    },
    updateLuckyHitHistory: (state, { payload }) => {
      let data: any = [{ ...payload }, ...state.luckyHitHistory];
      data?.pop();
      state.luckyHitHistory = data;
    },
    updateMyWinGoHistory: (state, { payload }: any) => {
      state.myWingoHistory = [{ ...payload }, ...state.myWingoHistory];
    },
    setMyWinGoHistory: (state, { payload }) => {
      state.myWingoHistory = payload;
    },
    setLuckyHitHistory: (state, { payload }) => {
      const d = payload?.filter((e: any) => e.status === "Completed");
      state.luckyHitHistory = d;
    },
    setActiveLuckyHitRoom: (state, { payload }) => {
      state.activeLuckyHitRoom = payload;
    },
  },
});

export const {
  setIsLoader,
  setUserDetails,
  setSignUpData,
  setLogOut,
  setActiveColorRoom,
  setWinGoHistory,
  updateWinGoHistory,
  updateLuckyHitHistory,
  updateMyWinGoHistory,
  setWalletBalance,
  setMyWinGoHistory,
  setLuckyHitHistory,
} = commonSlice.actions;

export default commonSlice.reducer;
