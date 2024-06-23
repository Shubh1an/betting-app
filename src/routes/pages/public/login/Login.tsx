import React from 'react'
import { LoginSvg } from '../../../../assets/svg/Svg'
import InputText from '../../../../customComponents/Input/Input'
import Button from '../../../../customComponents/Button/Button'

const Login = () => {
    return (
        <div className='px-3 '>
            <label className='font-bold text-xl'>Sign-In</label>
            <LoginSvg />
            <div className='flex flex-col gap-2'>
                <InputText labelTitle="Mobile Number" required placeholder="Mobile Number" />
                <InputText labelTitle="Password" required placeholder="Password" />
                <div className="flex justify-center w-full">
                    <Button title="Login" className="border border-[#E88246]" />
                </div>
                <div className="divider">OR</div>
                <div className="flex justify-center">
                    <Button title="SignUp" className="border border-[#E88246]" />
                </div>
            </div>
        </div>
    )
}

export default Login
