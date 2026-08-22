export default function Projects (){
    const ProjectCard = [
        {title: "Green Future",image:"/images/image.png",  technologies:"Next.js, React, Tailwind.CSS", live:"https://github.com/FSRahimi/Green-Website.git", code:""},
        {title: "Smart To Do", image:"/images/image1.png", technologies:"React, JavaScript, Local Storage", live:"https://github.com/khaterafayazi/Smart-Todo-App"},
        {title: "Restaurant Order List", image:"/images/restaurant.png", technologies:"HTML , CSS, JavaScript", live:"https://github.com/khaterafayazi/JavaScript"},
        {title: "Personal Portfolio", image:"/images/portfolio.png", technologies:"Next.js, Tailwind CSS, React", live:"https://github.com/khaterafayazi/My-portfolio"},

    ];

    return(
        <div>
            <h2 className="text-center text-white text-3xl font-bold mt-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 items-center m-4  justify-center gap-4 mt-8">
        {ProjectCard.map((cards) => (
         <div className="bg-clip-text rounded-2xl border border-purple-700/40" key={cards.title}>
            <h3 className=" text-white p-2 text-2xl font-bold text-center">{cards.title}</h3>
            <img src={cards.image} alt={cards.title} className="w-full h-48 object-cover p-2" />
            <p className="text-purple-600 p-2 "><em>{cards.technologies}</em></p>
            <div className="text-white flex items-center justify-center p-2 mb-3 gap-4">
            <button className="border border-purple-500 rounded-xl p-2 hover:scale-105 transition-transform">Live Demo</button>
            </div>
         </div>
        ))} 
        </div>
        </div>
    )
}