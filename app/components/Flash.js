"use client"
import { useState } from "react"

const Flash=({xx})=>{

    const [isfliped,setisfliped]=useState(false)

    return(
    
        <div className="perspective cursor-pointer h-56" onClick={()=>setisfliped(!isfliped)}>
            <div className={` relative transition-transform duration-500 transform-style-preserve-3d w-full h-full ${isfliped ? "rotate-y-180" : ""}`}>
                 
                 <div className="absolute inset-0 border flex flex-col justify-between items-center  border-gray-200 rounded-xl shadow-sm p-4 backface-hidden">
                    <div className="flex-1 flex justify-center items-center font-semibold text-xl">
                        {xx.quiz}
                    </div>
                    <div className="flex justify-between w-full mt-auto text-xs">
                        <div className="w-9 h-5 flex justify-center items-center">
                            <p className={`rounded-xl p-1 ${
                                xx.deficulty==="Easy" ? "bg-lime-500" :
                                xx.deficulty==="Medium" ? "bg-yellow-500": "bg-red-500"
                            }`}>{xx.deficulty}</p>
                        </div>
                        <p className="text-gray-600">Click to Flip</p>
                    </div>
                 </div>

                <div className=" absolute inset-0 border bg-gradient-to-br  from-purple-700  to-fuchsia-500 flex justify-center items-center font-semibold text-xl border-gray-200 rounded-xl shadow-sm p-4 backface-hidden rotate-y-180 text-white "  >{xx.answer}</div>

            </div>

        </div>
    )
}

export default Flash