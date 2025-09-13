"use client"

import { useContext, useEffect } from "react"
import { usercontext } from "@/context/cardcontext"
import { useState } from "react"


const Displayquiz=()=>{

    const document=useContext(usercontext)
    const [object,setobject]=useState(0)
    const [select,setselect]=useState(null)

    function handleclick(option){
        setselect(option)

        setTimeout(() => {
            setobject(prev => prev+1)
            setselect(null)
            
        },2000);
    }




    if (!document || !Array.isArray(document.cards) || document.cards.length === 0) {
        return (
            <div className="bg-white border border-gray-300 p-11 rounded-3xl">
                <p className="flex justify-center text-2xl font-bold mb-12">Loading quiz...</p>
            </div>
        )
    }

    if(document.cards.length === object){
        return(
            
            <div className="bg-white border border-gray-300 p-11 rounded-3xl">
                <p className="flex justify-center text-2xl font-bold mb-12">Quiz over</p>
            </div>

        )

    }


    return(

        <div className="bg-white border border-gray-300 p-11 rounded-3xl">
            <p className="flex justify-center text-2xl font-bold mb-12 ">{document.cards[object].quiz}</p>
            <div className="flex flex-col gap-y-5 mb-5">

                {document.cards[object].options.map((val,index)=>{

                    let bgcolor="bg-white hover:bg-purple-100 hover:ring-purple-700"

                    if(select){

                        if(val===select && val===document.cards[object].answer){
                            bgcolor="bg-green-400 text-white"
                        }
                        else if(val===select && val !== document.cards[object].answer){
                            bgcolor="bg-red-400 text-white"
                        }
                        else if(val===document.cards[object].answer){
                            bgcolor="bg-green-500 text-white"
                        }
                        else{
                            bgcolor="bg-white"
                        }

                    }

                    return <button className={`h-12 flex items-center p-5 font-semibold  ring-1 ring-gray-300    transition-all duration-300 rounded-xl ${bgcolor}`} key={index} onClick={()=>handleclick(val)} disabled={ select ? true : false} >{val}</button>

                })}
            </div>
        </div>
    )
}

export default Displayquiz