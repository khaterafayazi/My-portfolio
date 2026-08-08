export default function Navbar(){
    return(
        <div className="flex justify-between border border-purple-600 p-2 shadow text-purple-600 bg-white">
            <h1 className="text-2xl text-purple-600"><em>Khatera </em></h1>
            <div>
            <ul className="flex gap-6 ">
                <li className="hover:text-purple-500">Home</li>
                <li className="hover:text-purple-500">About</li>
                <li className="hover:text-purple-500">Skills</li>
                <li className="hover:text-purple-500">Projects</li>
                <li className="hover:text-purple-500">contect</li>
            </ul>
           </div>
            <p className="border border-purple-400 rounded-xl p-1">Let's Connect</p>
        </div>
    )
}