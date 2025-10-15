"use client"

import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogFooter,DialogClose,DialogTitle,DialogTrigger} from "@/components/ui/dialog"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"


import ADDnewDeck from "../actions/DeckAction"
import { Plus } from "lucide-react"

export default function CreateDeckDialog({username}){

    return(

            <Dialog>
                <DialogTrigger asChild>
                  <button className="border-2 bg-gradient-to-r from-purple-600  to-fuchsia-500 text-white hover:bg-purple-600 font-medium pr-6 pl-4 py-2 rounded-xl transition-all duration-200 cursor-pointer flex gap-x-3" >
                    <Plus></Plus>
                    Create New Deck
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <form action={ADDnewDeck}>
                    <input type="hidden" value={username} name="USER"></input>
                    <DialogHeader>
                      <DialogTitle className="text-3xl flex justify-center font-bold  bg-gradient-to-r  from-purple-600  to-fuchsia-500  bg-clip-text text-transparent">Create New Deck</DialogTitle>
                      <DialogDescription className="text-sm flex justify-center text-gray-600">
                        Build your study resource with ease.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black mb-2">Deck Name</label>
                        <input type="text" className="bg-purple-50 h-10 rounded-lg border-2 placeholder:text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500 border-slate-200 focus:ring-purple-300 focus:ring-2 transition-all duration-200 pl-3 mb-3" placeholder="Enter a name for your deck" name="deckname"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-black mb-2">Description</label>
                        <textarea type="textarea" className="  bg-purple-50 h-28 rounded-lg focus:outline-none placeholder:text-sm placeholder:text-gray-500 focus:border-purple-500 border-2 border-slate-200 focus:ring-purple-300 focus:ring-2  transition-all duration-200 p-3 mb-2 " placeholder="Describe what this deck is about" name="description" ></textarea>
                    </div>
                    <div className="flex flex-col mb-5 w-full">
                        <label className="text-sm font-medium text-black mb-3">Category</label>
                        <Select name="drop">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Math">Math</SelectItem>
                            <SelectItem value="Science">Science</SelectItem>
                            <SelectItem value="Health">Health</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>
                    <DialogFooter className="flex">
                      <DialogClose asChild>
                        <button className="bg-gradient-to-r font-semibold from-purple-600  to-fuchsia-500 text-white w-full h-10 rounded-lg" type="submit" >Add Deck</button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </DialogContent>
            </Dialog>

    )
}