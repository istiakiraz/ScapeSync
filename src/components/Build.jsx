import React from 'react'
import mobile1 from '../assets/mobile-r1.png'
import mobile2 from '../assets/mobiler-2.png'
import mobile3 from '../assets/mobile-left.png'
import bgWhite from '../assets/bg-white.png'
import bg from '../assets/Ellipse 26.png'
import svg1 from '../assets/titleSvg.png'
import svg2 from '../assets/Frame1.png'
import svg3 from '../assets/Frame2.png'
import svg4 from '../assets/Frame3.png'

export default function Build() {
    return (
        <div className='mt-40 relative text-center'>

            <img className='absolute h-[1420px] top-40 right-200' src={svg2} alt="svg img" />
            <img className='absolute top-40 left-40 ' src={svg3} alt="svg img" />
            <img className='absolute top-40 right-20 ' src={svg4} alt="svg img" />

           <span className='relative' >
             <h2 className='text-5xl  relative z-20 font-bold' >
                Build for Everyone
                <img className='absolute top-10 right-140 z-10' src={svg1} alt="svg" />
            </h2>
           </span>
            <p className='text-center text-gray-500 max-w-2xl mx-auto mt-4' >
                Whether you're booking services, managing tasks, or running operations, we've designed the perfect experience for you.
            </p>


            {/* mobile show 01 */}
            <div className='pt-20 flex items-center gap-50  '>
                {/* content section */}
                <div className='text-left'>
                    <span><p className='text-green-600 text-[12px] w-fit px-4 mb-2  rounded-2xl bg-green-50 border-[1px]' >User</p></span>

                    <h3 className='font-bold max-w-[400px] text-2xl mb-2' >Book services, track progress
                        and stay updated.</h3>
                    <p className=' text-gray-500 max-w-xl'>Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.</p>

                    <ul className='space-y-3 font-semibold mt-8' >
                        <li className='border-l-3 border-green-600 pl-4' >Book services in seconds</li>
                        <li className='border-l-3 border-green-700 pl-4' >Track real-time job updates</li>
                        <li className='border-l-3 border-green-800 pl-4' >Schedule appointments at your convenience</li>
                    </ul>
                </div>

                {/* img section  */}
                 <div className=' relative bg-cover bg-center' 
                 style={{ backgroundImage: `url(${bg})` ,
                backgroundSize: "150%" }}
                 >
                    <img src={mobile1} alt="mobile img" />
                    <img className='absolute -mt-28' src={bgWhite} alt="mobile img" />
                </div>
            </div>
            
            {/* mobile show 02 */}
            <div className=' flex items-center place-content-center gap-50  '>
               

                {/* img section  */}
                 <div className=' h-full pt-20 bg-cover bg-center' 
                 style={{ backgroundImage: `url(${bg})` ,
                backgroundSize: "150%" }}
                 >
                    <img src={mobile3} alt="mobile img" />
                   
                </div>

                 {/* content section */}
                <div className='text-left'>
                    <span><p className='text-green-600 text-[12px] w-fit px-4 mb-2  rounded-2xl bg-green-50 border-[1px]' >Business Owners</p></span>

                    <h3 className='font-bold max-w-[400px] text-2xl mb-2' >Assign jobs, monitor performance, and streamline operations.</h3>
                    <p className=' text-gray-500 max-w-xl'>Gain full control of your workforce with real-time tracking, smart scheduling, and service management in one app.</p>

                    <ul className='space-y-3 font-semibold mt-8' >
                        <li className='border-l-3 border-green-600 pl-4' >Assign jobs to the right team member</li>
                        <li className='border-l-3 border-green-700 pl-4' >Monitor performance in real time</li>
                        <li className='border-l-3 border-green-800 pl-4' >Manage clients and services seamlessly</li>
                    </ul>
                </div>
            </div>

            {/* mobile show 03 */}
            <div className='pt-10 flex items-center gap-50  '>
                {/* content section */}
                <div className='text-left'>
                    <span><p className='text-green-600 text-[12px] w-fit px-4 mb-2  rounded-2xl bg-green-50 border-[1px]' >Employees</p></span>

                    <h3 className='font-bold max-w-[400px] text-2xl mb-2' >See tasks, track time, and navigate routes with ease.</h3>
                    <p className=' text-gray-500 max-w-xl'>Everything you need to manage your workday from job assignments to optimized routes and time logging.</p>

                    <ul className='space-y-3 font-semibold mt-8' >
                        <li className='border-l-3 border-green-600 pl-4' >Assign jobs to the right team member</li>
                        <li className='border-l-3 border-green-700 pl-4' >Monitor performance in real time</li>
                        <li className='border-l-3 border-green-800 pl-4' >Manage clients and services seamlessly</li>
                    </ul>
                </div>

                {/* img section  */}
                <div className=' relative h-full bg-cover bg-center' 
                 style={{ backgroundImage: `url(${bg})`,
                backgroundSize: "150%" }}
                 >
                    <img src={mobile2} alt="mobile img" />
                    <img className='absolute -mt-28' src={bgWhite} alt="bg img" />
                </div>
            </div>

        </div>
    )
}
