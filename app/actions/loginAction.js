"use server"

import user from "@/models/user"
import connect from "@/lib/mongodb"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

import { redirect } from "next/navigation"

export default async function Loginuser(formdata){

    await connect()
    const useemail=formdata.get("email")
    const usepassword=formdata.get("password")


    const checkemail=await user.findOne({email:useemail})
    if(!checkemail){
        return console.log("email not valid")
    }

    if(checkemail.password !== usepassword){
        return console.log("password not vaid")
    }

    const token=jwt.sign({username:checkemail.username},"superkey")

    cookies().set("auth",token,{
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24
    })

    redirect("/")
}


