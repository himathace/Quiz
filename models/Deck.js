import mongoose from "mongoose";

const displaydeck=new mongoose.Schema({
    title:String

})

export default mongoose.models.Deck || mongoose.model("Deck",displaydeck)
