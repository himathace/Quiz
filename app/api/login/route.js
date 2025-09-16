import user from "@/models/user"
import connect from "@/lib/mongodb"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function POST(request) {

    await connect()
    const body=await request.json()

    const checkemail=await user.findOne({email:body.EMAIL})

    if(!checkemail){
        return Response.json({message:"email not valid"})
    }

    if(checkemail.password !== body.PASSWORD){
        return Response.json({message:"passowrd not valid"})

    }

    const token=jwt.sign({username:checkemail.username},"superkey")

    const cookieStore=await cookies()
    cookieStore.set("auth",token,{
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24
    })

    return Response.json({message:"Login successful"})


    
    
}