"use client"
import { useState } from "react"

const Flash=({xx})=>{

    const [isfliped,setisfliped]=useState(false)

    return(
    
        <div className=" hover:shadow-lg bg-white transition-shadow duration-300 perspective cursor-pointer h-56" onClick={()=>setisfliped(!isfliped)}>
            <div className={` relative transition-transform duration-500 transform-style-preserve-3d w-full h-full ${isfliped ? "rotate-y-180" : ""}`}>
                 
                 <div className="absolute inset-0 border flex flex-col justify-between items-center  border-gray-300 rounded-xl shadow-sm p-4 backface-hidden">
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

                <div className=" absolute inset-0 border bg-gradient-to-br  from-purple-300 to bg-purple-400 flex justify-center items-center font-semibold text-xl border-gray-300 rounded-xl shadow-sm p-4 backface-hidden rotate-y-180 text-white "  >{xx.answer}</div>
            </div>

        </div>
    )
}

export default Flash