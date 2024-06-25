import { useState } from "react";

import { useNavigate } from "react-router-dom";
import regexCollection from "../../../../assets/regex/regexCollection";
import { LoginSvg } from "../../../../assets/svg/Svg";
import Button from "../../../../customComponents/Button/Button";
import InputText from "../../../../customComponents/Input/Input";
import Notification from "../../../../customComponents/notification/Notification";
import instance from "../../../../services/interceptor";
import { NotificationStaus } from "../../../../utils/Constants";
import {
  setIsLoader,
  setUserDetails,
} from "../../../../services/redux/commonSlice";
import { useAppDispatch } from "../../../../hooks/hooks";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState({ username: "", password: "" });
  const isValidate = () => {
    return (
      !value?.username ||
      !regexCollection.Mobile.test(value?.username) ||
      !value?.password ||
      !regexCollection.Password.test(value?.password)
    );
  };
  const onSubmit = async () => {
    dispatch(setIsLoader(true));
    try {
      const { data } = await instance.post("api/auth/login", value);
      console.log({ data });
      if (data?.success) {
        dispatch(setIsLoader(false));
        Notification({
          title: "Login successfull!!",
        });
        localStorage.setItem("userData", JSON.stringify(data));

        // dispatch(setUserData(data));
        dispatch(setUserDetails({ userDetails: data, isAuth: true }));
        navigate("/dashborad");
      } else {
        dispatch(setIsLoader(false));
        Notification({
          title: data?.message,
          type: NotificationStaus.danger,
        });
        // showError(data?.message)
      }
      // setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="px-3 ">
      <label className="font-bold text-xl">Sign-In</label>
      <LoginSvg />
      <div className="flex flex-col gap-2">
        <InputText
          labelTitle="Mobile Number"
          required
          placeholder="Mobile Number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, username: e?.target?.value })
          }
        />
        <InputText
          labelTitle="Password"
          required
          placeholder="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, password: e?.target?.value })
          }
        />
        <div className="flex justify-center w-full">
          <Button
            title="Login"
            className="border border-[#E88246] w-full"
            mainClass="w-full"
            disable={isValidate()}
            onClick={onSubmit}
          />
        </div>
        <div className="divider">OR</div>
        <div className="flex justify-center">
          <Button
            title="SignUp"
            className="border border-[#E88246]"
            onClick={() => navigate("/signup")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
