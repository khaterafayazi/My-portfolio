"use client";

import {FaReact, FaNodeJs, FaJs,FaCss3Alt, FaGithub} from "react-icons/fa";
import {LuCode} from "react-icons/lu";
import Image from "next/image"
export default function Hero(){
  return(
    <div className="mt-8 flex m-6">
      <div>
        <p className="text-white">Hi, I'm</p>
        <h1 className="text-3xl font-bold text-white"><span className=""> Khatera</span><br></br><span> Fayazi</span></h1>
        <p className="text-purple-400">Front-End Developer</p>
        <p className="text-white mb-6">I build beautifull, responsive and user-friendly web applications with modern technologies. I love turning ideas into real digital experiences.</p>
        <div className=" gap-4">
           <a href="https://github.com/khaterafayazi" target="_blenk" rel="noopener noreferrer">
        <button className=" text-white bg-gradient-to-l from-[#0D0A1F]via-purple-400 to-blue-500 p-2  rounded-xl bg-purple-500 hover:scale-105 transition-transform hover:bg-gray-500">View Projects ➔</button>
        </a>
        <button className="border border-purple-600 ml-3  rounded-xl p-2 text-purple-600 hover:scale-105 transition-transform">Download CV <span className="font-bold">⤓</span></button>
        </div>
        </div>
        <div className="relative flex items-center justify-center w-full h-[500px] ">
          <div className="absolute w-80 h-80 bg-purple-600/50 rounded-full blur-3xl z-0 animate-pulse"></div>
        <div className="relative z-0">
        <Image src="/images/photo.png" alt="profile" width={250} height={250} className="object-contain " priority/>
      </div>
      <div className="absolute top-20 left-24 animate-float animate-float text-cyan-400 text-3xl hover:scale-110 transition-transform">
         <FaReact/>
        </div>
        <div className="absolute top-20 right-24 animate-float [animation-delay:1s] text-green-600 text-3xl hover:scale-110 transition-transform">
         <FaNodeJs/>
        </div>
        <div className="absolute bottom-20 left-24 animate-float [animation-delay:1.5s] text-yellow-400 text-3xl hover:scale-110 transition-transform">
         <FaJs/>
        </div>
        <div className="absolute bottom-20 right-24 animate-float [animation-delay:2s] text-purple-400 text-3xl hover:scale-110 transition-transform">
         <LuCode/>
        </div>
        <div className="absolute top-1/2 left-16 -translate-y-1/2 animate-float [animation-delay:0.5s] text-blue-500 text-3xl hover:scale-110 transition-transform">
         <FaCss3Alt/>
        </div><div className="absolute top-1/2 right-16 -translate-y-1/2 animate-float [animation-delay:2.5s] text-gray-300 text-3xl hover:scale-110 transition-transform">
         <FaGithub/>
        </div>
        </div>
    </div>

  )
}