"use client"
import { Edit, Trash2, Plus, Play, Delete } from "lucide-react"
import { useRouter } from "next/navigation"

function Newdeck(){

    const router=useRouter()
    
    const move=()=>{

        router.push("/createdeck")
    }

    return(

        <button className="border-2 border-black bg-white text-black hover:bg-black hover:text-white font-medium pr-6 pl-4 py-3 rounded-lg transition-all duration-200 cursor-pointer flex gap-x-3" onClick={move} >
            <Plus></Plus>
            Create New Deck
        </button>

    )
}

export default Newdeck

