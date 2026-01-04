"use server"

import user from "@/models/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connect from "@/lib/mongodb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default async function RegisterNewuser(prevState, formdata) {

    await connect()

    const username=formdata.get("username")
    const email=formdata.get("email")
    const password=formdata.get("password")

    if(username.length===0){
        return {error:"Username cannot be Empty!"}
    }
    if(email.length===0){
        return{error:"Email cannot be Empty!"}
    }

    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!regex.test(email)){
        return{error:"Email is Not Valid!"}


    }
    if(password.length===0){
        return{error:"Password cannot be Empty!"}
    }
    if(password.length<8){
        return {error:"Password cannot be lessthan 8 characters!"}

    }
    const NewUser=new user({username:username,email:email,password:password})
    await NewUser.save()

    revalidatePath("/login")
    redirect("/login")
}