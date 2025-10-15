"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";




export default  function Pop(){

    const { data: session, status } = useSession();

    if(status==="loading"){
        return(
            <Avatar className="absolute right-40">
                <AvatarFallback>...</AvatarFallback>
            </Avatar>
        )
    }

    return(

        <Popover className="absolute">
            <PopoverTrigger asChild>
            <Avatar className="absolute right-40">
                <AvatarImage src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" />
                <AvatarFallback>CN</AvatarFallback>
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