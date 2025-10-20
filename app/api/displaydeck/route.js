import Deck from "@/models/Deck";
import connect from "@/lib/mongodb";


export async function POST (request){
    try{
        await connect()
        const body=await request.json()
        const display=await Deck.find({name:body.usersname})
        return Response.json({message:display})
    }
    catch(error){
        console.error(error)
    }
}