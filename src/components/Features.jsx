import React from 'react'
import svg1 from '../assets/chart-average-stroke-rounded 1.png'
import svg2 from '../assets/gps-01-solid-standard 1.png'
import svg3 from '../assets/shield-01-stroke-standard 1.png'
import svg4 from '../assets/appointment-02-stroke-rounded 1.png'

export default function Features() {
  return (
    <div className='grid lg:grid-cols-4 grid-cols-2  gap-10 mt-18' >

        <div className='lg:border-r-2 border-gray-100' >
                <img className='bg-[#ecfceb] rounded-xl p-2' src={svg4} alt="svg img" />
            <h2 className='font-bold mt-8' >Easy Service Booking</h2>
            <p className='text-gray-500 mt-2 text-sm ' >Streamlined booking process for clients with service catalogs and availability.</p>
        </div>

        <div className='lg:border-r-2 border-gray-100' >
                <img className='bg-[#ecfceb] rounded-xl p-2' src={svg1} alt="svg img" />
            <h2 className='font-bold mt-8' >Real-Time Tracking</h2>
            <p className='text-gray-500 mt-2 text-sm ' >Monitor job progress, employee hours, and project timelines with live updates.</p>
        </div>
        <div className='lg:border-r-2 border-gray-100' >
          
                <img className='bg-[#ecfceb] rounded-xl p-2' src={svg2} alt="svg img" />
            <h2 className='font-bold mt-8' >Performance Analytics</h2>
            <p className='text-gray-500 mt-2 text-sm ' >Comprehensive reporting and insights to improve business operations and efficiency.</p>
        </div>
        <div>
          
                <img className='bg-[#ecfceb] rounded-xl p-2' src={svg3} alt="svg img" />
            <h2 className='font-bold mt-8' >Secure & Reliable</h2>
            <p className='text-gray-500 mt-2 text-sm ' >Enterprise-grade security with 99.9% uptime guarantee and data protection.</p>
        </div>
    </div>
  )
}
