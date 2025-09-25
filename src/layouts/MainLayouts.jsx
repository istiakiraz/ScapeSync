import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../shared/Footer'
import bg from '../assets/Ellipse 24.png'

export default function Mainlayouts() {
  return (
    <div className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }} >
      <nav className='top-0 z-50 sticky'>  <Navbar></Navbar></nav>

      <main className='2xl:max-w-9/12 max-w-11/12 mx-auto'>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
