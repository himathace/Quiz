"use server"

import Deck from "@/models/Deck";
import connect from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function AddNewFlashcards(formdata){

    await connect()

    const deckc=formdata.get("deck")
    const userquestion=formdata.get("qu")
    const useranswer=formdata.get("answer")
    const carddificalty=formdata.get("deficult")
    const option1=formdata.get("op1")
    const option2=formdata.get("op2")
    const option3=formdata.get("op3")
    const option4=formdata.get("op4")

    await Deck.findByIdAndUpdate(
        deckc,
        {$push:{cards:{quiz:userquestion,answer:useranswer,deficulty:carddificalty,options:[option1,option2,option3,option4]}}}
    
    )
    console.log("card added")
    redirect(`/flashcards/${deckc}`)

}