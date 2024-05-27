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
            <div className='flex text-xl justify-center items-center '>
                <div>
                    <input className='px-10 w-[400px] py-1 rounded-l-3xl bg-zinc-950' type="text" placeholder='Search'  />
                </div>
                <div className='rounded-r-3xl px-4 bg-zinc-700 py-2'><CiSearch /></div>
            </div>
            <div className='flex gap-5 text-xl justify-center items-center '>
                <div className='bg-zinc-800 p-3 text-xl rounded-full'>
                    <FaMicrophone />
                </div>
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
