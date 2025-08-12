import Deck from "@/models/Deck";
import connect from "@/lib/mongodb";


export async function GET (request){
    await connect()
    const display=await Deck.find()
    return Response.json({message:display})
}