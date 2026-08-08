
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import AboutMe from "@/app/components/AboutMe";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-[#0F0A1F]" >
   <Navbar/>
   <Hero/>
   <AboutMe/>
   <Skills/>
   <Projects/>
   <Contact/>
   </div>

   </>
  );
}
