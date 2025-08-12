import  connect  from "../../../lib/mongodb";
import user from "@/models/user";

export async function GET(request) {
  await connect()
  const users=await user.find()
  return Response.json({message:users})
}