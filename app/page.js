import { Edit, Trash2, Plus, Play, Delete } from "lucide-react"
import Displaycard from "./components/displaycard"
import Newdeck from "./components/newdeck"

const fetchdata=async ()=>{

  try{

    const userdata=await fetch("http://localhost:3000/api/displaydeck")
    const data=await userdata.json()
    return data.message
  }
  catch(error){
    console.log(error)
    return []
  }
}


const Home=async ()=>{

  const date=await fetchdata()


  return (
  
    <div className="h-screen">
        <h1 className="text-4xl text-black font-light text-center m-10">Flashcard Quiz App</h1>
  
        <div className="flex justify-center gap-x-5">
          
          <Newdeck />
          
          <button className="border-2 border-black bg-black text-white hover:bg-white hover:text-black font-medium px-8 py-3 rounded-md transition-all duration-200 cursor-pointer flex gap-x-5">
            <Play></Play>
            Start Quiz
          </button>
        </div>
  
        <div className="flex flex-col mx-80 my-20">
            <h1 className="text-2xl text-black font-light">Your Flashcard Decks</h1>
            <hr className="border-gray-200 my-5"></hr>

            {
              date.map((dis)=>{
                return <Displaycard val={dis} key={dis._id} />
              })
            }

        </div>
    </div>
  
  
  
  );
}
  
export default Home
