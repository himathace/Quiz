import mongoose from "mongoose";

const userdata=new mongoose.Schema({
    name:String
})

export default mongoose.model("user",userdata)
