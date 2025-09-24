import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../shared/Footer'

export default function Mainlayouts() {
  return (
    <div>
        <Navbar></Navbar>
       <main className='2xl:max-w-9/12 max-w-11/12 mx-auto'>
         <Outlet></Outlet>
       </main>
        <Footer></Footer>
    </div>
  )
}
