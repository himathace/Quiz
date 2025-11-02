import { Edit, Trash2, Plus, Play, Delete,BookOpen } from "lucide-react"
import Displaycard from "../../components/displaycard"
import { Clock2 } from 'lucide-react';
import { Target } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { getServerSession } from "next-auth";
import CreateDeckDialog from "../../components/dialog";
import { authoptions } from "../../api/auth/[...nextauth]/route";
import Pop from "../../components/dashboardpopup";
import { redirect } from "next/navigation";


// Make this page dynamic to avoid build-time fetch issues
export const dynamic = 'force-dynamic'



export default async function userdashboard() {

  const session = await getServerSession(authoptions);

  if(!session){
      redirect("/login")
  }

  const userdata=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/displaydeck`,{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
      usersname:session.user.name
    })
  })
  const data=await userdata.json()

  
  return (
  
    <div className="min-h-screen pb-10 bg-[#F5F5FF]">

        <div className="flex flex-col justify-center gap-x-3 pt-5 relative bg-white">

          <div className="flex justify-center gap-x-2">
            <p className="flex items-center text-white bg-purple-500 p-2 rounded-xl"><BookOpen size={25}></BookOpen></p>
            <h1 className="text-3xl font-bold text-from-violet-500 to-purple-400 flex items-center">QuizMaster</h1>
          </div>
          <p className="flex justify-center text-md text-gray-600 mb-3">
              Test your knowledge with our interactive quiz platform
          </p>
          <Pop></Pop>
        </div>

        <hr></hr>
        <div className="mx-10 " >
          <p className="text-4xl font-bold mt-5">Welcome back,<span className="text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-fuchsia-400">{session.user.name}</span></p>
          <p className="text-sm text-gray-600 mt-1  ">Test your knowledge with our interactive quiz platform</p>
        </div>

        <div className="grid grid-cols-4 mx-10 my-10 gap-x-10">
          <div className="group relative bg-white h-48 rounded-xl p-5 shadow transition-all duration-300 ease-in-out transform hover:scale-100 hover:-translate-y-1 ">
            <BookOpen className="bg-purple-100 p-1 rounded-md text-purple-600 mb-3" size={40}></BookOpen>
            <p className="text-4xl font-bold mb-3">24</p>
            <p className="text-sm font-medium text-gray-700">Active Flashcard Sets</p>
            <p className="text-sm text-gray-400">Total Decks</p>
            <div className=" bg-gradient-to-r from-purple-500 to-fuchsia-400 absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
          <div className="group relative bg-white h-48 rounded-xl shadow p-5  transition-all duration-300 ease-in-out  transform hover:scale-100 hover:-translate-y-1 ">
            <Clock2 className="bg-green-100 p-1 rounded-md text-green-600 mb-3" size={40}></Clock2>
            <p className="text-xl font-bold mb-3">24</p>
            <p className="text-sm text-gray-500">Active Flashcard Sets</p>
            <p className="text-sm text-gray-700">Total Decks</p>
            <div className=" bg-gradient-to-r from-purple-500 to-fuchsia-400 absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            
          </div>
          <div className="group relative  bg-white h-48 rounded-xl shadow p-5 transition-all duration-300 ease-in-out  transform hover:scale-100 hover:-translate-y-1 ">
            <Target className="bg-orange-100 p-1 rounded-md text-orange-600 mb-3" size={40}></Target>
            <p className="text-xl font-bold mb-3">24</p>
            <p className="text-sm text-gray-500">Active Flashcard Sets</p>
            <p className="text-sm text-gray-700">Total Decks</p>
            <div className=" bg-gradient-to-r from-purple-500 to-fuchsia-400 absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
          <div className="group relative bg-white h-48 rounded-xl shadow p-5 transition-all duration-300 ease-in-out  transform hover:scale-100 hover:-translate-y-1 ">
            <TrendingUp className="bg-red-100 p-1 rounded-md text-red-600 mb-3" size={40}></TrendingUp>
            <p className="text-xl font-bold mb-3">24</p>
            <p className="text-sm text-gray-500">Active Flashcard Sets</p>
            <p className="text-sm text-gray-700">Total Decks</p>
            <div className=" bg-gradient-to-r from-purple-500 to-fuchsia-400 absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
          
        </div>
  
        <div className="flex justify-between  mx-10 mb-5">

          <div>
              <h1 className="text-2xl text-black font-bold">Your Flashcard Decks</h1>
              <p className="font-light">Continue your learning journey</p>
          </div>

          
          <div className="flex items-center">
            <CreateDeckDialog/>
          </div>
        </div>

        <div className="mx-10">

          {
            data.message.length===0 ?
              <div className="bg-white rounded-2xl flex flex-col  justify-center items-center p-10 shadow">
                <p className="p-5 bg-purple-100 rounded-full"><BookOpen className="text-purple-500" size={50}></BookOpen></p>
                <p className="mt-5 text-xl font-semibold">Create A Deck</p>
                <p className="mt-4 text-sm font-medium font-sans text-gray-500">Start building your first flashcard deck to begin your learning</p>
                <p className="text-sm font-medium text-gray-500">journey</p>
              </div>
            :

            <div className="grid grid-cols-3 gap-5">
              {data.message.map((dis, index) => {
                return (
                  <Displaycard val={dis} index={index} key={dis._id} />
                )
              })}
            </div>
          }


        </div>


    </div>
  
  
  
  );
}
  
