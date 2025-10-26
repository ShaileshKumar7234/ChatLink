import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <>
      <section className="section bg-[url('https://w0.peakpx.com/wallpaper/744/548/HD-wallpaper-whatsapp-ma-doodle-pattern-thumbnail.jpg')] bg-gray-200 bg-center opacity-100">
        <div className="flex md:flex-row flex-col">
          <div className="basis-[25%] h-[100vh] md:bg-[#FFFFFF]  bg-[#FFFFFF] overflow-y-auto ">
            <Sidebar />
          </div>

          <div className="basis-[75%] h-[100vh] overflow-y-auto">
            <Chat />
          </div>
        </div>
      </section>
    </>
  );
}
