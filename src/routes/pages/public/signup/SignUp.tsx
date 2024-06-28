import { useState } from "react";

import { useNavigate } from "react-router-dom";
import img from '../../../../assets/images/OrgBG1.png';
import regexCollection from "../../../../assets/regex/regexCollection";
import Button from "../../../../customComponents/Button/Button";
import InputText from "../../../../customComponents/Input/Input";
import { useAppDispatch } from "../../../../hooks/hooks";
import {
  setIsLoader,
  setSignUpData
} from "../../../../services/redux/commonSlice";
import { sendOtpApi } from "../../../../services/api service/CommonService";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formValue, setformValue] = useState({ firstName: "", lastName: "", mobileNo: "", refrenceCode: "", password: "" });
  const [error, setError] = useState({ firstName: "", lastName: "", mobileNo: "", refrenceCode: "", password: "" });

  const isValidate = () => {
    return (
      !formValue?.firstName || !formValue?.lastName ||
      !formValue?.mobileNo || !formValue?.password ||
      !regexCollection.Mobile.test(formValue?.mobileNo) ||
      !regexCollection.Password.test(formValue?.password)
    );
  };
  const onSubmit = async () => {
    dispatch(setIsLoader(true));
    dispatch(setSignUpData(formValue))
    navigate('/otp');
    try {
      const data = await sendOtpApi(formValue?.mobileNo);
      console.log(data);
      if (data) {
        navigate('/otp');
      }
      dispatch(setIsLoader(false));
    } catch (err) {
      dispatch(setIsLoader(false));
      console.log(err);
    }
  };

  const handleChange = (event: any) => {
    const { id: key, value } = event.target
    if (key === 'mobileNo') {
      if (!value) {
        setError({ ...error, [key]: 'Should not be empty' });
      } else
        if (!regexCollection.Mobile.test(value)) {
          setError({ ...error, [key]: 'Should have 10 digits number without separation' });
        } else {
          setError({ ...error, [key]: '' });
        }
    }
    if (key === 'password') {
      if (!value) {
        setError({ ...error, [key]: 'Should not be empty' });
      } else if (!regexCollection.Password.test(value)) {
        setError({ ...error, [key]: 'Password should be a minimum of 8 characters long, contain both uppercase and lowercase characters, atleast one digit, and one special character' });
      } else {
        setError({ ...error, [key]: '' });
      }
    }
    setformValue({ ...formValue, [key]: value })
  }
  return (
    <div className="px-3 ">
      <div className="flex justify-between items-center">
        <label className="font-bold text-xl">Register</label>
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <InputText
          labelTitle="First Name"
          Id="firstName"
          required
          placeholder="First Name"
          onChange={handleChange}
        />
        <InputText
          labelTitle="Last Name"
          Id="lastName"
          required
          placeholder="Last Name"
          onChange={handleChange}
        />
        <InputText
          labelTitle="Contact"
          Id="mobileNo"
          required
          placeholder="Contact"
          onChange={handleChange}
        />
        <label className="text-xs text-red-500">{error?.mobileNo}</label>
        <InputText
          labelTitle="Password"
          Id="password"
          required
          placeholder="Password"
          onChange={handleChange}
        />
        <label className="text-xs text-red-500">{error?.password}</label>
        <InputText
          labelTitle="Referral Code"
          Id="refrenceCode"
          placeholder="Referral Code"
          onChange={handleChange}
        />
        <div className="flex justify-center w-full mt-1">
          <Button
            title="Submit"
            className="border border-[#E88246] w-full"
            mainClass="w-full"
            disable={isValidate()}
            onClick={onSubmit}
          />
        </div>

      </div>
    </div>
  );
};

export default Signup;
