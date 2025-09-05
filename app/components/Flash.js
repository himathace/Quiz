"use client"
import { useState } from "react"

const Flash=({xx})=>{

    const [isfliped,setisfliped]=useState(false)

    return(
    
        <div className="perspective cursor-pointer h-56" onClick={()=>setisfliped(!isfliped)}>
            <div className={` relative transition-transform duration-500 transform-style-preserve-3d w-full h-full ${isfliped ? "rotate-y-180" : ""}`}>
                 
                <div className=" absolute inset-0 border flex justify-center items-center font-semibold text-xl border-gray-200 rounded-xl shadow-sm p-4 backface-hidden"  >{xx.quiz}</div>

                <div className=" absolute inset-0 border bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 flex justify-center items-center font-semibold text-xl border-gray-200 rounded-xl shadow-sm p-4 backface-hidden rotate-y-180 text-white "  >{xx.answer}</div>

            </div>

        </div>
    )
}

export default Flash