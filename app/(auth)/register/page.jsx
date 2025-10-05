"use client"

import { useState } from "react"
import RegisterNewuser from "@/app/actions/registeruser"

export default function Register(){

    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")


    return(
        <>
            
            <p className="text-sm font-semibold mt-7">Username</p>
            <input type="text" className="border-gray-300 border rounded-lg mt-1 h-10 p-2 transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none" placeholder="John Doe" name="username" onChange={(e)=>setusername(e.target.value)} value={username} ></input>
            <p className="text-sm font-semibold mt-3">Email</p>
            <input type="text" className="border-gray-300 border rounded-lg mt-1 h-10 p-2 transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none" placeholder="You@example.com" name="email" onChange={(e)=>setemail(e.target.value)} value={email}></input>
            <p className="text-sm font-semibold mt-3">Password</p>
            <input type="password" className="border border-gray-300 rounded-lg mt-1 h-10 p-2 transition-all duration-300 focus:ring-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none " placeholder="**********" name="password" onChange={(e)=>setpassword(e.target.value)} value={password}></input>
            <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600  rounded-lg text-sm text-white mt-5 h-10 font-semibold" onClick={()=>RegisterNewuser(username,email,password)} >Create Account</button>
        </>
    )
}