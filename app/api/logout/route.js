import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"


export default async function makeuserlogout() {

    const cookieStore=await cookies()
    cookieStore.delete("auth")
    Response.json({message:"user logout"})
    
}