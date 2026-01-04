"use client"

import { BookOpen } from "lucide-react"
import {signIn} from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import { useState } from "react"
import { Spinner } from "@/components/ui/spinner"
import { useActionState } from "react"
import SignInAction from "@/app/actions/auth"


export default function Login(){


    const [state,actionfunction,isloading]=useActionState(SignInAction,null)


    return(
        
            <form action={actionfunction}>

                <p className="text-sm font-semibold mt-7">Email</p>
                <input type="text" className={`w-full border-gray-300 border ${state?.error && "border-red-400"} rounded-lg mt-1 h-10 p-2 transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none`} placeholder="You@example.com" name="email" ></input>
                <p className="text-sm font-semibold mt-3">Password</p>
                <input type="password" className={`w-full border ${state?.error && "border-red-400"} border-gray-300 rounded-lg mt-1 h-10 p-2 transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none `} placeholder="**********" name="password"></input>
                <div className="h-2 mt-1">
                    {state?.error && <p className="text-red-500 text-xs">{state?.error}</p>}
                </div>
                <button disabled={isloading} className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600  rounded-lg text-sm text-white mt-5 h-10 font-semibold">{

                    isloading ?

                    <div className="flex items-center justify-center gap-2">
                        <Spinner />
                        <span>signing in</span>
                    </div> 
                    : "sign in"

                }</button>
            </form>
    )
}