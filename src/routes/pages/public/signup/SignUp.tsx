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

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formValue, setformValue] = useState({ firstName: "", lastName: "", mobileNo: "", refrenceCode: "", password: "" });

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
    try {
      navigate('/otp')
      dispatch(setIsLoader(false));
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event: any) => {
    const { id: key, value } = event.target
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
          labelTitle="Constact"
          Id="mobileNo"
          required
          placeholder="Constact"
          onChange={handleChange}
        />
        <InputText
          labelTitle="Password"
          Id="refrenceCode"
          required
          placeholder="Password"
          onChange={handleChange}
        />
        <InputText
          labelTitle="Referral Code"
          Id="password"

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
