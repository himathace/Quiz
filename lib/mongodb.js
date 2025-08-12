import mongoose from "mongoose";

const mongo_url="mongodb://localhost:27017/Next"

function connect(){
    mongoose.connect(mongo_url)
    .then(()=>console.log("database connected"))
    .catch((error)=>console.log(error))
}

export default connect

