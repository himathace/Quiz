import { Edit, Trash2, Plus, Play, Delete,BookOpen } from "lucide-react"
import Displaycard from "../components/displaycard"
import Link from "next/link"
import { Clock2 } from 'lucide-react';
import { Target } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { getServerSession } from "next-auth";
import { authoptions } from "../api/auth/[...nextauth]/route";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import { NextResponse } from "next/server";

// Make this page dynamic to avoid build-time fetch issues
export const dynamic = 'force-dynamic'



const fetchdata=async ()=>{

  try{

    const userdata=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/displaydeck`)
    const data=await userdata.json()
    return data.message
  }
  catch(error){
    console.log(error)
    return []
  }
}

const log=async()=>{
  try{
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`)
  }
  catch(error){
    console.log(error)
  }

}


export default async function userdashboard(params) {

  
  const date=await fetchdata()
  const session=await getServerSession(authoptions)

  if(!session){
    return <h1>you must be logged in</h1>
  }
  console.log(session)

  return (
  
    <div className="h-screen">

        <div className="flex justify-center gap-x-3 pt-5 relative ">
            <p className="flex items-center text-white bg-purple-500 p-2 rounded-xl"><BookOpen size={25}></BookOpen></p>
            <h1 className="text-3xl font-bold text-from-violet-500 to-purple-400 flex items-center">QuizMaster</h1>
            <Popover className="absolute">
              <PopoverTrigger asChild>
                <Avatar className="absolute right-40">
                    <AvatarImage src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <p className="text-sm">Username : {session.user.name}</p>
                <p className="text-sm ">Email : {session.user.email}</p>
                <hr className="m-2"></hr>
                <button className="text-sm text-red-600">log out</button>
              </PopoverContent>

            </Popover>
        </div>
        <p className="flex justify-center text-md text-gray-600 mb-3">
            Test your knowledge with our interactive quiz platform
        </p>

        <div className="mx-10">
          <p className="text-3xl font-bold">Welcome back,{session.user.name}</p>
          <p className="text-sm text-gray-600 mt-2">Test your knowledge with our interactive quiz platform</p>
        </div>

        <div className="grid grid-cols-4 mx-10 my-10 gap-x-10">
          <div className="h-48 rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-xl hover:shadow-black-300 transition-all duration-300 ease-in-out">
            <BookOpen className="bg-purple-100 p-1 rounded-md text-purple-600 mb-3" size={40}></BookOpen>
            <p className="text-xl font-bold mb-3">24</p>
            <p className="text-sm text-gray-500">Active Flashcard Sets</p>
            <p className="text-sm text-gray-700">Total Decks</p>
          </div>
          <div className="h-48 rounded-xl shadow-md border p-5 border-gray-200 hover:shadow-xl hover:shadow-black-300 transition-all duration-300 ease-in-out">
            <Clock2 className="bg-green-100 p-1 rounded-md text-green-600 mb-3" size={40}></Clock2>
            <p className="text-xl font-bold mb-3">24</p>
            <p className="text-sm text-gray-500">Active Flashcard Sets</p>
            <p className="text-sm text-gray-700">Total Decks</p>
          </div>
          <div className="h-48 rounded-xl shadow-md border p-5 border-gray-200 hover:shadow-xl hover:shadow-black-200 transition-all duration-300 ease-in-out">
            <Target className="bg-orange-100 p-1 rounded-md text-orange-600 mb-3" size={40}></Target>
            <p className="text-xl font-bold mb-3">24</p>
            <p className="text-sm text-gray-500">Active Flashcard Sets</p>
            <p className="text-sm text-gray-700">Total Decks</p>
          </div>
          <div className="h-48 rounded-xl shadow-md border p-5 border-gray-200 hover:shadow-xl hover:shadow-black-200 transition-all duration-300 ease-in-out">
            <TrendingUp className="bg-red-100 p-1 rounded-md text-red-600 mb-3" size={40}></TrendingUp>
            <p className="text-xl font-bold mb-3">24</p>
            <p className="text-sm text-gray-500">Active Flashcard Sets</p>
            <p className="text-sm text-gray-700">Total Decks</p>
          </div>
          
        </div>
  
        <div className="flex justify-between  mx-10 mb-5">

          <div>
              <h1 className="text-2xl text-black font-bold">Your Flashcard Decks</h1>
              <p className="font-light">Continue your learning journey</p>
          </div>

          
          <div className="flex items-center">
            <Link href={"/createdeck"}>
              <button className="border-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white  font-medium pr-6 pl-4 py-2 rounded-lg transition-all duration-200 cursor-pointer flex gap-x-3" >
                <Plus></Plus>
                Create New Deck
              </button>
            </Link>
          </div>
        </div>

        <div className="mx-10 grid grid-cols-3 gap-5">

          {
            date.map((dis,index)=>{
              return <Displaycard val={dis} key={dis._id} index={index} />
            })
          }

        </div>


    </div>
  
  
  
  );
}
  
