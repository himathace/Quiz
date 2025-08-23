import Deck from "@/models/Deck";
import connect from "@/lib/mongodb";


export async function GET (request){
    try{
        await connect()
        const display=await Deck.find()
        return Response.json({message:display})
    }
    catch(error){
        console.error(error)
    }
}