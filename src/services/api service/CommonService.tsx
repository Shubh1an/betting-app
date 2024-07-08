import axios from "axios";
import store from "../redux/store";
import instance from "../interceptor";
import { setLuckyHitHistory, setMyWinGoHistory, setWalletBalance, setWinGoHistory } from "../redux/commonSlice";

export const sendOtpApi = async (mobileNo: any) => {
  try {
    let headersList = {
      clientId: "BI1L7SZCVKXRZ4KAZCYE7096VDZA5KGA",
      clientSecret: "ez7zv0yyllnz3u2r2zvdt09304uv1yzr",
      "Content-Type": "application/json",
    };
    const body = {
      phoneNumber: `91${mobileNo}`,
      otpLength: 4,
      channel: "SMS",
      expiry: 120,
    };
    const { data } = await axios.post(
      "https://auth.otpless.app/auth/otp/v1/send",
      body,
      {
        headers: headersList,
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const verifyOtpApi = async (otpRes: any, otp: any, mobileNo: any) => {
  try {
    let headersList = {
      clientId: "BI1L7SZCVKXRZ4KAZCYE7096VDZA5KGA",
      clientSecret: "ez7zv0yyllnz3u2r2zvdt09304uv1yzr",
      "Content-Type": "application/json",
    };
    // const { signUpData } = store.getState().common;
    const body = {
      orderId: otpRes?.orderId,
      otp: otp,
      phoneNumber: `91${mobileNo}`,
    };
    const { data } = await axios.post(
      "https://auth.otpless.app/auth/otp/v1/verify",
      body,
      {
        headers: headersList,
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const signupApi = async () => {
  try {
    let body = store.getState().common.signUpData;
    const { data } = await instance.post("api/auth/register", body);
    console.log("signup Res --> ", data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getWinGoHistory = async () => {
  try {
    const body = {
      gameId: store.getState().common.activeColorRoom?.gameId,
      pageNumber: 1,
      pageSize: 20,
    };
    const { data } = await instance.post("api/room/getAllRooms", body);
    store.dispatch(setWinGoHistory(data?.roomsList));
  } catch (e) {
    console.log(e);
  }
};

export const getMyWinGoHistory = async () => {
  try {
    const body = {
      pageNumber: 1,
      pageSize: 20,
    };
    const { data } = await instance.post(
      "api/participant/orderListByParticipant",
      body
    );
    store.dispatch(setMyWinGoHistory(data?.participantOrderList));
  } catch (e) {
    console.log(e);
  }
};

export const getWalletAmount = async () => {
  try {
    const { data } = await instance.get("api/wallet/getAmountByUserId");
    if (data?.success) {
      store.dispatch(setWalletBalance(data?.data));
    }
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addAmountToWallet = async (amount: any) => {
  try {
    let body = {
      amount: amount,
    };
    const { data } = await instance.post("api/wallet/addAmountInWallet", body);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getWalletHistory = async () => {
  try {
    let body = {
      pageNumber: 1,
      pageSize: 10,
    };
    const { data } = await instance.post("api/wallet/getTnxByUserId", body);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getLuckyHitHistory = async () => {
  try {
    const body = {
      gameId: store.getState().common.activeLuckyHitRoom?.gameId,
      pageNumber: 1,
      pageSize: 40,
    };
    const { data } = await instance.post("api/room/getAllLuckyHitRooms", body);
    store.dispatch(setLuckyHitHistory(data?.roomsList));
  } catch (e) {
    console.log(e);
  }
};
