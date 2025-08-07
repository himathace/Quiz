import { Edit, Trash2, Plus, Play, Delete } from "lucide-react"

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
            <div className="border border-gray-200 shadow-sm  hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-lg p-6">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-medium text-black mb-1">Math Basic</h2>
                </div>
                <div className="flex gap-x-3">
                  <button className="text-gray-500 text-sm flex font-medium hover:text-blue-500 hover:cursor-pointer items-center gap-x-1">
                    <Edit size={20}></Edit>
                    Edit
                  </button>
                  <button className="text-gray-500 text-sm flex font-medium hover:text-red-500 hover:cursor-pointer items-center gap-x-1">
                    <Delete size={20}></Delete>
                    Delete
                  </button>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm">25 cards</p>
              </div>
            </div>
        </div>
    </div>
  
  
  
  );
}
  
export default Home
