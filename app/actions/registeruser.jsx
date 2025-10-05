"use server"

import user from "@/models/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connect from "@/lib/mongodb";

export default async function RegisterNewuser(USERname,Email,Password) {

    await connect()
    const NewUser=new user({username:USERname,email:Email,password:Password})
    await NewUser.save()
    revalidatePath("/login")
    redirect("/login")
}