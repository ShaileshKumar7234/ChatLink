import React from "react";
import { CiLogout, CiHome } from "react-icons/ci";

export default function Sidebar() {
  const [isdropdown, setIsdropdown] = React.useState(false);
  const profile =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s";
  return (
    <>
      <div className="sidebar fixed top-0 left-0 max-h-screen bg-[#FFFFFF] z-10 shadow-lg md:static w-100% overflow-y-scroll h-screen py-6 px-4">
        {/* search and login user profile */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between md:mt-0 mt-11">
          <input
  type="text"
  placeholder="Search"
  className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>


          <div className="relative font-[sans-serif] mt-4 md:mt-0 md:ml-4">
            <button className="flex items-center rounded-full text-[#333] text-sm outline-none" onClick={()=>setIsdropdown((prev)=>!prev)}>
              <img src={profile} className="w-9 h-9 rounded-full" alt="" />
            </button>
            <ul className={`absolute right-0 mt-2 shadow-lg bg-white py-2 z-[1000] min-w-24 w-15 rounded-lg max-h-60 overflow-x-hidden ${isdropdown ? "block" : "hidden"}`}>
              <li className="py-2.5 px-5 gap-[8px] flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                <CiHome />
                Home
              </li>
              <li className="py-2.5 px-5 gap-[8px] flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                <CiLogout />
                Logout
              </li>
            </ul>
          </div>
        </div>
        {/* search and login user profile end*/}
        <div className="my-8 flex-1">
          <h6 className="text-sm text-gray-700 font-semibold mb-6">Users</h6>
          <ul className="space-y-6">
            <li className="flex items-center text-sm text-black hover:text-blue-500 cursor-pointer">
              <span className="relative inline-block mr-4">
                <img
                  src={profile}
                  className="ml-[13px] rounded-full object-cover w-[50px] h-[50px]"
                  alt=""
                />
                <span className="h-2.5 w-2.5 rounded-full bg-green-600 block absolute bottom-1 right-0"></span>
              </span>
              <span className="font-medium">Pratham</span>
            </li>
            <li className="flex items-center text-sm text-black hover:text-blue-500 cursor-pointer">
              <span className="relative inline-block mr-4">
                <img
                  src={profile}
                  className="ml-[13px] rounded-full object-cover w-[50px] h-[50px]"
                  alt=""
                />
                <span className="h-2.5 w-2.5 rounded-full bg-green-600 block absolute bottom-1 right-0"></span>
              </span>
              <span className="font-medium">Sanyam Gupta</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}