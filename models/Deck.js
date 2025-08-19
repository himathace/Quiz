import mongoose from "mongoose";

const cardsschema=new mongoose.Schema({
    quiz:{
        type:String,
        default:""
    },
    op1:{
        type:String,
        default:""
    },
    op2:{
        type:String,
        default:""
    },
    op3:{
        type:String,
        default:""
    },
    op4:{
        type:String,
        default:""
    },
    answer:{
        type:String,
        default:""
    }
})


const displaydeck=new mongoose.Schema({
    title:String,
    cards:[cardsschema]

})

export default mongoose.models.Deck || mongoose.model("Deck",displaydeck)
