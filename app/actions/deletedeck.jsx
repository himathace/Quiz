"use server"

import connect from "@/lib/mongodb"
import Deck from "@/models/Deck"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function DeckDelete(params) {
    await connect()
    await Deck.findByIdAndDelete(params.userid)
    console.log("deck deleted")
    revalidatePath("/dashboard")
    redirect("/dashboard")




    
}