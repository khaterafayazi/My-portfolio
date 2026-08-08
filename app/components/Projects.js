export default function Projects (){
    const ProjectCard = [
        {title: "Green Future", description:"A modern environmental awareness website built with Next.js and Tailwind CSS. It features a responsive layout, image gallery, about section, and a clean user interface", technologies:"Next.js, React, Tailwind.CSS"},
        {title: "Smart To Do", description:"A task management application that allows user to create, update, complete, and delete tasks. Data is stored using Local Storage for better user experience.", technologies:"React, JavaScript, Local Storage"},
        {title: "Restaurant Order List", description:"A simple restaurant ordering interface where users can browse menu items, add products, and calculate the total price using JavaScript", technologies:"HTML , CSS, JavaScript"},
        {title: "Personal Portfolio", description:"A responsive portfolio website showcasing my skills, projects, and contact information. Designed with a modern UI and built using Next.js and Tailwind CSS.", technologies:"Next.js, Taiwind CSS, React"},

    ];

    return(
        <div>
            <h2 className="text-center text-white text-3xl font-bold mt-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 items-center  justify-center gap-4 mt-8">
        {ProjectCard.map((cards) => (
         <div className="bg-clip-text rounded-2xl border border-purple-600" key={cards.title}>
            <h3 className=" text-white p-2 text-2xl font-bold text-center">{cards.title}</h3>
            <p className="text-white p-2">{cards.description}</p>
            <p className="text-purple-600 p-2 "><em>{cards.technologies}</em></p>
            <div className="text-white flex items-center justify-center p-2 mb-3 gap-4">
            <button className="bg-gradient-to-l from-[#0D0A1F]via-purple-400 to-blue-500 bg-purple-600 rounded-xl p-2 hover:scale-105 transition-transform">Live Demo</button>
            <button className="bg-gradient-to-l from-[#0D0A1F]via-purple-400 to-blue-500 bg-purple-600 rounded-xl p-2 hover:scale-105 transition-transform">View Code</button>
            </div>
         </div>
        ))} 
        </div>
        </div>
    )
}