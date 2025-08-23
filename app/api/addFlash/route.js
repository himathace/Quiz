import Deck from "@/models/Deck"
import connect from "@/lib/mongodb"

export async function GET (request){
    try{
        await connect()
        const update=await request.json()
        const newdeck=new Deck(update)
        await newdeck.save()
        return Response.json({message:"card added"})
    }
    catch(error){
        console.error(error)
    }
}