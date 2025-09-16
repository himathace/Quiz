import ADDnewDeck from "../actions/DeckAction"
import Link from "next/link"
import { BookOpen } from "lucide-react"

const Create=()=>{

    return(

        <form action={ADDnewDeck}>
             <div className="flex justify-center gap-x-3 pt-5 ">
                <p className="flex items-center text-white bg-purple-500 p-2 rounded-xl"><BookOpen size={25}></BookOpen></p>
                <h1 className="text-3xl font-bold text-from-violet-500 to-purple-400 flex items-center">QuizMaster</h1>
            </div>
            <p className="flex justify-center text-md text-gray-600 mb-3">
                Test your knowledge with our interactive quiz platform
            </p>
            <div className="flex flex-col mt-26 justify-center items-center">
                <div className=" shadow-lg bg-white border border-gray-200 rounded-xl p-5 w-96">
                
                    <label className="flex justify-center text-2xl font-bold text-purple-500 mb-2">Create New Deck</label>
                    <p className="text-lg text-gray-500 mb-6 flex justify-center">Build your study resource with ease.</p>
                        
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-700 mb-3">Deck Name</label>
                        <input type="text" className="h-12 rounded-lg border-2 border-slate-200 focus:ring-blue-500/20 transition-all duration-200 pl-3 mb-3" placeholder="Enter a name for your deck" name="deckname"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-700 mb-3">Description</label>
                        <textarea type="text" className="h-28 rounded-lg border-2 border-slate-200 focus:ring-blue-500/20 transition-all duration-200 p-3 mb-5 resize-none " placeholder="Describe what this deck is about..." name="description" ></textarea>
                    </div>
                    <div>
                        <button className="bg-purple-500 text-white w-full h-12 rounded-xl" type="submit" >Add Deck</button>
                    </div>
                </div>
            </div>
        </form>
    )
}




export default Create