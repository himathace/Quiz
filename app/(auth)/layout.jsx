"use client"

import { BookOpen } from "lucide-react"
import { Sparkles } from 'lucide-react'
import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"



export default function authlayout({children}){


    const [select,setselect]=useState(0) // 0-login 1-register


    return(

            <div>
                <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-50 via-violet-100 to-purple-200 gap-x-10">

                <div className="flex flex-col w-2/6">
                    <div className="flex gap-x-3 items-center">
                        <p className="flex items-center text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 p-4 rounded-2xl"><BookOpen size={35}></BookOpen></p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-fuchsia-600 bg-clip-text text-transparent">FlashMaster</p>
                    </div>
                    <p className="text-5xl font-bold mt-5">Master Any Topic with Smart Flashcards</p>
                    <p className="mt-5 text-lg text-gray-500">Create, study, and ace your exams with AI-powered flashcard quizzes. Learn smarter, not harder.</p>
                    <div className="mt-5 flex gap-x-5">
                        <div className="flex gap-x-2">
                            <Sparkles className="text-purple-500"></Sparkles>
                            <p className="text-gray-500">AI powerd</p>
                        </div>
                        <div className="flex gap-x-2">
                            <TrendingUp className="text-purple-500"></TrendingUp>
                            <p className="text-gray-500">Progress tracking</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-xl p-5 w-3/8 bg-white">
                    <p className="flex justify-center text-3xl  mt-3 font-bold">Welcome</p>
                    <p className="flex justify-center text-md text-gray-500 mt-1">Sign in to your account or create a new one</p>
                    <div className="flex justify-center mt-8 h-10 bg-gray-200 p-1 rounded-lg gap-x-2 items-center">
                        <Link href={"/login"} className={`h-8 rounded-lg transition-all duration-200 ${select===0 ? "bg-white" : "bg-transparent text-gray-500"} w-full text-sm font-semibold flex justify-center items-center`} onClick={()=>setselect(0)}>
                            <button >Sign in</button> 
                        </Link>
                        <Link href={"/register"} className={`h-8 transition-all duration-200 ${select===1 ? "bg-white" : "bg-transparent text-gray-500"} rounded-lg w-full text-sm font-semibold flex justify-center items-center`} onClick={()=>setselect(1)}>
                            <button >Sign up</button>
                        </Link> 
                    </div>
                    {children}
                    <p className="flex justify-center text-sm text-gray-500 mt-3">By continuing, you agree to our Terms of Service and Privacy Policy</p>
                </div>
            </div>
        </div>
    )


}