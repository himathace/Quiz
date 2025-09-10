"use client"

import { BookOpen } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"
import { usercontext } from "@/context/cardcontext"

const Quiz=()=>{

    const myuser=useContext(usercontext)


    return(

        <div className="h-screen flex flex-col">
            <div className="flex justify-center gap-x-3 pt-5 ">
                <p className="flex items-center text-white bg-purple-500 p-2 rounded-xl"><BookOpen size={25}></BookOpen></p>
                <h1 className="text-3xl font-bold text-from-violet-500 to-purple-400 flex items-center">QuizMaster</h1>
            </div>
            <p className="flex justify-center text-md text-gray-600">
                Test your knowledge with our interactive quiz platform
            </p>
            <div className="bg-white flex flex-col h-screen justify-center items-center rounded-xl px-96">
                <h1 className=" flex justify-center text-6xl font-bold text-purple-500 mb-2">{myuser.title}</h1>
                <p className="text-lg font-semibold text-gray-600 mb-10 text-center">Challenge yourself with our interactive quiz platform. Track your progress, compete with others, and master new topics through engaging questions.</p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className=" bg-purple-200 rounded-xl flex flex-col items-center justify-center p-4">
                        <p className="mb-1">Questions</p>
                        <p className="flex justify-center">4</p>
                    </div>
                    <div className=" bg-purple-200 rounded-xl flex flex-col items-center justify-center p-4">
                        <p className="mb-1">Questions</p>
                        <p className="flex justify-center">4</p>
                    </div>
                    <div className=" bg-purple-200 rounded-xl flex flex-col items-center justify-center p-4">
                        <p className="mb-1">Attemps</p>
                        <p className="flex justify-center">4</p>
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