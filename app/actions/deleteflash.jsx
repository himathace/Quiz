"use server"

import connect from "@/lib/mongodb"
import Deck from "@/models/Deck"
import { revalidatePath } from "next/cache"

export default async function CardDelete(params) {
    await connect()
    await Deck.findByIdAndUpdate(
        params.deckid,
        { $pull:{cards:{_id:params.cardid}}},
        {new:true}
    )
    console.log("Flashcard deleted")
    revalidatePath(`/flashcards/${params.deckid}`)
    return {success:true}




    
}