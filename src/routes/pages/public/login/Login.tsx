import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import regexCollection from '../../../../assets/regex/regexCollection'
import { LoginSvg } from '../../../../assets/svg/Svg'
import Button from '../../../../customComponents/Button/Button'
import InputText from '../../../../customComponents/Input/Input'
import Notification from '../../../../customComponents/notification/Notification'
import instance from '../../../../services/interceptor'
import { NotificationStaus } from '../../../../utils/Constants'
import { setIsLoader } from '../../../../services/redux/commonSlice'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [value, setValue] = useState({ username: "", password: "" });
    const isValidate = () => {
        return (!value?.username || !regexCollection.Mobile.test(value?.username) || !value?.password || !regexCollection.Password.test(value?.password))
    }
    const onSubmit = async () => {
        dispatch(setIsLoader(true))
        try {
            const { data } = await instance.post('api/auth/login', value);
            console.log({ data });
            if (data?.success) {
                dispatch(setIsLoader(false))
                Notification({
                    title: "Login successfull!!",
                })
                localStorage.setItem('userData', JSON.stringify(data));
                navigate('')
                // dispatch(setUserData(data));
            } else {
                dispatch(setIsLoader(false))
                Notification({
                    title: data?.message,
                    type: NotificationStaus.danger
                })
                // showError(data?.message)
            }
            // setLoading(false);
        }
        catch {

        }
    }
    return (
        <div className='px-3 '>
            <label className='font-bold text-xl'>Sign-In</label>
            <LoginSvg />
            <div className='flex flex-col gap-2'>
                <InputText labelTitle="Mobile Number" required placeholder="Mobile Number" onChange={(e: any) => setValue({ ...value, username: e?.target?.value })} />
                <InputText labelTitle="Password" required placeholder="Password" onChange={(e: any) => setValue({ ...value, password: e?.target?.value })} />
                <div className="flex justify-center w-full">
                    <Button title="Login" className="border border-[#E88246] w-full" mainClass="w-full" disable={isValidate()} onClick={onSubmit} />
                </div>
                <div className="divider">OR</div>
                <div className="flex justify-center">
                    <Button title="SignUp" className="border border-[#E88246]" onClick={() => navigate('/signup')} />
                </div>
            </div>
        </div>
    )
}

export default Login
