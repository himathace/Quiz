"use server"

import Deck from "@/models/Deck";
import connect from "@/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function ADDnewDeck(formdata){

    await connect()
    const deckname=formdata.get("deckname")
    const description=formdata.get("description")
    const newdeck=new Deck({title:deckname,cards:[],Description:description})
    await newdeck.save()
    console.log("deck add")
    revalidatePath("/")
    redirect("/")

}