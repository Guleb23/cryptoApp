import React from 'react'
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants.js'
import { Link, useNavigate } from 'react-router-dom';
import useStateContext from '../Api/useStateContext.jsx';
import UserInfo from '../Components/UserInfo.jsx';

export default function Navigation() {
  const navigation = useNavigate();
  const { context, setContext } = useStateContext();

  const navigate = useNavigate();
  return (
    <header className='padding-x py-8 
    relative z-10 w-full'>
      <nav className='flex justify-between items-center
      max-container'>
        <a href='/'>
          <img src={headerLogo} alt='logo'
            width={216} height={31} />
        </a>
        {context.id == 0 ? null : <ul
          className='flex-1 flex justify-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.href}>
                <div className='font-montserrat leading-normal text-lg text-slate-gray'>
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>}

        {context.id == 0 ? <div className=''>
          <button className='flex justify-center items-center
          gap-2 px-7 py-4 border font-monserrat
          text-lg leading-none bg-coral-red rounded-full
         text-white border-coral-red login' onClick={() => navigation("/login")}>
            Войти
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
          </button>
        </div> : <UserInfo />
        }
      </nav>
    </header>
  )
}
