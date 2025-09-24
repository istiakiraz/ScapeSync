import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <nav>
            <div className=" bg-base-100">
                <div className='2xl:w-9/12 lg:w-11/12 mt-6  navbar mx-auto ' >
                    <div className="navbar-start">
                        <a >
                            <img className='w-32' src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className="navbar-end">
                        <a className="btn transition-transform duration-300 ease-in-out  text-white hover:scale-105  shadow-[0px_13px_22px_-6px_rgba(59,163,52,0.67)] border-none px-6 rounded-[8px] bg-[#3ba334]">Get Started</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
