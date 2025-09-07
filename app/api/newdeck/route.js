import Deck from "@/models/Deck";

export async function POST(request){
    const data=await request.json()
    const newdeck=new Deck({title:data.title,cards:[]})
    await newdeck.save()
    return Response.json({message:"deck add"})
}