import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosVideocam } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

export default function Chat() {
  const profile =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s";
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header start */}
        <div className="w-full max-w-[1150px] fixed top-0 z-10 flex justify-between items-center py-2 px-4 bg-[#F0F2F5] shadow-md">
          <div className="flex items-center gap-[10px]">
            <img
              src={profile}
              className="ml-[13px] rounded-[50%] w-[50px] h-[50px] object-cover"
              alt=""
            />
            <div>
              <h3 className="text-[20px] text-gray-900">Sanyam Gupta</h3>
            </div>
          </div>
          <div className="flex gap-[15px] flex-shrink-0">
            <button className="text-[20px] text-gray-900">
              <IoIosVideocam />
            </button>
            <button className="text-[20px] text-gray-900">
              <CiSearch />
            </button>
            <button className="text-[20px] text-gray-900">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
        {/* Header end */}

        {/* message start */}
        <div className="flex-1 relative mt-[65px]">
          <div>
            <div className="chat chat-end ml-3">
              <div className="chat-bubble bg-green-200 text-black">
                Hi Shailesh
              </div>
            </div>
          </div>
          <div>
            <div className="chat chat-start ml-3">
              <div className="chat-bubble bg-white text-black">Hi Sanyam</div>
            </div>
          </div>
        </div>

        {/* Footer start */}
        <div className="flex items-center px-4 py-2 sticky bottom-0 bg-gray-100 rounded-[10px]">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Type your message"
              className="w-full px-3 py-2 bg-[#EEEEF8] text-gray-800 rounded-md pr-[120px]"
            />
            <button
              className="absolute right-16 top-1/2 transform -translate-y-1/2 text-[20px] px-3 py-1 text-black rounded-md"
              title="Voice Message"
            >
              <MdKeyboardVoice />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[25px] px-4 py-1 text-black rounded-md"
              title="Send Message"
            >
              <IoIosSend/>
            </button>
          </div>
        </div>
        {/* Footer end */}
      </div>
    </>
  );
}
