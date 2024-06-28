import axios from "axios";
import store from "../redux/store";
import instance from "../interceptor";

export const sendOtpApi = async (mobileNo: any) => {
    try {
        let headersList = {
            clientId: 'BI1L7SZCVKXRZ4KAZCYE7096VDZA5KGA',
            clientSecret: 'ez7zv0yyllnz3u2r2zvdt09304uv1yzr',
            'Content-Type': 'application/json',
        };
        const body = {
            phoneNumber: `91${mobileNo}`,
            otpLength: 4,
            channel: 'SMS',
            expiry: 120,
        };
        const { data } = await axios.post('https://auth.otpless.app/auth/otp/v1/send',
            body,
            {
                headers: headersList,
            },
        );
        return data;
    } catch (err) {
        throw err;
    }
};

export const verifyOtpApi = async (otpRes: any, otp: any, mobileNo: any) => {
    try {
        let headersList = {
            clientId: 'BI1L7SZCVKXRZ4KAZCYE7096VDZA5KGA',
            clientSecret: 'ez7zv0yyllnz3u2r2zvdt09304uv1yzr',
            'Content-Type': 'application/json',
        };
        // const { signUpData } = store.getState().common;
        const body = {
            orderId: otpRes?.orderId,
            otp: otp,
            phoneNumber: `91${mobileNo}`,
        };
        const { data } = await axios.post(
            'https://auth.otpless.app/auth/otp/v1/verify',
            body,
            {
                headers: headersList,
            },
        );
        return data;
    } catch (err) {
        throw err;
    }
};

export const signupApi = async () => {
    try {
        let body = store.getState().common.signUpData;
        const { data } = await instance.post('api/auth/register', body);
        console.log('signup Res --> ', data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};