import mongoose from "mongoose";

const userdata=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

export default mongoose.model("user",userdata)
