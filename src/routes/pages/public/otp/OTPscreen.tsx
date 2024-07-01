import { useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { OtpSvg } from "../../../../assets/svg/Svg";
import Button from "../../../../customComponents/Button/Button";
import Notification from "../../../../customComponents/notification/Notification";
import { setIsLoader, setUserDetails } from "../../../../services/redux/commonSlice";
import { NotificationStaus } from "../../../../utils/Constants";

const OTPscreen = () => {
    const dispatch = useDispatch();
    const { signUpData } = useSelector((state: any) => state.common);
    const [otp, setOtp] = useState('');
    // const navigation = useNavigation();
    // console.log(signUpData);

    const onVerify = async () => {
        try {
            if (!otp) {
                return Notification({ title: "Please Enter OTP!!", type: NotificationStaus.danger });
            }
            dispatch(setIsLoader(true));
            // const res = await verifyOtpApi();
            // if (res?.isOTPVerified) {
            //     // console.log(res);
            //     Notification({ title: 'OTP Verified successfully' });
            //     const res = await signupApi();
            //     if (res?.success) {
                    localStorage.setItem('userData', JSON.stringify({}));
                    dispatch(setUserDetails({}));
            //     } else {
            //         // showError(res?.message);
            //     }
                dispatch(setIsLoader(false));
            // }
        } catch (err) {
            console.log(err);
            dispatch(setIsLoader(false));
            // showError(err);
        }
    };
    return (
        <div className="px-4">
            <div className="flex flex-col justify-between items-start">
                <label className="font-bold text-xl">Enter OTP</label>
                <label className="font-normal text-sm">OTP sent to <span className=" text-green-400">{signUpData?.mobileNo}</span></label>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 mt-5">
                <OtpSvg />
                <label className="text-xs font-semibold">Verify 4 - digit sincerity PIN</label>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    shouldAutoFocus={true}

                    inputStyle={{
                        border: "1px solid black",
                        borderRadius: "8px",
                        width: "40px",
                        height: "40px",
                        fontSize: "20px",
                        color: "#000",
                        fontWeight: "400",
                        caretColor: "black"
                    }}
                    renderInput={(props) => <input {...props} />}
                    renderSeparator={<span style={{ width: "30px" }}></span>}
                />
                <Button
                    title="Verify"
                    className="border border-[#E88246] w-64"
                    // mainClass="w-full"
                    onClick={onVerify}
                />
            </div>
        </div>
    )
}

export default OTPscreen
