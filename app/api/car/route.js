import Deck from "@/models/Deck"

export async function POST (request){
    const body=await request.json()
    const FIndFlashCard=await Deck.findById(body.DeckID)
    return Response.json({message:FIndFlashCard})
}

