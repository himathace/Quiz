"use client"
import { useState } from "react"
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import CardDelete from "../actions/deleteflash";
import { toast } from "sonner";


const Flash=({xx,dec})=>{

    const [isfliped,setisfliped]=useState(false )



    async function deleteFlash() {
        const data=await CardDelete({cardid:xx._id,deckid:dec})
        if(data.success){
            toast.success("FlashCard Deleted successfully!")
        }
    }

    return(
    
        <div className=" group bg-white transition-shadow duration-300 rounded-xl perspective cursor-pointer h-56" >

            <div className={` relative transition-transform duration-500 transform-style-preserve-3d w-full h-full ${isfliped ? "rotate-y-180" : ""}`}>

                <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-200  gap-x-2 absolute right-3 top-5 z-10">
                    <button>
                        <Pencil size={15} className="text-blue-500"></Pencil>
                    </button>
                    <button onClick={deleteFlash}>
                        <Trash2 size={15} className="text-red-500"></Trash2>
                    </button>
                </div>
                 
                <div className="absolute inset-0  flex flex-col justify-between items-center  rounded-xl shadow p-4 backface-hidden">
                    <div className="flex-1 flex justify-center items-center font-semibold text-xl">
                        {xx.quiz}
                    </div>
                    <div className="flex justify-between w-full mt-auto text-xs">
                        <div className="w-9 h-5 flex justify-center items-center">
                            <p className={`rounded-xl px-2 py-1 ${
                                xx.deficulty==="Easy" ? "bg-green-200 text-green-950" :
                                xx.deficulty==="Medium" ? "bg-yellow-200 text-yellow-950": "bg-red-300 text-red-950"
                            }`}>{xx.deficulty}</p>
                        </div>
                        <p className="text-gray-600">Click to Flip</p>
                    </div>
                </div>

                <div className=" absolute inset-0 border bg-gradient-to-br  from-purple-400 to bg-fuchsia-400 flex justify-center items-center font-semibold text-xl  rounded-xl shadow p-4 backface-hidden rotate-y-180 text-white "  >{xx.answer}</div>
            </div>

        </div>
    )
}

export default Flash