import connect from "@/lib/mongodb";
import Deck from "@/models/Deck";

export async function POST(request){
    await connect()
    const data=await request.json()
    await Deck.create(data)
}