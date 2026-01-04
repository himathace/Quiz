"use client"

import { BookOpen } from "lucide-react"
import { Sparkles } from 'lucide-react'
import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Toaster } from "@/components/ui/sonner"




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
                    <Toaster richColors  theme="light" position="top-right" />
                    {children}
                    <div className="mt-4">
                        <button className="w-full flex justify-center items-center border h-10 rounded-lg gap-x-3 font-semibold text-sm text-[#333]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                    <p className="flex justify-center text-sm text-gray-500 mt-3">By continuing, you agree to our Terms of Service and Privacy Policy</p>
                </div>
            </div>
        </div>
    )


}