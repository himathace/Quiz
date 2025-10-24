"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
import { User } from "lucide-react";




export default  function Pop(){

    const { data: session, status } = useSession();

    if(status==="loading"){
        return null
    }

    return(

        <Popover className="absolute">
            <PopoverTrigger asChild>
            <Avatar className="absolute flex w-10 h-10 justify-center items-center bottom-7 right-10 border border-gray-300 bg-gray-100 text-black hover:bg-purple-500 hover:text-white transition-all duration-200">
                <User size={20}></User>
            </Avatar>
            </PopoverTrigger>
            <PopoverContent>
            <p className="text-sm">Username : {session.user.name}</p>
            <p className="text-sm ">Email : {session.user.email}</p>
            <hr className="m-2"></hr>
            <button className="text-sm text-red-600" onClick={()=>signOut({callbackUrl:"/"})}>log out</button>
            </PopoverContent>
        </Popover>

    )
}