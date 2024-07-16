import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createAPIEndpoint, ENDPOINTS } from '../Api/Index'
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const navigate = useNavigate();

    const reg = () => {
        const user = {
            UserName: userName,
            Password: userPassword,
            Email: userEmail,
        };
        createAPIEndpoint(ENDPOINTS.registration).post(user).then(res => {
            alert("Успешная регитрация");
            console.log(res);
            navigate("/login");
        }).catch(e => {
            if (e.response.status == 409) {
                alert("Пользователь с таким именем уже зарегистрирован");
            }
        });
        console.log(user);
    };

    return (
        <div className="bg-[rgb(236,238,255)]">
            <div className="container px-6 mx-auto">
                <div
                    className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center"
                >
                    <div className="flex flex-col w-full">
                        <div className='text-center m-auto md:m-8'>
                            <img src='/src/assets/images/LogRegLogo.svg' />
                        </div>
                    </div>
                    <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
                        <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                            <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                                Registartion
                            </h2>
                            <form action="" className="w-full">
                                <div id="input" className="flex flex-col w-full my-5">
                                    <label className="text-gray-500 mb-2">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Please insert your username"
                                        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-red focus:shadow-lg" />
                                </div>
                                <div id="input" className="flex flex-col w-full my-5">
                                    <label className="text-gray-500 mb-2">Password</label>
                                    <input
                                        onChange={(e) => setUserPassword(e.target.value)}
                                        type="password"
                                        id="password"
                                        placeholder="Please insert your password"
                                        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-red focus:shadow-lg"
                                    />
                                </div>
                                <div id="input" className="flex flex-col w-full my-5">
                                    <label className="text-gray-500 mb-2">Email</label>
                                    <input
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        type="text"
                                        id="email"
                                        placeholder="Please insert your email"
                                        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-red focus:shadow-lg"
                                    />
                                </div>
                                <div id="button" className="flex flex-col w-full my-5">
                                    <button onClick={reg}
                                        type="button"
                                        className="w-full py-4 bg-coral-red rounded-lg text-green-100">
                                        <div className="flex flex-row items-center justify-center">
                                            <div className="mr-2">
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className="font-bold">Registration</div>
                                        </div>
                                    </button>
                                    <div className="flex justify-evenly mt-5">
                                        <a
                                            href="#"
                                            className="w-full text-center font-medium text-gray-500"
                                        >Recover password!</a
                                        >
                                        <Link to="/login">
                                            <p className="w-full text-center font-medium text-gray-500">Login!</p >
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

