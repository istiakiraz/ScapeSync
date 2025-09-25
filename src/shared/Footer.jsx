import React from 'react'
import logo from '../assets/logo-footer.png'
import googleBtn from '../assets/Store download button.png'
import appleBtn from '../assets/Store download button (1).png'
import svg1 from '../assets/Vector 2.png'
import svg2 from '../assets/Vector 3.png'
import svg3 from '../assets/Vector 4.png'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='bg-[#0f3b34] relative overflow-hidden  ' >

      <div className='2xl:max-w-9/12 max-w-11/12 relative  pt-30 pb-8 mx-auto ' >
        <div className='flex items-center justify-between'>
          <img src={logo} alt="site logo" />
          <p className='max-w-[450px] text-white/80' >Your all-in-one platform for job scheduling, employee management, and client service built to keep your business running smoothly from anywhere.</p>

          <span className=' flex items-center gap-5'>
            <button>
              <img src={appleBtn} alt="apple btn" />
            </button>
            <button>
              <img src={googleBtn} alt="google btn" />
            </button>
          </span>
        </div>

        <div className='flex items-center gap-8 mt-24'>
          <Link><FaYoutube size={25} color='white' /></Link>
          <Link><FaFacebook size={25} color='white' /></Link>
          <Link><FaFacebook size={25} color='white' /></Link>
          <Link><FaInstagram size={25} color='white' /></Link>
        </div>

      </div>

      <div className='border-gray-600 border-t-2 py-2' >
        <span  >
          <p className='text-gray-500 2xl:w-9/12 w-11/12 mx-auto text-sm' >© 2021-2025, ScapeSync. All Rights Reserved.</p>
        </span>
      </div>

         <img  className=' absolute bottom-0 right-100 opacity-20' src={svg1} alt="svg" />
         <img  className=' absolute top-0 right-0 opacity-20' src={svg2} alt="svg" />
         <img  className=' absolute bottom-0 right-0 opacity-20' src={svg3} alt="svg" />



    </div>
  )
}
