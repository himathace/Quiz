"use server"

import Deck from "@/models/Deck";
import connect from "@/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function ADDnewDeck(formdata){

    try{

        await connect()
        const deckname=formdata.get("deckname")
        const description=formdata.get("description")
        const select=formdata.get("drop")
        // const newdeck=new Deck({title:deckname,cards:[],Description:description,category:select})
        // await newdeck.save()
        revalidatePath("/dashboard")
        redirect("/dashboard")
    }
    catch(error){
        console.error("error saving data",error)
    }

}