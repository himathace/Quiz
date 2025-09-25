import mongoose from "mongoose";

const mongo_url=process.env.MONGO_kEY

export default async function connect(){
    try{
        mongoose.connect(mongo_url)
        console.log("database connected")
    }
    catch(error){
        console.log(error)
    }
}


