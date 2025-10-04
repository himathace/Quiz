"use server"

import user from "@/models/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function RegisterNewuser(USERname,Email,Password) {

    const NewUser=new user({username:USERname,email:Email,password:Password})
    await NewUser.save()
    revalidatePath("/login")
    redirect("/login")
}