
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import AboutMe from "@/app/components/AboutMe";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <>
   <div className="bg-[#0F0A1F]" >
   <Navbar/>
   <section id="home"><Hero/></section>
   <section id="about"><AboutMe/></section>
   <section id="skills"><Skills/></section>
   <section id="projects"><Projects/></section>
   <section id="contact"><Contact/></section>
   <Footer/>
   </div>

   </>
  );
}
