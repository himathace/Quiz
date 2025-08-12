"use client"

import { Edit, Trash2, Plus, Play, Delete } from "lucide-react"
import { useRouter } from "next/navigation"


function Displaycard({val}){

    const router=useRouter()

    const gotoflashcards=()=>{
        router.push("/flashcards")
    }

    return(

        <div className="border border-gray-200 shadow-sm  hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-lg p-6" onClick={gotoflashcards} >
            <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-medium text-black mb-1">{val.title}</h2>
                </div>
                <div className="flex gap-x-3">
                  <button className="text-gray-500 text-sm flex font-medium hover:text-blue-500 hover:cursor-pointer items-center gap-x-1">
                    <Edit size={20}></Edit>
                    Edit
                  </button>
                  <button className="text-gray-500 text-sm flex font-medium hover:text-red-500 hover:cursor-pointer items-center gap-x-1">
                    <Delete size={20}></Delete>
                    Delete
                  </button>
                </div>
            </div>

            <div>
                <p className="text-gray-500 text-sm">25 cards</p>
            </div>
        </div>


    )
}

export default Displaycard