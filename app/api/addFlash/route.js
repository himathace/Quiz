import Deck from "@/models/Deck"
import connect from "@/lib/mongodb"

export async function POST (request){
    try{
        await connect()
        const update=await request.json()
        await Deck.findByIdAndUpdate(
            update.document,
            {$push:{cards:{quiz:update.question,answer:update.Answer,deficulty:update.flashdificulty,options:[update.quizop1,update.quizop2,update.quizop3,update.quizop4]}}}
        
        )
        return Response.json({message:"card added"})
    }
    catch(error){
        return Response.json({message:"error"})
    }
}