"use client"

import Flash from "@/app/components/Flash"
import Link from "next/link"
import { Settings,User,Plus,BookOpen } from "lucide-react"
import Searchflashcard from "@/app/components/searchFlashcard"
import { useContext } from "react"
import { usercontext } from "@/context/cardcontext"
import Add from "@/app/components/addnew"


const use=()=>{

    const myuser=useContext(usercontext)


    return(

        <div className="flex flex-col">
            <div className="flex gap-x-5 items-center justify-center">
                <Link href={`/flashcards/${myuser._id}`}>
                    <label className="text-black hover:text-purple-600 cursor-pointer font-light text-sm">Study Mode</label>
                </Link>
                <Link href={`/flashcards/${myuser._id}/quiz`}>
                    <label className="text-gray-500 hover:text-purple-600 cursor-pointer font-light text-sm">Quiz Mode</label>
                </Link>
            </div>

            <div className="my-3 mx-16">
                <p className="text-4xl font-medium bg-gradient-to-r  from-purple-500  to-fuchsia-500 bg-clip-text text-transparent">{myuser.title}</p>
                <p className="text-xs text-gray-500">12 of 12 cards</p>
            </div>
            <div className="flex justify-between mx-16 gap-x-5 mb-5">
                <input type="text" className="w-full h-10 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-700 focus:ring-1 " placeholder=" Search FlashCards"/>
                <select className="border border-gray-300 rounded-lg p-2">
                    <option>All Levels</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
            </div>
            <div className="grid grid-cols-4 gap-5 mx-16">

                {

                    !myuser || !myuser.cards ? 

                       <div className="flex  flex-col justify-center items-center col-span-4 min-h-[200px]  text-sm font-semibold">
                            <p>Loding FlashCards</p>
                            <div className="flex items-center gap-2 h-10">
                                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></div>
                                <div className="w-3 h-3 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
                            </div>
                        </div>
                        
                        :

                        <>
                            {myuser.cards.map((va)=>{
                                return <Flash xx={va}  key={va._id} />
                            })}
                            <Link href={`/flashcards/${myuser._id}/add`}>
                                <Add />
                            </Link>
                        </>
                }
            </div>
        </div>

        
    )
}

export default use