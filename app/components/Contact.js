"use client";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import {useRef} from "react";
import { Phone, Mail , MapPin, Send} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
export default function Contact(){
    const form = useRef ();
    const sendEmail = (e) =>{
        e.preventDefault ();

        emailjs.sendForm("service_73vd0kj", "template_e11qlqn", form.current, "MPEvCwWPtklY6525o")
        .then(() => {
            alert("message send successfully!");
            form.current.reset();
        })
        .catch((error) => {
            console.log(error);
            alert(error.message);
        });
    }
    return(
        <div>
            <h4 className="text-2xl text-white text-center font-bold mt-20 mb-8">Contact Me</h4>
            <div className="flex gap-6 p-6">
            <div className=" border border-purple-600 bg-[#15152D] rounded-2xl p-2 ">
                <h5 className="text-white">Get In Touch</h5><hr className="text-white mt-4 mb-3"></hr>
                <div className="text-white flex ">
                    <Phone className="mb-2 "/>
                    <p className="p-3"> +93729095682</p>
                </div>
                <div className="text-white flex">
                    <Mail className="mb-2 mt-2 "/>
                <p className="p-3">khatirafayazi812@gmail.com</p>
                </div>
                <div className="flex ">
                    <MapPin  className="text-red-500 mb-2 mt-2 "/>
                    <p className="text-white p-3"> Afghanistan</p>
                </div>
                    <Image src="/images/KGLM8514.PNG" width={300} height={500} className="mb-6"/>
                <div className="flex gap-6">
                    <a href="mailto:khatirafayazi812@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="text-white" size={40}/>
                    </a>
                    <a href="https://www.linkedin.com/in/khatera-fayazi-4482003a7/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className=" text-white bg-blue-500 text-4xl rounded-lg p-1"/>
                    </a>
                    <a href="https://github.com/khaterafayazi" target="_blenk" rel="noopener noreferrer">
                    <FaGithub className="text-4xl text-white"/>
                    </a>
                </div>
                
            </div>
            <div className="w-3/4 text-white p-6 bg-[#15152D] border border-purple-600 rounded-2xl">
           <form ref = {form} onSubmit = {sendEmail}>
            <div className="mb-2">
            <label>Your Name : </label>
            <input type="text" placeholder="type your name" name="name" className=" w-3/4 backdrop-blur-md p-2 border border-white/20"/>
            </div>
            <div className="">
            <label>Your Email :  </label>
            <input type="email" placeholder="type your email" name="email" className="border border-wite w-3/4 p-2 backdrop-blur-md border border-white/20"/>
            </div>
            <div className="">
            <label>Subject :  </label>
            <input type="text" placeholder="subjact" name="title" className="m-6 border border-white w-3/4 p-2 backdrop-blur-md border border-white/20"/>
            </div>
            <div className="mb-2">
                <div>
            <label className="">Your Message</label>
            </div>
            <div className="border border-white  h-48  rounded-xl">
            <textarea className="w-full" name="message"></textarea>
            </div>
            </div>
            <div className="text-center">
            <button type="submit" className="w-3/4 bg-gradient-to-l from-[#0D0A1F]via-purple-400 to-blue-500 bg-purple-600 rounded-xl p-2 hover:scale-105 transition-transform mt-4 ">
            <Send className="inline mr-2 size={18}"/>
            Send Message
            </button>
            </div>
           </form>
           </div>
           </div>
        </div>
    )
}