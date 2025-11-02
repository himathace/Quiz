"use server"

import Deck from "@/models/Deck";
import connect from "@/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function ADDnewDeck(Dname,Description,Category,User){

    try{

        await connect()
        const newdeck=new Deck({name:User,title:Dname,cards:[],Description:Description,category:Category})
        await newdeck.save()
        revalidatePath("/dashboard")
        return {success:true}
    }
    catch(error){
        console.error("error saving data",error)
    }

}