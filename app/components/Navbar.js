import Image from "next/image";
import { Send } from "lucide-react";
export default function Navbar(){
    return(
        <div className="flex justify-between border border-purple-600 p-2 bg-gray-900/30 shadow-lg hover:shadow-purple-600/30 text-white ">
           <div className="flex">
            <Image src="/images/KGLM8514.PNG" width={50} height={50} className="rounded-full"/>
            <h1 className="text-2xl text-purple-600"><em>Khatera </em></h1>
           </div>
            <div>
            <ul className="flex gap-6 ">
                <li className="hover:text-purple-500">Home</li>
                <li className="hover:text-purple-500">About</li>
                <li className="hover:text-purple-500">Skills</li>
                <li className="hover:text-purple-500">Projects</li>
                <li className="hover:text-purple-500">contect</li>
            </ul>
           </div>
            <p className="border border-purple-400 rounded-xl p-1">Let's Connect
                 <Send className="inline mr-2" size={14}/>
                </p>
        </div>
    )
}