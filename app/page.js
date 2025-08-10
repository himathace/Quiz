import { Edit, Trash2, Plus, Play, Delete } from "lucide-react"
import Displaycard from "./components/displaycard"

const fetchdata=async ()=>{

  try{

    const userdata=await fetch("http://localhost:3000/api/login")
    const data=await userdata.json()
    return data.message
  }
  catch(error){
    console.log(error)
  }
}


const Home=async ()=>{

  const date=await fetchdata()
  console.log(date)

  return (
  
    <div className="h-screen">
        <h1 className="text-4xl text-black font-light text-center m-10">Flashcard Quiz App</h1>
  
        <div className="flex justify-center gap-x-5">
          <button className="border-2 border-black bg-white text-black hover:bg-black hover:text-white font-medium pr-6 pl-4 py-3 rounded-lg transition-all duration-200 cursor-pointer flex gap-x-3">
            <Plus></Plus>
            Create New Deck
          </button>
          <button className="border-2 border-black bg-black text-white hover:bg-white hover:text-black font-medium px-8 py-3 rounded-md transition-all duration-200 cursor-pointer flex gap-x-5">
            <Play></Play>
            Start Quiz
          </button>
        </div>
  
        <div className="flex flex-col mx-80 my-20">
            <h1 className="text-2xl text-black font-light">Your Flashcard Decks</h1>
            <hr className="border-gray-200 my-5"></hr>

            <Displaycard />
        </div>
    </div>
  
  
  
  );
}
  
export default Home
