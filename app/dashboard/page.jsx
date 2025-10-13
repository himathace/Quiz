"use client"

import { Edit, Trash2, Plus, Play, Delete,BookOpen } from "lucide-react"
import { useState,useEffect } from "react"
import Displaycard from "../components/displaycard"
import Link from "next/link"
import { Clock2 } from 'lucide-react';
import { Target } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import { signOut } from "next-auth/react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ADDnewDeck from "../actions/DeckAction"


// Make this page dynamic to avoid build-time fetch issues
export const dynamic = 'force-dynamic'



export default function userdashboard() {
  
  const [userdata,setuserdata]=useState([])
  const {data:session,status}=useSession()
  
  
  useEffect(()=>{
  
    async function fetchdata(){
  
      try{
        const userdata=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/displaydeck`)
        const data=await userdata.json()
        setuserdata(data.message)
      }
      catch(error){
        console.log(error)
        return []
      }
    }
    fetchdata()
  
  
  },[])
  
  if(status==="loading"){
    return <h1>loading</h1>
  }

  if(!session){
    return <h1>You are not logged in</h1>
  }
  
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
                <button className="text-sm text-red-600" onClick={()=>signOut({callbackUrl:"/"})}>log out</button>
              </PopoverContent>

            </Popover>
        </div>
        <p className="flex justify-center text-md text-gray-600 mb-3">
            Test your knowledge with our interactive quiz platform
        </p>

        <div className="mx-10">
          <p className="text-3xl font-bold">Welcome back,{session.user.name}</p>
          <p className="text-sm text-gray-600 mt-1  ">Test your knowledge with our interactive quiz platform</p>
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
            {/* <Link href={"/createdeck"}> */}
            <Dialog>
                <DialogTrigger asChild>
                  <button className="border-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white  font-medium pr-6 pl-4 py-2 rounded-lg transition-all duration-200 cursor-pointer flex gap-x-3" >
                    <Plus></Plus>
                    Create New Deck
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <form action={ADDnewDeck}>
                    <DialogHeader>
                      <DialogTitle className="text-3xl flex justify-center font-bold  bg-gradient-to-r  from-purple-800  to-fuchsia-500  bg-clip-text text-transparent">Create New Deck</DialogTitle>
                      <DialogDescription className="text-sm flex justify-center text-gray-600">
                        Build your study resource with ease.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black mb-2">Deck Name</label>
                        <input type="text" className="bg-purple-50 h-10 rounded-lg border-2 placeholder:text-sm placeholder:text-gray-700 focus:outline-none focus:border-purple-700 border-slate-200 focus:ring-blue-500/20 transition-all duration-200 pl-3 mb-3" placeholder="Enter a name for your deck" name="deckname"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black mb-2">Description</label>
                        <textarea type="text" className=" bg-purple-50 h-28 rounded-lg focus:outline-none placeholder:text-sm placeholder:text-gray-700 focus:border-purple-700 border-2 border-slate-200 focus:ring-blue-500/20 transition-all duration-200 p-3 mb-2 resize-none " placeholder="Describe what this deck is about..." name="description" ></textarea>
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-sm font-medium text-black mb-3">Category</label>
                        <select name="drop" className="h-8 rounded-md bg-purple-50 border border-slate-200">
                            <option className="text-sm">Maths</option>
                            <option className="text-sm">Science</option>
                            <option className="text-sm">Programming</option>
                        </select>
                    </div>
                    <DialogFooter className="flex">
                      <DialogClose asChild>
                        <button className="border-2 font-semibold text-black w-full h-10 rounded-lg" type="button" >Cancel</button>
                      </DialogClose>
                      <button className="bg-gradient-to-r font-semibold from-violet-500 to-purple-400 text-white w-full h-10 rounded-lg" type="submit" >Add Deck</button>
                    </DialogFooter>
                  </form>
                </DialogContent>
            </Dialog>
            {/* </Link> */}
          </div>
        </div>

        <div className="mx-10 grid grid-cols-3 gap-5">

          {
            userdata.map((dis,index)=>{
              return <Displaycard val={dis} key={dis._id} index={index} />
            })
          }

        </div>


    </div>
  
  
  
  );
}
  
