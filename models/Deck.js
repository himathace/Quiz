import mongoose from "mongoose";

const cardsschema=new mongoose.Schema({
    quiz:{
        type:String,
    },
    options:[{
        type:String,
    }],
    answer:{
        type:String,
    },
    deficulty:{
        type:String
    }

})


const displaydeck=new mongoose.Schema({
    name:String,
    title:String,
    cards:[cardsschema],
    Description:String,
    category:String
},{timestamps:true})

export default mongoose.models.Deck || mongoose.model("Deck",displaydeck)
