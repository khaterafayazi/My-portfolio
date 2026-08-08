
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaGit, FaFigma, FaPaintBrush, } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, } from "react-icons/si";
import {VscCode} from "react-icons/vsc";

export default function Skills(){
    const skills = [
        {
            title:"Web Development",
            skills:[
        {name:"HTML5" , icon:<FaHtml5 className="text-orange-500 text-3xl"/>},
        {name:"CSS3" , icon:<FaCss3Alt className="text-blue-500 text-3xl"/>},
        {name:"JavaScript" , icon:<FaJsSquare className="text-yellow-500 text-3xl"/>},
        {name:"Tailwind CSS" , icon:<SiTailwindcss className="text-cyan-500 text-3xl"/>},
        {name:"React" , icon:<FaReact className="text-cyan-500 text-3xl"/>},
        {name:"Next.js" , icon:<SiNextdotjs className="text-white text-3xl"/>},
       
    ],
    },
    {title:"Design & Creativity",
        skills: [
        {name:"Graghic Design", icon:<FaPaintBrush className="text-pink-400"/> },
        {name:"🎨 Drawing"},
        {name:"UI Design", icon:<FaPaintBrush className="text-pink-400"/>},
    ],
    },
    {title:"Digital Marketing",
        skills:[
            {name:"✉️ Email Marketing"},
            {name:"📤 Content Creation"},
            {name:"📈 Social Media Basics"},
        ],
    },
    {title:"Tools",
        skills:[
            {name:"Git", icon:<FaGit className="text-orange-600 text-3xl"/>},
            {name:"GitHub", icon:<FaGithub className="text-white text-3xl"/>},
            {name:"VS Code", icon:<VscCode className="text-blue-500 text-3xl"/>},
            {name:"Figma", icon:<FaFigma className="text-blue-500 text-3xl"/>},
        ],
    },
    ];

    return(
        <>
        <div className="py-24 px-6 bg-[#0B0B1F] text-white">
            <h2 className="text-5xl font-bold text-center mb-4 text-white text-transparent bg-clip-text">Skills</h2>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category) =>(
        <div key={category.title} className="bg-[#15152D] border border-purple-700/40 rounded-3xl p-8 shadow-lg hover:shadow-purple-600/30">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">{category.title}</h3>
            {category.skills.map((skills) =>(
                <div key={skills.name} className="flex gap-3">
                    {skills.icon}
                    <span className="flex items-center mb-4 text-gray-200 hover:text-purple-400 transition">{skills.name}</span>
                </div>
            ))}
            <button className="bg-gradient-to-l from-[#0D0A1F]via-purple-400 to-blue-500 bg-purple-600 rounded-xl p-2 hover:scale-105 transition-transform mt-4">View certificates</button>
        </div>
         ))}
         </div>
         </div>
         </>
    )
}