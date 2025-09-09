import Deck from "@/models/Deck"

export async function POST (request){
    const body=await request.json()
    const GetDeckName=await Deck.findById(body.userquiz)
    return Response.json({message:GetDeckName})
}