import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router'

export default function Navbar() {
    return (
        
            <div className=" bg-base-100/60 backdrop-blur-md">
                <div className='2xl:w-9/12 lg:w-11/12 mt-4  navbar mx-auto'>
                    {/* Left Side */}
                    <div className="navbar-start">
                        <Link to='/' >
                            <img className='w-32' src={logo} alt="logo" />
                        </Link>
                    </div>

                    {/* Right Side */}
                    <div className="navbar-end">
                        <Link to='/register' className="btn transition-transform duration-300 ease-in-out 
                            text-white hover:scale-105 shadow-[0px_13px_22px_-6px_rgba(59,163,52,0.67)] 
                            border-none px-6 rounded-[8px] bg-[#3ba334]">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
      
    )
}
