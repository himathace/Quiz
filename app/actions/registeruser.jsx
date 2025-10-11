"use server"

import user from "@/models/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connect from "@/lib/mongodb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default async function RegisterNewuser(USERname,Email,Password) {

    await connect()

    if(USERname.length===0){
        return {error:"Username cannot be Empty!"}
    }
    if(Email.length===0){
        return{error:"Email cannot be Empty!"}
    }

    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!regex.test(Email)){
        return{error:"Email is Not Valid!"}


    }
    if(Password.length===0){
        return{error:"Password cannot be Empty!"}
    }
    if(Password.length<8){
        return {error:"Password cannot be lessthan 8 characters!"}

    }
    const NewUser=new user({username:USERname,email:Email,password:Password})
    await NewUser.save()
    return{success:true}

    revalidatePath("/login")
    redirect("/login")
}