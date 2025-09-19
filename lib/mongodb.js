import mongoose from "mongoose";

const mongo_url=process.env.MONGO_KEY

export default async function connect(){
    try{
        mongoose.connect(mongo_url)
        console.log("database connected")
    }
    catch(error){
        console.log(error)
    }
}


