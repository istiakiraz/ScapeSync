import React from 'react'
import logo from '../assets/logo-footer.png'
import  googleBtn from '../assets/Store download button.png'
import appleBtn from '../assets/Store download button (1).png'
import svg1 from '../assets/Vector 2.png'
import svg2 from '../assets/Vector 3.png'
import svg3 from '../assets/Vector 4.png'

export default function Footer() {
  return (
    <div className='bg-[#0f3b34]  ' >

      <div className='2xl:max-w-9/12 relative py-16 mx-auto ' >
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

        
      {/* <img  className=' absolute ml-20 opacity-30' src={svg1} alt="svg" /> */}
        
      </div>




    </div>
  )
}
