import mongoose from "mongoose";

const mongo_url="mongodb://localhost:27017/Next"

export default async function connect(){
    try{
        mongoose.connect(mongo_url)
        console.log("database connected")
    }
    catch(error){
        console.log(error)
    }
}


