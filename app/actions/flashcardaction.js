"use server"

import Deck from "@/models/Deck";
import connect from "@/lib/mongodb";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function AddNewFlashcards(DE,QUestion,ANswer,OPtion1,OPtion2,OPtion3,OPtion4,SElect){


    try{

        await connect()
        await Deck.findByIdAndUpdate(
            DE,
            {$push:{cards:{quiz:QUestion,answer:ANswer,deficulty:SElect,options:[OPtion1,OPtion2,OPtion3,OPtion4]}}}
        
        )
        revalidatePath(`/flashcards/${DE}`)
        return {success:true}
    }
    catch(error){
        return {success:false}
    }

}