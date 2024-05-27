import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";

function Navbar() {
    return (
        <div className='flex justify-between px-10 h-14 sticky  '>
            <div className='flex justify-center items-center gap-4 text-2xl '>
                <div><RxHamburgerMenu /></div>
                <div className='flex justify-center items-center gap-1'>
                    <FaYoutube className='text-red-600 text-3xl' />
                    <span>YouTube</span>
                </div>
            </div>
            <div className='flex text-xl justify-center items-center gap-2 '>
                <div>
                    <input className='w-96  rounded-l-3xl bg-zinc-900 border-none focus:outline-none' type="text" placeholder='Search'  />
                </div>
                <div className=' flex items-center justify-center rounded-r-3xl bg-zinc-700 h-10 w-16'><CiSearch /></div>
                <div className='bg-zinc-800 p-3 text-xl rounded-full'>
                    <FaMicrophone />
                </div>
            </div>
            <div className='flex gap-7 text-xl justify-center items-center '>
                <div><RiVideoAddFill /></div>
                <div><IoNotifications /></div>
                <div>
                    <img className='rounded-full w-9 h-9' src="./images/profile.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
