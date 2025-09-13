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
    title:String,
    cards:[cardsschema]
})

export default mongoose.models.Deck || mongoose.model("Deck",displaydeck)
