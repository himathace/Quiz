"use server"

import { signIn } from "next-auth"
import { redirect } from "next/navigation"

export default async function SignInAction(prevstate,formdata){

    try{

        await signIn("credentials",{
            email:formdata.get("email"),
            password:formdata.get("password"),
            redirect:false
        })
    
        redirect("/dashboard")
    }
    catch(error){
        if (error.type === "CredentialsSignin") {
            return { error: "Invalid credentials" };
        }
        return { error: "Something went wrong" };
    }





}