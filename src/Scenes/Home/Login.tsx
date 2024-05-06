import React, { useState } from 'react';
import { loginDataDto } from '../../Services/Auth/Dtos/loginDataDto';
import { useAppDispatch } from '../../redux/hook'
import { loginAction } from '../../redux/slices/AuthSlice';

const Login = (props: any) => {
    //#region redux init
    const dispatch = useAppDispatch()
    //#endregion

    //#region login
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleUsernameChange = (event: any) => {
        setUserName(event.target.value);
        console.log(userName);

    };
    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };
    const handleSubmit = () => {
        console.log("aloo");

        const loginData: loginDataDto = {
            userNameOrEmailAddress: userName,
            password: password,
            rememberClient: true
        };
        dispatch(loginAction(loginData))
    };
    //#endregion

    //handle register
    const { isRegister } = props
    const [typeAuth, setTypeAuth] = useState(isRegister)

    return <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: `https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80` }} >
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 className="text-4xl font-bold text-white">ECMS</h2>

                        <p className="max-w-xl mt-3 text-gray-300"><strong>M Tracker </strong>
                            - Nơi học hỏi không bao giờ ngừng, đặt nền móng vững chắc cho thành công.</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">M Tracker</h2>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">Sign {typeAuth ? 'in' : 'up'} to access your account</p>
                    </div>

                    <div className="mt-8 ">
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                            <input onChange={handleUsernameChange} type="username" name="username" id="username" placeholder="username" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                            </div>

                            <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        {
                            typeAuth ?
                                <div className="mt-6">
                                    <div>
                                        <label htmlFor="username" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                                        <input type="username" name="username" id="username" placeholder="username" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div> :
                                null
                        }

                        <div className="mt-6">
                            <button onClick={handleSubmit}
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign in
                            </button>
                        </div>



                        <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet?
                            <button onClick={() => {
                                setTypeAuth(!typeAuth)
                                console.log("click butt");

                            }} className='hover:text-blue-600 underline text-blue-300'>  Sign {typeAuth ? 'in' : 'up'}</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default Login;
