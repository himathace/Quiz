import Deck from "@/models/Deck";


export async function GET (request){
    const display=await Deck.find()
    return Response.json({message:display})
}