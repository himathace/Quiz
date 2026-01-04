"use client"

import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogFooter,DialogClose,DialogTitle,DialogTrigger} from "@/components/ui/dialog"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { useSession } from "next-auth/react";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { CircleCheck } from 'lucide-react';


import ADDnewDeck from "../actions/DeckAction"
import { Plus } from "lucide-react"


export default function CreateDeckDialog({username}){
  
  const { data: session, status } = useSession();
  const [name,setname]=useState("")
  const [discription,setdiscription]=useState("")
  const [category,setcategory]=useState("")
  
  

  if(status==="loading"){
    return null
  }
  
  async function handlesubmit() {
    const data=await ADDnewDeck(name,discription,category,session.user.name)
    if(data.success){
      toast.success("Deck successfully created!")
    }
    
  }


    return(

            <Dialog>
                <DialogTrigger asChild>
                  <button className="border-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white  font-medium pr-6 pl-4 py-2 rounded-full transition-all duration-200 cursor-pointer flex gap-x-3" >
                    <Plus></Plus>
                    Create New Deck
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <form action={handlesubmit}>
                    <input type="hidden" value={session.user.name} name="USER"></input>
                    <DialogHeader>
                      <DialogTitle className="text-3xl flex justify-center font-bold bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent ">Create New Deck</DialogTitle>
                      <DialogDescription className="text-sm  flex justify-center text-gray-600">
                        Build your study resource with ease.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col mt-5">
                        <label className="text-sm font-medium text-black mb-2">Deck Name</label>
                        <input type="text" onChange={(e)=>setname(e.target.value)} className=" h-10  transition-all duration-200 pl-3 mb-3 border-2 border-[#DDE4EE] focus:outline-gray-300  w-full rounded-lg p-2 placeholder:text-sm placeholder:font-normal focus:ring-3  focus:ring-purple-500" placeholder="Enter a name for your deck" name="deckname" ></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black mb-2">Description</label>
                        <textarea  className="transition-all duration-200 pl-3 mb-3 border-2 border-[#DDE4EE] focus:outline-gray-300  w-full rounded-lg p-2 placeholder:text-sm placeholder:font-normal focus:ring-3  focus:ring-purple-500 " placeholder="Describe what this deck is about" name="description" onChange={(e)=>{setdiscription(e.target.value)}} ></textarea>
                    </div>
                    <div className="flex flex-col mb-5 w-full">
                        <label className="text-sm font-medium text-black mb-3">Category</label>
                        <Select name="drop" onValueChange={setcategory} className="focus-visible:ring-2 focus-visible:ring-purple-500">
                          <SelectTrigger className="w-full focus:ring-purple-500 focus:ring-2   ">
                            <SelectValue placeholder="Choose Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Math" className="focus:bg-purple-400 focus:text-white transition-all duration-200 ">Math</SelectItem>
                            <SelectItem value="Science" className="focus:bg-purple-400 focus:text-white transition-all duration-200">Science</SelectItem>
                            <SelectItem value="Health" className="focus:bg-purple-400 focus:text-white transition-all duration-200" >Health</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>
                    <DialogFooter className="flex">
                      <DialogClose asChild>
                        <button className=" font-semibold hover:bg-purple-500 transition-all duration-300 hover:cursor-pointer bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white w-full h-10 rounded-lg" type="submit" >Create Deck</button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </DialogContent>
            </Dialog>

    )
} 