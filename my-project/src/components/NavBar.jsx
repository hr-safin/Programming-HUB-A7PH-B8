import React, { useState } from 'react'
import {FaTimes, FaBars} from "react-icons/fa"

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
  return (
    <div  className='w-full h-[80px] px-4 flex justify-between items-center  text-white bg-gradient-to-r from-cyan-600 to-purple-600 shadow-xl '>
       <h2 className=' text-2xl sm:text-3xl md:text-3xl lg:px-12 px-6'>Programming Hub</h2>

    <ul className='hidden md:flex text-white text-base space-x-14 pr-10'>
    <li className=' cursor-pointer hover:text-gray-400'>Home</li>
    <li className=' cursor-pointer hover:text-gray-400'>About</li>
        <li className=' cursor-pointer hover:text-gray-400'>Course</li>
        <li className=' cursor-pointer hover:text-gray-400'>Contact Us</li>  
    </ul>
    <div onClick={handleClick} className='md:hidden z-10 text-2xl text-white'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>
    <ul className={!nav ? "hidden" : 'absolute  w-full h-screen  top-0 right-0 flex flex-col justify-center items-center bg-blue-400 text-white '}>
    <li className='py-3 text-2xl'>Home</li>
    <li className='py-3 text-2xl'>About</li>
    <li className='py-3 text-2xl'>Course</li>
    <li className='py-3 text-2xl'>Contact Us</li>
    </ul>
    </div>
  )
}

export default NavBar