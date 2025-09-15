"use client"

import { useContext } from "react"
import { usercontext } from "@/context/cardcontext"
import { useState } from "react"
import { Target } from "lucide-react"


const Displayquiz=()=>{

    const document=useContext(usercontext)
    const [object,setobject]=useState(0)
    const [select,setselect]=useState(null)
    const [score,setscore]=useState(0)
    const [progress,setprogress]=useState(0)

    function handleclick(option){
        setselect(option)

        if(option === document.cards[object].answer){
            setscore(prev => prev+1)
        }

        setprogress(prev => prev+(100/document.cards.length))
        
        setTimeout(() => {
            setobject(prev => prev+1)
            setselect(null)
            
        },1500);
    }




    if (!document || !Array.isArray(document.cards) || document.cards.length === 0) {
        return (
            <div className="bg-white border border-gray-300 p-11 rounded-3xl">
                <p className="flex justify-center text-xl text-gray-500 font-semibold mb-12">Loading Quiz...</p>
            </div>
        )
    }

    if(document.cards.length === object){
        return(
            
            <div className="bg-white border border-gray-300 p-11 rounded-3xl">
                <div className="flex justify-center">
                    <Target className=" text-purple-400" size={50}></Target>
                </div>
                <p className="flex justify-center text-3xl font-bold mb-2">Quiz Complete</p>
                <p className="flex justify-center text-sm text-gray-500  mb-5">Here's How You Performede</p>
                <p className="flex justify-center text-5xl text-purple-500 font-bold mb-5">{score}/{document.cards.length}</p>
                <p className="flex justify-center  rounded-full p-2 text-sm bg-purple-100 font-semibold  mb-5">{(score/document.cards.length)*100}% Correct</p>
                <p className="flex justify-center rounded-xl p-5 text-sm  bg-purple-200 font-semibold  mb-10">Keep Practicing</p>
                <div className="flex justify-center gap-x-5">
                    <button className="bg-purple-500 p-2 w-40 rounded-md text-white font-semibold">Try Again</button>
                    <button className="bg-purple-100 p-2  w-40 rounded-md text-black font-semibold">Share Score</button>
                </div>

                
            </div>

        )

    }


    return(

        <>
        
            <div className="flex justify-between">
                <p className="text-sm font-semibold">Question {object+1} of {document.cards.length}</p>
                <p className="text-sm font-semibold">Score: {score}/{document.cards.length}</p>
            </div>
            <div className="my-7 h-2 bg-gray-200 rounded-full">
                <div 
                    className="h-2 bg-purple-500 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

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
        
        </>

    )
}

export default Displayquiz