"use client"

import { useState } from "react"
import RegisterNewuser from "@/app/actions/registeruser"
import { Spinner } from "@/components/ui/spinner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { resolve } from "styled-jsx/css"
import { toast } from "sonner"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"
import { useActionState } from "react"

export default function Register(){

    const router=useRouter()
    const [state,actionfunction,ispending]=useActionState(RegisterNewuser,null)


    return(
        
            <form action={actionfunction}>
                <p className="text-sm font-semibold mt-7">Username</p>
                <input type="text" className={`w-full border-gray-300 border rounded-lg mt-1 h-9 p-2 placeholder:text-sm transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none`}  placeholder="John Doe"  name="username"></input>
                <p className="text-sm font-semibold mt-2">Email</p>
                <input type="text" className={`w-full border-gray-300 border rounded-lg mt-1 h-9 p-2 placeholder:text-sm transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none`} placeholder="You@example.com" name="email"></input>
                <p className="text-sm font-semibold mt-2">Password</p>
                <input type="password" className={`w-full border border-gray-300 rounded-lg mt-1 h-9 p-2 placeholder:text-sm transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none `} placeholder="**********" name="password"></input>
                <div className="h-2 mt-1">
                    {state && <p className="text-red-500 text-xs">{state.error}</p>}
                </div>
                <button  className="w-full bg-gradient-to-r hover:cursor-pointer hover:opacity-80 transition-all duration-300 from-purple-600  to-fuchsia-600  rounded-lg text-sm text-white mt-5 h-10 font-semibold" disabled={ispending}  >sign in</button>
            </form>
    )
}