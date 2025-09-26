import React from 'react'
import heroImg from '../assets/heroPhoto.png'
import googleBtn from '../assets/google-play.png'
import appleBtn from '../assets/iphone.png'
import bgSvg1 from '../assets/Vector.png'
import bgSvg2 from '../assets/Vector 7621.png'
import bg from '../assets/Ellipse 26.png'
import { Link } from 'react-router'

export default function Hero() {
    return (
        <div className='py-10 flex flex-col lg:flex-row  items-center justify-between ' >

            {/* content side */}

            <div className='flex flex-col items-center text-center lg:items-start lg:text-left' >
                <span className='relative'>
                    <h1 className='md:text-7xl lg:mt-0 mt-10 md:mt-20 text-5xl font-bold max-w-xl z-20' >All Your Jobs
                        One Smart App</h1>
                    <img className='absolute  -top-2 md:top-10  lg:-top-20 md:left-70 md:size-28 right-30 lg:size-32 size-20 lg:right-20' src={bgSvg1} alt="svg img" />
                    <img className='absolute md:w-92 z-10 w-56 right-0 lg:right-15 -bottom-[2px]' src={bgSvg2} alt="svg img" />
                </span>

                <p className='2xl:max-w-[480px] text-gray-500 mt-6' >Built for business owners, employees, and clients streamline job scheduling, service tracking, and team management in one powerful app.</p>
                <div className='flex mt-12 gap-5'>

                     <Link  target="_blank" to='https://play.google.com/store/games?hl=en'>   <button><img className='transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ' src={googleBtn} alt="google btn" /></button> </Link>

                      <Link  target="_blank" to='https://www.apple.com/store' >  <button><img className='transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ' src={appleBtn} alt="apple store btn" /></button>  </Link>
                </div>
            </div>

            {/* img side */}
            <div className="bg-cover mt-10 lg:mt-0 bg-center"
                style={{ backgroundImage: `url(${bg})` }} >
                <img className='z-10 w-[720px] ' src={heroImg} alt="banner img phone" />

            </div>

        </div>
    )
}
