"use server"

import Deck from "@/models/Deck";
import connect from "@/lib/mongodb";

export default async function ADDnewDeck(formdata){

    await connect()
    const deckname=formdata.get("deckname")
    const newdeck=new Deck({title:deckname,cards:[]})
    await newdeck.save()
    console.log("deck add")

}