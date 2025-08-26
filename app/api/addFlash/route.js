import Deck from "@/models/Deck"
import connect from "@/lib/mongodb"

export async function POST (request){
    try{
        await connect()
        const update=await request.json()
        await Deck.findByIdAndUpdate(
            update.document,
            {$push:{cards:{quiz:update.question}}}
        
        )
        return Response.json({message:"card added"})
    }
    catch(error){
        return Response.json({message:"error"})
    }
}