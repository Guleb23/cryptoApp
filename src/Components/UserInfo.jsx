import React from 'react'
import useStateContext from '../Api/useStateContext'
import { useNavigate } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";


export default function UserInfo() {
    const { context, setContext } = useStateContext();
    const navigate = useNavigate();
    const { resetContext } = useStateContext();
    const logout = () => {
        resetContext();
        navigate("/login")
    }
    const userName = context.username;
    const balance = context.balance;
    const percent = context.percent;
    return (
        <>
            <div className='flex shadow-lg p-5 rounded-2xl gap-6 items-center'>
                <div>
                    <div className='flex gap-4 font-montserrat leading-normal text-base text-slate-gray'>
                        Баланс: {balance}
                        <CiCirclePlus className='ml-auto hover:cursor-pointer' color='#000000' size={20} onClick={() => navigate("/balance")} />
                    </div >
                    <div className='flex font-montserrat leading-normal text-base text-slate-gray'>
                        Множитель: <span>{percent}</span>
                    </div>
                </div >
            </div >
            <button onClick={logout} >
                <IoLogOut size={30} />
            </button>
        </>
    )
}
