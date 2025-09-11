"use client"

import { useContext, useEffect } from "react"
import { usercontext } from "@/context/cardcontext"
import { useState } from "react"


const Displayquiz=()=>{

    const document=useContext(usercontext)
    const [object,setobject]=useState(0)


    if (!document || !Array.isArray(document.cards) || document.cards.length === 0) {
        return (
            <div className="bg-white border border-gray-300 p-11 rounded-3xl">
                <p className="flex justify-center text-2xl font-bold mb-12">Loading quiz...</p>
            </div>
        )
    }


    return(

        <div className="bg-white border border-gray-300 p-11 rounded-3xl">
            <p className="flex justify-center text-2xl font-bold mb-12 ">{document.cards[object].quiz}</p>
            <div className="flex flex-col gap-y-5 mb-5">
                <button className="h-12 flex items-center p-5 font-semibold  ring-1 ring-gray-300 hover:bg-purple-100 hover:ring-purple-700 transition-all duration-300 rounded-xl">{document.cards[object].op1}</button>
                <button className="h-12 ring-1 font-semibold ring-gray-300 rounded-xl hover:bg-purple-100 hover:ring-purple-700 transition-all duration-300  flex items-center p-5 ">{document.cards[object].op2}</button>
                <button className="h-12 ring-1 font-semibold ring-gray-300 rounded-xl hover:bg-purple-100 hover:ring-purple-700 transition-all duration-300 flex items-center p-5 ">{document.cards[object].op3}</button>
                <button className="h-12 ring-1 font-semibold ring-gray-300 rounded-xl hover:bg-purple-100 hover:ring-purple-700 transition-all duration-300 flex items-center p-5 ">{document.cards[object].op4}</button>
            </div>
            <div className="flex justify-center">
                <button className="bg-purple-500 p-2 rounded-xl text-white" onClick={()=>setobject(prev => prev+1)} >Next Question</button>
            </div>
        </div>
    )
}

export default Displayquiz