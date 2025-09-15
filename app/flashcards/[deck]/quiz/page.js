"use client"

import { BookOpen } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"
import { usercontext } from "@/context/cardcontext"

const Quiz=()=>{

    const myuser=useContext(usercontext)


    if (!myuser || !Array.isArray(myuser.cards) || myuser.cards.length === 0) {
        return (
            
            <p className="flex justify-center text-xl text-gray-500 font-semibold mb-12">Loading</p>
        )
    }


    return(

        <div className="h-screen flex flex-col">
            <div className="flex gap-x-5 items-center justify-center">
                <Link href={`/flashcards/${myuser._id}`}>
                    <label className="text-gray-500 hover:text-purple-600 cursor-pointer font-light text-sm">Study Mode</label>
                </Link>
                <Link href={`/flashcards/${myuser._id}/quiz`}>
                    <label className="text-black hover:text-purple-600 cursor-pointer font-light text-sm">Quiz Mode</label>
                </Link>
            </div>
            <div className="bg-white flex flex-col mt-20 justify-center items-center rounded-xl px-96">
                <h1 className=" flex justify-center text-4xl font-bold text-purple-500 mb-2">{myuser.title}</h1>
                <p className="text-md font-semibold text-gray-600 mb-10 text-center">Challenge yourself with our interactive quiz platform. Track your progress, compete with others, and master new topics through engaging questions.</p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className=" bg-purple-200 rounded-xl flex flex-col items-center justify-center p-4">
                        <p className="mb-1 text-sm font-semibold">Questions</p>
                        <p className="flex justify-center font-semibold text-lg">{ myuser.cards.length}</p>
                    </div>
                    <div className=" bg-purple-200 rounded-xl flex flex-col items-center justify-center p-4">
                        <p className="mb-1 text-sm font-semibold">Choises</p>
                        <p className="flex justify-center font-semibold text-lg">4</p>
                    </div>
                    <div className=" bg-purple-200 rounded-xl flex flex-col items-center justify-center p-4">
                        <p className="mb-1 text-sm font-semibold">Attemps</p>
                        <p className="flex justify-center  font-semibold text-lg">4</p>
                    </div>
                </div>
                <Link href={`/flashcards/${myuser._id}/quiz/start`}>
                    <button className="bg-purple-600 flex justify-center items-center px-8 py-2 rounded-xl text-white font-bold text-lg">start quiz</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Quiz