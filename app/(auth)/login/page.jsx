"use client"

import { BookOpen } from "lucide-react"
import {signIn} from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import { useState } from "react"


export default function Login(){

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    async function handlelogin(){

        const results=await signIn("credentials",{
            redirect:false,
            email,
            password
        })

        if(results.error){
            alert("invalid credentals")
        }
        else{
            window.location.href="/"
        }


    }

    return(
        
        <>
            <p className="text-sm font-semibold mt-7">Email</p>
            <input type="text" className="border-gray-300 border rounded-lg mt-1 h-10 p-2 transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none" placeholder="You@example.com" onChange={(e)=>setemail(e.target.value)} value={email} ></input>
            <p className="text-sm font-semibold mt-3">Password</p>
            <input type="text" className="border border-gray-300 rounded-lg mt-1 h-10 p-2 transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none " placeholder="**********" onChange={(e)=>setpassword(e.target.value)} value={password}></input>
            <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600  rounded-lg text-sm text-white mt-5 h-10 font-semibold" onClick={()=>handlelogin()}>Sign in</button>
        </>
    )
}