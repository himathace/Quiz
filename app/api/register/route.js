import user from "@/models/user"
import connect from "@/lib/mongodb"

export async function POST(request) {

    await connect()
    const body=await request.json()

    const userN=body.NAME
    const email=body.EMAIL
    const password=body.PASSWORD
    const newuser=new user({username:userN,email:email,password:password})
    await newuser.save()
    return Response.json({message:"good"})
    
}