import React from 'react'
import heroImg from '../assets/heroPhoto.png'
import googleBtn from '../assets/google-play.png'
import appleBtn from '../assets/iphone.png'
import bgSvg1 from '../assets/Vector.png'
import bgSvg2 from '../assets/Vector 7621.png'
import bg from '../assets/Ellipse 26.png'

export default function Hero() {
    return (
        <div className='py-10 flex flex-col lg:flex-row  items-center justify-between ' >

            {/* content side */}

            <div >
                <span className='relative'>
                    <h1 className='text-7xl font-bold max-w-xl z-20' >All Your Jobs
                        One Smart App</h1>
                    <img className='absolute -mt-50 ml-50' src={bgSvg1} alt="svg img" />
                    <img className='absolute w-80 z-10 ml-46 -mt-2' src={bgSvg2} alt="svg img" />
                </span>

                <p className='2xl:max-w-[480px] text-gray-500 mt-6' >Built for business owners, employees, and clients streamline job scheduling, service tracking, and team management in one powerful app.</p>
                <div className='flex mt-12 gap-5'>
                    <button><img className='transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ' src={googleBtn} alt="google btn" /></button>
                    <button><img className='transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ' src={appleBtn} alt="apple store btn" /></button>
                </div>
            </div>

            {/* img side */}
            <div className="bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }} >
                <img className='z-10' src={heroImg} alt="banner img phone" />

            </div>

        </div>
    )
}
