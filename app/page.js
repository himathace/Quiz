import { Edit, Trash2, Plus, Play, Delete } from "lucide-react"
import Displaycard from "./components/displaycard"
import Newdeck from "./components/newdeck"
import Link from "next/link"
import makeuserlogout from "./actions/logoutAction"

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
  
        <div className="flex justify-between bg-gradient-to-r h-24 p-5 from-gray-100 via-gray-200 to-blue-100 ">

          <div>
            <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-purple-500    bg-clip-text text-transparent font-bold">FlashMaster</h1>
            <p className="text-sm text-gray-600">Work smater Not Harder</p>
          </div>

          <Link href={"/createdeck"}>
            <button className="border-2 border-black bg-gradient-to-r from-indigo-500 to-purple-500 text-white  hover:text-black font-medium pr-6 pl-4 py-3 rounded-lg transition-all duration-200 cursor-pointer flex gap-x-3" >
              <Plus></Plus>
              Create New Deck
            </button>
          </Link>

        </div>

        <div className="grid grid-cols-4 mx-10 my-10 gap-x-10">

          <div className="h-48 bg-lime-300">Total Decks</div>
          <div className="h-48 bg-gray-600">Cards Mastered</div>
          <div className="h-48 bg-amber-400">Streak Days</div>
          <div className="h-48 bg-blue-200">Study Time</div>
        </div>
  
        <div className="flex justify-between  mx-10 mb-5">

          <div>
              <h1 className="text-2xl text-black font-bold">Your Flashcard Decks</h1>
              <p className="font-light">Continue your learning journey</p>
          </div>
          <div className="flex items-center">
            <form action={makeuserlogout}>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-40 rounded-xl h-10 ">logout</button>
            </form>
          </div>
        </div>

        <div className="mx-10 grid grid-cols-3 gap-5">

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
