"use server"

import connect from "@/lib/mongodb"
import user from "@/models/user"

export default async function Registeruser(formdata){

    const UserName=formdata.get("username")
    const Email=formdata.get("email")
    const Password=formdata.get("password")

    const newuser=new user({username:UserName,email:Email,password:Password})
    await newuser.save()
    console.log("new user added")
}