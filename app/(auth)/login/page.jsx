import { BookOpen } from "lucide-react"

export default function Login(){
    return(
        
        <>
            <p className="text-sm font-semibold mt-7">Email</p>
            <input type="text" className="border-gray-300 border rounded-lg mt-1 h-10 p-2 transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none" placeholder="You@example.com"></input>
            <p className="text-sm font-semibold mt-3">Password</p>
            <input type="text" className="border border-gray-300 rounded-lg mt-1 h-10 p-2 transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none " placeholder="**********"></input>
            <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600  rounded-lg text-sm text-white mt-5 h-10 font-semibold">Sign in</button>
        </>
    )
}