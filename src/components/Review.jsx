import React from 'react'
import profile1 from '../assets/Ellipse 452.png'
import profile2 from '../assets/profile2.png'
import profile3 from '../assets/Frame 253.png'
import bg from '../assets/Ellipse 29.png'

export default function Review() {
    return (


        <div className='text-center flex flex-col items-center mt-40'>

            <h2 className='text-4xl md:text-5xl font-bold' >
                What Our Users Are Saying
            </h2>
            <p className='text-center text-gray-500 text-sm max-w-xl mx-auto mt-4' >
                Real stories from clients, employees, and business owners who use our app every day.
            </p>

            <div className='mt-20 bg-cover bg-center lg:grid-cols-3 grid gap-10 grid-cols-1 md:grid-cols-2' style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "500%"
            }}>

                {/* card 1 */}
                <div className='bg-white shadow-2xl hover:scale-105 hover:shadow-black/50 transition-transform duration-300 ease-in-out cursor-grab shadow-green-100/50 w-fit rounded-2xl p-8 ' >

                    <span className='flex gap-5 ' >
                        <img src={profile1} alt=" profile pic " />
                        <span className='text-left'><h4 className='font-bold' >Farzana H.</h4>
                            <p className='text-gray-500' >Owner, CleanPro Services</p></span>
                    </span>

                    <p className='text-gray-500 text-left max-w-[300px] text-sm mt-5' >This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.</p>

                </div>

                {/* card 2 */}
                <div className='bg-white shadow-2xl hover:scale-105 hover:shadow-black/50 transition-transform duration-300 ease-in-out cursor-grab shadow-green-100/50 w-fit rounded-2xl p-8' >

                    <span className='flex gap-5 ' >
                        <img src={profile2} alt=" profile pic " />
                        <span className='text-left'><h4 className='font-bold' >Farzana H.</h4>
                            <p className='text-gray-500' >Owner, CleanPro Services</p></span>
                    </span>

                    <p className='text-gray-500 text-left max-w-[300px] text-sm mt-5' >This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.</p>

                </div>

                {/* card 3 */}
                <div className='bg-white shadow-2xl hover:scale-105 hover:shadow-black/50 transition-transform duration-300 ease-in-out cursor-grab shadow-green-100/50 w-fit md:col-span-2 md:mx-auto lg:col-span-1 rounded-2xl p-8' >

                    <span className='flex gap-5 ' >
                        <img src={profile3} alt=" profile pic " />
                        <span className='text-left'><h4 className='font-bold' >Farzana H.</h4>
                            <p className='text-gray-500' >Owner, CleanPro Services</p></span>
                    </span>

                    <p className='text-gray-500 text-left max-w-[300px] text-sm mt-5' >This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.</p>

                </div>


            </div>

        </div>
    )
}
