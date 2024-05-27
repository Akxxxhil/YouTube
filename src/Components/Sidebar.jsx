import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { CgPlayList } from "react-icons/cg";

function Sidebar() {
    const mainLinks = [
        {
            icon: <IoMdHome />,
            name: "Home"
        },
        {
            icon: <SiYoutubeshorts />,
            name: "Shorts"
        },
        {
            icon: <MdSubscriptions />,
            name: "Subscriptions"
        },
    ]
    const otherLinks = [
        {
            icon: <ImProfile />,
            name: "Your Channel"
        },
        {
            icon: <FaHistory />,
            name: "History"
        },
        {
            icon: <CgPlayList />,
            name: "Playlists"
        },
    ]
    return (
        <div className='w-2/12 h-screen bg-[#212121] overflow-auto pr-5 pb-8 '>
           <div className='border-b-2'>
           {mainLinks.map((eachside) => {
                return <div>
                    <div className='flex flex-col   '>
                        <div className={`pl-5 py-3 flex justify-center items-center gap-1 hover:bg-slate-600 ${name === "Home" ? "hover:bg-slate-600" : ""}`}>
                            {eachside.icon}
                            <span className=' text-sm tracking-wider'>{eachside.name}</span>
                        </div>

                    </div>
                </div>
            })}
           </div>

            {otherLinks.map((eachside) => {
                return <div>
                    <div className='flex flex-col border-gray-800'>
                        <div className={`pl-5 py-3 flex justify-center items-center gap-1 hover:bg-slate-600 ${name === "Home" ? "hover:bg-slate-600" : ""}`}>
                            {eachside.icon}
                            <span className=' text-sm tracking-wider'>{eachside.name}</span>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Sidebar
