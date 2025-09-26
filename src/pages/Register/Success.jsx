import React from 'react'
import logo from "../../assets/logo.png";
import { Link } from 'react-router';
import successImg from '../../assets/Group.png'


export default function Success() {
    return (
        <div className="2xl:w-9/12 mx-auto w-11/12 min-h-screen flex flex-col">
            {/* Logo */}
            <div className="pt-10">
                <Link to="/">
                    <img className="w-32" src={logo} alt="logo" />
                </Link>
            </div>


            {/* OTP Page Content */}

            <div className="flex flex-col items-center max-w-[500px] mx-auto justify-center flex-1">

                <img src={successImg} alt="" />

                <h2 className="text-3xl mx-auto text-center mt-8 font-bold mb-2">Account Created Successfully!</h2>
                <p className='text-gray-500 text-center'>Your account is set up! Just verify your email to get started.</p>


                {/*Button */}
                <Link to='/'>
                    <button
                        className="btn transition-transform  mt-8 duration-300 ease-in-out 
                            text-white hover:scale-105 shadow-[0px_13px_22px_-6px_rgba(59,163,52,0.67)] 
                            border-none px-6 rounded-[8px] bg-[#3ba334] w-96 mb-4 "
                    >
                        Go To Home
                    </button>
                </Link>

            </div>

        </div>
    )
}
