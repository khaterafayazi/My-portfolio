import Image from "next/image"
export default function AboutMe() {
    return(
        <div className=" mt-8 m-4">
            <h2 className="text-3xl text-center mb-4"><span className="text-white">About</span><span className="text-purple-600"> Me</span></h2>
            <div className="flex p-3 border bg-[#15152D] border-purple-500 rounded-2xl">
              <Image src="/images/photo.png" width={100} height={100}/>  
            <p className="text-white p-3 text-center">Hi! I'm Khatera Fayazi, a passionate Front-End Developer with a strong interest in creating modern, resposive, and user-frindly websites.I worked with tecnologies such as HTML, CSS Tailwind CSS, JavaScript, React and Next.js.</p>
            </div>
        </div>
    )
}