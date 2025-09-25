import React from 'react'
import mobile1 from '../assets/mobile-r1.png'
import mobile2 from '../assets/mobiler-2.png'
import mobile3 from '../assets/mobile-left.png'
import bgWhite from '../assets/bg-white.png'
import bg from '../assets/Ellipse 26.png'

export default function Build() {
    return (
        <div className='mt-40 text-center'>

            <h2 className='text-5xl font-bold' >
                Build for Everyone
            </h2>
            <p className='text-center text-gray-500 max-w-2xl mx-auto mt-4' >
                Whether you're booking services, managing tasks, or running operations, we've designed the perfect experience for you.
            </p>


            {/* mobile show 01 */}
            <div className='mt-30 flex items-center gap-50  '>
                {/* content section */}
                <div className='text-left'>
                    <span><p className='text-green-600 text-[12px] w-fit px-4 mb-2  rounded-2xl bg-green-50 border-[1px]' >User</p></span>

                    <h3 className='font-bold max-w-[400px] text-2xl mb-2' >Book services, track progress
                        and stay updated</h3>
                    <p className='text-sm text-gray-500 max-w-xl'>Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.</p>

                    <ul className='space-y-3 font-semibold mt-8' >
                        <li className='border-l-2 border-green-600 pl-4' >Book services in seconds</li>
                        <li className='border-l-2 border-green-600 pl-4' >Track real-time job updates</li>
                        <li className='border-l-2 border-green-600 pl-4' >Schedule appointments at your convenience</li>
                    </ul>
                </div>

                {/* img section  */}
                 <div className=' relative bg-cover bg-center' 
                 style={{ backgroundImage: `url(${bg})` }}
                 >
                    <img src={mobile1} alt="mobile img" />
                    <img className='absolute -mt-28' src={bgWhite} alt="" />
                </div>
            </div>
            
            {/* mobile show 02 */}
            <div className='mt-30 flex items-center gap-50  '>
               

                {/* img section  */}
                 <div className=' h-full bg-cover bg-center' 
                 style={{ backgroundImage: `url(${bg})` }}
                 >
                    <img src={mobile3} alt="mobile img" />
                   
                </div>

                 {/* content section */}
                <div className='text-left'>
                    <span><p className='text-green-600 text-[12px] w-fit px-4 mb-2  rounded-2xl bg-green-50 border-[1px]' >User</p></span>

                    <h3 className='font-bold max-w-[400px] text-2xl mb-2' >Book services, track progress
                        and stay updated</h3>
                    <p className='text-sm text-gray-500 max-w-xl'>Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.</p>

                    <ul className='space-y-3 font-semibold mt-8' >
                        <li className='border-l-2 border-green-600 pl-4' >Book services in seconds</li>
                        <li className='border-l-2 border-green-600 pl-4' >Track real-time job updates</li>
                        <li className='border-l-2 border-green-600 pl-4' >Schedule appointments at your convenience</li>
                    </ul>
                </div>
            </div>

            {/* mobile show 03 */}
            <div className='mt-30 flex items-center gap-50  '>
                {/* content section */}
                <div className='text-left'>
                    <span><p className='text-green-600 text-[12px] w-fit px-4 mb-2  rounded-2xl bg-green-50 border-[1px]' >User</p></span>

                    <h3 className='font-bold max-w-[400px] text-2xl mb-2' >Book services, track progress
                        and stay updated</h3>
                    <p className='text-sm text-gray-500 max-w-xl'>Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.</p>

                    <ul className='space-y-3 font-semibold mt-8' >
                        <li className='border-l-2 border-green-600 pl-4' >Book services in seconds</li>
                        <li className='border-l-2 border-green-600 pl-4' >Track real-time job updates</li>
                        <li className='border-l-2 border-green-600 pl-4' >Schedule appointments at your convenience</li>
                    </ul>
                </div>

                {/* img section  */}
                <div className=' relative h-full bg-cover bg-center' 
                 style={{ backgroundImage: `url(${bg})` }}
                 >
                    <img src={mobile2} alt="mobile img" />
                    <img className='absolute -mt-28' src={bgWhite} alt="bg img" />
                </div>
            </div>

        </div>
    )
}
