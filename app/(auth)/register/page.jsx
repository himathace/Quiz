"use client"

import { useState } from "react"
import RegisterNewuser from "@/app/actions/registeruser"
import { Spinner } from "@/components/ui/spinner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Register(){

    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [error,seterror]=useState("")
    const [loading,setloading]=useState(false)

    async function validate(){

        const data=await RegisterNewuser(username,email,password)

        if(data?.error){
            seterror(data.error)
        }
        else if(data?.success){
            setloading(true)
            setTimeout(() => {
                window.location.href = "/login"
            }, 3000)

        }

    }

    return(
        <>
    
            
            <p className="text-sm font-semibold mt-7">Username</p>
            <input type="text" className={`border-gray-300 border rounded-lg mt-1 h-9 p-2 placeholder:text-sm transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none ${error.includes("Username") && "border-red-400"}`}  placeholder="John Doe"  name="username" onChange={(e)=>setusername(e.target.value)} onFocus={()=>seterror("")} value={username} ></input>
            <p className="text-sm font-semibold mt-2">Email</p>
            <input type="text" className={`border-gray-300 border rounded-lg mt-1 h-9 p-2 placeholder:text-sm transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none ${error.includes("Email") && "border-red-400"}`} placeholder="You@example.com" name="email" onChange={(e)=>setemail(e.target.value)} onFocus={()=>seterror("")} value={email}></input>
            <p className="text-sm font-semibold mt-2">Password</p>
            <input type="password" className={`border border-gray-300 rounded-lg mt-1 h-9 p-2 placeholder:text-sm transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none ${error.includes("Password") && "border-red-400"} `} placeholder="**********" name="password" onChange={(e)=>setpassword(e.target.value)} onFocus={()=>seterror("")} value={password}></input>
            <div className="h-2 mt-1">
                {error && <p className="text-red-500 text-xs">{error}</p>}
            </div>
            <button  className="bg-gradient-to-r hover:cursor-pointer hover:opacity-80 transition-all duration-300 from-purple-600  to-fuchsia-600  rounded-lg text-sm text-white mt-5 h-10 font-semibold" disabled={loading} onClick={()=>validate()} > {loading ? (

                <div className="flex items-center justify-center gap-2">
                    <Spinner />
                    <span>Creating Account</span>
                </div>
            ): "Create Account"}</button>

        </>
    )
}