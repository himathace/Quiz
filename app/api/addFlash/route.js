import Deck from "@/models/Deck"
import connect from "@/lib/mongodb"

export async function POST (request){
    try{
        await connect()
        const update=await request.json()
        await Deck.findByIdAndUpdate(
            update.document,
            {$push:{cards:{quiz:update.question,answer:update.Answer,deficulty:update.flashdificulty,op1:update.quizop1,op2:update.quizop2,op3:update.quizop3,op4:update.quizop4}}}
        
        )
        return Response.json({message:"card added"})
    }
    catch(error){
        return Response.json({message:"error"})
    }
}