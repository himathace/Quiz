import mongoose from "mongoose";

const cardsschema=new mongoose.Schema({
    quiz:{
        type:String,
    },
    op1:{
        type:String,
    },
    op2:{
        type:String,
    },
    op3:{
        type:String,
    },
    op4:{
        type:String,
    },
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
