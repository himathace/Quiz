"use client"

import { Plus } from "lucide-react"
import {Dialog,DialogClose,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import AddNewFlashcards from "../actions/flashcardaction"
import { useState } from "react"
import { toast } from "sonner"

export default function Add({params}){

    const [question,setquestion]=useState("")
    const [answer,setanswer]=useState("")
    const [option1,setoption1]=useState("")
    const [option2,setoption2]=useState("")
    const [option3,setoption3]=useState("")
    const [option4,setoption4]=useState("")
    const [deficult,setdificulty]=useState("")

    async function sendFlashcards() {
        const data=await AddNewFlashcards(params,question,answer,option1,option2,option3,option4,deficult)
        if(data.success){
            toast.success("Flashcard Created successful!!")

        }
    }

    return(

        <Dialog>
            <DialogTrigger asChild>
                <div className="border-2 h-56 border-gray-200 rounded-xl border-dashed flex flex-col transition-all duration-300 hover:border-purple-500 group justify-center items-center">
                    <div className="p-3 border-2 text-gray-400 border-dashed rounded-full group-hover:border-purple-500 transition-colors duration-300"><Plus className="group-hover:text-purple-500 transition-colors duration-300"></Plus></div>
                    <p className="font-semibold text-sm text-gray-600 mt-3 group-hover:text-purple-600 transition-colors duration-300">Create New Flahscard</p>
                    <p className="text-xs text-gray-500 mt-2">Start Building Your Flahscard collection</p>
                </div>
            </DialogTrigger>
            <DialogContent>
                <form action={sendFlashcards}>
                    <DialogHeader>
                      <DialogTitle className="text-3xl flex justify-center font-bold bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent ">Design Your Flashcard</DialogTitle>
                      <DialogDescription className="text-sm  flex justify-center text-gray-600">
                        Build your study resource with ease.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col mt-5">
                        <label className="text-sm font-medium text-black mb-2">Question</label>
                        <Textarea  className="  h-28 rounded-lg focus:outline-none   border-2 border-slate-200  transition-all duration-200 p-3 mb-2 focus-visible:ring-purple-500 focus-visible:ring-1 focus-visible:border-purple-500 " placeholder="Enter Your Question" name="description" onChange={(e)=>setquestion(e.target.value)}></Textarea>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black mb-2">Correct Answer</label>
                        <Input type="text"className=" h-10 rounded-lg border-2 focus:outline-none focus:border-purple-500 border-slate-200 focus:ring-purple-500 focus-visible:ring-1 transition-all duration-200 pl-3 mb-3 focus-visible:ring-purple-7  00 focus-visible:border-purple-500 " placeholder="Enter your Answer" name="deckname" onChange={(e)=>setanswer(e.target.value)} ></Input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black mb-2">Answer Options</label>
                        <Input type="text"className=" h-10 rounded-lg border-2 focus:outline-none focus:border-purple-500 border-slate-200 focus:ring-purple-500 focus-visible:ring-1 transition-all duration-200 pl-3 mb-3 focus-visible:ring-purple-7  00 focus-visible:border-purple-500 " placeholder="Option 1" name="deckname" onChange={(e)=>setoption1(e.target.value)} ></Input>
                        <Input type="text"className=" h-10 rounded-lg border-2 focus:outline-none focus:border-purple-500 border-slate-200 focus:ring-purple-500 focus-visible:ring-1 transition-all duration-200 pl-3 mb-3 focus-visible:ring-purple-7  00 focus-visible:border-purple-500 " placeholder="Option 2" name="deckname" onChange={(e)=>setoption2(e.target.value)} ></Input>
                        <Input type="text"className=" h-10 rounded-lg border-2 focus:outline-none focus:border-purple-500 border-slate-200 focus:ring-purple-500 focus-visible:ring-1 transition-all duration-200 pl-3 mb-3 focus-visible:ring-purple-7  00 focus-visible:border-purple-500 " placeholder="Option 3" name="deckname" onChange={(e)=>setoption3(e.target.value)} ></Input>
                        <Input type="text"className=" h-10 rounded-lg border-2 focus:outline-none focus:border-purple-500 border-slate-200 focus:ring-purple-500 focus-visible:ring-1 transition-all duration-200 pl-3 mb-3 focus-visible:ring-purple-7  00 focus-visible:border-purple-500 " placeholder="Option 4" name="deckname" onChange={(e)=>setoption4(e.target.value)} ></Input>
                    </div>
                    <div className="flex flex-col mb-5 w-full">
                        <label className="text-sm font-medium text-black mb-3">Deficulty</label>
                        <Select name="drop" onValueChange={setdificulty}>
                          <SelectTrigger className="w-full focus:ring-purple-500 focus:ring-2 ">
                            <SelectValue placeholder="Choose Deficulty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Easy" className="focus:bg-purple-400 focus:text-white transition-all duration-200">Easy</SelectItem>
                            <SelectItem value="Medium" className="focus:bg-purple-400 focus:text-white transition-all duration-200">Medium</SelectItem>
                            <SelectItem value="Hard" className="focus:bg-purple-400 focus:text-white transition-all duration-200" >Hard</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>
                    <DialogFooter className="flex">
                      <DialogClose asChild>
                        <button className=" font-semibold hover:bg-purple-500 transition-all duration-300 hover:cursor-pointer bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white w-full h-10 rounded-lg" type="submit" >Create Flashcard</button>
                      </DialogClose>
                    </DialogFooter>
                  </form>

            </DialogContent>
        </Dialog>

    )
}